# 🎬 CineRental — Movie Rental Web App

CineRental is a movie discovery and rental UI built with **React + Vite**, using **Context API**, **Reducers**, and **TailwindCSS**.  
This web app displays movies, allows adding/removing items from a cart, shows detailed movie information, and supports light/dark themes.

---

## 🚀 Features

- 🔍 Browse movies by categories (Trending, New Release, Coming Soon)
- 🎥 View detailed movie information in a modal
- 🛒 Add movies to cart (Cart handled with Reducer)
- ⭐ Movie rating system
- 🌓 Light and dark mode support
- ⚡ Fast build system with Vite
- 📱 Responsive UI with TailwindCSS

---

## 📁 Folder Structure

````
cineRental/
├── public
│
│
├── src/
│ ├── assets/
│ │ ├── icons/
│ │ ├── movie-covers/
│ │ ├── delete.svg
│ │ ├── cart-item.png
│ │ ├── react.svg
│ │ └── tag.svg
│ │
│ ├── Cine/
│ │ ├── CardDetails.jsx
│ │ ├── MovieList.jsx
│ │ ├── MovieCard.jsx
│ │ ├── MovieDetailsModal.jsx
│ │ └── Rating.jsx
│ │
│ ├── Context/
│ │ └── index.js
│ │
│ ├── Data/
│ │ └── Movies.js
│ │
│ ├── Reducers/
│ │ └── CartReducers.js
│ │
│ ├── utility/
│ │ └── utils.js
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── SideBar.jsx
│ ├── Page.jsx
│ ├── index.css
│ └── main.jsx
│
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── eslint.config.js
├── vite.config.js
└── README.md```
````

## 🧩 Component Flow Diagram

               ┌─────────────────┐
               │    main.jsx     │
               └─────────┬───────┘
                         │
               ┌─────────▼─────────┐
               │      App.jsx       │
               └─────────┬─────────┘
             ┌───────────┼───────────────┐
             │           │               │
    ┌────────▼───┐   ┌──▼────────┐   ┌──▼────────┐
    │ <Header /> │   │ <SideBar/> │  │ <Page />  │
    └────────────┘   └──────┬─────┘  └──────┬────┘
                             │              │
                    ┌────────▼────────┐     │
                    │     Page.jsx    │     │
                    └────────┬─────── ┘    │
             ┌───────────────┼────────────┐ │
             │               │            │ │
    ┌────────▼─────┐  ┌──────▼──────┐   ┌──▼─────────┐
    │<MovieList /> │  │<MovieCard /> │  │<Footer />  │
    └──────────────┘  └──────────────┘  └────────────┘
          │
          ▼

```
┌──────────────────────────┐
│ <MovieDetailsModal /> │
└───────────┬──────────────┘
│
┌───────▼───────── ┐
│ <CardDetails /> │
└─────────────────┘
│
▼
┌────────────────────────────┐
│ <Rating />                 │
└────────────────────────────┘


┌──────────────────────────────────────────────────┐
│ GLOBAL STATE (Context)                           │
│--------------------------------------------------│
│ Context/index.js → Provides App State            │
│ Reducers/CartReducers.js → Handles Cart Logic    │
└──────────────────────────────────────────────────┘
```

---

## 📦 Folder Purpose Breakdown

### **📁 public/**

Contains files served directly by the browser.  
Used mainly for static root-level assets.

---

### **📁 src/**

Main application folder.

---

### **📁 src/assets/**

All images, icons, SVGs, and static media.

- **icons/** — UI icons (cart, delete, sun/moon, etc.)
- **movie-covers/** — Movie poster images
- **SVG/PNGs** used across components

---

### **📁 src/Cine/**

Contains UI components specific to movie functionality.

| Component                 | Purpose                           |
| ------------------------- | --------------------------------- |
| **MovieList.jsx**         | Displays list of movie cards      |
| **MovieCard.jsx**         | Single movie card UI              |
| **MovieDetailsModal.jsx** | Popup modal showing detailed info |
| **CardDetails.jsx**       | Detailed content inside modal     |
| **Rating.jsx**            | Star rating component             |

---

### **📁 src/Context/**

Global state using React Context.

- **index.js** → Provides global movie/cart/theme state

---

### **📁 src/Data/**

Static data used in the app.

- **Movies.js** — Movie dataset

---

### **📁 src/Reducers/**

Contains reducer functions.

- **CartReducers.js** — Manages cart actions (add/remove)

---

### **📁 src/utility/**

Utility functions.

- **utils.js** — Reusable helper functions

---

### **📁 Root Components**

| File            | Description                          |
| --------------- | ------------------------------------ |
| **App.jsx**     | Root layout combining all components |
| **Header.jsx**  | Navigation bar                       |
| **Footer.jsx**  | Footer section                       |
| **SideBar.jsx** | Sidebar filters / Nav                |
| **Page.jsx**    | Main page container                  |
| **main.jsx**    | App entry point (React → DOM)        |

---

### **📁 Config Files**

- **tailwind.config.js** — Tailwind setup
- **vite.config.js** — Vite project config
- **postcss.config.js** — CSS processing
- **eslint.config.js** — Linting rules

---

## 🚀 Installation & Usage

```sh
git clone https://github.com/Nayan-Krishna-Ball/Cine-Rental.git

npm install
npm run dev
```
