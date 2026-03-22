# Content Guide

Retroframe is meant to be edited through data files, not by hand-editing generated HTML.

## 1. Site-wide content

Edit `content/site.js` for:

- site title and browser metadata
- banner text
- profile box
- quick links and contact info
- logo strip
- homepage news ticker

## 2. Projects

Each file in `content/projects/` defines one project.

Important fields:

- `slug`: output folder under `projects/`
- `title`: project title
- `summary`: short homepage summary
- `thumbnail`: homepage image
- `featured`: whether it appears in the large homepage table
- `selected`: whether it appears in the lower project list
- `page`: full project page content

Use `content/projects/_template.js` when you add a new one.

## 3. Build output

Run:

```bash
npm run build
```

This regenerates:

- `index.html`
- `projects/<slug>/index.html`

## 4. Asset management

Put reusable images in `assets/images/`.

Recommended structure:

- `assets/images/profile/`
- `assets/images/logos/`
- `assets/images/projects/`

The current demo still uses a mostly flat image structure so the extracted visuals remain easy to compare with the original source.
