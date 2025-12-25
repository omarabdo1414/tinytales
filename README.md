# Project Documentation

**Overview:**
- This is a Next.js 16 application (React 19) using Tailwind CSS for styling. The app includes a homepage and a category browsing page with a small client-side product grid.

**Features:**
- Hero landing on the home page with featured categories and CTAs.
- Category page with search and category filters, and product cards using images from `public/Images`.
- Uses `next/image` for optimized images and `next/link` for navigation.

**Prerequisites:**
- Node.js (recommend v18+). Ensure `npm` is available.

**Install dependencies:**
```bash
npm install
```

**Run locally (development):**
```bash
npm run dev
```
This starts Next.js in development mode. Open http://localhost:3000/ by default.

**Build for production:**
```bash
npm run build
npm run start
```

**Available scripts:**
- `dev` — Run the development server (`next dev`).
- `build` — Build the production app (`next build`).
- `start` — Start the production server (`next start`).
- `lint` — Run ESLint (`eslint`).

**How to use the project (developer guide):**
- The home page provides navigation to the categories page. Open the app in the browser and use the "Shop Categories" button to go to the category list.
- On the category page you can:
  - Use the search input to filter products by title.
  - Use the category select to filter by category.
  - Click a product's "View" link to go to the details route (example route already linked at `/our-category/product-details`).

**Images:**
- Store images in the `public/Images` folder. The app uses `next/image` with paths like `/Images/product_1.svg` or `/Images/TrendLine.png`.
- When adding images, prefer SVG/PNG optimized for the web. `next/image` will serve optimized images automatically.

**Adding products / data:**
- The current category page uses a small in-file sample array. To replace with real data:
  1. Implement a data fetching function in `src/lib/api.ts` or a server route.
  2. Replace the sample array with data fetched from your API using `fetch`/`axios` or Next.js data fetching.
  3. For server-side rendering or static generation, move the fetching into server (route handler or `getServerSideProps` / `getStaticProps` equivalents if using pages router).

**Routing & Links:**
- Use `next/link` for client-side navigation and `next/image` for images. Example files updated:
  - `src/app/page.tsx` (home)
  - `src/app/our-category/page.tsx` (category page)

**Styling:**
- Tailwind CSS is used. Edit classes directly in JSX. For tokens or global styles, check `src/app/globals.css`.

**Environment variables:**
- This project currently does not require environment variables for the sample data. If you add API keys, create a `.env.local` at project root and reference them via `process.env.MY_KEY`. Restart the dev server after adding env vars.

**Testing / Linting:**
- ESLint is configured; run `npm run lint` to lint the codebase. Add a test framework (Jest or Vitest) if you need unit tests.

**Deployment notes:**
- Build with `npm run build` and serve with `npm run start` or deploy to Vercel for automatic Next.js support.

**Common tasks:**
- Add a new page: create a new file under `src/app` and export a React component.
- Add an image: place it in `public/Images` and reference with `next/image` using an absolute path starting with `/Images/`.
- Add a new component: create a new component file under `src/components` and import it where needed.

**Next steps (suggested improvements):**
- Replace the sample product array with real API data and add dynamic product pages.
- Add unit/integration tests and CI checks.
- Add accessibility audits and image placeholders for better UX.

If you want, I can:
- Wire the product cards to dynamic product pages and implement the product details page.
- Add API-fetching for category data.
- Add README badges or a short contribution guide.

---
Updated documentation created by the project assistant.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
