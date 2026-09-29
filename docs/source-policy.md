# Source Quality Policy

## Evidence levels

### A — Official / first-party
Mojang, Minecraft.net, Xbox Wire, Xbox Store, Nintendo, Steam store pages, official trailers and official developer interviews.

Use for definitive factual statements when possible.

### B — Direct gameplay observation
Facts visible in captured game UI, inventory tooltips, map screens, quest logs, boss health bars, achievements or first-party gameplay demonstrations.

Store the screenshot/video timestamp with the fact.

### C — Reputable secondary source
Established media reporting that adds context not yet available from a first-party page.

Attribute the claim and do not let it silently override first-party evidence.

### D — Community
Reddit, Feedback posts, fan wikis, forums, user videos and community puzzle solutions.

Useful for discovery and hypotheses. Any fact that only exists here must be visibly labeled **Community-reported / unverified**.

## Conflict handling

When sources disagree:

1. Do not pick whichever value looks plausible.
2. Record the conflict.
3. Prefer current first-party evidence when it directly addresses the same field.
4. Keep the uncertain field unpublished or mark it unresolved.
5. Re-check after launch patches/store updates.

## Required source fields

```ts
type Evidence = {
  value: string | number | boolean | null
  sourceType: 'official' | 'gameplay' | 'media' | 'community'
  sourceUrl?: string
  sourceTitle?: string
  sourceDate?: string
  verifiedAt: string
  timestamp?: string
  confidence: 'confirmed' | 'observed' | 'community' | 'unverified'
  notes?: string
}
```

## Media rules

Prefer:
1. our own captured gameplay screenshots/icons,
2. official promotional screenshots/portraits when they materially document the subject,
3. official YouTube embeds for video evidence.

Do not hotlink or mirror large third-party galleries merely for decoration. Keep an unofficial fan-site disclaimer visible in the footer/about page.
