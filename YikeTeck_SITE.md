# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual (English, Italian, and Chinese) corporate website for Yike Teck, built using Next.js 15.3.0. The website showcases the company's products and services across different market segments.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Code Architecture

### Core Technologies
- **Next.js 15.3.0**: App Router architecture
- **React 19.0.0**: For UI components
- **Tailwind CSS 4.0.0**: For styling
- **Nodemailer**: For contact form functionality

### Multi-language Support
The site supports three languages:
- English (en) - default language
- Italian (it)
- Chinese (zh)

The language system works through:
1. URL-based routing with language prefixes (`/en/`, `/zh/`)
2. Translation files in `src/translations/translations.js`
3. A custom `useTranslation` hook
4. Language persistence via localStorage

### Directory Structure
- `/src/app`: Next.js App Router pages
  - Root directory for Italian version (without language prefix)
  - `/en/` for English version (default language)
  - `/zh/` for Chinese version
- `/src/components`: React components (Navbar, Footer, etc.)
- `/src/translations`: Translation system
- `/src/lib`: Data and utility functions
- `/public`: Static assets (images, fonts)

### API Routes
- `/src/app/api/contact/route.js`: Contact form API endpoint using Nodemailer

### State Management
- Uses React hooks for local state management
- `LanguageProvider` component for language preferences
- URL-based routing for determining current language

### Navigation System
The `Navbar` component handles:
1. Language-aware routing
2. Mobile-responsive menu
3. Dropdown navigation
4. Language selection

## Important Implementation Details

1. **Language Detection**: The system detects the user's preferred language from localStorage and redirects accordingly. If no preference is found, it defaults to English.

2. **Path Localization**: The `getLocalizedPath` function in Navbar.js maps Italian paths to their English and Chinese equivalents.

3. **Form Handling**: The contact form sends email through Nodemailer configured in the API route.

4. **ESLint Configuration**: ESLint is disabled during builds as specified in `next.config.mjs`.

5. **Layout Structure**: Each language version (`/en`, `/zh`) has its own layout.js file for language-specific metadata.

## Common Tasks

### Adding a New Page
1. Create the page in all three language directories:
   - `/src/app/[page-name]/page.js` (Italian)
   - `/src/app/en/[page-name]/page.js` (English)
   - `/src/app/zh/[page-name]/page.js` (Chinese)
2. Update the path mapping in the `getLocalizedPath` function in `Navbar.js`
3. Add any new translation strings to `src/translations/translations.js`

### Adding a New Product
1. Create product pages in all language directories
2. Add product details to translation files
3. Update navigation menus as needed

### Modifying Translations
Edit the appropriate language section in `src/translations/translations.js`