# Mature Wiki Roadmap

Domain: `minecraftdungeons2wiki.com`  
Planning date: 2026-10-05  
Status: proposed implementation plan

This roadmap describes how to evolve the current launch-oriented site into a mature, database-first wiki without breaking existing SEO value or creating large numbers of thin pages.

It builds on:

- [Site Architecture](./site-architecture.md)
- [Content & Data Model](./content-model.md)
- [Source Policy](./source-policy.md)

The existing taxonomy remains useful. This document focuses on **navigation priority, page types, implementation order, and migration rules**.

---

## 1. Goal

Move the site from:

> launch information + search-intent guides + a small number of wiki pages

toward:

> a structured, evidence-first Minecraft Dungeons 2 knowledge base organized around hubs, categories, entities, guides, and update history.

The mature wiki should make it easy to answer:

- What is this entity?
- Where is it found?
- What does it drop or interact with?
- What gear, enchantments, missions, enemies, or builds relate to it?
- What changed in a patch or official update?
- What is verified, and from which source?

The goal is **not** to maximize page count.

---

## 2. Non-negotiable migration rules

1. **Keep established URLs whenever possible.**
   - Do not add a `/wiki/` prefix.
   - Do not move existing canonical pages only to make the URL hierarchy look cleaner.

2. **Do not manufacture empty entity pages.**
   - No mass generation of “Coming soon”, “TBD”, or mostly-unknown pages.
   - Create an entity page only when there is enough verified information to make it useful.

3. **Do not update verification dates just because the site was deployed.**
   - `lastVerified` means the facts were re-checked.
   - Keep `lastUpdated` separate when useful.

4. **Preserve current SEO assets.**
   - Existing launch-intent pages such as release date, price, editions, pre-order, and platforms remain available.
   - They become secondary to the wiki/database experience rather than being deleted.

5. **Official and first-party evidence remains the default source of truth.**
   - Follow `docs/source-policy.md`.
   - Unknown information remains unknown rather than inferred.

---

## 3. Target top-level information architecture

Primary wiki domains:

```text
World
Gear
Enemies
Builds
Gameplay
Guides
Cosmetics
Updates
```

Secondary / utility domains:

```text
Platforms
Game Info
Characters
```

Recommended desktop navigation:

```text
World | Gear | Enemies | Builds | Gameplay | Guides | More
```

Recommended `More` contents:

```text
Cosmetics
Platforms
Updates
Characters
Game Info
```

This keeps the main navigation focused on recurring gameplay/wiki tasks while retaining the broader taxonomy defined in `site-architecture.md`.

If Characters grows into a substantial standalone database later, it can return to first-level navigation without changing its URLs.

---

## 4. World

World should own map, region, mission, dungeon, location, and exploration knowledge.

Recommended structure:

```text
/world
├── Regions
├── Locations
├── Missions
├── Dungeons
├── The Sift
└── Secrets
```

Canonical URL families can remain flat:

```text
/world
/locations
/locations/[slug]
/missions
/missions/[slug]
/dungeons
/dungeons/[slug]
/the-sift
/secrets
```

Do not move `/the-sift` merely to create `/world/the-sift`.

Breadcrumb example:

```text
Home > World > The Sift
Home > World > Missions > [Mission]
Home > World > Locations > [Location]
```

---

## 5. Gear

Gear should become one of the strongest database areas.

Recommended structure:

```text
/gear
├── Weapons
├── Armor
├── Artifacts
├── Talismans
└── Enchantments
```

Canonical category routes:

```text
/weapons
/armor
/artifacts
/talismans
/enchantments
```

Entity routes:

```text
/weapons/[slug]
/armor/[slug]
/artifacts/[slug]
/talismans/[slug]
/enchantments/[slug]
```

### Weapon entity model

Recommended visible sections:

```text
Overview
Stats / verified properties
Effects
How to obtain
Enchantments
Build synergies
Tips
Related gear
Sources
Patch history
```

Recommended data fields:

```text
name
type
rarity
verified stats
effects
howToObtain
dropSources
compatibleEnchantments
relatedBuilds
media
sources
lastVerified
```

Do not expose empty sections when a field has not been verified.

---

## 6. Enemies

Enemies should own both normal mobs and bosses.

```text
/enemies
├── Mobs
└── Bosses
```

Canonical routes:

```text
/enemies
/mobs
/mobs/[slug]
/bosses
/bosses/[slug]
```

Existing `/bosses` and current boss entity URLs remain unchanged.

### Boss entity model

Recommended visible sections:

```text
Overview
Where to find
Encounter context
Attacks
Fight mechanics / phases
Strategy
Drops
Related missions
Related builds
Sources
Patch history
```

Recommended fields:

```text
name
enemyType
locations
missions
attacks
phases
mechanics
weaknesses
drops
repeatable
media
sources
lastVerified
```

Only show numerical values such as health when they are actually verified.

---

## 7. Builds

Keep:

```text
/builds
/tier-list
```

Builds should become an entity-driven layer connecting Gear, Enemies, and Gameplay.

Future entity route:

```text
/builds/[slug]
```

Recommended build model:

```text
name
playstyle
weapon
armor
artifacts
talismans
enchantments
strengths
weaknesses
recommendedContent
verification notes
lastVerified
```

Recommended page sections:

```text
Overview
Gear setup
Enchantments
How to play
Strengths
Weaknesses
Alternatives
Boss performance
Co-op performance
Related gear
Sources
```

Avoid relying only on generic “Top 10” or “Best Builds” articles. High-quality build entities should be reusable from gear and boss pages.

---

## 8. Gameplay

Gameplay should collect systems and mechanics rather than entities.

Recommended hub:

```text
/gameplay
├── Combat
├── Progression
├── Currency
├── Merchants
├── Difficulty
├── Co-op
└── Endgame
```

Examples:

```text
/gameplay/combat
/gameplay/progression
/gameplay/emeralds
/gameplay/echo-shards
/gameplay/merchants
/crossplay
```

Existing routes such as `/crossplay` should remain canonical and can be linked from multiple hubs.

---

## 9. Guides

Guides and database content serve different intents.

Database/entity question:

> What is this?

Guide question:

> What should I do?

Recommended hub:

```text
/guides
├── Beginner
├── Farming
├── Secrets
├── Boss Guides
├── Progression
├── Endgame
└── Co-op
```

Examples:

```text
/guides/beginner
/guides/emerald-farming
/guides/talisman-farming
```

Existing `/secrets` can remain canonical while belonging to `Guides > Secrets` in navigation and breadcrumbs.

A guide should link to relevant entities instead of duplicating the full database entry.

---

## 10. Cosmetics

Recommended hierarchy:

```text
/cosmetics
└── Capes
```

Keep existing cape URLs:

```text
/capes
/capes/[slug]
```

Only add new categories such as pets or skins when Minecraft Dungeons 2-specific evidence and enough content exist.

---

## 11. Updates

Add or strengthen an update-history hub:

```text
/updates
```

It should capture durable game changes, not operate as a general news blog.

Useful update types:

```text
Patch notes
Official updates
Events
Balance changes
Platform updates
Availability changes
```

Possible route:

```text
/updates/[date-or-slug]
```

Each update entry should record:

```text
date
source
summary
affected entities/pages
verification level
```

The homepage should only surface meaningful verified changes.

---

## 12. Platforms and Game Info

Launch-intent pages remain useful for search traffic but should no longer dominate the wiki experience.

Recommended hubs:

```text
/platforms
/game-info
```

Platforms can link to existing canonical pages for:

```text
Steam / PC
Steam Deck
Xbox
PlayStation, if supported/verified
Nintendo Switch
Nintendo Switch 2, if supported/verified
GeForce NOW, if supported/verified
Crossplay
```

Game Info can contain:

```text
Release Date
Price
Editions
Pre-order
FAQ
```

Do not create a platform page simply because the platform name is a plausible keyword. Follow the same evidence rules as all other pages.

---

## 13. Homepage redesign

The homepage should change from launch-guide-first to wiki-first.

### 13.1 Hero

Suggested positioning:

```text
Minecraft Dungeons 2 Wiki

Weapons, armor, bosses, missions, builds,
game mechanics and verified information.
```

Primary actions:

```text
Explore the Wiki
Browse Gear
```

### 13.2 Explore the Wiki

Prominent cards:

```text
World
Gear
Enemies
Builds
Gameplay
Guides
```

Each card should contain a short description plus a few useful child links.

### 13.3 Popular Pages

Show only real, strong pages.

Prefer config/data-driven curation such as:

```ts
featured: true
```

over hard-coded homepage markup.

### 13.4 Browse Databases

Surface categories only when they contain enough useful content:

```text
Weapons
Armor
Artifacts
Talismans
Enchantments
Bosses
Missions
```

A category with no meaningful entries should not receive a prominent homepage card.

### 13.5 Guides

Feature useful task-oriented guides:

```text
Beginner
Builds
Secrets
Farming
Co-op
```

### 13.6 Latest Verified Updates

Display a small set of durable, verified changes.

Every item should include:

```text
date
source
affected area
```

Do not change the homepage update date just to make the site look fresh.

### 13.7 Game Info

Move launch/search-intent pages toward the lower part of the homepage:

```text
Release Date
Price
Editions
Platforms
FAQ
```

They remain indexable and internally linked but no longer define the site's primary identity.

---

## 14. Four primary page types

The codebase should converge on four reusable page types.

### A. Hub page

Examples:

```text
/gear
/world
/enemies
/guides
```

Responsibilities:

- define the domain,
- list child categories,
- highlight important entities,
- link related domains,
- avoid thin SEO filler.

### B. Category page

Examples:

```text
/weapons
/bosses
/missions
```

Responsibilities:

- concise category explanation,
- entity collection,
- related guides,
- search/filter/sort only when the dataset is large enough.

### C. Entity page

Examples:

```text
/weapons/[slug]
/bosses/[slug]
/missions/[slug]
```

Responsibilities:

- structured facts,
- mechanics and acquisition/location data,
- related entities,
- media,
- sources,
- verification status,
- update history.

### D. Guide page

Examples:

```text
/guides/emerald-farming
```

Responsibilities:

- solve a user task,
- explain steps or decisions,
- reference canonical entities instead of duplicating their data.

---

## 15. Breadcrumbs

Use one consistent breadcrumb system.

Examples:

```text
Home > Gear > Weapons > Battlestaff
Home > Enemies > Bosses > Copper Monstrosity
Home > World > Missions > [Mission]
Home > Guides > Farming > Emerald Farming
```

Visible breadcrumbs and `BreadcrumbList` structured data must agree.

---

## 16. Related-content graph

A mature wiki is a graph, not a folder tree.

Entity pages should support typed relations such as:

```text
Related Gear
Related Enchantments
Related Missions
Related Locations
Related Enemies / Bosses
Related Builds
Related Guides
```

Example:

```text
Weapon
  -> obtained in Mission
  -> works with Enchantment
  -> used by Build
  -> recommended for Boss
```

Prefer structured relationships in content data over hand-written repeated links.

A possible shared shape:

```ts
related: {
  gear?: EntityRef[]
  enchantments?: EntityRef[]
  missions?: EntityRef[]
  locations?: EntityRef[]
  enemies?: EntityRef[]
  builds?: EntityRef[]
  guides?: EntityRef[]
}
```

Backlinks can later be derived from these relationships.

---

## 17. Data-first implementation

Continue the direction already described in `content-model.md`.

Preferred long-term structure:

```text
data/
  game/
  platforms/
  locations/
  dungeons/
  quests/
  missions/
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
  updates/
  sources/
```

Pages should increasingly be rendered by reusable templates/components rather than one-off page implementations.

Initial reusable templates/components to prioritize:

```text
HubPage
CategoryPage
EntityHeader
VerificationBadge
SourceList
RelatedEntities
WeaponEntity
BossEntity
MissionEntity
```

Do not force every content type into one giant generic component if the visible information differs materially.

---

## 18. Verification and source UX

Continue the evidence-first approach.

Internally, evidence can remain more granular.

User-facing status can stay simple:

```text
Official confirmed
Gameplay observed
Community reported
Verification pending
```

Each substantive entity should have:

```text
sources
lastVerified
status
```

Important rules:

- a deploy does not change `lastVerified`;
- a page can be published while some fields remain unknown if the core entity is useful and verified;
- unverified values should never be filled from assumptions;
- source strength can differ by field.

---

## 19. Internal search

As the entity collection grows, internal search should prioritize canonical knowledge objects.

Suggested ranking:

```text
Entity
Category
Hub
Guide
Update
Launch/Game Info
```

For a query such as a weapon name, the weapon entity should normally rank above a guide that merely mentions it.

Search results should expose the content type where useful:

```text
Battlestaff
Weapon
```

Add advanced filtering only when the dataset is large enough to justify it.

---

## 20. Sitemap and indexing

Keep sitemap generation automatic, but respect real content dates.

Important rules:

- do not set every `lastmod` to build/deploy time;
- entity pages should be discoverable from category/hub pages;
- launch pages stay indexable if they continue serving distinct intent;
- thin or insufficiently sourced entity candidates remain draft/noindex;
- canonical URLs must not change during the IA refactor unless there is a strong reason.

---

## 21. Structured data

Use only schema types that match visible content.

Recommended:

```text
WebSite + SearchAction      -> homepage, when visible search exists
BreadcrumbList             -> hierarchy
CollectionPage             -> suitable hubs/categories
Article                    -> editorial/guide-style pages when appropriate
VideoObject                -> only with real embedded/described video
FAQPage                    -> only with visible FAQ content
```

Do not add Product, Review, AggregateRating, HowTo, or other schema simply because it may produce richer SERP output.

---

## 22. Implementation phases

### Phase 1 — Information architecture

Scope:

1. Refactor top navigation.
2. Refactor homepage hierarchy.
3. Add missing core hubs.
4. Standardize breadcrumbs.
5. Reclassify existing pages in navigation without changing canonical URLs.
6. Ensure metadata/canonical/sitemap behavior does not regress.

Recommended first hubs:

```text
/world
/enemies
/guides
/platforms
/game-info
```

### Phase 2 — Database category pages

Add/upgrade:

```text
/weapons
/armor
/artifacts
/talismans
/enchantments
/missions
/mobs
```

Category pages should be real indexes, not 300-word SEO essays.

A useful category page contains:

```text
short introduction
verified entity cards/list
verification context
related categories
related guides
```

Do not promote a category prominently until it contains meaningful content.

### Phase 3 — Reusable entity templates

Prioritize:

```text
Boss
Weapon
Mission
```

Migrate the best existing content first.

Do not migrate a page merely for architectural purity if the existing implementation already works well.

### Phase 4 — Relationship graph

Add:

```text
typed related entities
backlinks where useful
category membership
cross-domain navigation
```

The relationship graph should become the main source of internal linking.

### Phase 5 — Search improvements

Add entity-aware ranking and content-type metadata.

Only add filters/sort once database size warrants them.

---

## 23. Existing page mapping

Use the following IA mapping without changing canonical URLs.

```text
/the-sift
  -> World > The Sift

/gear
  -> Gear

/bosses
  -> Enemies > Bosses

/builds
/tier-list
  -> Builds

/secrets
  -> Guides > Secrets

/capes
  -> Cosmetics > Capes

/crossplay
  -> Gameplay > Co-op
  -> also linked from Platforms
```

Existing release/price/edition/platform pages:

```text
-> Platforms or Game Info
```

Existing character pages:

```text
-> Characters
-> cross-linked from relevant World / Enemies / Missions pages
```

---

## 24. First implementation scope (P0)

The first development pass should be deliberately limited.

### Do

1. Top navigation restructuring.
2. Homepage restructuring.
3. Core hub/category scaffolding.
4. Unified breadcrumb behavior.
5. Reclassification of existing content.
6. Reusable hub/category/entity primitives where they reduce duplication.
7. Shared related-content component/data shape.
8. SEO regression checks for sitemap, canonical, metadata, SSR, and structured data.

### Do not

```text
Do not change the domain.
Do not add a /wiki prefix.
Do not bulk rewrite existing URLs.
Do not generate hundreds of placeholder entities.
Do not mass-publish AI-written pages.
Do not add comments/community editing.
Do not add MediaWiki-style revision history.
Do not introduce a CMS/database solely for this refactor.
```

Git-backed static/data content is still sufficient for the current scale.

---

## 25. Acceptance criteria for Phase 1

### Navigation

A user can reach the main database areas within two interactions:

```text
Weapons
Armor
Bosses
Missions
Builds
Secrets
```

### Hierarchy

Every core page has a clear answer to:

> Which wiki domain/category does this page belong to?

### Breadcrumbs

Core content uses a consistent visible breadcrumb and matching structured data.

### Homepage

Release date, price, pre-order, and editions no longer dominate the primary homepage experience.

### URLs

No unnecessary existing canonical URL changes.

### SEO

No regression in:

```text
SSR content
title/description
canonical
robots
sitemap
structured data
internal links
```

### Content quality

The refactor does not create a large set of pages whose primary content is:

```text
Unknown
TBD
Coming soon
```

### Verification

Existing source and `lastVerified` semantics remain intact.

---

## 26. Target end state

The site should increasingly behave like this:

```text
                    Minecraft Dungeons 2
                             |
        +--------------------+--------------------+
        |                    |                    |
      World                 Gear                Enemies
        |                    |                    |
   Missions              Weapons               Bosses
   Locations             Armor                 Mobs
   Dungeons              Talismans
                         Enchantments
        |                    |                    |
        +------------------ Builds ----------------+
                             |
                           Guides
```

A user landing on any important entity should be able to continue naturally through the knowledge graph:

```text
What is it?
  ->
Where is it found?
  ->
What does it drop / interact with?
  ->
What gear or enchantments work with it?
  ->
Which builds use it?
  ->
Which guides explain what to do next?
```

That connected, verified entity graph—not raw page count—is the main definition of “mature wiki” for this project.
