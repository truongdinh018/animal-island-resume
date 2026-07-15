# Animal Island Resume

**Live site:** [https://truongdinh018.github.io/animal-island-resume/](https://truongdinh018.github.io/animal-island-resume/)

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

Site URL: https://truongdinh018.github.io/animal-island-resume/

Publish from the `gh-pages` branch (built locally):

```bash
npm run build:pages
npx gh-pages -d dist -b gh-pages
```

Repo Settings → Pages → Source: **Deploy from a branch** → `gh-pages` / `/ (root)`.

## License note

`animal-island-ui` is **CC BY-NC 4.0**. This site is for personal / non-commercial display only. Do not use commercially.
