# GuitarLa

A React application for selling electric guitars. This project demonstrates the use of React components, `useReducer`
for state management, and TypeScript for type safety.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [License](#license)

## Project Overview

The GuitarLa application allows users to browse and purchase electric guitars. Users can view guitar details, add
guitars to their cart, update quantities, and manage their cart. The application is built with React, TypeScript, and
uses `useReducer` for state management.

## Features

- **Browse Guitars:** View a list of available electric guitars with details.
- **Add to Cart:** Add guitars to the shopping cart.
- **Update Cart:** Modify the quantity of guitars in the cart.
- **Remove from Cart:** Remove guitars from the cart.
- **Clear Cart:** Clear all items from the cart.
- **Responsive Design:** Adaptable to various screen sizes.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Next-generation frontend tool for fast builds and optimized development experience.
- **TypeScript:** Superset of JavaScript with static types.
- **React `useReducer`:** For state management with complex state logic.

## Installation

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aaronmasm/guitarla.git

2. **Navigate to the project directory:**

   ```bash
   cd guitarla

3. **Install the dependencies:**

   ```bash
   npm install

4. **Start the development server:**

   ```bash
   npm run dev

## Usage

1. **Browse Guitars:**
    - Navigate through the list of available guitars on the homepage. Each guitar displays an image, name, description,
      and price.

2. **Add to Cart:**
    - Click the "Add to Cart" button on a guitar to add it to the shopping cart.

3. **Update Cart:**
    - In the cart, increase or decrease the quantity of guitars as needed.

4. **Remove from Cart:**
    - Click the "X" button to remove a guitar from the cart.

5. **Clear Cart:**
    - Use the "Clear Cart" button to remove all items from the cart.

By following these steps, you can browse, select, and purchase guitars using the GuitarLa application.

## Project Structure

The project structure is organized as follows:

- `src/`
    - `components/` - Contains React components used in the application.
        - `Header.tsx` - Component for displaying the header with cart details.
        - `Guitar.tsx` - Component for rendering individual guitar details.
    - `data/` - Contains sample guitar data.
        - `db.ts` - Guitar data used in the application.
    - `reducers/` - Contains state management logic.
        - `cart-reducer.ts` - Reducer function for managing cart-related state.
    - `types/` - TypeScript type definitions.
        - `index.ts` - Defines types for the application.
    - `App.tsx` - Main application component.
    - `main.tsx` - Entry point for the React application.
    - `index.css` - Global styles.

## Components

- **Header:** Displays the cart summary and allows users to view, update, or clear their cart.
- **Guitar:** Renders the details of a single guitar and provides an "Add to Cart" button.

## Styling

The application uses plain CSS for styling. The approach ensures a clean and responsive design, allowing for
customization and consistent look and feel across different devices.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

© 2024 Aarón Más Murro
