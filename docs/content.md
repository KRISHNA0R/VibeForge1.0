# Current Site Content — Full Extraction

> Source: `iron-man-main` — Next.js 16 + React 19 + Tailwind CSS 4
> Theme: Iron Man / Stark Industries HUD (KEEPING THIS THEME)
> Scroll/Video sections: UNCHANGED (1st & 2nd canvas sections stay as-is)

---

## 1. Site Metadata

| Field | Value |
|---|---|
| Title | Stark Industries — Mark LXXXV |
| Description | Arc reactor online. J.A.R.V.I.S. standing by. Scroll to engage the Mark LXXXV. |
| URL | http://localhost:3000 |

---

## 2. Navbar

| Element | Current Text | Link |
|---|---|---|
| Brand | Stark / Industries | `/` |
| Nav Link 1 | Systems | `#systems` |
| Nav Link 2 | Archive | `#footer` |
| CTA Button | Engage | `#systems` |

---

## 3. Hero Section (1st Scroll Canvas — UNCHANGED)

| Element | Current Text |
|---|---|
| Eyebrow Badge | MARK LXXXV // STARK INDUSTRIES // ONLINE |
| Main Heading | I am Iron Man. |
| Sub Text | Mark LXXXV nanotech suit. Arc reactor calibrated. Scroll to run a full system diagnostic — J.A.R.V.I.S. is holding on the line. |
| Sub Label | Protocol — Mk LXXXV |
| Reveal Text | Build with Devini |
| Reveal Subtext | Interfaces & products, engineered like the Mark LXXXV. |
| Telemetry Label | Telemetry Link — Live |
| Arc Reactor | 87.3% |
| Sequence | SEQ 001 / 169 |

### Dialogue Cards (Hero)

| ID | Quote | Speaker | Film | Show Range |
|---|---|---|---|---|
| d1 | Sometimes you gotta run before you can walk. | Tony Stark | IRON MAN — 2008 | 0.1–0.3 |
| d2 | Genius. Billionaire. Playboy. Philanthropist. | Tony Stark | THE AVENGERS — 2012 | 0.35–0.55 |
| d3 | Part of the journey is the end. | Tony Stark | AVENGERS: ENDGAME — 2019 | 0.6–0.8 |

---

## 4. Cinematic Reveal (2nd Scroll Canvas — UNCHANGED)

| Element | Current Text |
|---|---|
| Heading 1 (fade out) | I am Inevitable. |
| Heading 2 (fade in) | And I am Iron Man. |
| Sub Text | Endgame — the snap heard across the universe. J.A.R.V.I.S. held the last frame so we could rebuild from it. |
| Label 1 | Flight Log — Archived |
| Sequence | SEQ 001 / 169 |
| Label 2 | MARK III // ARCHIVE |
| Label 3 | J.A.R.V.I.S. // PLAYBACK |
| Outro CTA | Next — engage |
| Outro Button | Open diagnostics |

### Beat Cards (Cinematic Reveal)

| ID | Label | Quote | Speaker | Film | Show Range |
|---|---|---|---|---|---|
| b1 | 01 — Ignition | Yeah, I can fly. | Tony Stark | IRON MAN — 2008 | 0.1–0.3 |
| b2 | 02 — Sync | The suit and I are one. | Tony Stark | IRON MAN 3 — 2013 | 0.6–0.8 |
| b3 | 03 — Aftermath | It's not about how much we lost. It's about how much we have left. | Tony Stark | AVENGERS: ENDGAME — 2019 | 0.6–0.8 |

---

## 5. Systems Nominal Section (CHANGING)

### Current Content

| Element | Current Text |
|---|---|
| Eyebrow Badge | J.A.R.V.I.S. // SYSTEMS NOMINAL |
| Heading | "And I… am… Iron Man." |
| Description | A snap heard around the universe. The Mark LXXXV was engineered in six hours and retired in seconds — its final moment, the reason any of us are still here. Every readout below is what J.A.R.V.I.S. logged in the last frame before the blast. |
| CTA Button | Open Suit Archive → #footer |

### Current Telemetry Rows

| Label | Note | Value |
|---|---|---|
| Suit Integrity | Nanoparticle lattice | 99.2% |
| Arc Output | Cold-fused, Vibranium core | 3.4 GJ/s |
| Flight Ceiling | Stratospheric assist | 72.8 km |
| Response Time | Neural link, J.A.R.V.I.S. | 0.018 s |

---

## 6. Footer (CHANGING)

### Brand Block

| Element | Current Text |
|---|---|
| Brand | Stark / Industries |
| Address | © Stark Industries — 10880 Malibu Point, 90265. Registered trademark of the Office of Howard & Anthony E. Stark. |

### Archive Grid (6 items)

| Item | Location |
|---|---|
| Mark I | Cave, Afghanistan |
| Mark III | Monaco Circuit |
| Mark VII | Stark Tower |
| Mark XLIV | Hulkbuster |
| Mark L | Titan |
| Mark LXXXV | Endgame |

### Footer Bottom

| Element | Current Text |
|---|---|
| Build Info | Build 2026.04.21 · Mark LXXXV · J.A.R.V.I.S. Online |
| Disclaimer | Proof of concept — fan art, no commercial use |

---

## 7. Design Tokens (KEEPING)

| Token | Value | Purpose |
|---|---|---|
| `--background` | `#0a0a0b` | Near-black page background |
| `--foreground` | `#e4e4e7` | Light text |
| `--muted` | `#71717a` | Gray text |
| `--accent` | `#d4a22f` | Gold / arc-reactor amber |
| `--accent-soft` | `rgba(212,162,47,0.14)` | Tinted gold backdrop |
| `--card-bg` | `rgba(24,24,27,0.55)` | Glass-morphism card fill |
| `--card-border` | `rgba(255,255,255,0.08)` | Subtle white border |

---

## 8. Libraries & Tools Used

| Library | Version | Purpose |
|---|---|---|
| Next.js | 16.2.2 | React framework |
| React | 19.2.4 | UI library |
| Tailwind CSS | 4 | Utility-first CSS |
| Framer Motion | 12.38.0 | Section entrance animations |
| Lenis | 1.3.21 | Smooth scroll |
| @phosphor-icons/react | 2.1.10 | Icons |
| Geist | 1.7.0 | Font family (sans + mono) |
