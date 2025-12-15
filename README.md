# sixnathan

Personal website built with Next.js.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Style Guide

### Interests Page (`/gman`)

#### Mindmap Clusters
- Three nodes arranged in a **triangle formation** (no node blocks path to another)
- Node names are **lowercase**: `ml`, `neuro`, `philo`
- Located in `src/data/interests.ts`

#### Papers List
Papers have the following properties:
- `title`: Paper name
- `read`: Boolean (`true` = read, `false` = will read)
- `added`: Date string (YYYY-MM-DD) for ordering - **not displayed to viewers**
- `favorite`: Optional boolean

**Display rules:**
- Papers sorted by `added` date (most recent first)
- Regular papers shown in muted text
- **Favorite papers shown in bold at the bottom** - these are papers I particularly liked
- Status displayed as "read" or "will read"

Example paper entry:
```ts
{ title: "Paper Name", read: true, added: "2024-12-15", favorite: true }
```

### Color Theme
Defined in `src/app/globals.css`:
- `--background`: #FFFDD0 (cream)
- `--foreground`: #9966CC (purple)
- `--muted`: #B19CD9 (light purple)
- `--accent`: #8B4789 (dark purple)

### Navigation
Order: home, projects, gallery, thoughts, interests, contact

Routes use custom paths:
- `/prky` - projects
- `/savL` - gallery
- `/raja` - thoughts
- `/gman` - interests
- `/brok` - contact
