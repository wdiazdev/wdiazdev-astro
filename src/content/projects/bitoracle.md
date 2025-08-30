---
id: 2
name: BitOracle
cover: bitoracle.jpg
repository: https://github.com/wdiazdev/Bitoracle
live: https://wdiazdev.github.io/Bitoracle/
fullstack: false
frontend:
  [
    { name: "React", icon: "skill-icons:react-dark" },
    { name: "JavaScript", icon: "skill-icons:javascript" },
    { name: "Axios", icon: "logos:axios" },
    { name: "Tanstack", icon: "logos:react-query-icon" },
    { name: "CSS3", icon: "skill-icons:css" },
    { name: "Vite", icon: "skill-icons:vite-dark" },
  ]
baas: [{ name: "FireBase", icon: "vscode-icons:file-type-firebase" }]
images:
  - /bitoracle/bitoracle-1.jpg
  - /bitoracle/bitoracle-2.jpg
  - /bitoracle/bitoracle-3.jpg
---

**Bitoracle** is a cryptocurrency dashboard that allows users to track all their assets on one page and provides market data in real time.

**Routing:** The web application has multiple pages built with React Router, allowing users to navigate the content while keeping the UI in sync with the URL.

**Authentication:** The authentication process is implemented with Google **Firebase** services and offers an easy-to-follow **UI/UX**. Users can create new accounts, sign in, sign out, and recover passwords by email.

**Data Fetching:** To handle communication with the server over HTTP, the project uses **Axios**, a promise-based HTTP client for Node.js and the browser.

**User Interface:** The UI components were built from scratch with vanilla **CSS3**, combined with **JavaScript** conditional statements to dynamically add styles based on market data and user interaction.

**Dashboard:** The dashboard page is protected, only logged-in users have access. On this page, users can create, read, update, and delete their entries following the CRUD programming model.

```txt
Demo User: test@test.com
Demo Password: pass123
```
