# opencan-web
![OpenCan](./docs/readme-banner.png)

Marketing and documentation site for [OpenCan](https://github.com/sriramgopalan/opencan), built with Astro, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:4321.

## Build

```bash
npm run build
```

Static output is written to `dist/`. Preview locally with `npm run preview`.

## Deployment — Hostinger Shared Hosting

This site builds to static HTML/CSS — no Node.js required on the server.

### Steps

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Upload `dist/` contents via FTP**
   - Connect with your Hostinger FTP credentials (File Manager → FTP Accounts)
   - Upload the entire contents of `dist/` to `public_html/` (or a subdirectory if it's a subdomain)
   - Make sure `index.html` ends up at the root, e.g. `public_html/index.html`

3. **Set up a `.htaccess` file** for clean URLs (already included in `dist/`):

   ```apache
   Options -Indexes
   ErrorDocument 404 /404.html

   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ /$1.html [L]
   ```

4. **Point your domain** to Hostinger's nameservers (if not already done) and wait for DNS propagation.

### Automatic deploys (optional)

Set up a GitHub Action to build and FTP-deploy on push to `main`:

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_HOST }}
          username: ${{ secrets.FTP_USER }}
          password: ${{ secrets.FTP_PASS }}
          local-dir: ./dist/
          server-dir: /public_html/
```

Add `FTP_HOST`, `FTP_USER`, and `FTP_PASS` as repository secrets in GitHub → Settings → Secrets.

## Project structure

```
src/
  layouts/
    Layout.astro        # Shared nav + footer
    DocsLayout.astro    # Docs sidebar layout
  pages/
    index.astro         # Landing page
    docs/
      index.astro       # Docs index
      getting-started.astro
      self-hosting.astro
      environment-variables.astro
  styles/
    global.css          # Tailwind directives + prose styles
public/
  favicon.svg
```

## Placeholder content

The following need to be updated when ready:

- **Hero screenshot** — replace the gray placeholder in `src/pages/index.astro` with a real product screenshot
- **Demo URL** — `demo.opencan.dev` is hardcoded throughout; update if the domain changes
- **GitHub URL** — `github.com/sriramgopalan/opencan` — update if the repo moves

## License

MIT — see [LICENSE](LICENSE) file.
