# AI Rules for Estudiantes Unidos GA Application

This document outlines the technical stack and guidelines for developing features within this Next.js application.

## Tech Stack Overview

*   **Framework:** Next.js (App Router) for building server-rendered and client-side React applications.
*   **Language:** TypeScript for robust, type-safe code.
*   **Styling:** Tailwind CSS for a utility-first approach to styling, ensuring responsive and consistent designs.
*   **UI Components:** Leverages shadcn/ui for pre-built, accessible components. Custom components are built with Tailwind CSS.
*   **Icons:** `lucide-react` for a comprehensive set of customizable SVG icons.
*   **State Management:** React's built-in hooks (`useState`, `useEffect`, etc.) for efficient component-level state management.
*   **Animations:** `tw-animate-css` for declarative animations and custom CSS `@keyframes` for advanced effects.
*   **Utilities:** `clsx` and `tailwind-merge` for intelligent class string manipulation.
*   **Analytics:** Vercel Analytics for performance monitoring and usage insights.
*   **Fonts:** Next.js Font Optimization for improved loading performance.

## Library Usage Rules

*   **Framework:** Always use Next.js features (e.g., App Router, Image component, Font optimization) for page and component development.
*   **Styling:** Exclusively use Tailwind CSS for all styling. Custom CSS should be limited to `app/globals.css` for global styles or `@keyframes`. Use the `cn` utility (`lib/utils.ts`) for combining classes.
*   **UI Components:** Prioritize shadcn/ui components. If a component is not available or needs significant customization, create a new, small, and focused component in `components/` or `components/ui/`. Do not modify shadcn/ui source files directly.
*   **Icons:** Use `lucide-react` for all icons.
*   **State Management:** Use React's `useState` and `useEffect` for local component state. Avoid introducing external state management libraries unless a clear, complex global state requirement is identified.
*   **Routing:** Utilize Next.js App Router for all navigation and page structures. Do not use `react-router-dom`.
*   **Animations:** Use `tw-animate-css` for simple, declarative animations. For complex animations, define custom `@keyframes` in `app/globals.css`.
*   **File Structure:**
    *   Pages: `app/page.tsx`, `app/layout.tsx`, etc.
    *   Reusable Components: `components/`
    *   UI-specific Components (e.g., `GlassCard`): `components/ui/`
    *   Utility Functions: `lib/utils.ts`
    *   Global Styles: `app/globals.css`
    *   Public Assets: `public/`
    *   **DO NOT** create new top-level directories or deviate from this structure without explicit instruction.