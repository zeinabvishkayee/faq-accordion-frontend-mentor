# 🧩 Frontend Mentor - FAQ Accordion

You can visit my live demo on Netlify: (https://68e291c11bac37b4abd8e9ad--cute-treacle-a32b7d.netlify.app/)

## 🚀 Overview

This project is a solution to the [FAQ Accordion Challenge](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz) on **Frontend Mentor**.  
It demonstrates clean, modular, and accessible accordion functionality built with **HTML**, **CSS**, and **Vanilla JavaScript** — using **Vite** as the development setup.

---

## ✨ Features

- Fully responsive layout  
- Accessible and semantic HTML structure  
- Smooth open/close transitions  
- Single-item open behavior (auto-closes others)  
- Custom CSS variables for consistent design  
- Clean file structure optimized for Vite  
- Reusable data-driven accordion generation

---

## 🧠 What I Learned

Through this challenge, I improved my understanding of:
- DOM manipulation and event delegation in Vanilla JS  
- CSS transitions with max-height and opacity  
- Best practices for project structure in **Vite**  
- Using @font-face and CSS variables for theme consistency  
- Managing state for interactive UI components

---

## 🏗️ Built With

- **HTML5** – semantic and accessible markup  
- **CSS3** – custom properties, responsive design, transitions  
- **JavaScript (ES6+)** – modular code and event handling  
- **Vite** – fast dev environment and build tool

---

## 🧩 Folder Structure

vite-faq/
├── index.html
├── src/
│ ├── main.js
│ ├── faq.js
│ ├── style.css
│ └── assets/
│ └── images/
│ ├── icon-plus.svg
│ ├── icon-minus.svg
│ ├── icon-star.svg
│ ├── background-pattern-desktop.svg
│ └── background-pattern-mobile.svg
└── public/
└── favicon-32x32.png


---

## 🪄 How It Works

Each FAQ item is generated dynamically from a faqData array in faq.js:
js
export const faqData = [
  { question: 'What is Frontend Mentor?', answer: '...' },
  { question: 'Is it free?', answer: '...' },
];
Then main.js loops through the data, creates the accordion structure,
and handles open/close logic with event listeners.

💅 Styling Highlights

CSS Variables (for theme consistency)

Responsive backgrounds for mobile and desktop

Smooth transitions for accordion content

@font-face integration for the "Work Sans" font

🧪 Live Demo

👉 View Live Site

👉 Frontend Mentor Solution Page

👩‍💻 Author

Zeinab Vishkayee
Frontend Developer
