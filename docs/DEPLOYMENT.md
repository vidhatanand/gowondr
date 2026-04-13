# goWondr — Deployment Guide

## Branch Strategy

| Branch | Purpose | Auto-deploys to |
|--------|---------|-----------------|
| `dev` | Active development | Nothing (local only) |
| `stage` | Staging preview | `gowondr-stage.workers.dev` |
| `main` | Production | `gowondr.com` |

### Workflow

```
dev → PR to stage → auto-deploy staging
stage → PR to main → auto-deploy production
```

- Work on `dev` branch locally
- When ready, create a PR from `dev` → `stage`
- Merging to `stage` triggers auto-deploy to staging
- After verifying staging, create a PR from `stage` → `main`
- Merging to `main` triggers auto-deploy to production

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **CSS:** Tailwind CSS v4
- **Hosting:** Cloudflare Workers via `@opennextjs/cloudflare`
- **CI/CD:** GitHub Actions

---

## Local Development

```bash
cd website
npm install
npm run dev
```

Dev server runs at `http://localhost:3000`.

---

## Build

```bash
npm run build          # Next.js build
npm run preview:cf     # Cloudflare preview (local)
```

---

## Connecting Cloudflare (First-Time Setup)

### Step 1: Get your Cloudflare Account ID

1. Log in to https://dash.cloudflare.com
2. Click any domain or go to **Workers & Pages**
3. Your **Account ID** is in the right sidebar — copy it

### Step 2: Create an API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **Create Token**
3. Use the **"Edit Cloudflare Workers"** template
4. Permissions needed:
   - Account > Workers Scripts > Edit
   - Account > Workers Routes > Edit
   - Account > Account Settings > Read
5. Click **Continue to summary** → **Create Token**
6. Copy the token (shown only once)

### Step 3: Add Secrets to GitHub

```bash
gh secret set CLOUDFLARE_ACCOUNT_ID
# Paste your account ID when prompted

gh secret set CLOUDFLARE_API_TOKEN
# Paste your API token when prompted
```

### Step 4: Set Up Custom Domain (optional)

1. In Cloudflare dashboard → Workers & Pages → `gowondr` worker
2. Click **Settings** → **Triggers** → **Custom Domains**
3. Add `gowondr.com` (domain must be on Cloudflare DNS)
4. For staging: add `stage.gowondr.com` to the `gowondr-stage` worker

---

## Manual Deploy

```bash
# Deploy to production
npm run deploy

# Deploy to staging
npx opennextjs-cloudflare build && npx wrangler deploy --env staging
```

---

## CI/CD Workflows

Two GitHub Actions workflows in `.github/workflows/`:

### `deploy-prod.yml`
- **Trigger:** Push to `main`
- **Steps:** Checkout → Install → OpenNext build → Wrangler deploy
- **Target:** `gowondr` worker (production)

### `deploy-stage.yml`
- **Trigger:** Push to `stage`
- **Steps:** Checkout → Install → OpenNext build → Wrangler deploy --env staging
- **Target:** `gowondr-stage` worker (staging)

---

## Wrangler Configuration

`wrangler.jsonc` defines two environments:

- **Default (production):** Worker name `gowondr`
- **Staging:** Worker name `gowondr-stage` (via `--env staging`)

Both use `@opennextjs/cloudflare` with `nodejs_compat` flag.

---

## Troubleshooting

### Build fails locally
```bash
cd website
rm -rf .next .open-next node_modules
npm install
npm run build
```

### Wrangler auth issues
```bash
npx wrangler login    # Opens browser for OAuth
npx wrangler whoami   # Verify account
```

### GitHub Actions failing
1. Check that `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets are set
2. Go to repo → Settings → Secrets and variables → Actions
3. Verify the token has Workers Scripts Edit permission
