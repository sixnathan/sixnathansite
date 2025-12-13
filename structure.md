# Codebase Structure Documentation

## System Instructions

**IMPORTANT**: This file documents the entire codebase structure. When the user provides ANY prompt that results in changes to the codebase:

1. **Update this document** to reflect the changes made
2. **Commit all changes to git** with a descriptive message
3. **Push to the remote repository**

This ensures the documentation stays current and all changes are versioned.

---

## User Preferences

**Recorded preferences for this project**:

1. **Code Snippet Display**: No horizontal scrollbar - increase container width instead of using `overflow-x-auto`
   - Main container width: `max-w-5xl` (changed from `max-w-2xl`)
   - Code blocks should display without horizontal scrolling
   - Remove all comments from Python code snippets for cleaner display

2. **Project Descriptions**:
   - Keep project card descriptions concise on listing pages
   - Full technical details should live on the individual project pages
   - Example: natmood shows "a binary valence mood classifier built 'mostly' from scratch" on `/prky`, with full details on `/prky/natmood`

3. **Navigation**:
   - No "back to projects" links on project pages
   - Back arrows on all module pages for easier navigation

4. **Git Workflow**:
   - Commit and push after every codebase change
   - Use descriptive commit messages

---

## Project Overview

**sixnathan** is a personal portfolio/blog website built with Next.js 16, showcasing machine learning projects, EEG signal processing work, blog posts, and contact information. The site is statically generated and deployed on Cloudflare Pages.

**Technology Stack**:
- Framework: Next.js 16.0.5 (App Router, Static Export)
- Language: TypeScript 5
- Styling: Tailwind CSS 4 + PostCSS
- Content: MDX with gray-matter for frontmatter
- Fonts: Geist (Sans + Mono) from Google Fonts
- Deployment: Cloudflare Pages (static HTML/CSS/JS)

---

## Directory Structure

```
/Users/natkarri/Desktop/sixnathan/
├── README.md                      # Next.js boilerplate documentation
├── GUIDE.md                       # User guide for content management
├── structure.md                   # THIS FILE - Complete codebase documentation
├── package.json                   # Dependencies and scripts
├── package-lock.json              # Locked dependency versions
├── tsconfig.json                  # TypeScript configuration
├── next.config.ts                 # Next.js config (static export)
├── next-env.d.ts                  # Next.js TypeScript declarations
├── postcss.config.mjs             # Tailwind CSS integration
├── eslint.config.mjs              # ESLint rules
├── wrangler.json                  # Cloudflare Pages deployment config
├── .gitignore                     # Git ignore patterns
│
├── /messyprojects/                # Python projects
│   ├── linear_regression.py      # Standalone Python ML example
│   └── /binaryclassifier/        # EEG emotion classification
│       ├── main.py               # Complete pipeline orchestrator
│       ├── project.md            # Detailed project specification
│       ├── project2.md           # Additional documentation
│       ├── record.md             # Project notes
│       ├── /data/
│       │   └── DREAMER.mat       # EEG dataset (not in git)
│       ├── /src/
│       │   ├── dataloader.py     # Dataset loading
│       │   ├── preprocessing.py  # Signal processing
│       │   ├── features.py       # Feature extraction
│       │   └── classifier.py     # Random Forest training
│       └── /venv/                # Python virtual environment
│
├── /src/                          # Source code
│   ├── /app/                      # Next.js App Router pages
│   │   ├── page.tsx              # Home page (/)
│   │   ├── layout.tsx            # Root layout with navigation
│   │   ├── globals.css           # Global styles + Tailwind config
│   │   │
│   │   ├── /prky/                 # Projects section
│   │   │   ├── page.tsx          # Projects listing
│   │   │   ├── /natmood/         # EEG emotion classification
│   │   │   │   ├── page.tsx      # natmood overview
│   │   │   │   ├── /preprocessing/
│   │   │   │   │   └── page.tsx  # Signal filtering & windowing
│   │   │   │   ├── /features/
│   │   │   │   │   └── page.tsx  # Feature extraction code
│   │   │   │   ├── /dataloader/
│   │   │   │   │   └── page.tsx  # DREAMER dataset loader
│   │   │   │   └── /classifier/
│   │   │   │       └── page.tsx  # Random Forest classifier
│   │   │   ├── /natlearn/        # ML library from scratch
│   │   │   │   ├── page.tsx      # natlearn overview
│   │   │   │   ├── /kclass/
│   │   │   │   │   └── page.tsx  # K-class classification
│   │   │   │   ├── /linreg/
│   │   │   │   │   └── page.tsx  # Linear regression
│   │   │   │   └── /logreg/
│   │   │   │       └── page.tsx  # Logistic regression
│   │   │   └── /oneshotlstm/     # LSTM from scratch
│   │   │       ├── page.tsx      # oneshotlstm overview
│   │   │       ├── /features/
│   │   │       │   └── page.tsx  # LSTM forward/backward pass
│   │   │       └── /main/
│   │   │           └── page.tsx  # Training loop
│   │   │
│   │   ├── /raja/                 # Blog/thoughts section
│   │   │   ├── page.tsx          # Blog post listing
│   │   │   └── /[slug]/
│   │   │       └── page.tsx      # Individual blog post
│   │   │
│   │   ├── /savL/                 # Gallery
│   │   │   └── page.tsx          # Image gallery (empty)
│   │   │
│   │   └── /tom&gaz/                 # Contact
│   │       └── page.tsx          # Contact information
│   │
│   ├── /components/
│   │   └── Navigation.tsx        # Client-side navigation
│   │
│   └── /lib/
│       └── posts.ts              # Content loading utilities
│
├── /content/                      # Blog content (MDX)
│   ├── /posts/
│   │   ├── hello-world.mdx       # Published blog post
│   │   └── centaurs.mdx.hidden   # Archived post
│   └── /reading/                 # Reading links (empty)
│
├── /public/                       # Static assets
│   ├── _headers                  # Cloudflare Pages security headers
│   ├── favicon.png               # Site favicon (2.3 MB)
│   ├── file.svg                  # Unused Next.js defaults
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   ├── /.well-known/
│   │   └── security.txt          # Security contact information
│   └── /images/
│       ├── background.png        # Background image (2.1 MB)
│       └── /gallery/             # Gallery images (empty)
│
├── /.git/                         # Git repository
├── /.next/                        # Next.js build cache
├── /out/                          # Static build output
└── /node_modules/                 # npm dependencies
```

---

## Core Application Files

### `/src/app/layout.tsx`
**Purpose**: Root layout wrapper for all pages

**Key Features**:
- Imports Geist font family from Google Fonts
- Metadata: title "sixnathan", description "cry your eyes out"
- Renders Navigation component in header
- Responsive container with max-w-2xl
- Favicon: `/favicon.png`

**Color Variables** (defined in globals.css):
```css
--background: #FFFDD0  /* Cream */
--foreground: #9966CC  /* Purple */
--muted: #B19CD9       /* Light purple */
--accent: #8B4789      /* Dark purple */
```

### `/src/app/page.tsx`
**Purpose**: Home page (/)

**Content**:
- Title: "sixnathan"
- Quote: "why not you"

### `/src/components/Navigation.tsx`
**Type**: Client component (`"use client"`)

**Navigation Links**:
- `/` - home
- `/prky` - projects
- `/savL` - gallery
- `/raja` - thoughts
- `/tom&gaz` - contact

**Features**:
- Active link highlighting using `usePathname()`
- Hover transitions
- Responsive layout

### `/src/lib/posts.ts`
**Purpose**: Content management utilities

**Exports**:
- `getAllPosts()` - Array of blog posts from `content/posts/*.mdx`
- `getPostBySlug(slug)` - Fetches individual post with content
- `getAllPostSlugs()` - For static generation
- `getAllReading()` - Reading links from `content/reading/*.mdx`
- `getAllBlogItems()` - Combined posts + reading, sorted by date

**Dependencies**: gray-matter for MDX frontmatter parsing

---

## Routing Structure

### Projects Section (`/prky`)

#### `/prky` - Projects Overview
**File**: `src/app/prky/page.tsx`

**Projects Listed**:
1. **oneshotlstm** - Called oneshot because i tried to make it in one night
2. **natmood** - A binary valence mood classifier built from scratch
3. **natlearn** - Machine learning library built from scratch

#### `/prky/natmood` - EEG Emotion Classification Project
**File**: `src/app/prky/natmood/page.tsx`

**Description**: A binary valence mood classifier built from scratch. DREAMER was a bad pick. Binary valence classifier using randomforest validated on dreamer and adaptable to muse 4. Primary neurological marker for positive/neutral/negative emotion. Extracts 9 features per channel while trained on four channels.

**Modules**:
1. **main** - Complete pipeline orchestrator tying all modules together
   - File: `src/app/prky/natmood/main/page.tsx`
   - Code: Full pipeline from data loading to model evaluation

2. **preprocessing** - Bandpass filtering and windowing for EEG signals
   - File: `src/app/prky/natmood/preprocessing/page.tsx`
   - Code: Channel selection, butterworth bandpass filter, segmentation

3. **features** - Band powers, Hjorth parameters, and Shannon entropy extraction
   - File: `src/app/prky/natmood/features/page.tsx`
   - Code: PSD computation, 5 frequency bands, Hjorth params, entropy

4. **dataloader** - DREAMER dataset loader for EEG valence classification
   - File: `src/app/prky/natmood/dataloader/page.tsx`
   - Code: MATLAB .mat file loading, 23 participants, 18 videos each

5. **classifier** - Random Forest training and feature selection
   - File: `src/app/prky/natmood/classifier/page.tsx`
   - Code: Label conversion, correlation-based selection, RF training

**All modules dated**: 2025-12-08

#### `/prky/natlearn` - ML Library From Scratch
**File**: `src/app/prky/natlearn/page.tsx`

**Algorithms**:
1. **kclass** (2025-12-13) - "decisions decisions hmmmmm"
   - File: `src/app/prky/natlearn/kclass/page.tsx`
   - Code: KClassClassification with softmax, cross-entropy loss, gradient descent

2. **logreg** (2025-12-04) - "forgot to clip sigmoid but oh well"
   - File: `src/app/prky/natlearn/logreg/page.tsx`
   - Code: LogisticRegression class with sigmoid, cost, gradient descent

3. **linreg** (2025-12-02) - "its just a guessing game"
   - File: `src/app/prky/natlearn/linreg/page.tsx`
   - Code: LinearRegression class with hypothesis, cost, gradient descent

#### `/prky/oneshotlstm` - LSTM From Scratch
**File**: `src/app/prky/oneshotlstm/page.tsx`

**Description**: Called oneshot because i tried to make it in one night. I tried making this in one night but fell asleep. Pretty cool implementation of LSTM without pytorch.

**Modules**:
1. **features** (2025-12-10) - LSTM implementation with forward and backward pass
   - File: `src/app/prky/oneshotlstm/features/page.tsx`
   - Code: Full LSTM cell implementation with gates, backpropagation through time

2. **main** (2025-12-10) - Training loop
   - File: `src/app/prky/oneshotlstm/main/page.tsx`
   - Code: Training setup with random data (10 sequences, 425 input size, 64 hidden units)

### Blog Section (`/raja`)

#### `/raja` - Blog Listing
**File**: `src/app/raja/page.tsx`

**Features**:
- Displays all blog items (posts + reading links)
- Posts: Internal links to `/raja/[slug]`
- Reading links: External with ↗ icon
- Sorted by date descending

#### `/raja/[slug]` - Individual Blog Post
**File**: `src/app/raja/[slug]/page.tsx`

**Features**:
- Dynamic routing with `generateStaticParams()`
- Custom markdown renderer (manual parsing):
  - `##` and `###` headings
  - Bullet points (`-`)
  - Code blocks (triple backticks)
  - Bold text (`**text**`)
  - Inline code (single backticks)
- Back link to `/raja`
- Shows title and date

### Other Sections

#### `/savL` - Gallery
**File**: `src/app/savL/page.tsx`
**Status**: Empty, grid layout ready for images

#### `/tom&gaz` - Contact
**File**: `src/app/tom&gaz/page.tsx`
**Content**:
- Email: dev@sixnathan.com
- GitHub: https://github.com/sixnathan
- Twitter: https://twitter.com/sixnathen (@sixnathen)

---

## Content Management

### Blog Posts (`/content/posts/*.mdx`)

**Format**: MDX with YAML frontmatter

**Required Fields**:
- `title` - Post title
- `date` - YYYY-MM-DD format for sorting

**Optional Fields**:
- `description` - Listing description

**Example**:
```mdx
---
title: "hey world"
date: "2025-11-28"
---

life is all about playing around and having fun.

best,

nathan
```

**Hidden Posts**: Files ending in `.hidden` are ignored

**Current Posts**:
- `hello-world.mdx` (published)
- `centaurs.mdx.hidden` (archived)

### Reading Links (`/content/reading/*.mdx`)

**Status**: Directory exists but empty

**Expected Format**:
```mdx
---
title: "Article Title"
link: "https://example.com"
date: "2025-11-28"
comment: "Why this is interesting"
---
```

---

## Python Projects

### `/messyprojects/binaryclassifier/` - EEG Emotion Classification Pipeline

**Purpose**: Complete machine learning pipeline for binary/ternary valence classification using EEG signals from the DREAMER dataset.

#### `main.py` - Pipeline Orchestrator
**Function**: `runpipeline(datapath)`

**Pipeline Steps**:
1. Load DREAMER dataset (414 trials: 23 participants × 18 videos)
2. Select 4 Muse-equivalent channels: [1, 4, 9, 12]
3. Apply bandpass filter (0.5-50 Hz, 128 Hz sampling rate)
4. Extract features (9 per channel × 4 channels = 36 features)
5. Convert valence labels to 3 classes (negative=0, neutral=1, positive=2)
6. Select top 20 features by correlation
7. Train Random Forest classifier (100 trees, 80/20 split)
8. Report accuracy, F1 score, confusion matrix

**Output**: Dictionary with accuracy, F1, confusion matrix, trained model

#### `src/dataloader.py`
**Function**: `loaddreamer(filepath)`

**Returns**:
- `eegdata` - Object array of EEG trials (n_channels, n_samples)
- `valencelabels` - Valence ratings (1-5 scale)
- `arousallabels` - Arousal ratings (1-5 scale)

**Data Structure**:
- 23 participants
- 18 video stimuli per participant
- 14 EEG channels per trial
- 128 Hz sampling rate
- Variable trial lengths

#### `src/preprocessing.py`
**Functions**:
- `selectchannels(data, channels)` - Extract specific EEG channels
- `bandpassfilter(data, lowcut, highcut, fs, order=4)` - Butterworth bandpass filter
- `segmentintowindows(data, windowsize, overlap=0)` - Fixed-size windowing

**Filter Specs**:
- Type: Butterworth 4th order
- Passband: 0.5-50 Hz
- Removes DC drift and high-frequency noise

#### `src/features.py`
**Feature Extraction** (9 features per channel):

**Band Powers** (5 features):
- Delta: 0.5-4 Hz
- Theta: 4-8 Hz
- Alpha: 8-13 Hz
- Beta: 13-30 Hz
- Gamma: 30-50 Hz

**Hjorth Parameters** (3 features):
- Activity: Signal variance
- Mobility: Mean frequency
- Complexity: Similarity to sine wave

**Shannon Entropy** (1 feature):
- Signal complexity measure

**Functions**:
- `computepsd(data, fs)` - Welch's method for PSD
- `computebandpower(data, fs, band)` - Integrate PSD over band
- `extractbandpowers(data, fs)` - All 5 bands
- `hjorthparams(data)` - Activity, mobility, complexity
- `shannonentropy(data, nbins=50)` - Histogram-based entropy
- `extractfeaturessinglewindow(window, fs)` - Single window, single channel
- `extractfeaturestrial(trialdata, fs, windowsize)` - Average across windows
- `buildfeaturematrix(eegdata, fs, windowsize)` - All trials

#### `src/classifier.py`
**Functions**:
- `converttolabels(labels)` - Map 1-5 scale to 3 classes (0=negative, 1=neutral, 2=positive)
- `selectfeatures(X, y, k)` - Correlation-based feature selection
- `traineval(X, y, nestimators=100, testsize=0.2, randomstate=42)` - Train Random Forest

**Classifier**:
- Algorithm: Random Forest (sklearn)
- Trees: 100
- Split: 80% train, 20% test
- Metrics: Accuracy, weighted F1 score, confusion matrix

**Dependencies**:
- numpy
- scipy (signal processing, integration, MATLAB file loading)
- scikit-learn (Random Forest, metrics, train/test split)

### `/messyprojects/linear_regression.py` - Educational Example

**Class**: `LinearRegression`

**Methods**:
- `hypo(X)` - Hypothesis: X @ theta
- `cost(X, y, h)` - MSE loss
- `graddec(X, y, rate, iterations)` - Gradient descent with loss printing

---

## Configuration Files

### `package.json`
**Scripts**:
- `dev` - Start development server
- `build` - Build static site to `/out`
- `start` - Start production server
- `lint` - Run ESLint

**Key Dependencies**:
- next: 16.0.5
- react: 19.0.0
- react-dom: 19.0.0
- tailwindcss: 4.0.15
- gray-matter: 4.0.3 (MDX frontmatter parsing)

### `tsconfig.json`
**Configuration**:
- Strict mode enabled
- Target: ES2017
- Path alias: `@/*` → `./src/*`
- Module resolution: bundler

### `next.config.ts`
**Settings**:
- `output: "export"` - Static site generation
- `images.unoptimized: true` - Disable Next.js image optimization for static export

### `postcss.config.mjs`
**Plugins**:
- `@tailwindcss/postcss` - Tailwind CSS integration

### `eslint.config.mjs`
**Extends**:
- `next/core-web-vitals`
- `next/typescript`

### `wrangler.json`
**Cloudflare Pages**:
- Serves static files from `/out`
- Zero-cost hosting

---

## Styling System

### Color Scheme
- Background: `#FFFDD0` (cream)
- Foreground: `#9966CC` (purple)
- Muted: `#B19CD9` (light purple)
- Accent: `#8B4789` (dark purple)

### Typography
- Body: Geist Sans
- Code: Geist Mono
- Sizes: Responsive with Tailwind utilities

### Layout
- Max width: `max-w-5xl` (64rem) - increased for code snippet readability
- Padding: `p-4` to `p-8`
- Spacing: `space-y-6` to `space-y-8`

### Components
- Borders: `border-zinc-400` with `hover:border-zinc-300`
- Cards: Padding + border + rounded corners + hover transitions
- Code blocks: `<pre><code>` with border and overflow-x-auto

---

## Build & Deployment

### Development
```bash
npm run dev
```
Starts dev server on http://localhost:3000

### Production Build
```bash
npm run build
```
Generates static files in `/out/` directory

### Deployment
- Platform: Cloudflare Pages
- Trigger: Git push to main branch
- Build command: `npm run build`
- Output directory: `/out`

### Static Features
- No server-side rendering
- No API routes
- All content pre-rendered at build time
- Instant page loads

---

## Git Workflow

**Repository**: `/Users/natkarri/Desktop/sixnathan/.git`

**Branch**: `main`

**Ignored Files** (`.gitignore`):
- `/node_modules`
- `/.next`
- `/out`
- `.DS_Store`
- `*.log`
- `/messyprojects/binaryclassifier/venv`
- `/messyprojects/binaryclassifier/data/DREAMER.mat` (large file)

**Commit Convention**:
After any codebase change, commit with descriptive message and push to remote.

---

## Important Notes

1. **Content Policy**: All public-facing text must be human-written (per `GUIDE.md`)
2. **Privacy**: Strip EXIF metadata from images before publishing
3. **MDX Parsing**: Custom implementation, not full MDX/JSX support
4. **Static Only**: No database, no server-side state
5. **Slug URLs**: Derived from filename (e.g., `hello-world.mdx` → `/raja/hello-world`)
6. **Hidden Content**: Files ending in `.hidden` are excluded from build

---

## Future Additions

**When adding new content/features**:

1. **New Project**: Add to `src/app/prky/[project-name]/page.tsx` and list in `src/app/prky/page.tsx`
2. **New Algorithm**: Add to `src/app/prky/natlearn/[algorithm]/page.tsx` and list in `src/app/prky/natlearn/page.tsx`
3. **New Blog Post**: Create `content/posts/[slug].mdx` with frontmatter
4. **New Reading Link**: Create `content/reading/[slug].mdx` with link field
5. **Gallery Images**: Add to `public/images/gallery/` and update `src/app/savL/page.tsx`

**Always**:
- Update this `structure.md` file
- Commit changes to git
- Push to remote repository

---

## URL Map

| URL | File | Purpose |
|-----|------|---------|
| `/` | `src/app/page.tsx` | Home |
| `/prky` | `src/app/prky/page.tsx` | Projects listing |
| `/prky/natmood` | `src/app/prky/natmood/page.tsx` | EEG project hub |
| `/prky/natmood/main` | `src/app/prky/natmood/main/page.tsx` | Pipeline orchestrator |
| `/prky/natmood/preprocessing` | `src/app/prky/natmood/preprocessing/page.tsx` | Preprocessing code |
| `/prky/natmood/features` | `src/app/prky/natmood/features/page.tsx` | Feature extraction |
| `/prky/natmood/dataloader` | `src/app/prky/natmood/dataloader/page.tsx` | Dataset loader |
| `/prky/natmood/classifier` | `src/app/prky/natmood/classifier/page.tsx` | Classifier |
| `/prky/natlearn` | `src/app/prky/natlearn/page.tsx` | ML library hub |
| `/prky/natlearn/kclass` | `src/app/prky/natlearn/kclass/page.tsx` | K-class classification |
| `/prky/natlearn/linreg` | `src/app/prky/natlearn/linreg/page.tsx` | Linear regression |
| `/prky/natlearn/logreg` | `src/app/prky/natlearn/logreg/page.tsx` | Logistic regression |
| `/prky/oneshotlstm` | `src/app/prky/oneshotlstm/page.tsx` | LSTM from scratch hub |
| `/prky/oneshotlstm/features` | `src/app/prky/oneshotlstm/features/page.tsx` | LSTM implementation |
| `/prky/oneshotlstm/main` | `src/app/prky/oneshotlstm/main/page.tsx` | Training loop |
| `/raja` | `src/app/raja/page.tsx` | Blog listing |
| `/raja/[slug]` | `src/app/raja/[slug]/page.tsx` | Individual blog post |
| `/savL` | `src/app/savL/page.tsx` | Gallery |
| `/tom&gaz` | `src/app/tom&gaz/page.tsx` | Contact |

---

*Last updated: 2025-12-08*
*Total files documented: 50+*
*Lines of documentation: 700+*
