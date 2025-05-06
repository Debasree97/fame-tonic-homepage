# FameTonic Static Homepage

A responsive landing page for **FameTonic**, built using **Next.js 15** and **Tailwind CSS v4**. This project implements the figma static homepage design with being pixel-perfect at two breakpoints:

- 📱 **Mobile** – 390px width
- 🖥️ **Desktop** – 1440px width

---

## 🌐 Live Preview

Visit [fametonic homepage](https://fame-tonic-homepage.vercel.app/) to view the homepage.

---

## 📁 Project Structure

```
src/
├── app/                          # App Router structure
│   ├── about-us/
│   ├── contact-us/
│   ├── layout.tsx
│   ├── page.tsx                  # Homepage entry
│   └── globals.css               # Tailwind setup & base styles

├── components/                   # UI components
│   ├── heroSection/              # Main hero section content
│   │   └── index.tsx
│   ├── promoBannerSection/       # Promotional banner at the top
│   │   └── index.tsx
│   ├── navbarSection/            # navigation bar
│   │   └── index.tsx
│   ├── icons/                    # Icon components
│   │   ├── chevronRightIcon.tsx
│   │   ├── fameTonic.tsx
│   │   └── fameTonicMobileView.tsx
│   ├── utils.tsx                 # Shared utilities
│   └── hooks/
│       └── useResponsive.tsx     # Responsive detection logic
│       └── useResponsivePositioningValue.ts   # Responsive position value detection logic

public/
└── images/                       # Static assets
    ├── banner.png
    └── bannerDesktop.png
```

---

## 📦 Tech Stack

- **Next.js 15 (App Router)**
- **Tailwind CSS v4**
- **TypeScript**
- **Google Fonts**: Figtree, Urbanist, Nunito

---

## ✅ Status

- [x] Responsive
- [x] Pixel-Perfect Mobile dimension (390px only)
- [x] Pixel-Perfect Desktop dimension (1440px only)
- [x] Static layout only — no dynamic functionality
- [x] Pixel perfect design using Tailwind and custom hooks

---
