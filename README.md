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

- `yarn dev` - Start development server on port 5173
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Run ESLint with automatic fixes
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn type-check` - Run TypeScript type checking

### Code Quality Tools

This project uses several tools to maintain code quality:

#### ESLint

- **Purpose**: Catches bugs, enforces coding standards, and maintains code consistency
- **Configuration**: `.eslintrc.cjs`
- **Plugins**: React, React Hooks, JSX A11y (accessibility), Import organization, Prettier integration
- **Key Rules**:
  - Import organization and sorting
  - React best practices (no unused props, proper hooks usage)
  - Accessibility requirements (alt text, ARIA attributes)
  - Code style consistency

#### Prettier

- **Purpose**: Automatic code formatting for consistent style
- **Configuration**: `.prettierrc`
- **Features**:
  - Single quotes, no semicolons
  - 2-space indentation
  - 80 character line width
  - Trailing commas for ES5 compatibility

#### TypeScript

- **Purpose**: Static type checking for better development experience
- **Configuration**: `tsconfig.json` and `tsconfig.node.json`
- **Benefits**: Catch type errors at compile time, better IDE support

#### VS Code Integration

- **Automatic formatting on save**
- **ESLint error highlighting**
- **Auto-fix on save for ESLint rules**
- **Import organization on save**

### CI/CD Pipeline

The project includes GitHub Actions workflow that:

- Runs on push and pull requests to main branch
- Tests against Node.js 20.x
- Installs dependencies with Yarn
- Checks code formatting
- Runs type checking
- Runs ESLint
- Builds the application
- Uploads build artifacts

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
