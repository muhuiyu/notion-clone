# Notion Clone app

This app is a Next.js practice project which I followed the [tutorial from Antonio](https://youtu.be/0OaDyjB9Ib8?si=aFsrENlFhKO-7sj7).

## Getting Started

Create a `.env.local` file and add

```
CONVEX_DEPLOYMENT=<YOUR_CONVEX_DEPLOYMENT_KEY>

NEXT_PUBLIC_CONVEX_URL=<YOUR_NEXT_PUBLIC_CONVEX_URL>

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<YOUR_NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<YOUR_CLERK_SECRET_KEY>

EDGE_STORE_ACCESS_KEY=<YOUR_EDGE_STORE_ACCESS_KEY>
EDGE_STORE_SECRET_KEY=<YOUR_EDGE_STORE_SECRET_KEY>
```

Then run the development servers in separate terminal windows:

```bash
bun install
bun dev
```

and

```bash
bun convex dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
