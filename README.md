# NXDUNE Project Management Landing Page Prototype

A responsive landing page for NXDUNE, a project management platform by Bourntec Products, featuring a split-pane hero section with animated metrics dashboard and warm conversion-focused styling.

## Key Features

- **Split Pane Hero Layout**: Bold typography with gradient text effects paired with an interactive dashboard infographic
- **Animated Dashboard Card**: SVG circular progress rings, animated progress bars, live stats, and activity feed
- **Sticky Navigation Header**: Logo, Explore dropdown, Release Notes, User Manual links, and prominent Login CTA
- **HashRouter Integration**: Routes for landing, release notes, and user manual pages
- **Warm Color Palette**: Cream (#fff7ed), coral accents (#f97316), and purple data visualization elements

## How to Run

```bash
npm install
npm run dev
```

Open the Vite local URL displayed in your terminal.

## Tech Stack

React 18 + Vite + Tailwind CSS + react-router-dom (HashRouter) + Lucide React icons

## Project Structure

- `src/data/mockData.js` - Sprint metrics, task progress, and activity feed data
- `src/components/NXDUNELanding.jsx` - Hero section with animated headline and interactive dashboard infographic
- `src/App.jsx` - Main app with HashRouter, Header with navigation, and route definitions
- `tailwind.config.js` - Extended theme with warm conversion colors and custom animations
