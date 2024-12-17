import "server-only";

import { tryit } from "radash";
import type { Version } from "~/types/version";

export async function fetchApplicationsBenchmarks({ url, version }: { url: string; version: Version }) {
  const tryFetch = tryit(fetch);
  const [error, response] = await tryFetch(
    `https://raw.githubusercontent.com/risc0/ghpages/${version}/dev/benchmarks/${url}`,
    {
      next: { revalidate: 180, tags: ["fetch-applications-benchmarks"] }, // 3 minutes cache
    },
  );

  // error handling
  if (error || !response.ok) {
    throw error || new Error("Failed to fetch");
  }

  return await response.text();
}
