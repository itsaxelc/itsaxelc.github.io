// Set by the GitHub Pages workflow. Empty for a `<username>.github.io` repo or
// a custom domain, `/<repo>` for a project repo.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a file in `public/` with the base path, e.g. asset("/resume.pdf"). */
export function asset(path: string): string {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
