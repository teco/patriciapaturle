# Favicon Requirements

## Missing Favicon Files

The website currently lacks favicon files. These are essential for:
- Browser tabs
- Bookmarks
- Mobile home screen icons
- Professional appearance

## Required Files

Create the following favicon files and place them in the **root directory** of the gh-pages branch:

### 1. favicon.ico
- **Sizes**: 16x16 and 32x32 (multi-resolution ICO file)
- **Location**: `/favicon.ico`
- **Format**: ICO
- **Use**: Browser tabs, bookmarks

### 2. favicon-192.png
- **Size**: 192x192 pixels
- **Location**: `/favicon-192.png`
- **Format**: PNG
- **Use**: Android home screen, PWA

### 3. favicon-512.png
- **Size**: 512x512 pixels
- **Location**: `/favicon-512.png`
- **Format**: PNG
- **Use**: Android splash screen, PWA

### 4. apple-touch-icon.png
- **Size**: 180x180 pixels
- **Location**: `/apple-touch-icon.png`
- **Format**: PNG
- **Use**: iOS home screen

## Design Recommendations

- Use the clinic logo or "PP" monogram
- Background color: Sage green (#6B8E6F) or cream (#F7F5F3)
- Ensure good contrast for small sizes
- Keep design simple and recognizable at 16x16

## HTML Updates Needed

After creating the favicon files, add these lines to the `<head>` section of `index.html`:

```html
<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.json">
```

## Tools for Creating Favicons

- **Online**: https://realfavicongenerator.net/
- **Figma/Photoshop**: Export at required sizes
- **ImageMagick**: Convert existing logo
  ```bash
  # Example: Convert logo to favicon
  convert logo.png -resize 192x192 favicon-192.png
  convert logo.png -resize 512x512 favicon-512.png
  convert logo.png -resize 180x180 apple-touch-icon.png
  ```

## Priority

**HIGH** - Favicons are a basic requirement for any professional website.
