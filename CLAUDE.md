# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Agent Workflow

### Feature Branch Policy

- **Always work on a feature branch**: Create branches from `main` using the format `feature/description` (e.g., `feature/add-contact-form`).
- **Never commit to main directly**: The `main` branch is for stable releases only.
- **Fast Feedback Loop**:
  - Commit early and often to your feature branch.
  - Fix failures immediately.
  - Only commit "releasable" units of work or when reaching critical milestones.
- **Task Awareness**:
  - You should maintain awareness of the goals, tasks, and todos for your current feature branch.
  - Track these items in an appropriate place (e.g., a `TASKS.md` file in the root or your internal context) to ensure nothing is missed.

### Pre-commit Checks

This repository uses **Husky** to enforce quality checks before every commit.

- **Prettier**: Automatically formats code (JS, CSS, MD, HTML, JSON).
- **Hugo Build**: Verifies that the site builds successfully.

> [!IMPORTANT]
> If a commit fails, **read the error message**, fix the issue, and try again. Do not bypass these checks.

### Performance & Accessibility Audit

To ensure the site meets high standards for SEO, Accessibility, and Performance, agents must run Google Lighthouse audits.

- **When to run**:
  - Before merging a feature branch.
  - After making significant layout or script changes.
  - If instructed by the user to "audit" or "check performance".

- **How to run**:

  ```bash
  npm run audit
  ```

  This command will:
  1. Start the Hugo server locally.
  2. Run Google Lighthouse (headless Chrome) against the site.
  3. Generate reports: `lighthouse-report.html` and `lighthouse-report.json`.

- **Workflow**:
  1. Run the audit.
  2. **Analyze the JSON report** (or summary output) to identify failing checks.
  3. **Fix issues** (e.g., add alt text, improve contrast, optimize images).
  4. **Re-run** to verify improvements.
  5. **Aim for scores > 90** in all categories.

## Project Overview

This is a Hugo-based photography portfolio website for "Draik & Co. Photography" that follows a specific professional design system.

### Critical Design Requirement

**The site must adhere to the established design system**. This means:

- Identical color palette (warm cream backgrounds, beige accents)
- Matching typography (Grapevine Regular for titles, TT Commons Light for body)
- Same section structure and layout approach
- Identical navigation style and behavior
- Matching animations, transitions, and interactions
- Same footer design and social icon treatment
- Consistent spacing, sizing, and responsive breakpoints

Photo assets and logos will be provided separately - focus on achieving exact stylistic parity first.

## Site Specifications

### Color Palette

- Background: `rgba(255,251,241,1)` (warm cream)
- Secondary sections: `rgba(238,232,211,1)` (light tan/beige)
- Text: `rgba(25,25,26,1)` (near-black)
- Accent: Dark brown/black for borders and lines

### Typography

- **Title Font**: Grapevine Regular (54px desktop, 36px mobile, uppercase, 1.2 line-height) ✓ Installed
- **Body Font**: TT Commons Light (16px desktop, 14px mobile) ✓ Installed
- **Subheadings**: TT Commons Medium (16px) ✓ Installed
- **Emphasis**: TT Commons Light Italic ✓ Installed
- Letter-spacing: 0em

**Font Files Location**: `themes/photography/static/fonts/`

- `grapevine_regular.woff`
- `tt_commons_light.woff`
- `tt_commons_light_italic.woff`
- `tt_commons_medium.woff`
- `tt_commons_medium_italic.woff`

### Layout Dimensions

- Desktop container: 1200px max-width
- Mobile breakpoint: 320px minimum
- Navigation bar: 58px height (beige background)
- Hero section: 722px desktop / 539px mobile
- Mobile menu: 203px height when expanded
- Footer: 293px desktop height

### Animations

- Fade-in class: 0.5s duration
- Staggered delays: 0s to 4s
- Gallery rotation: Auto
- Hover effects: Grayscale with opacity transitions

### Image Specifications

- Portrait aspect ratio: ~0.667
- Landscape aspect ratio: ~1.499
- Logo: 840×424px centered in hero
- Social icons: 24×26px

## Development Server

### Starting the Server

To start the Hugo development server with live reload enabled:

1.  Run the following command in the background:

    ```bash
    hugo serve &
    ```

    - The `&` puts the process in the background, allowing you to continue using the terminal.
    - By default, the server runs at `http://localhost:1313`.
    - Live reload is enabled by default. Changes to files will automatically trigger a rebuild and browser refresh.

### Monitoring the Server

When the server is running in the background, it is crucial to monitor it for build errors.

1.  **Check Output**: If you ran `hugo serve &`, the output (stdout/stderr) will still appear in the terminal unless redirected. Watch for "ERROR" or "WARN" messages after saving files.
2.  **Log File (Recommended)**: For cleaner monitoring, redirect output to a log file:

    ```bash
    hugo serve > hugo.log 2>&1 &
    ```

    - Then, use `tail -f hugo.log` to watch the logs in real-time, or `cat hugo.log` to check for errors after making changes.

3.  **Verify No Errors**: Ensure that `hugo serve` reports "Built in [time]" without errors after every file modification.

### Check Hugo Version

```bash
hugo version
# Requires Hugo v0.112.0 or higher
```

## Repository Maintenance

### Clean Codebase

- This repository is for "Draik & Co. Photography".
- Ensure no references to other client websites or templates remain in the codebase.
- Maintain the established design system (colors, fonts) defined in `themes/photography/static/css/main.css`.

## Architecture

### Theme Structure

The site uses a custom theme located in `themes/photography/`:

- **Layout System**: Hugo uses a template hierarchy with `baseof.html` as the base template
  - `themes/photography/layouts/_default/baseof.html` - Base HTML structure, includes head, body, partials
  - `themes/photography/layouts/index.html` - Homepage content sections (objectives, portfolio, about, testimonials, contact)
  - `themes/photography/layouts/partials/` - Reusable components (header, navigation, footer)

- **Content Flow**:
  - `baseof.html` defines the overall page structure
  - Partials are included via `{{ partial "header.html" . }}`
  - Page-specific content is injected via `{{ block "main" . }}{{ end }}`
  - The homepage (`index.html`) defines all main content sections

### Static Assets

Located in `themes/photography/static/`:

- **CSS**: `css/main.css` - All styles including CSS variables for theming, responsive breakpoints, animations
- **JavaScript**: `js/main.js` - Interactive features:
  - Header gallery slider (5-second rotation)
  - Mobile menu toggle
  - Smooth scrolling for anchor links
  - Intersection Observer for fade-in animations
  - Form submission handler (currently placeholder)
  - Image preloading and lazy opacity transitions
  - Parallax header effect
- **Images**: `images/` - Expected image assets (see Image Requirements below)

### Configuration

`hugo.toml` controls:

- Site metadata (baseURL, title, language)
- Theme selection
- Parameters (description, author)
- Navigation menu structure (menu.main)

### Image Requirements

The theme expects specific images in `themes/photography/static/images/`:

- Header gallery: `header-1.jpg`, `header-2.jpg`, `header-3.jpg` (1920x1080px recommended)
- Portfolio: `portfolio-1.jpg`, `portfolio-2.jpg`, `portfolio-3.jpg` (1200x900px recommended)
- Objectives: `objective-1.jpg`, `objective-2.jpg`
- About: `about.jpg` (800x800px recommended)

## Customization Workflow

### Client Setup

1. Update `hugo.toml` with client's site title, baseURL, author, description
2. Replace placeholder images in `themes/photography/static/images/`
3. Edit `themes/photography/layouts/index.html` to update:
   - Section titles and subtitles
   - Card content and descriptions
   - Testimonials text and authors
   - About section text
4. Update `themes/photography/layouts/partials/footer.html` for contact info
5. Modify `css/main.css` CSS variables for color scheme:
   - `--color-primary`, `--color-accent`, `--color-background`, etc.

### Form Integration

The contact form in `index.html` has a placeholder handler. To make functional:

- **Netlify Forms**: Add `netlify` attribute to `<form>` tag
- **Formspree**: Add action URL to `<form>` tag
- **Custom Backend**: Modify form handler in `main.js` (lines 86-104)

### Navigation Menu

Navigation is configured in `hugo.toml` under `[menu]` section. Each menu item has:

- `name` - Display text
- `url` - Link (use `#section-id` for anchor links)
- `weight` - Display order (lower numbers first)

## File Locations

### Content Sections

All homepage content sections are in: `themes/photography/layouts/index.html:1`

### Styling

CSS variables for theming: `themes/photography/static/css/main.css` (beginning of file)

### Interactive Features

All JavaScript functionality: `themes/photography/static/js/main.js:1`

### Site Configuration

Global settings: `hugo.toml:1`

## Deployment

Build with `hugo --minify`, then deploy the `public/` directory to:

- Netlify (auto-deploy from Git)
- Vercel
- GitHub Pages
- Traditional hosting via FTP

For Netlify/Vercel:

- Build command: `hugo --minify`
- Publish directory: `public`

## Key Features

- **Responsive Design**: Mobile-first approach with breakpoints defined in CSS
- **Header Gallery**: Auto-rotating images with smooth transitions
- **Sticky Navigation**: Fixed navigation bar with mobile hamburger menu
- **Fade-in Animations**: Sections fade in on scroll using Intersection Observer
- **Smooth Scrolling**: Anchor links scroll smoothly with header offset
- **Form Validation**: Basic HTML5 validation (backend integration required)
