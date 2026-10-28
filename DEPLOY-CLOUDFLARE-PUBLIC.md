# Cloudflare Pages deployment

This repository contains the public English documentation site for `en.autobigdata.com`.

In Cloudflare Pages, connect the GitHub repository and use:

- Production branch: `main`
- Build command: `corepack enable && corepack pnpm install --frozen-lockfile && corepack pnpm build:en`
- Build output directory: `docs-en/.vitepress/dist`
- Node.js: `22`
- pnpm: `11.25.0`

After the first successful deployment, add `en.autobigdata.com` under **Custom domains**. If DNS remains with Alibaba Cloud DNS, create the CNAME record shown by Cloudflare Pages for host `en`.

Do not store Cloudflare API tokens, DNS credentials, certificates, or private infrastructure settings in this repository. The Chinese site is deployed separately from the internal Codeup repository.
