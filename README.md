# Photography Portfolio - Hugo Site

A Hugo-based photography portfolio website. This is a simplified, customizable template ready for client work.

## Overview

This Hugo site replicates the structure and styling of a professional photography portfolio with:

- Responsive design (mobile-first approach)
- Header with rotating image gallery
- Sticky navigation with mobile menu
- Multiple content sections
- Smooth animations and transitions
- Contact form
- Clean, professional design

## Project Structure

```
.
├── hugo.toml                          # Hugo configuration
├── content/
│   └── _index.md                      # Homepage content
└── themes/
    └── photography/
        ├── layouts/
        │   ├── _default/
        │   │   └── baseof.html        # Base template
        │   ├── partials/
        │   │   ├── header.html        # Header with gallery
        │   │   ├── navigation.html    # Navigation menu
        │   │   └── footer.html        # Footer
        │   └── index.html             # Homepage template
        └── assets/
            ├── css/
            │   └── main.css           # All styles
            ├── js/
            │   └── main.js            # Interactions & animations
            └── images/                # Image assets
        └── static/
            ├── fonts/                 # Custom fonts
            └── favicon.ico            # Site favicon
```

## Getting Started

### Prerequisites

- Hugo installed (version 0.112.0 or higher)
- Git (optional, for version control)

### Installation

1. Install Hugo if you haven't already:

   ```bash
   # macOS
   brew install hugo

   # Or download from https://gohugo.io/installation/
   ```

2. Navigate to the project directory:

   ```bash
   cd /path/to/draik-and-co
   ```

3. Run the development server:

   ```bash
   hugo server -D
   ```

4. Open your browser to `http://localhost:1313`

## Adding Images

The site expects the following images in `themes/photography/assets/images/`:

### Header Gallery (rotating images)

- `header/header-2H8A0285.JPG`
- `header/header-IMG_3342.JPG`
- `header/IMG_4280.JPG`
- `header/IMG_4281.JPG`
- `header/IMG_4287.JPG`

### Portfolio/Featured Work

- `portfolio-1.jpg`
- `portfolio-2.jpg`
- `portfolio-3.jpg`

### Objectives Section

- `objective-1.jpg`
- `objective-2.jpg`

### About Section

- `about.jpg` (photographer photo)

**Recommended image sizes:**

- Header images: 1920x1080px (16:9 ratio)
- Portfolio images: 1200x900px (4:3 ratio)
- About image: 800x800px (square or portrait)

## Customization

### Update Site Information

Edit `hugo.toml`:

```toml
baseURL = 'https://yourclientdomain.com/'
title = 'Client Name Photography'

[params]
  description = "Professional Photography Services"
  author = "Client Name"
```

### Modify Navigation Menu

In `hugo.toml`, update the `[[menu.main]]` sections:

```toml
[[menu.main]]
  name = "Services"
  url = "#services"
  weight = 2
```

### Update Content Sections

Edit `themes/photography/layouts/index.html` to customize:

- Section titles and subtitles
- Card content and descriptions
- Testimonials
- About text
- Form fields

### Customize Colors and Styling

Edit `themes/photography/assets/css/main.css`:

```css
:root {
  --color-primary: #000000; /* Main text color */
  --color-accent: #8b7355; /* Accent color */
  --color-background: #ffffff; /* Background color */
  /* ... more variables ... */
}
```

### Modify Typography

In `main.css`, update font families:

```css
:root {
  --font-primary: 'Your-Serif-Font', serif;
  --font-secondary: 'Your-Sans-Font', sans-serif;
}
```

To use custom fonts, add `@font-face` declarations at the top of `main.css`.

## Features

### 1. Responsive Header Gallery

- Automatically rotating images (5-second intervals)
- Centered logo overlay
- Mobile-optimized

### 2. Mobile Navigation

- Hamburger menu for mobile devices
- Smooth slide-in animation
- Auto-closes when link is clicked

### 3. Smooth Scrolling

- Anchor links scroll smoothly to sections
- Accounts for sticky header offset

### 4. Fade-in Animations

- Sections fade in as you scroll
- Staggered delays for visual interest
- Intersection Observer API for performance

### 5. Contact Form

- Basic HTML form structure
- Client-side validation
- Placeholder submission handler (needs backend integration)

## Deployment

### Build for Production

```bash
hugo --minify
```

This creates a `public/` directory with your static site.

### Deploy Options

1. **Netlify**: Connect your Git repo and deploy automatically
2. **Vercel**: Similar to Netlify, great Hugo support
3. **GitHub Pages**: Free hosting for static sites
4. **Traditional hosting**: Upload `public/` folder via FTP

### Example: Deploy to Netlify

1. Push your code to GitHub
2. Connect repo to Netlify
3. Set build command: `hugo --minify`
4. Set publish directory: `public`
5. Deploy!

## Form Integration

The contact form currently uses a placeholder submit handler. To make it functional:

### Option 1: Netlify Forms

Add `netlify` attribute to form tag in `index.html`:

```html
<form class="contact-form" name="contact" method="POST" netlify></form>
```

### Option 2: Formspree

Update form action:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST"></form>
```

### Option 3: Custom Backend

Modify `themes/photography/assets/js/main.js` form submission handler to send data to your API.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize images**: Use tools like ImageOptim or TinyPNG before uploading
2. **Use WebP format**: Convert JPEGs to WebP for better compression
3. **Lazy loading**: Add `loading="lazy"` to img tags
4. **Minify**: Always build with `hugo --minify` for production

## Customizing for Your Client

1. Replace all placeholder images with client photos
2. Update text content in `index.html`
3. Modify color scheme in `main.css`
4. Update contact information in `footer.html`
5. Set up form backend integration
6. Update `hugo.toml` with client's site info
7. Test on mobile devices
8. Deploy!

## Troubleshooting

**Images not showing:**

- Check that images are in `themes/photography/assets/images/`
- Verify image filenames match exactly (case-sensitive)
- Clear browser cache

**Styles not applying:**

- Run `hugo server` with `--disableFastRender`
- Check browser console for errors
- Verify CSS file path is correct

**Menu not working on mobile:**

- Check JavaScript console for errors
- Verify `main.js` is loading correctly

## License

This is a custom template created for client work. Feel free to modify and use as needed.

## Support

For Hugo documentation: https://gohugo.io/documentation/

---

Created based on a professional photography portfolio structure.
