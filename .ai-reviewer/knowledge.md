# optical-studio-testing reviewer notes

## Architecture
This codebase is a Next.js application structured following the default conventions set by the framework. The project is organized predominantly around the `src/app` directory where the main pages (`layout.tsx` and `page.tsx`) reside, providing a clear separation of application structure and logic.

## Conventions
- **File Naming and Structure**: Pages are organized in the `src/app` directory, with filenames matching their routes (e.g., `page.tsx` for the root). Layout components such as `layout.tsx` define the global structure for pages. 
- **CSS and Utility Classes**: Tailwind CSS is used for styling, which promotes utility-first CSS classes in JSX/TSX files. For example, classes like `flex`, `items-center`, and `gap-4` are used for layout in `src/app/page.tsx`.
- **TypeScript Usage**: The codebase is configured to use TypeScript with the `tsconfig.json` allowing strict type checking and ensuring strong typing across the application.
- **Metadata Structure**: The metadata for the application is defined in `layout.tsx`, fostering a central location for document-related settings.
  
## Intentional non-standard choices
- **Font Management**: The project uses Next.js’s built-in font optimization by importing fonts (Geist) directly in `layout.tsx`. This approach may seem uncommon as many projects manually integrate fonts or utilize external styling but is leveraged here for optimization.

## Watch out for
- **Unused Imports**: Ensure there are no unused imports in `.tsx` files, particularly with the auto-import feature in VSCode or similar.
- **Tailwind Class Management**: Watch for redundancy in Tailwind CSS classes. For instance, repetitive class definitions or styles might indicate a refactor is needed.
- **Strict Type Checking**: Given the `strict: true` configuration in `tsconfig.json`, pay attention to type errors that would disrupt compiling, especially when integrating external libraries or components.