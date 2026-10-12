# Portfolio

Personal portfolio site, built with Next.js and exported as a static site for
GitHub Pages.

## Run it locally

Requires [Node.js](https://nodejs.org/) 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

## Add your content

Everything marked `TODO` is placeholder content.

| What                              | Where                                        |
| --------------------------------- | -------------------------------------------- |
| Name, title, tagline, About, links | `config/site.ts`                             |
| Projects                          | `config/projects.ts`                         |
| Experience                        | `config/experience.ts`                       |
| Honors and education stats        | `config/honors.ts`                           |
| Skills                            | `config/skills.ts`                           |
| Contributions                     | `config/contributions.ts`                    |
| Community                         | `config/community.ts`                        |
| Blog posts                        | `content/blogs/*.md`                         |
| Navigation links                  | `config/routes.ts`                           |
| Page titles and descriptions      | `config/pages.ts`                            |
| Theme colours                     | `app/globals.css`                            |

Files to replace:

- `public/profile-img.jpg` — your photo (keep the file name)
- `public/og-image.png` — link preview image, 1200×630
- `public/icon-512.png`, `app/icon.png`, `app/apple-icon.png` — site icons
- `public/projects/<project-id>/` — project images
- `public/resume.pdf` — add this file and the Resume button opens it

To remove a section, delete its entry in `config/routes.ts`, its block in
`app/(root)/page.tsx`, and its folder under `app/(root)/`.

### Contact form

Until `contactFormEndpoint` is set in `config/site.ts`, submitting the form
opens the visitor's email app with the message filled in. To receive messages
directly, create a form at [Formspree](https://formspree.io/) and paste its
endpoint there.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
   Name it `<username>.github.io` to serve the site at
   `https://<username>.github.io/`; any other name serves it at
   `https://<username>.github.io/<repo>/`.
2. In the repository, open **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the
   site and publishes it. The base path is detected automatically.

## Credits

Based on [MINBBBB1201/my-portfolio](https://github.com/MINBBBB1201/my-portfolio),
which started from
[namanbarkiya/minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio).
MIT licensed — see [LICENSE](LICENSE).
