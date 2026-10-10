# Manwa Beauty Salon & Academy

A Next.js website for Manwa Beauty Salon & Academy in Kamothe, Navi Mumbai. Includes salon services, bridal and academy information, About Us, photo and video galleries, branch locations, and WhatsApp booking and contact enquiries.

## Technology

- Next.js 14 with the App Router
- React 18
- Tailwind CSS and custom CSS
- npm with a committed `package-lock.json`

## Install and run

Install a supported Node.js LTS release compatible with the dependencies, with npm included. Run from the project folder:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. In Windows PowerShell, use `npm.cmd` instead of `npm` if execution policy blocks `npm.ps1`.

For production:

```sh
npm run build
npm start
```

Development output goes to `.next-dev/`; production output goes to `.next/`. Both are ignored by Git. There is currently no dedicated automated test script.

## Project structure

```text
app/          Pages, layout, styles, metadata, sitemap, and robots rules
components/   Shared UI, forms, service cards, galleries, and locations
lib/          Salon details, services, opening hours, and image mappings
public/       Website images, logos, and video assets
scripts/      Asset preparation utilities and image manifests
```

## Updating content

- Contact details, social profiles, opening hours, services, and reviews: `lib/data.js`.
- Branch addresses and map links: `lib/locations.js`.
- Main photography mappings: `lib/imagery.js`.
- Service photography mappings: `lib/service-images.js`.
- About Us content: `components/Sections.jsx`.
- Global styling: `app/globals.css`.

Contact and booking forms open WhatsApp with a prepared message. Visitors must send the message there; appointments are confirmed by the salon team. The project does not store bookings in a database.

## Salon locations

`components/SalonLocations.jsx` is shared by the homepage and Contact page. Maps use address-search embeds without an API key; search results are not verified salon pins. Set a branch's `mapsUrl` to its Google Maps place URL and `embedUrl` to the URL from **Share > Embed a map** to use a verified location.

The branch array also generates BeautySalon structured data in the root layout. Tailwind utilities use the `tw-` prefix with Preflight disabled to preserve the existing theme.

## Configuration and sensitive files

No environment variables or API keys are currently required to run this website. If integrations are added, keep real values in an ignored `.env.local` file and document variable names with placeholder values in `.env.example`.

Never commit passwords, API keys, credentials, or private keys. `.gitignore` excludes environment files, dependencies, build output, logs, deployment state, and `tmp/`, which contains local working files and browser profiles. Sanitized environment templates are allowed. Review staged changes before committing.

## Deployment

Use a hosting provider that supports Next.js. Install with `npm ci`, build with `npm run build`, and use `npm start` for a Node.js server deployment. Commit source files and the npm lockfile; the host should install dependencies and build the application.

Before publishing under a different domain, review the existing `https://www.manwasalon.in` references in `app/layout.js`, `app/robots.js`, `app/sitemap.js`, and `lib/locations.js`. Verify the domain, contact links, images, videos, and enquiry flows after deployment.
