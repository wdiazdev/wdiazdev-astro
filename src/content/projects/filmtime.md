---
id: 3
name: Film Time
cover: filmtime.jpg
repository: https://github.com/wdiazdev/filmtime
live: https://wdiazdev.github.io/filmtime/
fullstack: false
frontend:
  [
    { name: "React", icon: "skill-icons:react-dark" },
    { name: "JavaScript", icon: "skill-icons:javascript" },
    { name: "Axios", icon: "devicon-plain:axios-wordmark" },
    { name: "CSS3", icon: "skill-icons:css" },
    { name: "HTML", icon: skill-icons:html },
    { name: "Vite", icon: "skill-icons:vite-dark" },
  ]
baas: [{ name: "FireBase", icon: "vscode-icons:file-type-firebase" }]
images:
  - /filmtime/1.jpg
  - /filmtime/2.jpg
  - /filmtime/3.jpg
  - /filmtime/4.jpg
  - /filmtime/5.jpg
user: { 
username: "test@test.com",
password: "pass123" 
}
---

**Film Time** is designed to let users explore **movies** and **TV shows**, see trending/upcoming/popular titles, and save their personal favorites to a protected account. It blends interactive UI elements with user authentication and data persistence, creating a personalized experience.

**Routing:** The web application has multiple pages built with React Router, allowing users to navigate the content while keeping the UI in sync with the URL.

**Authentication:** The authentication process is implemented with Google **Firebase** services and offers an easy-to-follow **UI/UX**. Users can create new accounts, sign in, sign out, and recover passwords by email.

**Data Fetching:** To handle communication with the server over HTTP, the project uses **Axios**, a promise-based HTTP client for Node.js and the browser.

**Home page:** The movie and TV show pages are dynamically rendered and provide a different user interface on every page reload. This component displays the item name, tagline, release date, and two buttons—one for more information and another to play the associated videos.

In addition, users can navigate through the card sliders to see what is trending, upcoming, popular, or top-rated. These cards include a hover effect that enhances interactivity (e.g., more info or play).
