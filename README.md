# 🔗 React URL Shortener

A straightforward URL shortening application built using React, developed as part of the **Affordmed campus evaluation**. This tool enables users to generate shortened URLs with optional custom codes and expiration durations, and also provides usage statistics. The app features client-side routing and remote event logging support.

---

## ✨ Features

- Generate short links from valid long URLs with custom shortcodes
- Automatically sets a 30-minute validity period if none is provided
- Implements client-side navigation using `react-router-dom`
- Supports redirection using `/shortcode` path structure
- Stats page displays:
  - Original (long) URL  
  - Corresponding short URL  
  - Expiration timestamp  
  - Creation timestamp
- Integrates with Affordmed’s remote logging API for tracking all key actions
- Includes input validation for better user experience
- Fully styled and responsive using **Material UI (MUI)**

---

## ⚙️ How It Works

1. The user inputs a long URL, with optional shortcode and expiration
2. The application saves this mapping in the browser's `localStorage`
3. Accessing `/shortcode` routes the user to the original URL
4. Clicking on **"View Stats"** displays all saved links and metadata

> 📌 All key user interactions are logged through the `Log()` utility function.

---

## 🧰 Technologies Used

- React (leveraging hooks for state and lifecycle)
- React Router DOM for in-app routing
- Material UI (MUI) for consistent design
- LocalStorage to persist data in-browser
- Custom Logging Utility to push event logs to remote API

---

## 🖼️ Screenshots

<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/1a04274e-a5e1-4f61-98a1-b236b4b5309b" /> (output index page)
<img width="1440" height="900" alt="Screenshot 2025-07-14 at 11 11 30 AM" src="https://github.com/user-attachments/assets/8957a769-8798-4c1b-a5e1-c6f8a7a737df" /> (stats page)

<img width="1440" height="900" alt="Screenshot 2025-07-14 at 11 25 36 AM" src="https://github.com/user-attachments/assets/04451b09-29c3-4eb1-84ed-dd9c2e8d15d2" /> (middileware details)








## 🏗️ System Architecture

Below is a visual representation of the app’s internal design and flow.

<img width="1440" height="900" alt="Screenshot 2025-07-14 at 11 13 44 AM" src="https://github.com/user-attachments/assets/6c9b06b8-ac74-4325-8fc7-a1591e3e0723" />



---
