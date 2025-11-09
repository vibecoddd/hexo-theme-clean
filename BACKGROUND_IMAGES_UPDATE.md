# Background Images Update

## ✨ New Feature: Default Background Images

The Hexo Clean Blog theme now includes beautiful default background images that enhance the visual appeal of your blog.

## 📸 Included Images

### 1. Homepage Background (`home-bg.jpg`)
- **Theme**: Scenic mountain landscape
- **Size**: 401KB (optimized)
- **Dimensions**: High resolution, responsive
- **Usage**: Automatically applied to homepage

### 2. About Page Background (`about-bg.jpg`)
- **Theme**: Workspace/notebook scene
- **Size**: 293KB (optimized)
- **Usage**: Applied to About page and other static pages

### 3. Post Background (`post-bg.jpg`)
- **Theme**: Writing/creative workspace
- **Size**: 459KB (optimized)
- **Usage**: Applied to all blog posts and archive pages

### 4. Contact Page Background (`contact-bg.jpg`)
- **Theme**: Communication/connection theme
- **Size**: 980KB (high quality)
- **Usage**: Applied to contact form page

## 🎯 Smart Background Selection

The theme now automatically selects appropriate background images based on page type:

```yaml
# Automatic selection logic:
- Homepage → home-bg.jpg
- Blog Posts → post-bg.jpg
- About Page → about-bg.jpg
- Contact Page → contact-bg.jpg
- Archive/Posts List → post-bg.jpg
- Other Pages → about-bg.jpg (fallback)
```

## ⚙️ Configuration

### Theme Configuration
The background images are configured in `_config.yml`:

```yaml
# Page specific background images
page_backgrounds:
  home: "/img/home-bg.jpg"
  about: "/img/about-bg.jpg"
  post: "/img/post-bg.jpg"
  contact: "/img/contact-bg.jpg"
```

### Override Individual Pages
You can override the default background for any page by adding `header_img` to the front matter:

```yaml
---
title: "My Special Post"
header_img: "/img/custom-background.jpg"
---
```

## 🎨 Customization Options

### Option 1: Replace Default Images
Simply replace the files in `source/img/` with your own images (keep the same filenames):

```bash
# Replace with your own images
cp my-home-background.jpg source/img/home-bg.jpg
cp my-about-background.jpg source/img/about-bg.jpg
cp my-post-background.jpg source/img/post-bg.jpg
cp my-contact-background.jpg source/img/contact-bg.jpg
```

### Option 2: Update Configuration
Change the paths in `_config.yml`:

```yaml
page_backgrounds:
  home: "/img/my-custom-home.jpg"
  about: "/img/my-custom-about.jpg"
  post: "/img/my-custom-post.jpg"
  contact: "/img/my-custom-contact.jpg"
```

### Option 3: Per-Page Override
Set custom background in page front matter:

```yaml
---
title: "Special Article"
header_img: "/img/special-bg.jpg"
---
```

## 📱 Technical Details

### Image Optimization
- All images are optimized for web delivery
- JPG format for best compression/quality balance
- Responsive design compatible
- Fast loading optimized

### Browser Compatibility
- Modern browsers: Full support
- CSS `background-image` with overlay
- Graceful degradation for older browsers

### Performance
- Images are loaded only when needed
- CSS-based background loading
- No JavaScript required for basic functionality

## 🎭 Visual Impact

### Before vs After
- **Before**: Plain colored headers
- **After**: Beautiful, professional background images that enhance user experience

### Design Principles
- Images complement content without distracting
- Subtle overlay ensures text readability
- Consistent visual theme across all pages
- Professional, modern appearance

## 🔧 Installation

The background images are automatically included when you:

1. Clone/download the theme
2. Use the latest version (v1.1+)
3. No additional setup required!

## 🎯 Best Practices

### Image Guidelines
- **Recommended size**: 1900×1200px
- **Format**: JPG (optimized) or WebP
- **File size**: Keep under 1MB for fast loading
- **Style**: Subtle, not too busy, good contrast for text overlay

### Content Considerations
- Images should complement your brand
- Ensure text readability with dark overlay
- Consider mobile viewing experience
- Test across different devices

## 🚀 Migration

### Existing Users
If you're updating from an older version:

1. Download new image files to `source/img/`
2. Update your `_config.yml` with new background settings
3. Regenerate your site (`hexo clean && hexo generate`)

### New Users
Everything is included by default - no additional setup needed!

---

**Version**: 1.1.0
**Feature**: Default Background Images
**Status**: ✅ Complete and Ready to Use