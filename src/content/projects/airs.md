---
id: 4
name: AIRS
description: AIRS enables users to securely authenticate and manage property listings with ease. Whether creating, updating, or deleting listings, the application delivers a seamless real-estate portfolio experience and includes a robust cash-flow calculator so users can analyze property finances for informed investment decisions.
cover: airs.jpg
repository: https://github.com/wdiazdev/airs
live: https://airs-o2pq.onrender.com/
fullstack: true
frontend:
  [
    { name: "React", icon: "skill-icons:react-dark" },
    { name: "TypeScript", icon: "skill-icons:typescript" },
    { name: "Redux", icon: "skill-icons:redux" },
    { name: "Tanstack", icon: "logos:react-query-icon" },
    { name: "Tailwind", icon: "skill-icons:tailwindcss-dark" },
    { name: "FireBase", icon: "vscode-icons:file-type-firebase" },
    { name: "HTML", icon: skill-icons:html },
    { name: "Vite", icon: "skill-icons:vite-dark" },
  ]
backend:
  [
    { name: "Node", icon: "skill-icons:nodejs-light" },
    { name: "JavaScript", icon: "skill-icons:javascript" },
    { name: "Express", icon: "skill-icons:expressjs-light" },
    { name: "JWT", icon: "logos:jwt-icon" },
    { name: "MongoDB", icon: "skill-icons:mongodb" },
  ]
images:
  - /airs/airs-1.jpg
  - /airs/airs-2.jpg
  - /airs/airs-3.jpg
  - /airs/airs-4.jpg
---

**AIRS** is a full-stack web application that enables users to securely authenticate and manage property listings with ease. Whether creating, updating, or deleting listings, the application delivers a seamless real-estate portfolio experience and includes a robust cash-flow calculator so users can analyze property finances for informed investment decisions.

**Routing:** The web application has multiple pages built with React Router, allowing users to navigate the content while keeping the UI in sync with the URL.

**Authentication**: Sign-in and protected routes use JSON Web Tokens (JWT) for secure session handling. Users can create accounts, sign in, sign out, and access authenticated features. The back end includes dedicated controllers for authentication and listing creation/management.

**Data Fetching:** The project uses TanStack Query to manage server communication and caching, ensuring efficient and reactive data synchronization between client and server.

**State Management**: On the client side, Redux is used to manage application state, providing predictable workflows for user sessions, listings, and calculator inputs.

**Listings Management**: Authenticated users can create, read, update, and delete property listings **(CRUD)**. Each listing captures key real-estate attributes and is persisted in **MongoDB** via a **Node.js/Express** API.

**Cash-Flow Calculator**: A built-in calculator lets users input income, expenses, and financing assumptions to evaluate cash flow and returns, supporting more confident investment decisions.
