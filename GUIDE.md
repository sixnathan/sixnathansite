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

## Content Policy: Human-Written Only

**IMPORTANT**: All content on this site (blog posts, projects, descriptions, etc.) must be written by a human, not AI-generated.

When working with AI assistants (like Claude Code) to help manage this site:
- Never allow the AI to generate descriptive text for posts, projects, or any public-facing content
- AI should only handle technical tasks (file operations, builds, deployments)
- Always provide the exact text you want - the AI should copy it verbatim, not paraphrase or "improve" it
- Remove any AI-generated placeholder text or example content
- Keep labels and page titles minimal (1-2 words); avoid AI-generated descriptions

**Example prompts:**
- ✅ "Create a blog post titled 'centaurs' with this exact text: [your text]"
- ✅ "Add a project with title 'v1 linear regression' and description 'cs 229 is pretty fun.'"
- ❌ "Write a blog post about machine learning"
- ❌ "Generate a description for my project"

---

## Creating Blog Posts vs Reading Links

Your blog page can display two types of content:
- **Blog Posts**: Full articles you write with markdown content
- **Reading Links**: Quick links to articles/content you're reading with a short comment

Both appear on the same page, sorted by date (newest first).

---

## Creating a Blog Post

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

## Adding a Reading Link

Reading links are for sharing articles, videos, or content you're currently reading/watching. They appear on your blog page with a ↗ icon and link directly to the source.

### 1. Create a new MDX file

Create a file in `content/reading/` with a `.mdx` extension:

```
content/reading/interesting-article.mdx
```

The filename is just for organization - it won't be used as a URL.

### 2. Add frontmatter

Every reading link needs this frontmatter:

```mdx
---
title: "Article Title or What You're Reading"
link: "https://example.com/article"
date: "2024-11-28"
comment: "A short comment about why this is interesting"
---
```

**Fields:**
- `title`: The name of what you're reading
- `link`: The full URL to the content
- `date`: Date in YYYY-MM-DD format (used for sorting)
- `comment`: A brief note about why you're reading it or what's interesting

### 3. No content needed

Reading links don't need any content below the frontmatter - just the frontmatter is enough!

### 4. Build and preview

```bash
npm run dev    # Preview locally at http://localhost:3000
npm run build  # Build for production
```

**Example reading link file:**

```mdx
---
title: "The State of JavaScript 2024"
link: "https://stateofjs.com/2024"
date: "2024-11-28"
comment: "Interesting insights on modern JS frameworks and tooling trends"
---
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
