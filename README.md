# ML Xplainer

An interactive web application for explaining concepts through scroll-based animations and visualizations.

![Demo](assets\Animation.gif)

## Overview

ML Xplainer is a modular, extensible platform built with Next.js and TypeScript that creates engaging, interactive explanations of complex concepts. It combines narrative content with synchronized D3.js visualizations or images, gifs or videos in a scroll-driven interface.

## Key Features

- **Interactive Scrollytelling**: Uses react-scrollama for smooth scroll-based narrative progression
- **Dynamic Visualizations**: D3.js-powered animations including:
  - Line charts
  - Scatter plots
  - Bar charts
  - Composite visualizations

- **Support for Media** : Easily extensible to support images, videos and gifs along side text.
- **Modular Architecture**: Easily extensible system for creating new explainers
- **Mathematical Notation**: KaTeX integration for mathematical equations
- **Responsive Layouts**: Two layout options including side-by-side and text-only
- **Tech Stack**:
  - Next.js with TypeScript
  - Tailwind CSS with Typography plugin
  - MDX for content authoring
  - Framer Motion for animations

## Architecture

### Modular Explainer System

The application uses a registry-based system for managing different explainers. Each explainer consists of:

1. **Content Steps**: MDX files containing explanatory content
2. **Animations**: D3.js visualizations, images, videos or gifs that sync with content
3. **Layout Configuration**: Flexible layout option (side-by-side or text-only)

### Component Architecture

- **ExplainerPage**: Core component managing scroll interactions and step progression
- **AnimationPane**: Handles D3.js visualization rendering
- **Layouts**: Configurable layouts (SideBySideLayout, TextLayout)

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Creating Content

### Adding New Steps

Use the built-in scaffolder CLI:
```bash
npm run new-step -- "My Step Title"
```

### Creating a New Explainer

1. Create a new directory under `components/explainers/`
2. Add your content files in `content/`
3. Configure your explainer in `pages/explainers/modules/`
4. Register it in the explainer registry

## Layout Options

1. **Side-by-Side Layout**: Displays content alongside animations
   - Perfect for interactive explanations
   - Synchronized scrolling
   - Animation transitions

2. **Text Layout**: Full-width text content
   - Ideal for introductions or text-heavy sections
   - Enhanced typography with Tailwind Typography

## Technology Details

- **Next.js**: React framework for production
- **TypeScript**: Type safety and better developer experience
- **D3.js**: Data visualization library
- **react-scrollama**: Scroll-driven interactions
- **MDX**: Markdown with JSX support
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **KaTeX**: Mathematical equation rendering

## Development Guidelines

1. Keep animations modular and reusable
2. Use TypeScript types for component props
3. Follow the established layout patterns
4. Leverage MDX for content management
5. Maintain responsive design principles

## License

MIT
