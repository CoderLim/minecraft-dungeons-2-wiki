#!/usr/bin/env node
/**
 * Record GA4 measurement ID locally. auto-launch-website also upserts
 * google_analytics_id into D1 for Workers launches.
 */
import { writeFileSync } from 'node:fs';

const id = process.argv[2] || process.env.AUTO_LAUNCH_GA_ID;
if (!id) {
  console.error('Usage: node scripts/set-ga-id.mjs <G-XXXXXXXX>');
  process.exit(1);
}
if (!/^G-[A-Z0-9]+$/i.test(id)) {
  console.error(`Invalid GA4 measurement id: ${id}`);
  process.exit(1);
}

writeFileSync('.auto-launch-ga-id', `${id}\n`, 'utf8');
console.log(`Wrote GA4 measurement id ${id} to .auto-launch-ga-id`);
