This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



bash
Then paste this prompt to Claude Code:
Add these changes to the project and push to https://github.com/olaiyabayo2026-ux/portfolio2.git:

1. In app/layout.tsx, add these OpenGraph metadata fields to the existing metadata export:
   - openGraph with title, description, url, siteName, images (using /profile.jpg), locale en_GB, type profile
   - twitter card with summary_large_image
   - Add JSON-LD structured data script tag for Person schema with name Olaiya Adebayo, jobTitle AI-Enabled Project Manager, url https://portfolio-ten-navy-32.vercel.app, sameAs LinkedIn

2. Add a LinkedIn badge component to the hero section just below the CTA buttons

3. Add a LinkedIn SVG icon to the navbar

4. Upgrade the contact section LinkedIn entry from plain text to a styled button with LinkedIn blue icon

Then git add, commit with message "feat: add LinkedIn integration, OpenGraph tags and structured data", and push to origin main.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
