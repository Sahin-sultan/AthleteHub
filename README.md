# AthleteHub

A modern sports gear e-commerce platform built for athletes who demand quality and performance.

## Overview

AthleteHub is a full-featured e-commerce platform focused on sports equipment and apparel. The site features a dark editorial design, smooth animations, and an intuitive shopping experience.

## Tech Stack

- **React 18** with TypeScript for type safety
- **Vite** for fast builds and hot module replacement
- **TailwindCSS** for utility-first styling
- **Framer Motion** for animations and transitions
- **React Router** for client-side navigation
- **Radix UI** components with custom styling
- **TanStack Query** for data fetching (future API integration)

## Features

- Product catalog with filtering and search
- Shopping cart with context state management
- Responsive design optimized for all devices
- Dark editorial theme with custom typography
- Smooth page transitions and micro-interactions
- SEO-friendly routing structure

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or bun as an alternative)
- Git for version control

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate into the project
cd athlete-hub

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm test` - Run tests with Vitest

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── layout/      # Header, Footer, Layout wrappers
│   ├── sections/    # Page sections (Hero, Featured, etc.)
│   └── ui/          # Base UI components (shadcn/ui)
├── context/         # React context providers
├── data/            # Static data and mock products
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Route components
└── test/            # Test files and setup
```

## Customization

### Theming

The color scheme is defined in [tailwind.config.ts](tailwind.config.ts) and can be adjusted to match your brand. The current theme uses a dark editorial style with accent highlights.

### Typography

- **Headlines**: Playfair Display (serif, editorial feel)
- **Body**: Inter (clean, readable sans-serif)

### Adding Products

Products are currently defined in [src/data/products.ts](src/data/products.ts). In a production environment, these would be fetched from a backend API.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `npm run build` and deploy the `dist` folder
- **Netlify**: Connect your Git repo for automatic deployments
- **GitHub Pages**: Use the build output for static hosting

## License

MIT

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
