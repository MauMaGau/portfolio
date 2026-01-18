# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this Vue.js portfolio project.

## Project Overview

This is a Vue 3 portfolio website built with Vite, TypeScript, and modern tooling. The project showcases David Townsend's work as a full-stack design engineer.

## Build & Development Commands

### Core Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs type-check and build-only in parallel)
- `npm run prod` - Production build only
- `npm run preview` - Preview production build locally

### Code Quality

- `npm run lint` - Run ESLint with auto-fix and caching
- `npm run type-check` - Run TypeScript type checking with vue-tsc
- `npm run format` - Format code with Prettier (writes to src/)

### Testing

- `npm run test:unit` - Run unit tests with Vitest
- `npm run test:e2e` - Run end-to-end tests with Playwright

### Running Single Tests

- Unit tests: `npm run test:unit -- [test-file-pattern]` (e.g., `npm run test:unit -- Button.test.vue`)
- E2E tests: `npm run test:e2e -- [test-file-pattern]` (e.g., `npm run test:e2e -- login.spec.ts`)

## Code Style Guidelines

### File Structure & Naming

- **Components**: PascalCase (e.g., `ThemeSwitcher.vue`, `Typewriter.vue`)
- **Views**: PascalCase with "View" suffix (e.g., `HomeView.vue`, `AboutView.vue`)
- **Directories**: PascalCase for feature directories (e.g., `Components/`, `Views/`, `Assets/`)
- **Files**: Use descriptive names, avoid abbreviations

### Import Conventions

```javascript
// Vue imports first
import { createApp } from "vue";

// Local imports with @ alias
import App from "@/App.vue";
import router from "@/router";
import "@/Assets/global.scss";

// Component imports (grouped by type)
import PlaygroundParticles from "@/Components/Playground/Particles.vue";
import SyntaxHighlight from "@/Components/Playground/SyntaxHighlight.vue";
```

### Vue Component Style

- Use `<script setup>` syntax for composition API
- Import components at the top of script section
- Use kebab-case for component names in templates
- Prefer reactive refs over reactive objects when possible

### TypeScript & Types

- This project uses TypeScript but many files are `.js` - maintain consistency with existing files
- When adding new components, consider using `.ts` for better type safety
- Use type annotations for function parameters and return values
- Prefer interfaces over types for object shapes

### CSS & Styling

- Use SCSS with `<style lang="scss">` in Vue components
- CSS custom properties (CSS variables) for theming in `src/Assets/theme.scss`
- Global styles in `src/Assets/global.scss`
- Use BEM-like naming for component-specific classes
- Mobile-first responsive design approach

### Component Patterns

- **Props**: Use camelCase in script, kebab-case in templates
- **Events**: Use kebab-case (e.g., `@click.prevent`)
- **Slots**: Use descriptive slot names with `#` shorthand
- **Teleport**: Use for portal-like behavior (see Expander component)

### State Management

- Uses Pinia for state management (see package.json)
- Local component state with `ref()` and `reactive()`
- Router state via Vue Router for navigation

### Error Handling

- Use try-catch blocks for async operations
- Provide meaningful error messages
- Use Vue's error boundaries where appropriate

### Accessibility

- Use semantic HTML5 elements
- Provide alt text for images
- Ensure keyboard navigation support
- Use ARIA attributes where needed

## Project-Specific Patterns

### Global Component Registration

Components are registered globally in `src/main.js`:

```javascript
app.component("PlaygroundParticles", PlaygroundParticles);
app.component("EB", EveryByway); // Short aliases allowed
```

### Theme System

- Dark/light theme toggle via body class
- CSS custom properties in `:root` and `.dark` selector
- Theme switching handled in `ThemeSwitcher.vue`

### Media Component Pattern

The `Media.vue` component is used consistently for project cards and playground items with:

- `img-filename` prop for images
- `img-alt` for accessibility
- `title` for display
- `view` prop for routing (optional)
- Named slots for `#title` and `#description`

### Router Structure

- File-based routing in `src/router/index.js`
- Dynamic routes for playground and projects
- Use `$route.name` for conditional rendering

## Tooling Configuration

### ESLint

- Uses Vue 3 + TypeScript + Prettier configuration
- Flat config format in `eslint.config.ts`
- Auto-fixing enabled in npm script

### Vite

- Vue 3 + JSX support enabled
- Path alias `@` points to `src/`
- DevTools plugin for development

### Vitest

- jsdom environment for component testing
- Configured in `vitest.config.ts`
- Test files should be in `src/**/__tests__/*`

## Development Notes

- Node.js >=24 and npm >=10 required
- Uses modern ES modules (`"type": "module"`)
- Sass preprocessing for styles
- Reset CSS for consistent cross-browser styling
- Inter font for body text, Roboto Mono for headings

## Testing Guidelines

- Unit tests for component logic and behavior
- E2E tests for user flows and navigation
- Test files should be co-located with components or in `__tests__` directories
- Use Vue Test Utils for component testing
- Mock external dependencies and API calls
