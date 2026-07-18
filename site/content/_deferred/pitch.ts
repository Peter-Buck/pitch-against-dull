/**
 * /pitch — DEFERRED from v1
 *
 * The live Squarespace route returned HTTP 404 at audit time (2026-07-17).
 * The page content was not publicly accessible. The route is linked from
 * the INNOVATION discipline h3 on the home page as "KILL DULL workshops".
 *
 * Owner Decision Required (OD-3 / PITCH exclusion):
 *   - Confirm whether /pitch content exists (draft, password-protected, etc.)
 *   - Decide canonical slug for v1 (e.g. /workshops or keep /pitch)
 *   - Supply page content before implementing the route
 *
 * In v1: no /pitch route exists. The home page link resolves to Next.js 404.
 */

export const pitchPageMeta = {
  slug: "/pitch",
  liveStatus: 404,
  linkedFrom: ["home page INNOVATION h3"],
  auditNote:
    "Squarespace 404 at audit time. No rendered content available to migrate.",
};
