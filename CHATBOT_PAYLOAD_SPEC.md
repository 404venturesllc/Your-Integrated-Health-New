# Chatbot Webhook Payload Specification

## Overview

This document describes the payload structure sent from the ChatWidget frontend to the n8n webhook backend.

## Request Specification

### Endpoint

```
POST https://n8n.srv865926.hstgr.cloud/webhook/SurfBot
```

*(URL configurable via `VITE_CHATBOT_WEBHOOK_URL` environment variable)*

### Headers

```http
Content-Type: application/json
```

### Request Body

```json
{
  "message": "string",
  "sessionId": "string",
  "visitorId": "string",
  "organizationId": "string"
}
```

## Field Definitions

### `message` (string, required)

The user's text input message.

**Characteristics:**
- Already trimmed (leading/trailing whitespace removed)
- No length validation on frontend (unlimited)
- UTF-8 encoded
- Can contain special characters, emojis, etc.

**Examples:**
```json
{
  "message": "I'm struggling with fatigue and weight gain. Can you help?"
}
```

```json
{
  "message": "What services do you offer?"
}
```

```json
{
  "message": "How much does the program cost?"
}
```

---

### `sessionId` (string, required)

Unique identifier for the conversation session.

**Format:** `session-{timestamp}`

**Generation:**
- Created once when ChatWidget component mounts
- Uses `Date.now()` to generate timestamp
- Persists for entire chat session (same ID for all messages)
- Regenerated only when page is refreshed or component remounts

**Characteristics:**
- Stable across messages in same conversation
- Useful for conversation history and context
- Should be used to retrieve/store conversation state

**Example Values:**
```json
{
  "sessionId": "session-1730987654321"
}
```

```json
{
  "sessionId": "session-1731001234567"
}
```

**Usage in n8n:**
```javascript
// Retrieve conversation history
const sessionId = $json.body.sessionId;
const conversationHistory = await getHistory(sessionId);

// Save message to history
await saveToHistory(sessionId, userMessage, botResponse);
```

---

### `visitorId` (string, required)

Randomly generated 4-digit identifier for the visitor.

**Format:** 4-digit number as string (e.g., `"1234"`, `"5678"`, `"9012"`)

**Generation:**
- Created once when ChatWidget component mounts
- Random number between 1000-9999
- Persists for entire chat session
- Regenerated on page refresh or component remount

**Characteristics:**
- Simple visitor tracking without cookies
- NOT guaranteed to be unique across all visitors
- Useful for basic analytics and debugging
- Collision probability: ~1/9000 for concurrent visitors

**Example Values:**
```json
{
  "visitorId": "4729"
}
```

```json
{
  "visitorId": "1834"
}
```

**Generation Logic:**
```javascript
const generateVisitorId = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};
```

**Usage in n8n:**
```javascript
// For analytics/logging
const visitorId = $json.body.visitorId;
await logConversation({
  visitorId,
  timestamp: new Date(),
  message: userMessage
});
```

---

### `organizationId` (string, required)

Unique identifier for the organization/practice.

**Format:** UUID or custom identifier

**Current Value:** `370f42f3-4652-4f10-a942-c2d647945d88`

**Source:**
- Loaded from `VITE_ORGANIZATION_ID` environment variable
- Falls back to `"your-integrative-health-001"` if not set

**Characteristics:**
- Static value (same for all users)
- Used for multi-tenant routing in n8n
- Useful if webhook serves multiple organizations
- Can route to different knowledge bases or configurations

**Example Values:**
```json
{
  "organizationId": "370f42f3-4652-4f10-a942-c2d647945d88"
}
```

```json
{
  "organizationId": "your-integrative-health-001"
}
```

**Usage in n8n:**
```javascript
// Route to correct knowledge base
const orgId = $json.body.organizationId;

if (orgId === "370f42f3-4652-4f10-a942-c2d647945d88") {
  // Use Your Integrative Health knowledge base
  const index = pinecone.Index("your-integrative-health");
} else {
  // Handle different organization
}
```

---

## Complete Example Payload

```json
{
  "message": "I'm interested in the Metabolic Hormone Balance Program. How does it work?",
  "sessionId": "session-1730987654321",
  "visitorId": "4729",
  "organizationId": "370f42f3-4652-4f10-a942-c2d647945d88"
}
```

## Response Specification

### Expected Response Format

The ChatWidget expects a JSON response with at least one of these fields:

```json
{
  "response": "string"
}
```

**Alternate field names (fallbacks):**
```json
{
  "output": "string"
}
```

```json
{
  "message": "string"
}
```

**Fallback Hierarchy:**
```javascript
const responseText = data.response || data.output || data.message ||
  "I'm sorry, I couldn't process that. Please try again.";
```

### Complete Response Example

```json
{
  "response": "Great question! Our Metabolic Hormone Balance Program is a comprehensive 4-step process:\n\n1. **Free Consultation** - We chat about your symptoms and goals\n2. **Labs & Personalized Plan** - At-home testing and custom wellness plan\n3. **Integrative Wellness Therapy** - Personalized lifestyle support\n4. **Ongoing Support** - Quarterly follow-ups and 24/7 email access\n\nWould you like to schedule a free discovery call to learn more?"
}
```

### Optional Response Fields

You can include additional metadata:

```json
{
  "response": "Your AI-generated response here",
  "showBookingButton": true,
  "metadata": {
    "confidence": 0.95,
    "retrievedChunks": 5,
    "processingTimeMs": 1234,
    "model": "gpt-4o"
  }
}
```

**Note:** Currently, `showBookingButton` and `metadata` fields are ignored by the frontend, but they can be useful for logging/debugging.

## Response Processing

### 1. URL Replacement

The frontend automatically replaces `[CHECKOUT_URL]` placeholder:

```javascript
// Input from n8n
{
  "response": "You can learn more about hormone testing at [CHECKOUT_URL]"
}

// After processing
"You can learn more about hormone testing at https://www.yourintegrativehealth.com/zrt-hormone-test"
```

### 2. Booking Intent Detection

The frontend checks for booking-related phrases and automatically shows a booking button:

**Trigger Phrases:**
- "book a", "book an"
- "schedule a", "schedule an"
- "set up a", "set up an"
- "would you like to book"
- "would you like to schedule"
- "can help you book"
- "can help you schedule"
- "let's get you scheduled"
- "ready to book"

**Example:**
```json
{
  "response": "That sounds like a great fit! Would you like to book a free discovery call?"
}
```

This will automatically display a booking button below the message.

## Error Handling

### Network Errors

If the webhook is unreachable or times out:

```javascript
{
  id: `error-${Date.now()}`,
  type: 'system',
  content: "Sorry, I'm having trouble connecting. Please try again or contact us directly.",
  timestamp: new Date()
}
```

### HTTP Errors

If the webhook returns a non-200 status code:

```javascript
throw new Error(`HTTP error! status: ${response.status}`);
// Results in same error message as network error
```

### Invalid JSON Response

If response is not valid JSON, an error is thrown and caught.

## Usage in n8n

### Accessing Payload Fields

```javascript
// In n8n Function Node or Code Node
const userMessage = $json.body.message;
const sessionId = $json.body.sessionId;
const visitorId = $json.body.visitorId;
const organizationId = $json.body.organizationId;
```

### Example n8n Workflow

**Node 1: Webhook Trigger**
```json
{
  "path": "SurfBot",
  "method": "POST",
  "responseMode": "lastNode"
}
```

**Node 2: Function - Extract Data**
```javascript
const { message, sessionId, visitorId, organizationId } = $json.body;

// Log for analytics
console.log(`[${organizationId}] Visitor ${visitorId}, Session ${sessionId}: ${message}`);

return {
  json: {
    userMessage: message,
    sessionId,
    visitorId,
    organizationId,
    timestamp: new Date().toISOString()
  }
};
```

**Node 3: Vector DB Query**
```javascript
// Query Pinecone/Weaviate with user message
// Use organizationId to select correct index/namespace
```

**Node 4: LLM Response**
```javascript
// Generate response with context
// Include sessionId for conversation history
```

**Node 5: Return Response**
```json
{
  "response": "{{ $json.aiResponse }}"
}
```

## Analytics & Logging

### Recommended Tracking

Use the payload fields to track:

1. **Conversation Analytics**
   ```javascript
   {
     organizationId,
     visitorId,
     sessionId,
     messageCount: 5,
     timestamp: "2025-01-01T12:00:00Z",
     firstMessage: "What services do you offer?",
     userJourney: ["services", "pricing", "booking"]
   }
   ```

2. **Visitor Analytics**
   ```javascript
   {
     visitorId,
     organizationId,
     totalSessions: 1,
     totalMessages: 12,
     firstSeen: "2025-01-01T12:00:00Z",
     lastSeen: "2025-01-01T12:15:00Z",
     converted: false
   }
   ```

3. **Organization Analytics**
   ```javascript
   {
     organizationId,
     totalConversations: 150,
     totalMessages: 1234,
     avgMessagesPerConversation: 8.2,
     conversionRate: 0.15,
     topQuestions: ["pricing", "services", "PCOS treatment"]
   }
   ```

## Testing

### Test Payload (curl)

```bash
curl -X POST https://n8n.srv865926.hstgr.cloud/webhook/SurfBot \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What services do you offer?",
    "sessionId": "session-1234567890",
    "visitorId": "5678",
    "organizationId": "370f42f3-4652-4f10-a942-c2d647945d88"
  }'
```

### Expected Response

```json
{
  "response": "Great question! We offer the Metabolic Hormone Balance Program..."
}
```

### Test from Frontend

1. Start dev server: `npm run dev`
2. Open browser: `http://localhost:3000`
3. Click chat widget (bottom-right)
4. Send test message
5. Check browser console for payload in Network tab

## Version History

- **v1.0** (Initial): `message`, `sessionId`
- **v2.0** (Current): Added `visitorId`, `organizationId`

## Migration Notes

If you have existing n8n workflows expecting the old payload format, update them to handle the new fields:

```javascript
// Old (v1.0)
const { message, sessionId } = $json.body;

// New (v2.0) - backward compatible
const {
  message,
  sessionId,
  visitorId = 'unknown',          // Fallback for old requests
  organizationId = 'default-org'  // Fallback for old requests
} = $json.body;
```

---

**Last Updated:** 2025
**Maintained By:** Your Integrative Health Development Team
