# Dior Maison — Furniture, Reimagined

A single-page concept site imagining the house of **Dior** as a **furniture atelier**. Built for a front-end development internship assignment: take a well-known brand and reimagine it as something completely opposite to what it actually is.

**Concept:** Dior already owns a piece of furniture-adjacent DNA — the cannage (woven cane) pattern from the 1947 Medallion Chair. The site takes that thread and imagines Dior's couture ateliers turning their hand-finishing discipline to chairs, settees, consoles, and cabinets instead of gowns.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4
- Hand-drawn SVG illustrations (no stock photography)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/
    layout.tsx           # root layout, fonts, metadata
    page.tsx              # the single landing page
    globals.css            # design tokens, cannage texture, utilities
  components/
    Nav.tsx                # sticky nav with mobile menu
    AppointmentForm.tsx     # client-side form (no backend — assignment scope)
    Illustrations.tsx        # original line-art furniture pieces
    Cannage.tsx                # signature cannage-weave motifs
```

## Notes

This is a fan-made concept/study project built for an assignment brief and is not affiliated with, endorsed by, or produced by Christian Dior SE.
