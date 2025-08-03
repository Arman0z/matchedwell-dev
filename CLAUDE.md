# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MatchedWell is a single-page scrolling marketing website for a coach-matching service that connects organizations with professional coaches. The site is designed to convert qualified business executives and professional coaches into discovery-call bookings or inquiry-form submissions.

## Tools

Use the context7 mcp server for documentation

## Technology Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **Hosting**: Netlify
- **Forms**: Netlify Forms
- **Booking**: Calendly integration
- **Fonts**: Josefin Sans (headings), Open Sans (body)
- **Icons**: Lucide React
- **Animation**: Framer Motion

## Development Commands

```bash
# Initial setup
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint

# Format code
npm run format
```

## Development Workflow

**IMPORTANT**: Do NOT automatically run `npm run dev` after implementing changes. Skip this step to avoid unnecessary development server launches. The user will manually run the development server when needed.

## Git Workflow

**IMPORTANT**: We use a development branch workflow to prevent automatic Netlify deployments. Always work on the `development` branch and only merge to `main` when ready to deploy.

### Branch Strategy
- **development**: Active development branch (default for all work)
- **main**: Production branch (triggers Netlify deployments)

### Development Workflow

```bash
# Ensure you're on development branch
git checkout development

# Stage only the files you've worked on
git add [specific files or directories]

# Or if you're confident all changes are yours
git add -A

# Commit with descriptive message
git commit -m "Your descriptive commit message"

# Push to GitHub
git push origin development

# Always notify the user after pushing
echo "Pushed to GitHub (development branch) ✅"
```

### Deploying to Production

When ready to deploy to Netlify, merge development into main:

```bash
# Switch to main branch
git checkout main

# Merge development branch
git merge development

# Push to trigger Netlify deployment
git push origin main

# Switch back to development for continued work
git checkout development
```

**Guidelines for automatic commits:**
- Always work on `development` branch unless explicitly told otherwise
- Only stage files that YOU modified in this session
- Check `git status` first to ensure you're only committing your own changes
- Be especially careful if multiple Claude Code instances might be running
- Commit after completing a feature or fixing an issue
- Commit after updating configuration or documentation files
- Group related changes into a single commit when appropriate
- Use clear, descriptive commit messages
- Don't commit after every tiny edit during active development
- Think before committing: "Is this a complete, meaningful change?"
- NEVER automatically merge to main - always ask the user first

## Architecture & Structure

The codebase should follow this structure:

```
src/
├── components/         # Reusable React components
├── sections/          # Page sections (Hero, About, etc.)
├── styles/            # Global styles and Tailwind config
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
└── App.tsx            # Main app component
```

## Key Implementation Details

### Brand Guidelines
- **Primary Color**: Celadon Blue (#0280AF)
- **Accent Color**: Middle Blue (#71C9CD)
- **Alternate Color**: Sky Blue (#84C5E2)
- **Primary Background**: Bright Gray (#EDEEF0)
- **Alternate Background**: Lavender Gray (#C5C8CF)

### Critical Features
1. **Audience Segmentation**: Caters to two primary user paths: Company Representatives and Coaches
2. **Calendly Integration**: Embedded widget for booking discovery calls
3. **Netlify Forms**: Separate forms for coaches and company representatives
4. **Navigation**: Oval/pill-shaped navigation bar with compression effect on scroll
5. **Smooth Scrolling**: Section-based navigation with animated transitions
6. **Visual Effects**: Subtle animations, glassmorphism, and gradient effects

### Form Implementation
- Use Netlify Forms for submission handling
- Forms should include audience-specific fields
- Display thank-you modal after submission
- No backend integration required

### Accessibility Requirements
- Ensure color contrast ratio ≥ 4.5:1
- All interactive elements keyboard accessible
- Proper ARIA labels for form elements
- Semantic HTML structure

## Business Context

MatchedWell addresses the challenge of matching companies with coaches who align with their culture and performance goals. The website should emphasize:
- Trust and credibility through professional design
- Clear value proposition for both audiences
- Frictionless path to booking discovery calls
- Benefits-driven messaging over feature lists

## Content Sources

Business content and messaging can be found in:
- `/ai_docs/` - Contains coaches.md, governing_doc.md, slideshow.md, story.md, video.md
- `/specs/PRD.md` - Product requirements and feature specifications
- Logo available at `/Logo.svg` and hosted at `https://knpvhqfadqkctzgecadf.supabase.co/storage/v1/object/public/assets/logo.svg`

## Recent Updates

### Navigation System
- Implemented oval/pill-shaped navigation bar with glassmorphism effect
- Added scroll compression animation (width changes on scroll)
- Gradient border animation using brand colors
- Mobile-responsive hamburger menu with smooth transitions

### Hero Section
- Static hero content (no rotation)
- Heading: "The Missing Link Between Talent and Peak Performance"
- Emphasis statement below CTA buttons with subtle glimmer effect
- Two polished CTA buttons with hover effects

### Section Updates
- WhoWeAre section heading: "Start Building Your Winning Formula Today"