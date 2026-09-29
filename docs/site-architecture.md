# Site Architecture

Domain: `minecraftdungeons2wiki.com`  
Planning date: 2026-09-29

## Core principle

Create **one canonical page per distinct search intent or entity**, not one page for every literal query variant. Synonymous queries consolidate to the same URL to avoid cannibalization.

Example:

- `minecraft dungeons 2 release date`
- `minecraft dungeons 2 release`
- `when does minecraft dungeons 2 come out`
- `what time does minecraft dungeons 2 release`

All belong to `/release-date/`.

By contrast, Twisted Warden, Copper Monstrosity, Hero Cape and Inner Mines are independent entities and deserve their own entity pages.

## Primary navigation

### Guides
Release Date, Price, Editions, Pre-order, Gameplay, Controls, Jumping, Inventory, Multiplayer, Crossplay.

### World
The Sift, World Map, Locations, Dungeons, Quests, Story Items.

### Gear
Weapons, Armor, Talismans, Artifacts, Enchantments, Blacksmith, Enchantsmith, Echo Shards.

### Enemies
Mobs, Soul-Corrupted Mobs, Bosses.

### Characters
Illager High Council, Prime Enchanter, Grand Illusioner, Supreme Evoker, NPCs.

### Cosmetics
Capes, Hero Cape, Twisted Cape, Soul Cape, Corrupted Creeper Cape, Special Cape, Pets, Skins.

### Platforms
Steam / PC, Xbox, Nintendo Switch, Nintendo Switch 2.

### Updates
Patch Notes, DLC, Events, Official Announcements.

## Entity URL families

```text
/weapons/[slug]/
/armor/[slug]/
/talismans/[slug]/
/artifacts/[slug]/
/enchantments/[slug]/
/bosses/[slug]/
/mobs/[slug]/
/characters/[slug]/
/locations/[slug]/
/dungeons/[slug]/
/quests/[slug]/
/capes/[slug]/
/pets/[slug]/
```

## Site-wide page anatomy

Every substantive page should use the same evidence-first skeleton:

1. Breadcrumbs
2. H1
3. Direct answer / definition in the first paragraph
4. Verification line: last verified date + evidence level
5. Infobox where the entity type supports one
6. Main sections
7. Gallery / icons / official screenshots where useful
8. Video evidence with timestamped notes where useful
9. Related entities / internal links
10. Sources
11. Patch/update history

Unknown properties must render as **Unknown / not yet verified**, not guessed values.

## Entity templates

### Boss
H1 → overview → location → encounter/story context → attacks → phases → strategy → loot → related quests → achievements → gallery/video → patch history → sources.

### Weapon
H1 → overview → type/rarity → stats → effects → enchantment compatibility → how to obtain → upgrades → best uses → builds → gallery → patch history → sources.

### Armor
H1 → overview → slot → stats/effects → how to obtain → upgrades → build interactions → gallery → sources.

### Talisman
H1 → overview → passive bonus → leveling → companion interaction → how to obtain → builds → gallery → sources.

### Enchantment
H1 → effect → triggers → compatible gear → ranks → combat use → how to obtain the book → related builds → video evidence → sources.

### Location
H1 → overview → how to reach → map position → quests → enemies → bosses → loot → secrets → fast travel → gallery → sources.

### Cape / cosmetic
H1 → appearance → how to get → availability window → account/platform requirements → Java/Bedrock crossover if applicable → redemption → gallery → history → sources.

## Internal linking

Entity pages should link bi-directionally:

- location ↔ quests ↔ NPCs
- location ↔ mobs/bosses
- boss ↔ loot
- gear ↔ enchantments
- talisman ↔ companion
- cape ↔ promotion / edition
- platform ↔ editions / multiplayer / crossplay

Hub pages should be database-style indexes, not thin SEO text.

## Indexing policy

Pages can be:
- **Published**: evidence is sufficient for a useful answer.
- **Published with unknown fields**: core entity is verified, but some stats/mechanics are pending.
- **Draft / noindex**: keyword exists, but the entity or required detail is not yet sufficiently sourced.
- **Rejected**: adjacent Minecraft trend that is not actually a Dungeons II entity.

Examples:
- Moonlight Trail Cape: not a Dungeons II core entity; do not force into taxonomy.
- NameMC / Kinguin: navigational or shopping-adjacent queries; not Wiki entities.
- Builds / achievements: hold until launch gameplay/platform data is verified.
