# Copilot Instructions

## Project Overview

This is a React application built with Vite, Material-UI, and React Router. It features a clean navigation bar with links to different pages and external social media profiles.

## Allowed Commands

**IMPORTANT**: The GitHub Copilot agent is permitted to run the following bash commands without asking for permission:

- `yarn build` - Build the application for production
- `yarn dev` - Start the development server
- `yarn lint` - Run ESLint to check code quality
- `yarn format` - Format code with Prettier
- `yarn type-check` - Run TypeScript type checking
- `yarn lint:fix` - Run ESLint with automatic fixes
- `yarn format:check` - Check if code is properly formatted
- `yarn preview` - Preview the production build

## Development Guidelines

### Quality Assurance Workflow

**IMPORTANT**: After making any code changes, always run the following QA commands in sequence:

1. `yarn format` - Format code with Prettier
2. `yarn type-check` - Run TypeScript type checking
3. `yarn lint:fix` - Run ESLint with automatic fixes
4. `yarn build` - Ensure the application builds successfully

These commands ensure code quality, consistency, and that changes don't break the build. All commands must pass before considering a change complete.

### Code Style

- The project uses ESLint and Prettier for code quality and formatting
- Path aliases are configured: `@/` for `src/`, `@pages/` for `src/pages/`, `@components/` for `src/components/`
- Follow Material-UI best practices for component development
- Use React functional components with hooks
- File types: Do not create plain TypeScript `.ts` files for React components — use `.tsx` for any TypeScript React components. Other `.ts` files (non-React utilities) are allowed only when necessary and approved.

### Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Application pages/routes
├── App.jsx        # Main application with routing
├── main.jsx       # Application entry point
└── index.css      # Global styles
```

### Key Technologies

- **React 19** - Main framework
- **Material-UI** - UI component library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **ESLint + Prettier** - Code quality tools

### Notes

- The navigation bar includes Home, Open Source Projects, GitHub, and LinkedIn links
- Material-UI theming is configured in App.jsx
- All external links should use `noopener,noreferrer` for security
- Components should be exported through index files for clean imports
