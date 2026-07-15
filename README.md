# Animal Island Resume

Personal resume site styled with [animal-island-ui](https://github.com/guokaigdg/animal-island-ui) (CC BY-NC 4.0 — non-commercial use only).

## Dev

```bash
cd ~/animal-island-resume
npm install
npm run dev
```

## Edit content

Update `src/data/resume.ts` (name, jobs, skills, projects, education).

Replace avatar: drop your photo at `public/avatar.jpg` (square works best).

## Deploy on GitHub Pages

Yes — this repo is set up for GitHub Pages via Actions (`.github/workflows/deploy-pages.yml`).

1. Push to GitHub (`animal-island-resume` on `main`).
2. Repo → **Settings → Pages** → Source: **GitHub Actions**.
3. After the workflow runs, site URL:
   `https://<your-username>.github.io/animal-island-resume/`

### Private vs public

| Repo visibility | GitHub Pages (free account) |
| --- | --- |
| **Public** | Works |
| **Private** | Needs GitHub Pro / Team (or make the site repo public) |

Local Pages build check:

```bash
npm run build:pages
npx serve dist
```

## License note

`animal-island-ui` is **CC BY-NC 4.0**. This site is for personal / non-commercial display only. Do not use commercially.
