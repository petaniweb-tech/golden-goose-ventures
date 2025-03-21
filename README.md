This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Internationalization (i18n)

This project uses Next.js internationalized routing with the App Router. All routes are prefixed with a locale code (`/en` or `/zh`).

### Language Switching

The application includes a language switcher component that allows users to switch between available languages while preserving the current route.

### Using Localized Links

When creating links throughout the application, use the `LocalizedLink` component instead of Next.js `Link` to ensure proper locale prefixing:

```tsx
// Import the component
import LocalizedLink from "@/components/Link/LocalizedLink";

// Use it in your JSX
<LocalizedLink href="/about">About Us</LocalizedLink>
```

This will automatically prepend the current locale to the path, resulting in `/en/about` or `/zh/about` depending on the active locale.

For external links or anchor links (starting with `http`, `https`, or `#`), the path will not be modified.

### Implementation Notes

- The routes structure follows Next.js App Router conventions with a `[locale]` dynamic segment at the root.
- All link paths should be relative to the locale, not including the locale prefix.
- The language switcher preserves the current path when switching languages.
