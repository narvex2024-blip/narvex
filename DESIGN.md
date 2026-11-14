# Narvex — Design System

## Brand overview
Narvex offers practical automotive security accessories to drivers in Colombia. The storefront should feel direct, confident, useful and easy to trust, with the product and buying path immediately clear.

## Design thesis
A bold, road-ready retail identity: high-contrast black, white and signal orange make the product and purchase decision impossible to miss.

## Colors
- Asphalt black — `#101010` — `--nv-ink` — headers, footer, primary text, dark panels.
- Signal orange — `#F05A28` — `--nv-accent` — primary actions and key emphasis.
- White — `#FFFFFF` — `--nv-paper` — main surface and text on dark surfaces.
- Mist — `#F2F2F0` — `--nv-soft` — alternating content surface.
- Steel — `#626262` — `--nv-muted` — supporting copy.
- Line — `#DEDEDB` — `--nv-line` — separators and borders.

## Typography
- Display and headings: `Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif`; locally available condensed sans-serif stack, regular face, visually strong and compact. Hero 50–82px, section headings 39–60px, card headings 24–25px; line height 0.94–1.0; neutral tracking 0–0.005em.
- Body and controls: `"Trebuchet MS", "Segoe UI", Arial, sans-serif`; 400–800, 14–16px, line height 1.62–1.7.
- Price: display stack, 42–54px, tabular numerals.
- Primary CTA and compact navigation: display stack, 15–18px, restrained tracking 0.055em.
- Small uppercase labels use display stack at 11–12px with 0.09em letter spacing.
- No external font provider or remote font dependency. Keep same-classification sans-serif fallbacks.

## Spacing and composition
- Content max width 1200px; desktop gutters 28–40px, mobile gutters 18px.
- Main sections use 64–88px vertical rhythm on desktop and 44–60px on mobile.
- Card and media radius 3–8px; buttons 4px; avoid pill-shaped UI.
- Use clear grid alignment, hard edges and strong dark/light transitions. Product photography is large, cleanly cropped and never obscured.
- Shadows are restrained; orange is an action color, not a page background.

## Components
- Announcement: compact black strip, white centered copy.
- Header: white background, logo left, concise anchor navigation and cart link right; compact on mobile.
- Primary button: orange background, near-black text, condensed display face, minimum 54px height, visible focus.
- Secondary link: black text with underline or border, no competing filled style.
- Product hero: strong condensed headline and short readable explanation beside a large product image; price and purchase action grouped together.
- Benefit cards: white surfaces, dark headings in condensed display face, orange detail marks, short practical copy.
- Steps: clear numbered list with generous spacing and optional real product-in-use image.
- FAQ: native details/summary disclosure rows with clear separators.
- Footer: black surface, white logo/brand, concise support and purchase information.
- Cart: simple line-item list, clear total and checkout action.

## Dos and Don'ts
- Do make the product, price, delivery terms and purchase action visible immediately.
- Do use concise, factual Spanish for Colombian buyers.
- Do retain honest safety language: the device is an additional deterrent, not a guarantee against theft.
- Do make all key text, images and product selection editable in Shopify's theme editor.
- Do use expressive condensed typography for impact and a calmer body face for comfortable reading.
- Don't invent reviews, guarantees, delivery times, compatibility or security claims.
- Don't overload the page with badges, popups, gradients or decorative shapes.
- Don't use remote font dependencies or sacrifice readability on mobile.

## Motion philosophy
Motion is functional only: subtle hover/focus feedback and smooth in-page anchor movement. Respect reduced-motion preferences; no autoplay, parallax or attention-grabbing loops.
