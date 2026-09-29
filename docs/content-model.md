# Content & Data Model

The wiki should be data-first rather than a collection of unrelated SEO articles.

## Core collections

```text
data/
  game/
  platforms/
  locations/
  dungeons/
  quests/
  weapons/
  armor/
  talismans/
  artifacts/
  enchantments/
  currencies/
  mobs/
  bosses/
  characters/
  capes/
  pets/
  skins/
  achievements/
  updates/
  sources/
```

## Shared entity fields

```ts
type WikiEntity = {
  id: string
  slug: string
  name: string
  aliases?: string[]
  summary: string
  status: 'published' | 'partial' | 'draft'
  lastVerified: string
  evidence: EvidenceRef[]
  media?: MediaRef[]
  related?: EntityRef[]
}
```

## Media

```ts
type MediaRef = {
  kind: 'icon' | 'portrait' | 'screenshot' | 'video'
  src: string
  alt: string
  sourceUrl?: string
  timestamp?: string
  caption?: string
}
```

## SEO metadata

Each route/entity needs explicit SEO rather than generating titles from slugs:

```ts
type Seo = {
  primaryKeyword: string
  secondaryKeywords: string[]
  title: string
  description: string
  h1: string
  canonicalPath: string
  robots?: 'index,follow' | 'noindex,follow'
}
```

## Verification UI

Expose a small verification badge on pages:

- Official confirmed
- Gameplay observed
- Community reported
- Verification pending

A field may have a stronger/weaker level than the page itself.

## Structured data

Use only schema types that match visible content:
- WebSite + SearchAction on home
- BreadcrumbList
- Article where page is editorial/guide-like
- VideoObject only when a video is actually embedded/described
- FAQPage only when the FAQ is visible on page

Do not manufacture Product/Review/AggregateRating structured data from external store/review data.
