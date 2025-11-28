# Site Guide

This is your personal website built with Next.js. It's fully static and can be hosted for free on Cloudflare Pages.

## Project Structure

```
sixnathan/
├── content/
│   └── posts/           # Your blog posts (MDX files)
├── public/              # Static files (images, etc.)
├── src/
│   ├── app/             # Pages
│   │   ├── page.tsx     # Home/About
│   │   ├── blog/        # Blog section
│   │   ├── projects/    # Projects section
│   │   └── contact/     # Contact section
│   ├── components/      # Reusable components
│   └── lib/             # Utilities
└── out/                 # Built static files (after build)
```

---

## Creating Blog Posts

### 1. Create a new MDX file

Create a file in `content/posts/` with a `.mdx` extension:

```
content/posts/my-new-post.mdx
```

The filename becomes the URL slug: `yoursite.com/blog/my-new-post`

### 2. Add frontmatter

Every post needs frontmatter at the top:

```mdx
---
title: "My Post Title"
date: "2024-11-28"
description: "A short description for the blog listing."
---

Your content starts here...
```

### 3. Write your content

Use markdown syntax:

```mdx
## Headings

Use ## for h2, ### for h3

## Lists

- Item one
- Item two
- Item three

## Code

Inline `code` or code blocks:

```javascript
const hello = "world";
```

## Bold

Use **bold text** for emphasis.
```

### 4. Build and preview

```bash
npm run dev    # Preview locally at http://localhost:3000
npm run build  # Build for production
```

---

## Adding Images

### 1. Add images to the public folder

```
public/
└── images/
    └── my-photo.jpg
```

### 2. Reference in your content or pages

In MDX/components, use the path starting from `/`:

```jsx
<img src="/images/my-photo.jpg" alt="Description" />
```

### 3. IMPORTANT: Strip metadata from images

**Privacy concern**: Photos contain EXIF metadata that can reveal:
- GPS location where the photo was taken
- Date and time
- Device information
- Camera settings

**Strip metadata before uploading:**

**Option 1: macOS Preview**
1. Open image in Preview
2. Tools > Show Inspector (Cmd+I)
3. You can see the metadata but can't remove it easily

**Option 2: Command line (recommended)**

Install `exiftool`:
```bash
brew install exiftool
```

Strip all metadata:
```bash
exiftool -all= image.jpg
```

Strip metadata from all images in a folder:
```bash
exiftool -all= public/images/*
```

**Option 3: Online tools**
- https://www.verexif.com/en/
- Be cautious with sensitive images on online tools

---

## Editing Projects

Edit `src/app/projects/page.tsx` and modify the `projects` array:

```tsx
const projects: Project[] = [
  {
    title: "My Project",
    description: "What it does",
    link: "https://github.com/you/project",  // optional
    tags: ["React", "TypeScript"],
  },
  // Add more projects...
];
```

---

## Editing Contact Links

Edit `src/app/contact/page.tsx` and modify the `socialLinks` array:

```tsx
const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:you@example.com" },
  { label: "GitHub", href: "https://github.com/yourusername" },
  // Add or remove links...
];
```

---

## Deploying to Cloudflare Pages

### Initial Setup

1. Push your code to GitHub (private repo is fine)

2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)

3. Create a new project and connect your GitHub repo

4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: 18 (or higher)

5. Deploy!

### Subsequent Updates

Just push to your GitHub repo. Cloudflare will automatically rebuild and deploy.

```bash
git add .
git commit -m "Add new blog post"
git push
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# The static files will be in the 'out' folder
```

---

## Privacy Checklist

Before publishing:

- [ ] Strip EXIF metadata from all images
- [ ] Review contact info - use a dedicated email if concerned about spam
- [ ] Don't include home address or precise location details
- [ ] Review blog posts for unintentional personal info
- [ ] Consider using a contact form service instead of direct email link

---

## Customization

### Change site title/description
Edit `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Name",
  description: "Your site description",
};
```

### Change colors
Edit `src/app/globals.css`:

```css
:root {
  --background: #0a0a0a;  /* Dark background */
  --foreground: #ededed;  /* Light text */
  --muted: #a1a1aa;       /* Muted text */
  --accent: #3b82f6;      /* Accent/link color */
}
```

### Change fonts
Edit `src/app/layout.tsx` - the site uses Geist fonts by default.
