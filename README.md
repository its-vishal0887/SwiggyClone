# Swiggy Project

A React + Vite landing page inspired by the Swiggy food delivery UI. The app includes a header section, search inputs, promotional banners, and a food carousel rendered from mock data.

## Features

- Swiggy-inspired hero header and navigation
- Search and location input section
- Promotional banner cards
- Responsive restaurant / food card grid using mock data
- Vite + React project setup

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Icons

## Project Structure

```bash
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Header.jsx
│   ├── FoodOption.jsx
│   ├── FoodCard.jsx
│   └── ...
├── Utils/
│   ├── tester.js
│   ├── ResTaurent.js
│   └── data.js
└── assets/
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Available Scripts

```bash
npm run dev     # starts the Vite development server
npm run build   # creates a production build
npm run preview # previews the production build locally
npm run lint    # runs ESLint checks
```

## Notes

- The app is currently using mock data for category and food items.
- Static assets and images are stored in the `src/assets` folder.
- Some utility files contain sample JSON data used for UI rendering.
