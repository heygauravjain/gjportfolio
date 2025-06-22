# Deepak Jangra - Portfolio

Modern portfolio website built with Next.js 15, showcasing professional experience and projects with enterprise-grade performance and SEO.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## Features

- **Modern Stack**: Next.js 15 + React 19 + TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Blog System**: MDX-powered blog with dynamic routing
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Performance**: Optimized images, fonts, and caching strategies
- **Analytics**: Vercel Analytics and Speed Insights integration
- **Code Quality**: Biome linting with pre-commit hooks

## Tech Stack

### Framework & Core
- **Next.js 15.3.4** - App Router with React Server Components
- **React 19** - Latest React features
- **TypeScript** - Full type safety

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Content & SEO
- **Fumadocs** - MDX processing for blog
- **JSON-LD** - Structured data for search engines
- **Dynamic Sitemap** - Auto-generated XML sitemap
- **RSS Feed** - Content syndication

### Development
- **Biome** - Linting and formatting
- **Husky** - Git hooks
- **Commitlint** - Conventional commits
- **Turbopack** - Fast development builds

## Quick Start

```bash
# Clone repository
git clone https://github.com/heydeepakjangra/deepakjangra.git
cd deepakjangra

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Scripts

### Development
```bash
pnpm dev           # Start development server with Turbopack
pnpm build         # Build for production
pnpm start         # Start production server
pnpm build:analyze # Build with bundle analyzer (ANALYZE=true)
```

### Code Quality
```bash
pnpm lint          # Check linting issues with Biome
pnpm lint:fix      # Fix linting issues automatically
pnpm format        # Check code formatting with Biome
pnpm format:fix    # Fix formatting issues automatically
pnpm check         # Run both linting and formatting checks
pnpm check:fix     # Fix both linting and formatting issues
```

### Setup & Maintenance
```bash
pnpm postinstall   # Process MDX files (runs automatically after install)
pnpm prepare       # Setup Husky git hooks (runs automatically)
```

## Project Structure

```
deepakjangra/
├── app/                   # Next.js App Router
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout
│   ├── blogs/            # Blog system
│   ├── sitemap.ts        # Dynamic sitemap
│   ├── robots.ts         # Robots.txt
│   └── feed.xml/         # RSS feed
├── components/           # UI components
│   ├── ui/              # shadcn/ui components
│   └── magicui/         # Custom animated components
├── data/                # Content and configuration
│   ├── resume.ts        # Personal data
│   ├── seo.ts           # SEO config
│   └── site-config.ts   # Site settings
├── lib/                 # Utilities
│   ├── utils.ts         # Common utilities
│   └── structured-data.ts # JSON-LD schemas
├── content/             # Blog posts (MDX)
└── public/              # Static assets
```

## SEO Implementation

- **Meta Tags**: Complete Open Graph and Twitter Cards
- **Structured Data**: Person, Website, and Blog schemas
- **Sitemap**: Dynamic XML generation with blog posts
- **RSS Feed**: Full content syndication
- **Performance**: Optimized Core Web Vitals
- **Security Headers**: XSS protection and CSP

## Performance Features

- **Image Optimization**: AVIF/WebP formats with lazy loading
- **Font Optimization**: Self-hosted Satoshi font family
- **Caching**: Aggressive caching for static assets
- **Bundle Analysis**: Webpack bundle size monitoring
- **Compression**: Brotli/Gzip compression

## Development Workflow

The project enforces code quality through:
- **Pre-commit hooks** that run linting and formatting
- **Conventional commits** for consistent git history
- **TypeScript** for type safety
- **Biome** for ultra-fast linting and formatting

## Deployment

Optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Railway**
- Any Node.js hosting platform

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contact

- **Website**: [deepakjangra.com](https://deepakjangra.com)
- **GitHub**: [@heydeepakjangra](https://github.com/heydeepakjangra)
- **LinkedIn**: [@heydeepakjangra](https://linkedin.com/in/heydeepakjangra)
- **Twitter**: [@heydeepakjangra](https://x.com/heydeepakjangra) 