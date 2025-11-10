# Chatbot Implementation Guide

## Overview

This guide helps you integrate the knowledge base and system prompt with your n8n workflow to create an effective RAG-powered sales & customer support chatbot.

## Files You Have

1. **`knowledge-base.txt`** (42KB) - Complete source of truth with all website information
2. **`chatbot-system-prompt.txt`** (30KB) - Comprehensive system prompt for the AI agent
3. **`.env`** - Contains `VITE_CHATBOT_WEBHOOK_URL` for n8n integration

## Architecture Options

### Option 1: Simple RAG with n8n (Recommended for Quick Start)

```
User Message → n8n Webhook → RAG Retrieval → LLM (GPT-4/Claude) → Response
```

**n8n Workflow:**
1. **Webhook Trigger** (receives message from ChatWidget)
2. **Pinecone/Weaviate/Supabase Node** (retrieve relevant knowledge)
3. **OpenAI/Anthropic Node** (generate response with system prompt + context)
4. **Response Node** (send back to frontend)

**Pros:**
- Quick to set up
- Uses n8n's built-in nodes
- Easy to modify and test

**Cons:**
- Limited conversation memory
- Basic retrieval logic

---

### Option 2: Advanced RAG with LangChain (Recommended for Production)

```
User Message → n8n Webhook → LangChain Agent → Vector DB → LLM → Response
                                    ↓
                            Conversation Memory
```

**n8n Workflow:**
1. **Webhook Trigger**
2. **Code Node** (LangChain setup)
   - Load conversation history from session
   - Retrieve from vector database
   - Apply system prompt
   - Generate response
   - Save conversation history
3. **Response Node**

**Pros:**
- Conversation memory (remembers context)
- Better retrieval with metadata filtering
- More control over RAG pipeline
- Can add tools (booking, quiz, etc.)

**Cons:**
- More complex setup
- Requires LangChain knowledge

---

### Option 3: Dedicated RAG Service (Recommended for Scale)

```
User → n8n → External RAG API → Vector DB + LLM → n8n → Response
```

**External Service (separate from n8n):**
- FastAPI/Flask server
- LangChain or LlamaIndex
- Pinecone/Weaviate
- Conversation state management
- Advanced features

**Pros:**
- Best performance
- Scalable
- Independent of n8n
- More features (analytics, A/B testing, etc.)

**Cons:**
- Requires separate hosting
- More infrastructure

---

## Step-by-Step Setup (Option 1: Simple RAG)

### Step 1: Prepare Knowledge Base

**1.1 Create Vector Embeddings**

Choose a vector database:
- **Pinecone** (easiest, managed service)
- **Weaviate** (open source, self-hosted or cloud)
- **Supabase with pgvector** (if you use Supabase)
- **Chroma** (local development)

**1.2 Chunk the Knowledge Base**

```python
# Example Python script to chunk and embed knowledge-base.txt

from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from pinecone import Pinecone

# Read knowledge base
with open('knowledge-base.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Split by sections (using === as delimiter)
sections = text.split('=' * 80)

# Further split long sections
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", " ", ""]
)

chunks = []
for section in sections:
    if len(section.strip()) > 0:
        section_chunks = text_splitter.split_text(section)
        chunks.extend(section_chunks)

# Create embeddings
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# Upload to Pinecone
pc = Pinecone(api_key="your-api-key")
index = pc.Index("your-integrative-health")

# Upsert with metadata
vectors = []
for i, chunk in enumerate(chunks):
    embedding = embeddings.embed_query(chunk)
    vectors.append({
        "id": f"chunk_{i}",
        "values": embedding,
        "metadata": {"text": chunk}
    })

index.upsert(vectors=vectors)
```

### Step 2: Set Up n8n Workflow

**2.1 Create New Workflow in n8n**

1. Open n8n dashboard
2. Create new workflow
3. Name it: "Your Integrative Health Chatbot"

**2.2 Add Nodes**

**Node 1: Webhook Trigger**
```json
{
  "path": "SurfBot",
  "method": "POST",
  "responseMode": "lastNode"
}
```

**Node 2: Pinecone Retrieve** (or your vector DB)
```json
{
  "operation": "query",
  "query": "={{ $json.message }}",
  "topK": 5,
  "includeMetadata": true
}
```

**Node 3: Function Node - Build Context**
```javascript
// Extract retrieved chunks
const matches = $input.item.json.matches;
const context = matches.map(m => m.metadata.text).join('\n\n---\n\n');

// Get user message and session
const userMessage = $('Webhook').item.json.body.message;
const sessionId = $('Webhook').item.json.body.sessionId;

// Build prompt
const systemPrompt = `[Paste entire chatbot-system-prompt.txt here]`;

const prompt = `${systemPrompt}

RELEVANT KNOWLEDGE BASE CONTEXT:
${context}

USER MESSAGE: ${userMessage}

Respond helpfully based on the knowledge base context provided. If the answer isn't in the context, direct the user to contact methods.`;

return {
  json: {
    prompt: prompt,
    sessionId: sessionId
  }
};
```

**Node 4: OpenAI Chat** (or Anthropic Claude)
```json
{
  "model": "gpt-4o",
  "messages": [
    {
      "role": "system",
      "content": "={{ $json.prompt }}"
    }
  ],
  "temperature": 0.7,
  "maxTokens": 500
}
```

**Node 5: Respond to Webhook**
```json
{
  "response": "={{ $json.choices[0].message.content }}"
}
```

### Step 3: Test the Workflow

**3.1 Test in n8n**
1. Click "Execute Workflow"
2. Send test message from ChatWidget
3. Verify response

**3.2 Test Questions**
```
✅ "What services do you offer?"
✅ "Do you treat PCOS?"
✅ "How much does it cost?"
✅ "I'm struggling with fatigue and weight gain"
✅ "How do I book a consultation?"
```

**3.3 Expected Behavior**
- Should cite knowledge base accurately
- Should follow system prompt tone/style
- Should guide toward booking
- Should handle objections well
- Should provide contact info when appropriate

### Step 4: Add Conversation Memory (Optional but Recommended)

**Use n8n's Memory Node or External Database**

```javascript
// Store conversation in Redis, PostgreSQL, or n8n's built-in storage

// Retrieve previous messages
const sessionId = $json.sessionId;
const previousMessages = await getConversationHistory(sessionId);

// Include in prompt
const conversationContext = previousMessages.map(msg =>
  `${msg.role}: ${msg.content}`
).join('\n');

// Add to LLM messages array
const messages = [
  { role: "system", content: systemPrompt },
  ...previousMessages,
  { role: "user", content: userMessage }
];

// After response, save to history
await saveMessage(sessionId, { role: "user", content: userMessage });
await saveMessage(sessionId, { role: "assistant", content: response });
```

---

## Advanced Features to Add

### 1. Booking Intent Detection

```javascript
// In Function Node, detect booking intent
const bookingKeywords = [
  'book', 'schedule', 'appointment',
  'consultation', 'call', 'talk to megan'
];

const wantsToBook = bookingKeywords.some(kw =>
  userMessage.toLowerCase().includes(kw)
);

if (wantsToBook) {
  // Automatically include booking link in response
  return {
    json: {
      ...json,
      showBookingButton: true,
      bookingUrl: "https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368"
    }
  };
}
```

### 2. Lead Capture

```javascript
// Extract email or phone if provided
const emailRegex = /[\w\.-]+@[\w\.-]+\.\w+/;
const phoneRegex = /(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4})/;

const email = userMessage.match(emailRegex)?.[0];
const phone = userMessage.match(phoneRegex)?.[0];

if (email || phone) {
  // Save lead to CRM (Airtable, Google Sheets, etc.)
  await saveLead({
    sessionId,
    email,
    phone,
    timestamp: new Date(),
    source: 'chatbot'
  });
}
```

### 3. Sentiment Analysis

```javascript
// Use OpenAI or sentiment library to detect frustration
const sentiment = await analyzeSentiment(userMessage);

if (sentiment === 'frustrated' || sentiment === 'negative') {
  // Escalate to human or adjust tone
  return {
    json: {
      ...json,
      tone: 'extra_empathetic',
      escalate: true
    }
  };
}
```

### 4. Analytics & Tracking

```javascript
// Log all conversations to analytics
await logConversation({
  sessionId,
  userMessage,
  botResponse,
  timestamp: new Date(),
  topKnowledgeChunks: retrievedChunks,
  bookingButtonShown: showBookingButton,
  leadCaptured: !!email || !!phone
});
```

---

## Monitoring & Optimization

### Metrics to Track

1. **Conversation Metrics**
   - Total conversations
   - Avg messages per conversation
   - Conversation completion rate

2. **Lead Quality**
   - Discovery calls booked
   - Email/phone captured
   - Qualified vs unqualified leads

3. **Performance Metrics**
   - Response time (should be < 3 seconds)
   - Retrieval accuracy
   - User satisfaction (ask for feedback)

4. **Content Gaps**
   - Questions the bot couldn't answer
   - Most common escalations
   - Missing knowledge base content

### Optimization Tips

1. **Monitor Unanswered Questions**
   - Track when bot says "I don't know"
   - Add missing info to knowledge base
   - Update monthly

2. **A/B Test System Prompts**
   - Test different closing techniques
   - Try different empathy phrases
   - Measure booking conversion

3. **Improve Retrieval**
   - Adjust chunk size/overlap
   - Add metadata filtering
   - Use hybrid search (semantic + keyword)

4. **Fine-tune Temperature**
   - Lower (0.3-0.5): More consistent, factual
   - Higher (0.7-0.9): More creative, conversational
   - Start at 0.7, adjust based on responses

---

## Integration with Existing ChatWidget

Your existing ChatWidget is already set up! Just ensure:

1. **`.env` file has correct webhook URL:**
   ```bash
   VITE_CHATBOT_WEBHOOK_URL=https://n8n.srv865926.hstgr.cloud/webhook/SurfBot
   ```

2. **n8n workflow is active and listening**

3. **Test the integration:**
   ```bash
   npm run dev
   # Open http://localhost:3000
   # Click chat widget
   # Send test message
   ```

---

## Troubleshooting

### Issue: Bot responses are too generic
**Solution:** Improve retrieval by:
- Increasing topK (retrieve more chunks)
- Adding metadata filters
- Improving embedding model

### Issue: Bot makes up information
**Solution:**
- Lower temperature (0.3-0.5)
- Strengthen system prompt: "ONLY use provided context"
- Add fact-checking step

### Issue: Slow response times
**Solution:**
- Cache common queries
- Use faster embedding model
- Optimize vector DB queries
- Consider response streaming

### Issue: Bot doesn't remember context
**Solution:**
- Implement conversation memory
- Store last 5-10 messages
- Include in prompt context

### Issue: Bot too pushy/salesy
**Solution:**
- Adjust system prompt tone
- Remove urgency language
- Emphasize education over selling

---

## Production Checklist

Before going live:

- [ ] Knowledge base is complete and accurate
- [ ] System prompt tested with various scenarios
- [ ] Vector database populated and indexed
- [ ] n8n workflow tested end-to-end
- [ ] Conversation memory working
- [ ] Booking intent detection working
- [ ] Lead capture saving to CRM
- [ ] Analytics/logging in place
- [ ] Response time < 3 seconds
- [ ] Error handling for API failures
- [ ] Medical disclaimers appearing when needed
- [ ] Tested on mobile and desktop
- [ ] Fallback to human contact working
- [ ] Privacy policy compliance (HIPAA if applicable)
- [ ] Rate limiting to prevent abuse

---

## Cost Estimates (Monthly)

**Pinecone (Vector DB):**
- Starter: $70/month (100K vectors, 0.5GB storage)
- Standard: $0.096/hour (~$70/month for small scale)

**OpenAI API:**
- Embeddings: $0.02 per 1M tokens (~$5-10/month)
- GPT-4o: $5/1M input tokens, $15/1M output tokens
- Estimated: $50-200/month depending on traffic

**n8n:**
- Self-hosted: Free (just server costs)
- Cloud: $20/month starter plan

**Total Estimated: $100-300/month** for 1,000-5,000 conversations

---

## Next Steps

1. **Set up vector database** (Pinecone recommended)
2. **Upload knowledge base** using provided script
3. **Create n8n workflow** following guide above
4. **Test thoroughly** with common questions
5. **Monitor first week** closely for issues
6. **Iterate and optimize** based on real conversations
7. **Scale up** once proven effective

---

## Support Resources

**Knowledge Base:** `knowledge-base.txt`
**System Prompt:** `chatbot-system-prompt.txt`
**Environment Config:** `.env`
**Frontend Integration:** `src/components/ChatWidget.tsx`

**Need Help?**
- n8n Documentation: https://docs.n8n.io
- LangChain Docs: https://docs.langchain.com
- Pinecone Docs: https://docs.pinecone.io
- OpenAI Docs: https://platform.openai.com/docs

**Questions?**
Email: Team@yourintegrativehealth.com

---

Good luck with your RAG chatbot implementation! 🚀
