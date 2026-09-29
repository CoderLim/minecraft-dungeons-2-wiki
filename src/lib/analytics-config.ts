export type AnalyticsConfig = {
  gaId: string;
  plausibleDomain: string;
  plausibleSrc: string;
};

const EMPTY: AnalyticsConfig = {
  gaId: '',
  plausibleDomain: '',
  plausibleSrc: '',
};

type D1Like = {
  prepare: (query: string) => {
    all: () => Promise<{ results?: Array<{ name?: string; value?: string | null }> }>;
  };
};

function getD1(): D1Like | null {
  const g = globalThis as { __CF_ENV__?: { DB?: D1Like }; __env__?: { DB?: D1Like } };
  return g.__CF_ENV__?.DB ?? g.__env__?.DB ?? null;
}

/** Read analytics IDs written by auto-launch into the D1 `config` table. */
export async function loadAnalyticsConfig(): Promise<AnalyticsConfig> {
  const db = getD1();
  if (!db) return EMPTY;

  try {
    const { results = [] } = await db
      .prepare(
        `SELECT name, value FROM config WHERE name IN ('google_analytics_id', 'plausible_domain', 'plausible_src')`,
      )
      .all();

    const map: Record<string, string> = {};
    for (const row of results) {
      if (row.name && row.value) map[row.name] = row.value.trim();
    }

    return {
      gaId: map.google_analytics_id || '',
      plausibleDomain: map.plausible_domain || '',
      plausibleSrc: map.plausible_src || '',
    };
  } catch {
    return EMPTY;
  }
}
