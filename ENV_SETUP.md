# Environment Variables Setup

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your values:**
   ```bash
   # Update these values with your actual configuration
   VITE_CHATBOT_WEBHOOK_URL=your-webhook-url
   VITE_BOOKING_URL=your-booking-url
   # ... etc
   ```

3. **Restart the dev server:**
   ```bash
   npm run dev
   ```

## Available Environment Variables

### Chatbot Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_CHATBOT_WEBHOOK_URL` | n8n webhook endpoint for AI chatbot | `https://n8n.example.com/webhook/chat` |
| `VITE_ORGANIZATION_ID` | Unique organization identifier for analytics | `370f42f3-4652-4f10-a942-c2d647945d88` |

### URLs

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_BOOKING_URL` | Consultation booking page URL | `https://booking.example.com/landing` |
| `VITE_CHECKOUT_URL` | ZRT Hormone Test checkout URL | `https://example.com/zrt-test` |

### Contact Information

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SUPPORT_PHONE` | Support phone number | `555-555-5555` |
| `VITE_SUPPORT_EMAIL` | Support email address | `support@example.com` |

## Important Notes

- All environment variables **must** start with `VITE_` prefix
- Changes to `.env` require restarting the development server
- Never commit `.env` to version control (already in `.gitignore`)
- Use `.env.example` as a template for new environments
- In production, set these via your hosting platform's environment variables

## Where These Variables Are Used

### ChatWidget Component (`src/components/ChatWidget.tsx`)

The chatbot uses all six environment variables:

```typescript
const WEBHOOK_URL = import.meta.env.VITE_CHATBOT_WEBHOOK_URL || "fallback-url";
const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID || "fallback-id";
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "fallback-url";
const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || "fallback-url";
const SUPPORT_PHONE = import.meta.env.VITE_SUPPORT_PHONE || "555-555-5555";
const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL || "support@example.com";
```

**Features that use these variables:**
- Webhook URL: Sends user messages to n8n for AI processing
- Organization ID: Unique identifier sent with each message for analytics and routing
- Booking URL: Displayed when bot suggests booking a consultation
- Checkout URL: Replaces `[CHECKOUT_URL]` placeholder in bot responses
- Support Phone/Email: Shown in chatbot footer for direct contact

**Additional Chat Features:**
- Visitor ID: Automatically generated 4-digit number for each chat session
- Session ID: Unique identifier for conversation continuity

## Testing the Configuration

After setting up your `.env` file:

1. Start the dev server: `npm run dev`
2. Open the website in your browser
3. Click the chat widget in the bottom-right corner
4. Send a test message to verify webhook connection
5. Check the footer shows your contact information

## Troubleshooting

**Chatbot not connecting?**
- Verify `VITE_CHATBOT_WEBHOOK_URL` is correct
- Check webhook is accessible (test with curl or Postman)
- Look for CORS errors in browser console

**Contact info not updating?**
- Ensure you restarted the dev server after changing `.env`
- Check the variable names match exactly (case-sensitive)
- Verify the `VITE_` prefix is present

**Build errors?**
- Environment variables are optional (have fallbacks)
- Check for syntax errors in `.env` file
- Ensure no quotes around values unless needed
