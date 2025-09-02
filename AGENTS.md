# Aikyuu - AI-Powered Recruitment Platform

A modern React application for intelligent CV analysis and recruitment management.

## Tech Stack

- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite + TailwindCSS 3
- **State Management**: Zustand with persistence
- **UI Components**: Radix UI + TailwindCSS 3 + Lucide React icons
- **Testing**: Vitest

## Project Structure

```
src/                   # React SPA frontend
├── pages/                # Route components
├── components/           # Reusable components
│   ├── ui/              # UI component library
│   └── layout/          # Layout components
├── store/               # Zustand state management
├── types/               # TypeScript type definitions
├── data/                # Mock data and utilities
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # App entry point with routing
└── global.css           # TailwindCSS styling
```

## Key Features

### SPA Routing System

- Powered by React Router 6
- Routes defined in `src/App.tsx`
- Pages located in `src/pages/` directory

### State Management

- **Zustand stores** for different domains:
  - `positionsStore`: Job positions management
  - `criteriaStore`: Position criteria management
  - `resumesStore`: Resume/CV management
  - `analysisStore`: CV analysis results
  - `uiStore`: UI state (modals, dropdowns, etc.)
- **Persistence**: Data stores auto-save to localStorage
- **DevTools**: Full Redux DevTools integration

### Styling System

- **Primary**: TailwindCSS 3 with custom Aikyuu brand colors
- **Components**: Pre-built Radix UI component library
- **Fonts**: Montserrat, Poppins, Quicksand from Google Fonts
- **Utility**: `cn()` function for conditional classes

### Authentication Flow

- Sign In → Dashboard → Position Management → CV Analysis

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run preview    # Preview production build
npm test          # Run Vitest tests
npm run typecheck  # TypeScript validation
```

## Core Workflows

### 1. Position Management

- Create new job positions
- Add criteria for evaluation
- Upload candidate CVs
- Run AI analysis

### 2. CV Analysis

- AI-powered resume screening
- Criteria-based evaluation
- Detailed scoring and feedback
- Export results (CSV, Excel, JSON)

### 3. User Management

- Authentication system
- Profile management
- Credit system for CV processing
- Multi-language support (EN/JA)

## Architecture Notes

- **Pure Frontend**: No backend dependencies
- **Mock Data**: Uses local data for development
- **Type Safety**: Full TypeScript coverage
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized with selective re-renders
- **Accessibility**: ARIA compliant components

## Deployment

- **Build**: `npm run build` creates optimized static files
- **Deploy**: Can be deployed to any static hosting (Netlify, Vercel, etc.)
- **Environment**: Uses Vite environment variables (VITE\_\*)
