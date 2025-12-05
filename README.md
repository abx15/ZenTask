# ZenTask - Personal Task Tracker


## 📖 Description

**ZenTask** is a sleek, modern personal task management application developed as part of the RYGNeco Web Development Internship assignment. Inspired by premium corporate UIs like Google Workspace and Microsoft 365, it offers an intuitive experience with a simple login, robust task management, and a responsive interface. The app defaults to a light theme with a soft white background and includes a pure black dark mode toggle for enhanced usability. Built with React and Vite, styled with Tailwind CSS, and powered by `localStorage` for persistence, ZenTask stands out with bonus features like search functionality and dark mode, demonstrating initiative and attention to detail.

- **Author**: Arun Kumar Bind
- **Email**: developerarunwork@gmail.com  
- **GitHub**: [github.com/abx15](https://github.com/abx15)
- **Submission Date**: Friday, 05 December 2025

## 🚀 Features

- **Simple Login**: Secure username-based login with persistence via `localStorage`.
- **Task Management**: Add, edit, delete, and toggle completion status of tasks with inline editing.
- **Task Display**: View tasks with titles and optional descriptions, styled with line-through for completed tasks.
- **Filtering**: Filter tasks by All, Completed, or Pending statuses.
- **Bonus Features**:
  - **Search Functionality**: Search tasks by title or description for quick access.
  - **Dark Mode Toggle**: Switch between a light theme (default) and a pure black dark theme with smooth transitions.
- **Statistics**: Real-time counts for total, completed, and pending tasks.
- **Responsive Design**: Optimized for desktop and mobile devices with a premium, corporate-inspired UI.

## 🛠 Setup Instructions

To run ZenTask locally on your machine, follow these steps:

### Prerequisites
- Node.js (version 18.x or 20.x LTS recommended)
- npm (comes with Node.js)
- Git (optional, for cloning the repository)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/abx15/ZenTask.git
   cd ZenTask
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

# TaskFlow Tracker

An opinionated, lightweight personal task manager built with React, Vite and Tailwind CSS. The app stores data in the browser using `localStorage` and includes features like login, task CRUD, filtering, search, and a dark mode toggle.

**Repository:** local workspace (package name: `taskflow-tracker`)

**Quick summary:** small single-page React app built with Vite; no backend required.

**Author:** Please update `package.json` `author` field to set the project owner.

**Last updated:** Updated README to reflect repository files and correct scripts.

**Demo / Screenshots**
- Local screenshots are included in the `screenshots/` folder. Use them in the README like `./screenshots/dashboard-light.png` when publishing to a remote repo.



**Status:** Ready for local development.

**Note:** This README has been adjusted to match the actual repository layout and `package.json` scripts.

**Table of contents**
- Scripts
- Project structure
- Features
- Technologies
- Development notes
- License



Start development server (Vite):

```powershell
npm run dev
```

Open the app at `http://localhost:5173` (Vite default) in your browser.

Build for production:

```powershell
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

Run linter:

```powershell
npm run lint
```

**Scripts (from `package.json`)**
- `dev`: runs the Vite dev server (`vite`).
- `build`: creates a production build (`vite build`).
- `preview`: serves the production build locally (`vite preview`).
- `lint`: runs ESLint over the project files.

**Project structure**

The repository contains the following notable files and directories:

```
./
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
   ├── App.css
   ├── assets/
   │   └── react.svg
   ├── components/
   │   ├── Login.jsx
   │   ├── TaskDashboard.jsx
   │   ├── TaskForm.jsx
   │   ├── TaskList.jsx
   │   ├── TaskItem.jsx
   │   └── TaskFilter.jsx
   └── utils/
       └── localStorage.js
├── screenshots/
│   ├── addtask-light.png
│   ├── login-light.png
│   ├── login-dark.png
│   ├── dashboard-light.png
│   └── dashboard-dark.png
└── README.md
```

**Components**
- `Login.jsx` — simple username-based login screen (persists user in `localStorage`).
- `TaskDashboard.jsx` — main page that composes task list, filters and stats.
- `TaskForm.jsx` — creates/edits tasks.
- `TaskList.jsx` — renders task collection.
- `TaskItem.jsx` — single task row with edit/toggle/delete actions.
- `TaskFilter.jsx` — UI for filtering tasks (All / Completed / Pending).

**Features**
- Login (username) with local persistence.
- Create, read, update, delete tasks.
- Mark tasks complete/incomplete.
- Filter by status and search tasks by title/description.
- Dark mode toggle.
- Client-side persistence via `localStorage` (see `src/utils/localStorage.js`).

**Technologies**
- React 18
- Vite
- Tailwind CSS
- ESLint

**Development notes**
- The dev server runs on Vite — use `npm run dev`.
- If you change Tailwind configuration, rebuild CSS by restarting the dev server.
- Linting is strict (`--max-warnings 0`) — fix linter errors before committing.
- Tests are not included in this repo; consider adding unit tests with Jest and React Testing Library if needed.

**How to update author/links**
- Update the `author` and repository information in `package.json` to reflect the proper owner.
- Replace placeholder demo links with your live deployment URL (if available).

**License**
- Project `license` is set to `MIT` in `package.json`. Update if you need a different license.

If you'd like, I can also:
- add a short CONTRIBUTING section and CODE_OF_CONDUCT,
- wire the screenshots into the README so they render on GitHub,
- or update author/contact information to match your GitHub profile.

---

If this update looks good, tell me and I will commit the change or make additional edits (author, links, screenshots embedding, or a short usage walkthrough).

--- 
# TaskFlow Tracker

An opinionated, lightweight personal task manager built with React, Vite and Tailwind CSS. The app stores data in the browser using `localStorage` and includes features like login, task CRUD, filtering, search, and a dark mode toggle.

**Repository:** local workspace (package name: `taskflow-tracker`)

**Quick summary:** small single-page React app built with Vite; no backend required.

**Author:** Please update `package.json` `author` field to set the project owner.

**Last updated:** Updated README to reflect repository files and correct scripts.

# Author 

## Developer:Arun Kumar Bind
- Github: [github.com/abx15](https://github.com/abx15)
- LinkedIn: [linkedin.com/in/arunkumarbind](https://www.linkedin.com/in/arunkumarbind)
- Email: developerarunwork@gmail.com

---
- Give me a ⭐ if you like this project!
- Made with ❤️ by Arun Kumar Bind
- Copyright © 2025 Arun Kumar Bind
