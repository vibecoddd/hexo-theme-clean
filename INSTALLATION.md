# Installation Guide

## Quick Start

### 1. Install Theme

```bash
cd your-hexo-site
git clone https://github.com/your-username/hexo-theme-clean.git themes/clean
```

### 2. Configure Site

Update your site's `_config.yml`:

```yaml
# Site
title: Your Blog Title
subtitle: Your subtitle
description: Your description
keywords: blog, hexo, clean
author: Your Name
language: en
timezone: ''

# Theme
theme: clean

# URL
url: https://yourdomain.com
permalink: :year/:month/:day/:title/
```

### 3. Configure Theme

Copy and customize `themes/clean/_config.yml`:

```yaml
# Basic Info
title: "Clean Blog"
subtitle: "A beautiful Hexo theme"
author: "Your Name"
email: "your-email@example.com"

# Navigation
menu:
  Home: /
  About: /about
  Posts: /archives
  Contact: /contact

# Social Links
social:
  github: "username"
  twitter: "username"
```

### 4. Create Pages

Create essential pages:

```bash
# About page
hexo new page about

# Contact page
hexo new page contact
```

Update the contact page front matter:

```yaml
---
title: Contact
layout: contact
---
```

### 5. Add Content

```bash
# Create a new post
hexo new post "Hello World"
```

### 6. Generate and Serve

```bash
hexo clean
hexo generate
hexo server
```

Visit http://localhost:4000 to see your blog!

## Advanced Configuration

### Contact Form Setup

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy the endpoint ID
4. Add to theme config:

```yaml
contact:
  enable: true
  formspree_endpoint: "your-endpoint-id"
```

### Google Analytics

Add tracking to theme config:

```yaml
seo:
  google_analytics: "GA-XXXXXXX-X"
```

### Custom Styling

1. Create `source/css/custom.styl`
2. Add custom styles
3. Reference in theme config:

```yaml
advanced:
  custom_css: |
    <link rel="stylesheet" href="/css/custom.css">
```

## Troubleshooting

### Theme Not Loading

1. Check theme name in `_config.yml`
2. Verify theme files in `themes/clean/`
3. Run `hexo clean && hexo generate`

### Contact Form Not Working

1. Verify Formspree endpoint
2. Check browser console for errors
3. Ensure jQuery is loading properly

### Styling Issues

1. Clear browser cache
2. Run `hexo clean && hexo generate`
3. Check for CSS conflicts

## Next Steps

- Customize colors in `source/css/clean-blog.styl`
- Add background images to `source/img/`
- Configure social media links
- Set up Google Analytics
- Create custom pages and posts

For detailed documentation, see [README.md](README.md).