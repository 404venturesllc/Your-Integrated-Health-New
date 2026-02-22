# Knowledge Base Documentation

## Overview

The `knowledge-base.txt` file is a comprehensive, single-source-of-truth document containing ALL information from the Your Integrative Health website. This file is specifically designed as a RAG (Retrieval-Augmented Generation) knowledge base for AI chatbots.

## File Details

- **Filename:** `knowledge-base.txt`
- **Size:** ~42KB
- **Lines:** 1,172 lines
- **Format:** Plain text (UTF-8)
- **Last Updated:** 2025
- **Source:** Official yourintegrativehealth.com website content

## What's Inside

The knowledge base is organized into 13 comprehensive sections:

### 1. Business Information
- Business names and legal entities
- Provider credentials (Megan Hormazdi, FNP-BC & Dr. Babak Jamasian, MD)
- Contact details (phone, email, address)
- Service model (100% virtual)
- Social media links
- Success statistics

### 2. Services & Programs
- Complete Metabolic Hormone Balance Program details
- 4-step process breakdown
- What's included in the program
- Service delivery model

### 3. Conditions Treated
- Primary conditions (fatigue, hormone imbalance, sleep issues, etc.)
- Additional conditions addressed
- Symptom descriptions
- Treatment approaches

### 4. Treatment Philosophy
- Core principles (root-cause care, personalization, etc.)
- Integrative medicine focus
- Treatment modalities
- Approach to sustainable results

### 5. Founder's Story
- Megan Hormazdi's background
- Cancer survivor journey
- Discovery of integrative medicine
- Mission and qualifications

### 6. Patient Testimonials
- 7 detailed patient testimonials
- Ratings and reviews
- Common patient outcomes
- Success metrics

### 7. Frequently Asked Questions
- 10 comprehensive FAQ entries
- Discovery call information
- Safety and effectiveness
- Insurance and payment
- Virtual services
- Support and accountability

### 8. Hormone Health Quiz
- $97 quiz offering
- Purpose and benefits
- Access link
- What participants receive

### 9. ZRT Hormone Testing
- Laboratory partner information
- At-home testing process
- Features and benefits
- How results are used

### 10. Blog & Health Education
- 15+ detailed blog articles covering:
  - Weight loss & metabolism
  - Nutrition and diet
  - Hormone health
  - Lifestyle & anti-aging
  - Mental wellness
  - Sleep optimization
- Key points from each article
- Practical health tips

### 11. Legal & Policy Information
- Complete disclaimer
- Return policy
- Privacy policy (01/01/2024)
- Terms of use (01/01/2024)
- HIPAA compliance
- Copyright information

### 12. Key Features & Benefits
- Program differentiators
- Patient support structure
- Convenience factors
- Expected outcomes (physical, mental, lifestyle)

### 13. Contact & Booking Information
- All contact methods
- Direct booking links
- Office address
- Social media channels
- How to get started
- Payment information

## How to Use This Knowledge Base

### For RAG Chatbot Integration

1. **Vector Database Setup:**
   - Chunk the text into semantic sections
   - Use section headers as natural boundaries
   - Recommended chunk size: 500-1000 tokens with overlap

2. **Embedding Strategy:**
   - Use sentence transformers or OpenAI embeddings
   - Index by section for faster retrieval
   - Consider metadata tagging (section name, topic category)

3. **Query Processing:**
   - Match user queries to relevant sections
   - Return top-k most relevant chunks
   - Consider section context for better answers

4. **Response Generation:**
   - Use retrieved chunks as context
   - Cite specific sections when relevant
   - Maintain factual accuracy from source

### For Traditional Search/Retrieval

1. **Full-Text Search:**
   - File is plain text, easily searchable
   - Section headers marked with `===` dividers
   - Sub-sections marked with `---` dividers

2. **Topic Navigation:**
   - Use Table of Contents (lines 9-23)
   - Jump to sections via header search
   - Follow structured hierarchy

3. **Quick Reference:**
   - Business info: Lines 25-72
   - Services: Lines 74-206
   - Conditions: Lines 208-284
   - FAQs: Lines 522-714
   - Contact: Lines 1115-1172

## Maintaining the Knowledge Base

### When to Update

Update `knowledge-base.txt` when:
- New services are added
- Pricing changes
- Contact information changes
- New testimonials are collected
- Blog articles are added
- Legal policies are updated
- Provider information changes

### How to Update

1. **Extract new content from website:**
   ```bash
   # Read the relevant source files
   # Example: src/Services.tsx for service updates
   ```

2. **Locate section in knowledge-base.txt:**
   - Use section headers to find the right location
   - Maintain existing structure and formatting

3. **Update content:**
   - Keep consistent formatting
   - Use plain text only (no markdown in .txt file)
   - Maintain line breaks and spacing
   - Update "LAST UPDATED" date at bottom

4. **Verify accuracy:**
   - Cross-reference with live website
   - Ensure no made-up information
   - Check contact details are current

5. **Test with chatbot:**
   - Re-index if using vector database
   - Test queries that should use updated content
   - Verify responses are accurate

## Important Guidelines

### What IS in This Knowledge Base
✅ All factual information from the website
✅ Service descriptions and processes
✅ Contact and booking information
✅ Patient testimonials (real, with permission)
✅ Educational content from blog
✅ Legal policies and disclaimers
✅ Treatment philosophy and approaches

### What is NOT in This Knowledge Base
❌ Made-up or speculative information
❌ Medical advice for specific individuals
❌ Information not present on the website
❌ Outdated content (regularly updated)
❌ Personal health information (HIPAA)
❌ Internal business processes

## Chatbot Response Guidelines

When using this knowledge base for chatbot responses:

1. **Stay Factual:**
   - Only provide information present in the knowledge base
   - Don't make up prices, procedures, or promises
   - If unsure, direct to contact email/phone

2. **Medical Disclaimers:**
   - Never provide specific medical advice
   - Always recommend consulting healthcare provider
   - Include disclaimer when discussing health topics

3. **Contact for Specifics:**
   - Direct pricing questions to discovery call
   - Route booking requests to booking link
   - Provide email for detailed inquiries

4. **Tone and Style:**
   - Warm, professional, compassionate
   - Educational but not overwhelming
   - Empowering and supportive
   - Match Megan's approach (caring, knowledgeable)

5. **Common User Intents:**
   - "What services do you offer?" → Section 2
   - "Do you treat PCOS?" → Section 3
   - "How much does it cost?" → Discovery call
   - "Are you virtual?" → Yes, Section 1
   - "What's the process?" → Section 2 (4 steps)
   - "Can I book?" → Section 13 (booking link)

## Technical Specifications

### File Format
- **Encoding:** UTF-8
- **Line Endings:** LF (Unix-style)
- **No Special Characters:** Plain ASCII + basic punctuation
- **Structure:** Hierarchical with clear headers

### Size Considerations
- Current size: ~42KB
- Token count: ~10,500 tokens (approximate)
- Suitable for: Most vector databases and RAG systems
- Chunking: Recommended for better retrieval

### Compatibility
- ✅ LangChain
- ✅ LlamaIndex
- ✅ Pinecone/Weaviate/Chroma
- ✅ OpenAI Embeddings
- ✅ Sentence Transformers
- ✅ Traditional search engines

## Example Queries and Expected Responses

**Query:** "What conditions do you treat?"
**Response Source:** Section 3 (Conditions Treated)
**Key Info:** Fatigue, hormone imbalance, sleep issues, mood swings, weight resistance, perimenopause/menopause, plus PCOS, thyroid, etc.

**Query:** "How does the program work?"
**Response Source:** Section 2 (Services & Programs - 4-Step Process)
**Key Info:** Free consultation, Labs & plan, Integrative wellness therapy, Ongoing support

**Query:** "Is it covered by insurance?"
**Response Source:** Section 7 (FAQ #3)
**Key Info:** Most plans don't cover integrative care, programs designed to be accessible

**Query:** "How do I book a consultation?"
**Response Source:** Section 13 (Contact & Booking)
**Key Info:** Booking link + phone number for free discovery call

## Version History

- **Version 1.0** (2025): Initial comprehensive knowledge base created
  - Extracted from all website pages
  - Includes all blog articles
  - Complete legal policies
  - Organized into 13 sections

## Contact for Knowledge Base Updates

If you need to update or have questions about this knowledge base:

- **Email:** Team@yourintegrativehealth.com
- **Website:** yourintegrativehealth.com
- **Repository:** Check CLAUDE.md for development guidelines

---

**Last Updated:** 2025
**Maintained By:** Your Integrative Health Development Team
