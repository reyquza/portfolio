# Ray — Portfolio

A lightweight, responsive portfolio built with plain HTML, CSS, and JavaScript. It has no framework, build step, or backend and can be hosted directly on GitHub Pages.

## Update the portfolio

Most public content is stored in `js/content.js`:

- `experience` — internships and research roles
- `projects` — project descriptions, media, technologies, and links
- `education` — degree and courses
- `recognition` — scholarships and selections
- `skills` — grouped technical skills

GitHub and LinkedIn URLs are stored in `profileLinks`. Paste the full LinkedIn profile URL into the empty `linkedin` value to show LinkedIn links in the header and hero.

Edit this file for routine updates. `index.html` contains the page structure, `css/style.css` contains presentation, and `js/main.js` renders the content data. Place new images or videos in `assets/` and reference their paths from `js/content.js`.

## Preview locally

Open `index.html` in a browser, or run a local static server from this directory.

## Publish with GitHub Pages

1. Push this directory to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/(root)`, then save.

GitHub will show the public URL after deployment finishes.
