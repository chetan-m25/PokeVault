#  **🐦‍🔥  PokeVault**

A modern Pokemon explorer built with **React (Vite), Tailwind CSS, and Axios**.

🌐 Live: https://pokevault-cm.vercel.app/

---

##  Overview

PokeVault fetches 1000 Pokemon from PokeAPI, displays 100 random Pokemon on each reload, and allows real time searching across all Pokemon with a smooth animated loading experience.

---

## ✨ Features

- Fetches 1000 Pokemon
- Shows 100 random Pokemon per refresh
- Real time search
- Animated loading progress bar
- Type based gradient card backgrounds
- Dynamic stat bars (HP, Attack, Defense, Speed)
- Responsive dark UI
- Deployed on Vercel

---

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- Axios
- PokeAPI
- Vercel

---

## 📂 Project Structure

```
POKEVAULT/
│
├── public/ 
│
├── src/
│   ├── assets/ 
│   │
│   ├── components/         # Reusable UI components
│   │   ├── PokeCard.jsx    # Individual Pokemon card UI
│   │   └── Pokemon.jsx     # Main page with fetch & search logic
│   │
│   ├── App.jsx             # Root component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
│
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies
└── README.md               # Project documentation
```
