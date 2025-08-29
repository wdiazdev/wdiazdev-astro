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
    { name: "FireBase", icon: "vscode-icons:file-type-firebase" },
    { name: "Axios", icon: "devicon-plain:axios-wordmark" },
    { name: "CSS3", icon: "skill-icons:css" },
    { name: "HTML", icon: skill-icons:html },
    { name: "Vite", icon: "skill-icons:vite-dark" },
  ]

images:
  - /filmtime/1.jpg
  - /filmtime/2.jpg
  - /filmtime/3.jpg
  - /filmtime/4.jpg
---

I am happy to say that the FilmTime portfolio project is now complete, fully responsive, and capable of adapting to any device screen. Of course, no project is ever fully complete since features will be added over time. Everything on this project was built from scratch except for the card sliders, for which I used the SwiperJs library.

Authentication and account:

The users can create, login, logout, and reset their account passwords through a Firebase authentication process. The user can create an account to store their favorite movies or shows on their protected account page. They can update, read, delete, and create items. The card component has two buttons: one to provide the user with more details about the movie or show, and another to remove the item from the database.

Home page:

The movie and TV show pages are dynamically rendered and provide a different user interface on every page reload or refresh. This component provides the user with the item name, tagline, release date, and two buttons for more information or to play the associated videos.

In addition, the user can navigate through the car sliders to see what is trending, upcoming, popular, or top-rated. These cards have a hover effect that provides the user with more interactivity (like, more info or play).

Movie/Show Info Page:

On this page, the user will be able to learn more about their favorite movies and shows. The design has a background image and the movie/show banner image. The home page button redirects the user to the official movie/show page.

```txt
Demo User: test@test.com
Demo Password: pass123
Base API: https://api.themoviedb.org/
```
