---
id: 3
name: Prop Firm Portfolio
description: Prop Firm Portfolio brings together secure authentication, robust backend services, and a modern React frontend to create a reliable tool for traders to monitor their funded account journey and performance.
cover: pfp.jpg
live: https://prop-firm-portfolio-client.onrender.com/
fullstack: true
frontend:
  [
    { name: "React", icon: "skill-icons:react-dark" },
    { name: "TypeScript", icon: "skill-icons:typescript" },
    { name: "Axios", icon: "devicon-plain:axios-wordmark" },
    { name: "Tanstack", icon: "logos:react-query-icon" },
    { name: "Tailwind", icon: "skill-icons:tailwindcss-dark" },
    { name: "HTML", icon: skill-icons:html },
    { name: "Vite", icon: "skill-icons:vite-dark" },
    { name: "ChartJs", icon: "logos:chartjs" },
    { name: "Zod", icon: "logos:zod" },
    { name: "Zustand", icon: "devicon:zustand" },
  ]
backend:
  [
    { name: "Node", icon: "skill-icons:nodejs-light" },
    { name: "TypeScript", icon: "skill-icons:typescript" },
    { name: "Express", icon: "skill-icons:expressjs-light" },
    { name: "Prisma", icon: "skill-icons:prisma" },
    { name: "JWT", icon: "logos:jwt-icon" },
    { name: "Zod", icon: "logos:zod" },
  ]
images:
  - /pfp/1.jpg
  - /pfp/2.jpg
  - /pfp/3.jpg
  - /pfp/4.jpg
user: { 
username: "test@test.com",
password: "Pa$$w0rd" 
}
---

**Prop Firm Portfolio** is a full-stack web application that allows traders to manage and analyze their funded account performance in one place. The platform provides real-time metrics, investment summaries, and performance ratios to help users track fees, withdrawals, and overall return on investment.

**Backend Architecture:** The backend is built with Node.js and Express, structured with routes, middleware, controllers, and controller services for clean separation of concerns. **Prisma ORM** is used to query a **SQLite** database, handling all relational data operations efficiently.

**Authentication** is implemented through an Auth Controller, which generates **JWT** tokens stored securely in cookies. This setup improves security by persisting user sessions and refreshing tokens to keep data accurate and up-to-date.

**Frontend Development:** The frontend is developed with **React**, featuring protected routes to ensure only authenticated users can access their dashboards. State management is handled with Zustand, while TanStack Query powers efficient server-state synchronization and caching. Zod is integrated for runtime schema validation, ensuring data integrity between client and server.

Users authenticate through a secure login process that generates a JWT, stored in **HTTP-only cookies** to mitigate XSS risks. Refresh tokens ensure sessions remain valid without constant re-authentication.

**Dashboard & Analytics:** The user dashboard provides a clear overview of funded account performance. Metrics include total live vs. evaluation accounts, funding ratio, ROI percentage, total fees, withdrawals, profits/losses, and net flow over time.

Data is aggregated and transformed in backend services to deliver structured insights, such as withdrawal ratios and investment returns, directly to the UI.
