# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Your Integrative Health is a React-based healthcare website built with Vite, TypeScript, and Tailwind CSS. The site provides information about integrative health services, hormone testing, blog content, and includes an AI-powered chat widget for customer support.

## Development Commands

**Start development server:**
```bash
npm run dev
```
The dev server runs on `http://localhost:3000` and opens automatically in the browser.

**Build for production:**
```bash
npm run build
```
Output directory is `build/` (not `dist/`). The build process:
- Uses Terser for minification (removes console.logs in production)
- Generates gzip and brotli compressed assets
- Code-splits into vendor chunks (react-vendor, ui-vendor, radix-vendor)
- Disables sourcemaps for faster builds

**Run Playwright tests:**
```bash
npx playwright test
```
Tests are located in `tests/` directory. The test server automatically starts on port 3000.

**Install dependencies:**
```bash
npm i
```

## Environment Configuration

**Environment Variables:**
The project uses Vite's environment variable system. Create a `.env` file in the root directory to configure:

```bash
# Chatbot Configuration
VITE_CHATBOT_WEBHOOK_URL=https://n8n.srv865926.hstgr.cloud/webhook/SurfBot

# Booking URLs
VITE_BOOKING_URL=https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368
VITE_CHECKOUT_URL=https://www.yourintegrativehealth.com/zrt-hormone-test

# Contact Information
VITE_SUPPORT_PHONE=714-586-8872
VITE_SUPPORT_EMAIL=team@yourintegrativehealth.com
```

**Important:**
- All Vite environment variables must be prefixed with `VITE_`
- Copy `.env.example` to `.env` and update with your values
- `.env` is gitignored - never commit secrets
- Changes require dev server restart (`npm run dev`)
- Access in code via `import.meta.env.VITE_VARIABLE_NAME`

## Architecture

### Application Structure

**Single-Page Application with Client-Side Routing:**
- All routes are handled in `src/App.tsx` using hash-based navigation (`#/services`, `#/blog`, etc.)
- Pages are lazy-loaded to minimize initial bundle size
- Main entry point: `src/main.tsx` wraps app with `HelmetProvider` for SEO

**Key Page Components** (all in `src/`):
- `App.tsx` - Main router and homepage (very large file: ~42k tokens)
- `Services.tsx` - Services landing page
- `Blog.tsx` - Blog listing page
- `BlogDetail.tsx` - Individual blog post view (largest component)
- `About.tsx` - About page
- `Contact.tsx` - Contact form
- `FAQ.tsx` - FAQ page
- `ZRTHormoneTest.tsx` - ZRT hormone testing product page
- Legal pages: `Disclaimer.tsx`, `PrivacyPolicy.tsx`, `TermsOfUse.tsx`

### Component Organization

**Reusable components** (`src/components/`):
- `Navigation.tsx` - Sticky header with mobile menu
- `Footer.tsx` - Site footer
- `ChatWidget.tsx` - AI-powered chat interface (connects to n8n webhook)
- `HeroSection.tsx`, `HowItWorksSection.tsx`, `TestimonialsSection.tsx`, etc. - Homepage sections
- `ScrollFadeIn.tsx` - Animation utility component
- `Avatar.tsx` - User avatar component

**UI components** (`src/components/ui/`):
- Radix UI-based primitives (accordion, dialog, tabs, etc.)
- Follows shadcn/ui patterns
- Styled with Tailwind CSS using HSL CSS variables

**Figma imports** (`src/imports/`):
- Auto-generated components from Figma design
- SVG path definitions (svg-*.ts files)
- Background and icon components

### Data Management

**Centralized data files** (`src/data/`):
- `testimonials.ts` - All customer testimonials with TypeScript interfaces
- `faqs.ts` - FAQ content

Update these files to change content across the entire site without touching component code.

### Styling

**Tailwind CSS with design system:**
- Custom color palette using HSL CSS variables (defined in `src/index.css`)
- Theme colors: primary, secondary, accent, muted, destructive
- Brand color: `#61a94e` (green) used throughout
- Typography: Poppins font family via Google Fonts
- Responsive breakpoints follow Tailwind defaults

**Path alias:**
- `@/` maps to `src/` directory (configured in `vite.config.ts` and `tsconfig.json`)

### Asset Management

**Figma asset system:**
- Images are imported using special `figma:asset/*` paths
- These are aliased in `vite.config.ts` to actual files in `src/assets/`
- Image optimization: Uses `.webp` format for larger images
- Fallback handling via `ImageWithFallback.tsx` component

**Blog assets:**
- Blog post images are in `src/assets/blog/`

## TypeScript Configuration

- Strict mode enabled with comprehensive linting rules
- `noUnusedLocals` and `noUnusedParameters` enforced
- Target: ES2020
- JSX: react-jsx (new transform)
- Module resolution: bundler mode

## SEO and Meta Tags

- Uses `react-helmet-async` for dynamic meta tags
- Each page component includes `<Helmet>` with page-specific metadata
- Structured data with JSON-LD schemas (see `src/utils/breadcrumbSchema.ts`)

## External Integrations

**Chat Widget (n8n):**
- AI-powered chatbot using n8n workflow automation
- Configuration via environment variables (see Environment Configuration section)
- Session-based conversation tracking with client-generated session IDs
- Located in `src/components/ChatWidget.tsx`
- Features:
  - Auto-detects booking intent and shows booking button
  - Replaces `[CHECKOUT_URL]` placeholders in bot responses
  - Contact info (phone/email) in footer pulled from env vars
  - Supports quick-action buttons for common questions

## Important Notes

**When modifying App.tsx:**
- This is the largest file in the codebase (42k+ tokens)
- Contains the main homepage layout and routing logic
- Use offset/limit parameters when reading this file
- Consider splitting large sections into separate components

**Vite configuration quirks:**
- Extensive alias list for Figma assets and versioned packages
- Build output is in `build/` not `dist/`
- Server runs on port 3000, not Vite's default 5173

**Code conventions:**
- Lazy load page-level components
- Use TypeScript interfaces for data structures
- Prefer functional components with hooks
- Use Lucide React for icons
- Follow Radix UI patterns for interactive components
