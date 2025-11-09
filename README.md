# Hexo Theme Clean Blog

A beautiful, responsive blog theme for [Hexo](https://hexo.io/), based on the popular [Clean Blog Jekyll theme](https://github.com/lightningspirit/clean-blog-jekyll-theme) by Start Bootstrap.

![Theme Preview](screenshot.png)

## Features

- 🎨 **Clean & Beautiful Design** - Minimalist aesthetic with elegant typography
- 📱 **Fully Responsive** - Looks great on desktop, tablet, and mobile
- 🚀 **Fast & Lightweight** - Optimized for performance
- 📝 **Multiple Layouts** - Home, post, page, archive, and contact layouts
- 🎯 **Contact Form** - Built-in Formspree integration
- 🌐 **Internationalization** - English and Chinese support
- 🔗 **Social Links** - Configurable social media icons
- 🎪 **Bootstrap 4** - Built on the popular CSS framework
- ♿ **Accessible** - Semantic HTML and ARIA attributes

## Installation

### Git Clone Method

```bash
cd your-hexo-site
git clone https://github.com/your-username/hexo-theme-clean.git themes/clean
```

### Manual Installation

1. Download the theme files
2. Extract to `themes/clean` directory
3. Update your site's `_config.yml`

## Configuration

### 1. Enable the Theme

Update your site's `_config.yml`:

```yaml
theme: clean
```

### 2. Theme Configuration

Create or update `themes/clean/_config.yml`:

```yaml
# Site Information
title: "Your Blog Title"
subtitle: "Your blog subtitle"
description: "Your blog description"
author: "Your Name"
email: "your-email@example.com"

# Header Settings
header_img: "img/home-bg.jpg"

# Navigation Menu
menu:
  Home: /
  About: /about
  Posts: /archives
  Contact: /contact

# Social Links
social:
  github: "your-username"
  twitter: "your-username"
  facebook: "your-username"
  linkedin: "your-username"
  instagram: "your-username"

# Contact Form (requires Formspree account)
contact:
  enable: true
  formspree_endpoint: "your-formspree-id"

# Footer Settings
footer:
  copyright: true
  since: 2024

# SEO Settings
seo:
  google_analytics: "GA-TRACKING-ID"
  google_site_verification: "verification-code"

# Advanced Settings
advanced:
  favicon: "/img/favicon.ico"
  custom_css: ""
  custom_js: ""
```

## Post Front Matter

### Basic Post

```yaml
---
title: "Your Post Title"
subtitle: "Optional post subtitle"
date: 2024-01-01
author: "Author Name"
header_img: "/img/post-bg.jpg"
tags:
  - tag1
  - tag2
categories:
  - category1
---

Your post content here...
```

### Page Front Matter

```yaml
---
title: "Page Title"
subtitle: "Optional subtitle"
layout: page
header_img: "/img/page-bg.jpg"
---

Your page content here...
```

### Contact Page

```yaml
---
title: "Contact"
subtitle: "Get in touch"
layout: contact
header_img: "/img/contact-bg.jpg"
---

Contact form will appear automatically below this content.
```

## Customization

### Header Images

The theme comes with beautiful default background images that are automatically applied:

- `home-bg.jpg` - Homepage background (scenic landscape)
- `about-bg.jpg` - About page background (workspace scene)
- `post-bg.jpg` - Post pages background (writing theme)
- `contact-bg.jpg` - Contact page background (communication theme)

**Automatic Background Selection:**
- Homepage uses `home-bg.jpg`
- Blog posts use `post-bg.jpg` by default
- About page uses `about-bg.jpg`
- Contact page uses `contact-bg.jpg`
- Other pages use `about-bg.jpg` as fallback

**Custom Images:**
To use custom background images, you can:
1. Replace the default images in `source/img/` with your own (keep same filenames)
2. Set custom images in individual posts/pages:
   ```yaml
   header_img: "/img/my-custom-bg.jpg"
   ```
3. Update theme config for different default images:
   ```yaml
   page_backgrounds:
     home: "/img/my-home-bg.jpg"
     about: "/img/my-about-bg.jpg"
     post: "/img/my-post-bg.jpg"
     contact: "/img/my-contact-bg.jpg"
   ```

Recommended size: 1900×1200px, optimized JPG format

### Custom CSS

Add custom styles to `source/css/custom.css` and reference in theme config:

```yaml
advanced:
  custom_css: |
    <link rel="stylesheet" href="/css/custom.css">
```

### Custom JavaScript

Add custom scripts and reference in theme config:

```yaml
advanced:
  custom_js: |
    <script src="/js/custom.js"></script>
```

## Contact Form Setup

1. Create a free account at [Formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint
3. Add endpoint to theme configuration:

```yaml
contact:
  enable: true
  formspree_endpoint: "xvgpkmlq" # Your Formspree form ID
```

## Social Links

Configure social media links in theme config:

```yaml
social:
  github: "username"       # GitHub username
  twitter: "username"      # Twitter username
  facebook: "username"     # Facebook username
  linkedin: "in/username"  # LinkedIn profile
  instagram: "username"    # Instagram username
```

## Internationalization

The theme supports multiple languages. Set your site language in `_config.yml`:

```yaml
language: en  # or zh-CN for Chinese
```

Available languages:
- `en` - English
- `zh-CN` - Simplified Chinese

## File Structure

```
themes/clean/
├── _config.yml           # Theme configuration
├── languages/            # Language files
├── layout/               # Template files
│   ├── _partial/         # Partial templates
│   ├── archive.ejs       # Archive page
│   ├── contact.ejs       # Contact page
│   ├── index.ejs         # Homepage
│   ├── layout.ejs        # Base layout
│   ├── page.ejs          # Static pages
│   └── post.ejs          # Blog posts
├── scripts/              # Helper scripts
├── source/               # Static assets
│   ├── css/              # Stylesheets
│   ├── img/              # Images
│   └── js/               # JavaScript
└── package.json
```

## Development

### Requirements

- Node.js 12+
- Hexo 6+

### Local Development

1. Clone the theme
2. Install Hexo site
3. Link theme and test:

```bash
hexo server
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (limited support)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Credits

- Based on [Clean Blog Jekyll theme](https://github.com/lightningspirit/clean-blog-jekyll-theme)
- Original design by [Start Bootstrap](https://startbootstrap.com/)
- Adapted for Hexo by [Your Name]

## Support

- 📖 [Theme Documentation](docs/)
- 🐛 [Report Issues](issues)
- 💬 [Discussions](discussions)

---

**Hexo Theme Clean Blog** - A clean, beautiful theme for your Hexo blog.