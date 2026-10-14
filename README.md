# Minecraft Dungeons II Wiki

Unofficial, source-audited wiki for **Minecraft Dungeons II**.

- Domain: **https://minecraftdungeons2wiki.com**
- Stack: TanStack Start + React 19 + TypeScript + Tailwind CSS 4 + Cloudflare Workers
- Baseline: adapted from `CoderLim/wow-forever-wiki`
- Content rule: official/first-party and direct gameplay evidence first; community claims are labeled and never silently promoted to fact.

## Content model

The site is organized around durable game entities and distinct search intents:

- Guides: release, price, editions, gameplay, controls, crossplay, multiplayer
- World: The Sift, map, locations, dungeons, quests
- Gear: weapons, armor, talismans, artifacts, enchantments, smiths, currencies
- Enemies: mobs, Soul-Corrupted mobs, bosses
- Characters: Illager High Council, NPCs, story characters
- Cosmetics: capes, pets, skins, redemption
- Platforms: Steam/PC, Xbox, Switch, Switch 2
- Updates: patch notes, DLC, events and announcements

See `docs/site-architecture.md` and `docs/seo-page-plan.md`.

## Research already captured

The repository stores launch-week search demand, official source inventory, verified entity facts and timestamped gameplay evidence. Unknown fields are kept as **Unknown / not yet verified** instead of being filled from low-confidence sources.

## Disclaimer

This is an unofficial fan project and is not affiliated with Mojang Studios or Microsoft. Minecraft and related marks belong to their respective owners.

## Localization

The wiki supports English plus eight localized variants: Simplified Chinese, Traditional Chinese, Japanese, Korean, German, French, Spanish, and Brazilian Portuguese.

- The source of truth remains the English evidence-checked articles. Do not invent unconfirmed game information in translations.
- `scripts/generate-localizations.py` snapshots the English SSR article `<main>` for all pages in `SEO_PAGES`, translates text and SEO metadata with reproducible offline Argos models, preserves game proper nouns, and writes the complete `src/data/i18n-pages.json` manifest.
- Run the `Generate wiki translations` GitHub Actions workflow when verified English content changes. A partially generated manifest is **never** published.
- Run `node scripts/validate-localized-data.mjs` before merging. The validator checks all eight locales × all 55 registered article paths.
- Localized article URLs are `/{locale}/{english-article-slug}`, e.g. `/ja/bosses/twisted-warden`. The English URLs remain unchanged.
- Page metadata and `hreflang` are indexed only if the localized article exists; pages originally marked `noindex` remain `noindex`.
- Translations are machine-assisted and must be reviewed for game-specific terms and patch-sensitive facts after generation. Proper nouns are preserved where possible.

The generator requires network access to the published English pages and Argos model packages; it is an explicit build-time action, **not** a per-visitor machine translation service.
