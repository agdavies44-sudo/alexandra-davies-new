# Alexandra Davies — Portfolio

Cinematic, gallery-style portfolio for Alexandra Davies (senior video producer & content leader).

**Site:** [alexandradavies.com](https://alexandradavies.com) (DNS / Vercel to be pointed later)

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS

## Run locally

```bash
cd alexandra-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy & domain

1. Push this repo and import the project in [Vercel](https://vercel.com).
2. Point `alexandradavies.com` DNS (GoDaddy or elsewhere) to Vercel:
   - Add the domain in the Vercel project settings
   - Create the A / CNAME records Vercel provides
3. SSL is handled automatically once DNS propagates.

## Routes

| Path       | Description                          |
|------------|--------------------------------------|
| `/`        | Full-viewport hero + selected work   |
| `/work`    | Archive with category filters        |
| `/about`   | Editorial bio + skills               |
| `/contact` | Email & phone                        |

## Notes

- YouTube pieces use native iframes.
- Instagram items link out via card UI (embeds are unreliable).
- Workplace context: [Core Agency](https://www.coreagency.uk).
