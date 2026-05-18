# Sinister Studios

> film your imaginations.

The official cinematic portfolio of **Sinister Studios** — an independent production house founded in 2023 by Dr Usmaan Ali, based in Mirpur, Azad Kashmir.

---

## Stack

- **React 18** + **Vite** — fast dev, lean builds
- **Tailwind CSS** — custom cinematic theme (matte black + blood red)
- **Framer Motion** — page transitions and scroll reveals
- **Lenis** — buttery smooth scrolling
- **Lucide React** — icons

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
sinister-studios/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── posters/        # Film posters (Ifrit, Rock Talk, Backyard)
│   │   └── founder/        # Founder portrait
│   ├── components/         # Reusable UI (Navbar, Logo, Cursor, etc)
│   ├── sections/           # Page sections (Hero, About, Films, etc)
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Global CSS + Tailwind
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
├── netlify.toml            # Netlify deploy config
└── package.json
```

---

## Sections

1. **Hero** — Animated cinematic landing with floating embers and mouse-reactive lighting
2. **About** — Studio bio with editorial layout and stats
3. **Films** — Featured filmography with hover-reveal cards
4. **Services** — Nine production services in a grid layout
5. **Founder** — Dr Usmaan Ali portrait with grayscale + red treatment
6. **Contact** — Contact form (mailto) + studio details

---

## Deployment (Netlify)

### Option A — One-click via GitHub

1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
3. Select your `sinister-studios` repo
4. Netlify auto-detects the config from `netlify.toml`
5. Click **Deploy site**

### Option B — Manual deploy

```bash
npm run build
# Drag the `dist` folder to Netlify dashboard
```

---

## Brand System

| Token | Value |
|---|---|
| Matte Black | `#050505` |
| Graphite | `#121212` |
| Blood Red | `#8B0000` |
| Crimson Glow | `#C1121F` |
| Soft White | `#F5F5F5` |

**Display Font:** Bebas Neue / Anton
**Editorial Font:** Cormorant Garamond
**Body Font:** Inter
**Mono Font:** JetBrains Mono

---

## Contact

**Phone / WhatsApp:** 0334 6652913
**Email:** sinisterstudiospcl74@gmail.com
**Studio:** Sector E2, Total RK Plaza, Mirpur, Azad Kashmir

---

© Sinister Studios. All rights reserved.
