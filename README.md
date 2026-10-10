# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Jackson Ford — Personal Portfolio Website

A responsive personal portfolio website built with React, showcasing personal information, skills, work experience, and creative projects through a clean and organized interface.

## Overview

This project is a portfolio website inspired by a professional designer's portfolio. It provides a structured way to present personal information, highlight technical and creative skills, display work experience, and organize projects into different categories.

The website uses reusable React components, CSS Modules, and React Router to create a modular and maintainable application.

## Features

* **Home:** An introductory section with a hero image and call-to-action buttons.
* **About:** A personal introduction and an overview of design and development specialties.
* **Skills:** A visual presentation of skills using percentage indicators.
* **Experience:** A section displaying professional experience and descriptions.
* **Work Portfolio:** A dedicated area for browsing projects by category.
* **Sidebar Navigation:** Persistent navigation between the main sections.
* **Nested Routing:** Separate routes for Graphic Design, Apps, and Software within the Work section.
* **Reusable Components:** Shared UI components for page headers, cards, and skill indicators.
* **CSS Modules:** Component-specific styling to keep styles organized and maintainable.

## Technologies Used

* **React** — Building the user interface with reusable components.
* **JavaScript (ES6+)** — Application logic and data rendering.
* **React Router DOM** — Client-side routing and nested routes.
* **Tailwind CSS** — Utility-first styling and layout.
* **CSS Modules** — Scoped component styling.
* **Font Awesome** — Icons throughout the interface.
* **Vite** — Development server and build tooling.

## Project Structure

```text
src/
├── assets/
│   └── Images and visual assets
├── Components/
│   ├── Home/
│   ├── About/
│   ├── Experience/
│   ├── Skills/
│   ├── SideBar/
│   └── Work/
│       ├── GraphicDesign/
│       ├── Apps/
│       └── Software/
├── Page/
│   └── MainPage.jsx
├── UI/
│   ├── Cards/
│   ├── Exper/
│   ├── PageHeader/
│   └── percentage/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your computer.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/H-wq-prog/portfolio-gold-trainng-.git
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-folder>
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal to view the website.

### Build for Production

To create a production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

*Note: These commands assume the standard Vite scripts are configured in `package.json`.*

## What I Practiced

Through this project, I practiced:

* Structuring a React application into reusable components.
* Passing data to components through props.
* Rendering repeated elements using the `map()` method.
* Managing page navigation with React Router.
* Implementing nested routes using `Outlet`.
* Organizing styles with CSS Modules and Tailwind CSS.
* Using CSS positioning, transitions, pseudo-elements, and animations.
* Integrating Font Awesome icons into the interface.

## Project Goals

The main goal of this project is to strengthen my frontend development skills by translating a portfolio design into a functional React application, improving component organization, and practicing routing and styling techniques.

---

**Built with React and Vite.**
