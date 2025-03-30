# Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-blueviolet)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%5E5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%5E3.4.1-blue.svg)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-new_york-orange)](https://ui.shadcn.com/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-%5E0.472.0-blue)](https://lucide.dev/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-brightgreen)](https://turbo.build/pack)

A personal portfolio project built with Next.js, TypeScript, and Tailwind CSS. This project showcases my skills and experience through a modern and responsive design.

## ✨ Features

*   **Next.js**: Utilizes the power of Next.js for server-side rendering, static site generation, and optimized performance.
*   **TypeScript**: Ensures type safety and improves code maintainability with TypeScript.
*   **Tailwind CSS**: Implements a utility-first CSS framework for rapid UI development and consistent styling.
*   **shadcn/ui**: Uses beautifully designed and accessible UI components built with Radix UI and Tailwind CSS.
*   **React Icons**: Integrates a variety of icons using React Icons.
*   **Framer Motion**: Adds smooth animations and transitions using Framer Motion.
*   **API Integration**: Fetches data from external APIs using `hmm-api` and `react-use-lanyard`.
*   **Comprehensive Gift Calculator**: A fun calculator made with `shadcn/ui`.

## 🛠️ Tech Stack

*   [Next.js](https://nextjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [shadcn/ui](https://ui.shadcn.com/)
*   [Lucide React](https://lucide.dev/)
*   [React Icons](https://react-icons.github.io/react-icons)
*   [Framer Motion](https://www.framer.com/motion/)
*   [react-use-lanyard](https://github.com/EthanJustice/react-use-lanyard)
*   [hmm-api](https://www.npmjs.com/package/hmm-api)

## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/babyo77/portfolio-firebase.git
    ```
2.  **Navigate to the project directory:**

    ```bash
    cd portfolio-firebase
    ```
3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Configuration

*   **`components.json`**: Configuration file for `shadcn/ui` components.
*   **`eslint.config.mjs`**: ESLint configuration for linting TypeScript and Next.js code.
*   **`next.config.ts`**: Next.js configuration file.
*   **`postcss.config.mjs`**: PostCSS configuration for Tailwind CSS.
*   **`tailwind.config.ts`**: Tailwind CSS configuration file.
*   **`tsconfig.json`**: TypeScript configuration file.

## 📂 Key Files and Directories

*   **`src/app/`**: Contains the main application code, including pages, layouts, and global styles.
    *   **`src/app/page.tsx`**: The main entry point of the application.
    *   **`src/app/layout.tsx`**: Defines the root layout of the application.
    *   **`src/app/globals.css`**: Global CSS file for Tailwind CSS.
*   **`src/components/`**: Reusable React components.
    *   **`src/components/ui/`**: UI components built with `shadcn/ui`.
*   **`src/lib/`**: Utility functions and API clients.
    *   **`src/lib/api.ts`**: API client for fetching data.
    *   **`src/lib/utils.ts`**: Utility functions for class name merging.
*   **`public/fonts/`**: Custom font files (Inter Display).

## ✨ Customization

*   **Tailwind CSS**: Customize the styling by modifying the `tailwind.config.ts` file.
*   **`shadcn/ui`**: Add or modify UI components using the `components.json` configuration.
*   **Fonts**: The project uses a local font (Inter Display).  You can replace or add more fonts in the `src/app/layout.tsx` file.

## 🚀 Building and Deploying

1.  **Build the project:**

    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```
2.  **Start the production server:**

    ```bash
    npm start
    # or
    yarn start
    # or
    pnpm start
    ```

    The project can be deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

## 📄 License

MIT License.
