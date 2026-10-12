"use client";

import * as React from "react";

import { Icons } from "@/components/common/icons";
import { PLACEHOLDER_USERNAME, siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";

interface RepoActivity {
  repo: string;
  owner: string;
  description: string | null;
  stars: number | null;
  commitCount: number | null;
  lastCommitDate: string | null;
  url: string;
}

function parseLastPageFromLinkHeader(linkHeader: string | null): number | null {
  if (!linkHeader) return null;
  const match = linkHeader.match(/<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="last"/);
  return match ? parseInt(match[1], 10) : null;
}

async function getRepoActivity(fullName: string): Promise<RepoActivity> {
  const [owner, repo] = fullName.split("/");
  const headers = { Accept: "application/vnd.github+json" };

  const result: RepoActivity = {
    repo,
    owner,
    description: null,
    stars: null,
    commitCount: null,
    lastCommitDate: null,
    url: `https://github.com/${fullName}`,
  };

  try {
    const repoRes = await fetch(`https://api.github.com/repos/${fullName}`, {
      headers,
    });
    if (repoRes.ok) {
      const repoData = (await repoRes.json()) as {
        description?: string | null;
        stargazers_count?: number;
      };
      result.description = repoData.description ?? null;
      result.stars =
        typeof repoData.stargazers_count === "number"
          ? repoData.stargazers_count
          : null;
    }
  } catch {
    // ignore, defaults stay null
  }

  try {
    const commitsRes = await fetch(
      `https://api.github.com/repos/${fullName}/commits?per_page=1`,
      { headers }
    );
    if (commitsRes.ok) {
      const lastPage = parseLastPageFromLinkHeader(
        commitsRes.headers.get("link")
      );
      const commits = (await commitsRes.json()) as Array<{
        commit?: { author?: { date?: string } };
      }>;
      result.commitCount = lastPage ?? (commits.length > 0 ? 1 : 0);
      result.lastCommitDate = commits[0]?.commit?.author?.date ?? null;
    }
  } catch {
    // ignore, defaults stay null
  }

  return result;
}

export default function GitHubActivity() {
  const [repos, setRepos] = React.useState<RepoActivity[] | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    Promise.all(siteConfig.githubActivityRepos.map(getRepoActivity)).then(
      (activity) => {
        if (!cancelled) setRepos(activity);
      }
    );

    return () => {
      cancelled = true;
    };
  }, []);

  // Nothing to show until a real GitHub username is set in config/site.ts.
  if (siteConfig.username === PLACEHOLDER_USERNAME) return null;

  return (
    <div className="w-full space-y-8">
      <div className="w-full overflow-x-auto rounded-lg border border-border bg-background p-4">
        <img
          src={`https://ghchart.rshah.org/38bdf8/${siteConfig.username}`}
          alt={`${siteConfig.authorName} GitHub contribution graph`}
          className="w-full min-w-[600px]"
        />
      </div>

      {repos && repos.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {repos.filter((r) => !!r.url).map((r) => (
            <a
              key={`${r.owner}/${r.repo}`}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="flex items-center gap-2 font-semibold truncate">
                  <Icons.gitRepoIcon size={16} className="flex-shrink-0" />
                  <span className="truncate">{r.repo}</span>
                </h4>
                <Icons.externalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              </div>
              {r.description && (
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {r.description}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icons.star className="h-3.5 w-3.5" />
                  {r.stars ?? "–"} stars
                </span>
                <span className="flex items-center gap-1">
                  <Icons.gitBranch className="h-3.5 w-3.5" />
                  {r.commitCount ?? "–"} commits
                </span>
                {r.lastCommitDate && (
                  <span className="flex items-center gap-1">
                    <Icons.clock className="h-3.5 w-3.5" />
                    Last commit {formatDate(r.lastCommitDate)}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
