# Website Core

A React application built with Vite for fast development and building.

## Development

This project is set up with a VS Code devcontainer for consistent development environment.

### Getting Started

1. **Using devcontainer (Recommended):**
   - Open this project in VS Code
   - When prompted, click "Reopen in Container" or use Command Palette: "Dev Containers: Reopen in Container"
   - The container will automatically install dependencies

2. **Local development:**
   ```bash
   npm install
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server on port 5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Development Environment Features

The devcontainer includes:
- Node.js 18
- Pre-installed VS Code extensions for React/JavaScript development
- Prettier for code formatting
- ESLint for code linting
- Auto port forwarding for development server

### Project Structure

```
├── public/          # Static assets
├── src/             # Source code
│   ├── assets/      # Assets like images, fonts
│   ├── App.jsx      # Main App component
│   ├── App.css      # App styles
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
└── package.json     # Dependencies and scripts
```