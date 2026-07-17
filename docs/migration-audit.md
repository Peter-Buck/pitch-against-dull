# Migration Audit
**Source:** https://www.peter-buck.com (live, rendered via Playwright)
**Audit date:** 2026-07-17
**Scope:** Every page and component classified as Verified / Blocked / Needs Owner Decision
**Evidence base:** See rendered-site-inventory.md for raw data. Every finding here is supported by screenshot, computed style, DOM inspection, or HTTP response.
**Rule:** No fixes proposed. No redesigns. No implementation decisions.

---

## Classification Key

- **Verified** — Content, behaviour, and rendering confirmed. Can be faithfully reproduced.
- **Blocked** — Cannot be confirmed or reproduced without external action (missing content, broken URL, cross-origin restriction, third-party dependency).
- **Needs Owner Decision** — Technically verifiable but contains an ambiguity, conflict, or risk that requires a human decision before migration proceeds.

---

## 1. Page Status Table

| # | Route | HTTP | Sitemap | Nav | Classification | Flag |
|---|-------|------|---------|-----|----------------|------|
| 1 | `/` | 200 | No (not listed) | WORK | **Needs Owner Decision** | Metadata mismatch; canonical duplicate exists at /work |
| 2 | `/work` | 200 | Yes (priority 1.0) | — | **Needs Owner Decision** | Canonical points to `/`; identical content; sitemap priority 1.0 but page is not the canonical |
| 3 | `/meet` | 200 | Yes | MEET | **Verified** | — |
| 4 | `/think` | 200 | Yes | THINK | **Verified** | External link to vercel app |
| 5 | `/therevisions` | 200 | Yes | THE REVISIONS | **Needs Owner Decision** | 22 audio tracks on squarespace CDN; Google Drive dependency; metadata mismatch with /therevisions-1 |
| 6 | `/therevisions-1` | 200 | Yes | — | **Needs Owner Decision** | Not in nav; shares description with /therevisions; relationship to /therevisions unclear |
| 7 | `/instrument` | 200 | Yes | — | **Needs Owner Decision** | Empty description; no OG image; not in nav; purpose relative to /therevisions unclear |
| 8 | `/ip-development` | 200 | Yes | — | **Verified** | No OG image; 7 images missing alt |
| 9 | `/work-1` | 200 | Yes | — | **Needs Owner Decision** | Empty description; no OG image; not in main nav; relationship to `/` unclear |
| 10 | `/work-1/redbull` | 200 | Yes | — | **Verified** | 80 images all missing alt; 7 Vimeo |
| 11 | `/work-1/red-bull` | 200 | Yes | — | **Needs Owner Decision** | Separate page from /redbull; both named "Red Bull"; nav/UI relationship unclear |
| 12 | `/work-1/riester` | 200 | Yes | — | **Verified** | All 17 images have alt text |
| 13 | `/work-1/honorhealth` | 200 | Yes | — | **Verified** | 3 Vimeo; 0 images |
| 14 | `/work-1/range-rover` | 200 | Yes | — | **Verified** | 4 Vimeo; 4 images missing alt |
| 15 | `/work-1/eos-fitness` | 200 | Yes | — | **Verified** | 4 Vimeo; 9 images missing alt |
| 16 | `/work-1/land-rover` | 200 | Yes | — | **Verified** | 4 Vimeo; 1 image missing alt |
| 17 | `/work-1/atomic-waste` | 200 | Yes | — | **Verified** | 1 Vimeo; 2 images missing alt |
| 18 | `/work-1/clean-elections` | 200 | Yes | — | **Verified** | 5 Vimeo; 4 images missing alt |
| 19 | `/work-1/california-highway-patrol` | 200 | Yes | — | **Verified** | 1 Vimeo; 8 images missing alt |
| 20 | `/work-1/archer-aviation` | 200 | Yes | — | **Verified** | 0 iframes; 8 images missing alt |
| 21 | `/work-1/meclub` | 200 | Yes | — | **Verified** | 0 iframes; 4 images missing alt |
| 22 | `/pitch` | **404** | No | Linked from `/` | **Blocked** | Broken link in production; page does not exist |
| 23 | `/cart` | 200 | No | — | **Needs Owner Decision** | Squarespace commerce route; no visible products or commerce UI; purpose unclear |

---

## 2. Anomaly Register

### A1 — Home page metadata describes Kill Dull Records, not the CCO portfolio
**Severity:** High
**Pages affected:** `/` and `/work` (same content, same meta)
**Evidence:**
- `document.title` = "THE REVISIONS – Kill Dull Records"
- `meta[name="description"]` = "Kill Dull Records is an independent record label dedicated to music that refuses to play it safe. Home of The Revisions. killdull.com"
- `og:title` = "THE REVISIONS – Kill Dull Records"
- `og:url` = "https://www.peter-buck.com" (no trailing slash, differs from canonical)
- Actual page content = CCO portfolio (12 case studies, 12-values counter, AI widget)
**Classification:** Needs Owner Decision
**What is blocked:** Cannot determine the intended identity of the home page (record label or CCO portfolio) from rendered content alone. The page renders as a portfolio; the metadata describes a record label.

---

### A2 — `/work` is a canonical duplicate of `/` in the sitemap at priority 1.0
**Severity:** Medium
**Pages affected:** `/work`
**Evidence:**
- `link[rel="canonical"]` on `/work` = `https://www.peter-buck.com/`
- DOM content on `/work` = identical to `/` (same `.pbfw-counter`, same case study list)
- Sitemap lists `/work` with `priority: 1.0` (highest priority) — but the canonical is `/`
- `/work` is not in the main nav; `/` is listed as "WORK" in nav
**Classification:** Needs Owner Decision
**What is blocked:** Whether `/work` should be kept as an alias, redirected to `/`, or removed.

---

### A3 — `/pitch` returns HTTP 404 but is linked from the live homepage
**Severity:** High
**Pages affected:** `/pitch`
**Evidence:**
- HTTP status: 404 (confirmed by Playwright navigation response)
- Linked from `/` Innovation section: "KILL DULL workshops" → `/pitch`
- Not present in sitemap.xml
- 404 page renders Squarespace default error: "We couldn't find the page you were looking for."
- Screenshot: audit-screens/pitch/desktop-1440.png
**Classification:** Blocked
**What is blocked:** No content to migrate. The link is live in production pointing to a non-existent page. Cannot determine if the page was removed, is being rebuilt, or was never published.

---

### A4 — Two distinct Red Bull pages with overlapping brand name
**Severity:** Medium
**Pages affected:** `/work-1/redbull`, `/work-1/red-bull`
**Evidence:**
- `/work-1/redbull`: "Red Bull — Peter Buck | ECD, $20B Brand, 43% Global Market Share" — 7 Vimeo iframes, 80 images, comprehensive case study
- `/work-1/red-bull`: "Red Bull Silicon Valley OOH – Peter Buck | Binary Code Campaign" — 0 iframes, 1 image, short OOH piece
- Both are in sitemap.xml under different slugs with different lastmod dates
- `/work-1/redbull` is linked from home (`/`) and `/work-1` index
- `/work-1/red-bull` is not linked from home or `/work-1` index (only in sitemap)
**Classification:** Needs Owner Decision
**What is blocked:** Whether `/work-1/red-bull` is a published piece, a draft, or content to be integrated into `/work-1/redbull`. Navigation structure cannot be determined without owner input.

---

### A5 — `/therevisions-1` shares identical metadata with `/therevisions`
**Severity:** Medium
**Pages affected:** `/therevisions-1`
**Evidence:**
- `/therevisions-1` meta description: "The first AI agency band. Ten departments. One member. Zero meetings." — identical to `/therevisions`
- `/therevisions-1` OG title: "Peter Buck — CCO | Brand Strategy & Creative Leadership" — same as all other pages
- `/therevisions-1` actual content: CMO Confessions EP — distinct from `/therevisions` (main album)
- `/therevisions-1` not in main nav (only "THE REVISIONS" appears, linking to `/therevisions`)
**Classification:** Needs Owner Decision
**What is blocked:** Whether `/therevisions-1` is a standalone page, a sub-section of `/therevisions`, or a separate navigation entry. Metadata should be unique per page (owner decision on new meta copy).

---

### A6 — `/instrument` has empty meta description, null OG image, not in navigation
**Severity:** Low–Medium
**Pages affected:** `/instrument`
**Evidence:**
- `getMeta('description')` = `""` (empty string)
- `getMeta('og:image')` = null
- Not present in main nav; not linked from any other page (only discoverable via sitemap)
- Content: 1 track ("The Right Room") + full lyrics — appears to be a teaser/coming-soon page
**Classification:** Needs Owner Decision
**What is blocked:** Whether this page is published intentionally or is a work-in-progress. Whether it should be discoverable. What the meta description should be.

---

### A7 — `/work-1` index has empty meta description, no OG image, not in main nav
**Severity:** Medium
**Pages affected:** `/work-1`
**Evidence:**
- `getMeta('description')` = `""` (empty)
- `getMeta('og:image')` = null
- Not in main nav (nav shows WORK → `/`, not → `/work-1`)
- Sitemap: present with priority 0.75
- Content: "LET'S GO TO WORK." grid of 12 case study thumbnails (images have alt text on this page)
**Classification:** Needs Owner Decision
**What is blocked:** Relationship between `/` (home showing case study list) and `/work-1` (separate work index showing the same cases). Whether `/work-1` replaces, duplicates, or supplements the home page case list.

---

### A8 — 22 audio tracks hosted on Squarespace CDN (static1.squarespace.com)
**Severity:** High (migration risk)
**Pages affected:** `/therevisions` (13 tracks), `/therevisions-1` (8 tracks), `/instrument` (1 track)
**Evidence:**
- All audio uses Squarespace `sqs-block-audio` custom components
- MP3 URLs confirmed via `childLinks` on `.sqs-block-audio` elements, e.g.:
  - `https://static1.squarespace.com/static/671fc066e85fae213d2acc8a/t/6a3ace8e.../1_Ceative+Climax.mp3`
- NOT native `<audio>` elements — invisible to `querySelectorAll('audio')`
- Download link on `/therevisions`: Google Drive folder
- Player component is Squarespace-proprietary (renders as custom block)
**Classification:** Blocked (requires hosting decision)
**What is blocked:** MP3 files will need to be re-hosted when leaving Squarespace. The Squarespace audio player component needs a replacement. Google Drive download link is an external dependency that may or may not transfer. Owner must confirm audio file availability outside Squarespace.

---

### A9 — 30+ Vimeo iframes (cross-origin — internal state not inspectable)
**Severity:** Low (Vimeo embeds migrate by URL)
**Pages affected:** 9 pages (see inventory Section 6)
**Evidence:**
- All confirmed as `player.vimeo.com` iframes via `iframe.src`
- `iframe.title` missing on 26 of 30+ embeds
- Internal Vimeo player state (playback, settings) not accessible cross-origin
**Classification:** Verified (embed src confirmed; titles need addition for accessibility)
**What is not verifiable:** Whether individual Vimeo videos are public/private/password-protected. Cannot confirm playability without clicking play in the rendered browser (not tested).

---

### A10 — AI chat widget ("Ask my AI") — third-party, class prefix `pbfw`
**Severity:** Medium (migration dependency)
**Pages affected:** `/` (home), `/cart`, `/work-1` (footer)
**Evidence:**
- Widget confirmed functional: button click → panel opens → AI responds to queries
- Class prefix `pbfw` — custom implementation, not a standard Squarespace component
- API endpoint not inspectable (cross-origin XHR)
- Widget script source not confirmed (blocked by cross-origin and Squarespace bundling)
**Classification:** Blocked (requires owner input on provider)
**What is blocked:** Cannot determine the third-party provider, API endpoint, or embedding mechanism without owner disclosure. Migration requires knowing the widget script source and whether an API key/account is tied to the Squarespace domain.

---

### A11 — Missing alt text on ~134 of ~163 images across case studies
**Severity:** Medium (accessibility)
**Pages affected:** All case studies except /riester (0 missing) and /work-1 index (0 missing)
**Worst case:** `/work-1/redbull` — 80 images, 80 missing alt
**Evidence:** `imgs.filter(i => !i.alt).length` per page
**Classification:** Verified (missing alt confirmed)
**Note:** These are facts about the current site. Not proposing fixes.

---

### A12 — Hamburger nav element has no ARIA label and is a DIV, not a button
**Severity:** Low (accessibility)
**Pages affected:** All pages at ≤768px viewport
**Evidence:** DOM inspection: `{ tag: 'DIV', label: null }` for hamburger element; no `role="button"`, no `aria-label`
**Classification:** Verified

---

### A13 — `/cart` has no visible commerce content
**Severity:** Unknown
**Pages affected:** `/cart`
**Evidence:** Page loads with site chrome (200 OK). `cartItems: 0`, `hasCheckout: false`. Body text shows only header + AI widget + footer.
**Classification:** Needs Owner Decision
**What is blocked:** Whether the Squarespace commerce/cart feature is intentionally enabled (e.g., for future album sales), was used previously, or is vestigial.

---

### A14 — `book-peter-buck.vercel.app` — external dependency on Vercel-hosted site
**Severity:** Low
**Pages affected:** `/think` (linked as "Humanizing an AI-Driven World"), `/` (footer link)
**Evidence:** Absolute external URL in DOM links
**Classification:** Verified (link present and verified in DOM)
**Note:** This is a separate site — not subject to this migration. Flag for awareness only.

---

### A15 — Sitemap `og:image` for home page uses HTTP not HTTPS
**Severity:** Low
**Pages affected:** `/`
**Evidence:**
- `getMeta('og:image')` = `"http://static1.squarespace.com/static/.../Logo_CA.png?format=1500w"` — HTTP, not HTTPS
**Classification:** Verified (anomaly recorded)

---

## 3. Component Classification

### Navigation

| Component | Classification | Notes |
|-----------|---------------|-------|
| Desktop nav (wordmark + 4 links) | Verified | PETER BUCK // CCO + WORK/MEET/THINK/THE REVISIONS |
| Mobile nav (hamburger + same links) | Verified | Hamburger is DIV, no aria-label |
| Nav active state (`aria-current="page"`) | Verified | Present |
| Nav entry animation (`transform 0.45s`) | Verified | CSS transition confirmed |
| Skip to Content link | Verified | Present and visible |

### Home page interactive elements

| Component | Classification | Notes |
|-----------|---------------|-------|
| 12 Values counter (`.pbfw-counter`) | Verified | Live, JS-driven, cycles 01–12 |
| Values ticker (text cycling) | Verified | All 12 values cycle |
| Cursor blink animation | Verified | `pbfw-blink` confirmed |
| AI chat widget | **Blocked** (provider unknown) | Functional confirmed; migration path requires owner input |
| Case study links (12 entries on home) | Verified | All URLs confirmed |

### Audio components (sqs-block-audio)

| Component | Classification | Notes |
|-----------|---------------|-------|
| 22 MP3 audio players | **Blocked** | Files on Squarespace CDN; player is Squarespace-proprietary |
| Google Drive album download link | **Needs Owner Decision** | External dependency; owner must confirm file access |

### Video (Vimeo)

| Component | Classification | Notes |
|-----------|---------------|-------|
| 30+ Vimeo iframes | Verified (embed src) | Player internals cross-origin; playability not confirmed |
| iframe title attributes | Verified (missing on 26+) | Accessibility gap recorded |

### Typography & visual

| Component | Classification | Notes |
|-----------|---------------|-------|
| Poppins (nav, wordmark) | Verified | Loaded from squarespace-cdn.com |
| Manrope (all headings) | Verified | Weight 500 and 700, loaded from squarespace-cdn.com |
| Color system | Verified | Background rgb(244,242,234), text black, heading cream-on-dark |
| Fluid type scaling | Verified | h2 47px→33px→34px across 1440/768/390 |
| Responsive breakpoint | Verified | Hamburger activates ≤768px |
| Squarespace Fluid Engine grid | Verified (CSS vars observed) | Max-width ~1500px, gutter 4vw desktop / 6vw mobile |

### Scroll-reveal animations

| Component | Classification | Notes |
|-----------|---------------|-------|
| `preFade` / `fadeIn` (opacity only) | **Verified — owner-approved to replicate** | `opacity: 0→1`, `transition: opacity 0.45s ease`, no transform. Measured via `getComputedStyle` on live site. |
| `preScale` / `scaleIn` (opacity + scale) | **Verified — owner-approved to replicate** | `opacity: 0→1`, `transform: scale(0.9)→scale(1)`, `transition: opacity 0.45s ease, transform 0.45s ease`. Trigger: `IntersectionObserver { threshold: 0.1 }`. |
| Per-element stagger delay | **Verified — owner-approved to replicate** | ~0.1s increments per element within a group |
| `prefers-reduced-motion` support | **Verified** | CSS override via `[data-reveal]` attribute; all content immediately visible, no transition |
| Mobile values-counter animation | **Needs Owner Decision** | Counter cycling animation behaviour at mobile breakpoints not confirmed |

---

## 4. Risk Summary Before Implementation

### High risk
1. **22 audio tracks** on Squarespace CDN will become inaccessible once the Squarespace subscription is cancelled. No alternative hosting confirmed. (A8)
2. **`/pitch` is broken** (404) and linked live from the homepage. (A3)
3. **Home page metadata** does not match page content — title and description describe the record label, not the CCO portfolio. (A1)

### Medium risk
4. **AI widget** provider and API endpoint unknown — migration requires owner to identify and re-configure. (A10)
5. **Two Red Bull pages** (`/redbull` and `/red-bull`) — unclear navigation relationship and whether both should be preserved. (A4)
6. **`/therevisions-1` and `/instrument`** are not in the main nav — access is only via sitemap or direct URL. Whether these remain accessible post-migration needs a decision. (A5, A6)
7. **~134 images missing alt text** across case studies — current state documented. (A11)

### Low risk (but must be resolved)
8. **`/work` canonical duplicate** in sitemap at priority 1.0 — sitemap should be reconciled. (A2)
9. **`/cart`** — Squarespace commerce route with no visible purpose. (A13)
10. **`/work-1` index** — not in main nav, empty metadata — relationship to home page needs clarification. (A7)
11. **Hamburger is a DIV** with no ARIA — current state documented. (A12)
12. **OG image uses HTTP** not HTTPS on home page. (A15)

---

## 5. Needs Owner Decision — Full List

| ID | Question | Affects |
|----|----------|---------|
| OD-1 | Is the home page (/) the CCO portfolio or Kill Dull Records? The metadata says record label; the content says portfolio. What should the title, description, and OG be? | `/`, `/work` |
| OD-2 | Should `/work` be redirected to `/` or maintained as a separate URL? | `/work` |
| OD-3 | What is `/pitch`? Is this page being rebuilt, intentionally removed, or should the homepage link be updated? | `/pitch`, `/` |
| OD-4 | Are both `/work-1/redbull` and `/work-1/red-bull` intended to exist as separate pages? Should both appear in navigation? | `/work-1/redbull`, `/work-1/red-bull` |
| OD-5 | Where will the 22 audio MP3 files be hosted after leaving Squarespace? What audio player component replaces the Squarespace audio block? | `/therevisions`, `/therevisions-1`, `/instrument` |
| OD-6 | Who provides the AI chat widget ("Ask my AI")? What is the provider, API key, and domain configuration? Is it tied to the Squarespace domain? | `/`, footer |
| OD-7 | Is `/therevisions-1` (CMO Confessions) a sub-section of `/therevisions` or a standalone page? Should it be in the navigation? | `/therevisions-1` |
| OD-8 | Is `/instrument` intentionally unlisted? Is it a teaser, a draft, or a live page? Should it be discoverable in navigation or linked from `/therevisions`? | `/instrument` |
| OD-9 | What is the purpose of `/work-1`? Is it intended to replace or supplement the case study list on `/`? | `/work-1`, `/` |
| OD-10 | Is Squarespace commerce (`/cart`) being used or planned for use? Should it be preserved? | `/cart` |
| OD-11 | Is the Google Drive album download link on `/therevisions` the intended permanent distribution method, or will audio be self-hosted? | `/therevisions` |
