<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## UI/UX Design System

Purpose: Provide a concise, implementable design system for `blog-with-rafi` focused on a premium, modern developer blog aesthetic. This section documents token names, recommended CSS variable usage, Tailwind integration notes, typography, and practical UI rules so contributors can implement consistent, accessible UI without changing the project's architecture.

### Design direction

- Premium modern developer blog.
- Clean, aesthetic, readable, and responsive.
- Inspired by developer-learning blogs, but fully original — do not copy exact designs.

### Color system — "Midnight Developer + Purple Accent"

Light mode tokens:

- Background: `#F8FAFC`
- Surface: `#FFFFFF`
- Surface Soft: `#F1F5F9`
- Text Primary: `#0F172A`
- Text Muted: `#64748B`
- Border: `#E2E8F0`
- Primary: `#2563EB`
- Accent: `#7C3AED`

Dark mode tokens:

- Background: `#020617`
- Surface: `#0F172A`
- Surface Soft: `#111827`
- Text Primary: `#F8FAFC`
- Text Muted: `#94A3B8`
- Border: `#1E293B`
- Primary: `#60A5FA`
- Accent: `#A78BFA`

### CSS variables (recommended)

Define tokens at the top of `app/globals.css` or a dedicated `styles/design-tokens.css` and reference them throughout components.

Example (light-first, with dark override):

```css
:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --surface-soft: #f1f5f9;
  --text-primary: #0f172a;
  --text-muted: #64748b;
  --border: #e2e8f0;
  --primary: #2563eb;
  --accent: #7c3aed;
  --radius-sm: 8px;
  --radius-md: 12px;
  --shadow-sm: 0 1px 2px rgba(16, 24, 40, 0.04);
  --shadow-md: 0 6px 20px rgba(16, 24, 40, 0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #020617;
    --surface: #0f172a;
    --surface-soft: #111827;
    --text-primary: #f8fafc;
    --text-muted: #94a3b8;
    --border: #1e293b;
    --primary: #60a5fa;
    --accent: #a78bfa;
  }
}
```

Notes:

- Use `color-scheme` if you want to opt-in to light-only or dark-only experiences, but prefer honoring system preferences unless explicitly locked.
- Keep tokens semantic (e.g. `--surface-soft`) rather than design-specific (e.g. `--card-bg-1`) so they remain reusable.

### Tailwind integration

- Map Tailwind theme colors to the CSS variables so components can use both utilities and token-driven colors.
- Example `tailwind.config.js` snippet:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        skin: {
          bg: "var(--bg)",
          surface: "var(--surface)",
          "surface-soft": "var(--surface-soft)",
          "text-primary": "var(--text-primary)",
          "text-muted": "var(--text-muted)",
          border: "var(--border)",
          primary: "var(--primary)",
          accent: "var(--accent)",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
    },
  },
};
```

Usage examples:

- Card background: `bg-skin-surface` or `bg-[var(--surface)]` when using raw CSS.
- Muted text: `text-skin-text-muted`.
- Primary button: `bg-skin-primary text-white hover:brightness-105 transition`.

### Typography

- Heading font: `Space Grotesk` (use via Google Fonts or local import).
- Body font: `Inter`.
- Code font: `JetBrains Mono`.

Example font-face / import usage in `app/layout.tsx` or `globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;600&family=JetBrains+Mono:wght@400;600&display=swap");

html {
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial;
}
h1,
h2,
h3,
h4 {
  font-family: "Space Grotesk", ui-sans-serif, system-ui;
}
code,
pre {
  font-family:
    "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco,
    "Roboto Mono", monospace;
}
```

### UI rules & best practices

- Reusable components: build `Card`, `Badge`, `Pill`, `Button`, `Container`, `Prose` wrappers and prefer composition.
- Surfaces: use `--surface` for primary card background and `--surface-soft` for subtle differentiated areas.
- Borders: soft 1px borders using `--border` with subtle rounded corners and `--shadow-sm` for layering.
- Gradients: use very subtle linear gradients for hero or CTA backgrounds combining `--primary` → `--accent` at low opacity.
- Hover/interaction: smooth transitions (`transition: background-color 160ms, transform 160ms, box-shadow 160ms;`) and gentle elevation on hover (increase shadow slightly, translateY -1px).
- Animations: minimal; prefer instant or very short transitions to preserve UX and accessibility.
- Accessibility: maintain minimum contrast ratios for text (WCAG AA for normal text), use `text-skin-text-primary` for body copy, `text-skin-text-muted` for secondary copy; ensure focus states for interactive elements (outline or ring using `--primary`).
- Prose: Use a `Prose` utility class for blog content (`max-width`, `line-height: 1.7`, `font-size` scale) and ensure code blocks have good contrast on both themes.

### Implementation notes

- Do not create a completely new architecture; add tokens and small shared components inside `components/` and include token imports in `app/globals.css`.
- Keep changes incremental: add tokens first, wire Tailwind mapping, then refactor components to use tokens.
- Review each change with `npm run build` and manual inspection in both light and dark (or at least with `prefers-color-scheme`) to ensure readability.

If you'd like, I can:

- Add the token file and Tailwind mapping directly to the repo.
- Create a `components/UI` folder with `Card`, `Button`, and `Prose` that follow these rules.
