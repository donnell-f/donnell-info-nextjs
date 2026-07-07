// Prefix a public asset path with the deploy base path (e.g. "/donnell-info-nextjs" on
// GitHub Pages project sites). Next.js only auto-applies basePath to <Image>, next/link
// hrefs, and statically-imported assets — NOT to raw URL strings in inline-style
// background images, CSS url(), or <img src>. Use this helper for those cases.
//
// NEXT_PUBLIC_BASE_PATH is inlined at build time (see next.config.mjs). It's empty for
// local dev and for user/org Pages sites, so paths stay at the root there.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  // Leave external/absolute URLs (https://…, //…, data:) untouched.
  if (/^([a-z]+:)?\/\/|^data:/i.test(path)) return path;
  return `${BASE_PATH}${path}`;
}
