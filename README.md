# ZenTask - Personal Task Tracker


## 📖 Description

**ZenTask** is a sleek, modern personal task management application developed as part of the RYGNeco Web Development Internship assignment. Inspired by premium corporate UIs like Google Workspace and Microsoft 365, it offers an intuitive experience with a simple login, robust task management, and a responsive interface. The app defaults to a light theme with a soft white background and includes a pure black dark mode toggle for enhanced usability. Built with React and Vite, styled with Tailwind CSS, and powered by `localStorage` for persistence, ZenTask stands out with bonus features like search functionality and dark mode, demonstrating initiative and attention to detail.

- **Author**: Talagana Rajesh  
- **Email**: talaganarajesh@gmail.com  
- **GitHub**: [github.com/talaganarajesh](https://github.com/talaganarajesh)  
- **Submission Date**: Friday, July 04, 2025

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
   git clone https://github.com/talaganarajesh/task-tracker.git
   cd task-tracker
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

4. **Build for Production**  
   To create a production build:
   ```bash
   npm run build
   ```
   The build artifacts will be stored in the `dist/` directory, ready for deployment.

## 🧰 Technologies Used

**Frontend**:  
- React – A JavaScript library for building user interfaces.  
- Vite – Next-generation frontend tooling for fast development.

**Styling**:  
- Tailwind CSS – Utility-first CSS framework for rapid UI development.

**Persistence**:  
- `localStorage` – Browser API for storing user data locally.

**Deployment**:  
- Vercel – Platform for static site hosting and deployment.

## 🔗 Live Demo

Experience ZenTask live at:  
👉 [https://ZenTask-rygneco.vercel.app/](https://ZenTask-rygneco.vercel.app/)

## 🖼 Screenshots

**Login Page**  
![Login Page](https://raw.githubusercontent.com/talaganaRajesh/ZenTask-asgn/refs/heads/main/screenshots/login-light.png)
![Login Page](https://raw.githubusercontent.com/talaganaRajesh/ZenTask-asgn/refs/heads/main/screenshots/login-dark.png)


**Task Dashboard (Light Mode)**  
![Task Dashboard - Light Mode](https://raw.githubusercontent.com/talaganaRajesh/ZenTask-asgn/refs/heads/main/screenshots/dashboard-light.png)

**Task Dashboard (Dark Mode)**  
![Task Dashboard - Dark Mode](https://raw.githubusercontent.com/talaganaRajesh/ZenTask-asgn/refs/heads/main/screenshots/dashboard-dark.png)

**Adding a Task**  
![Add Task](https://raw.githubusercontent.com/talaganaRajesh/ZenTask-asgn/refs/heads/main/screenshots/addtask-light.png)

## 📁 Project Structure

```
task-tracker/
├── index.html
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── TaskDashboard.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskFilter.jsx
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 📝 Notes

### Design Philosophy  
ZenTask features a premium, corporate-inspired design with a unique "ZenTask" branding, highlighted by an orange accent color and smooth animations. The light theme uses soft grays, while the dark theme is pure black for a striking contrast.

### Bonus Features  
The inclusion of search and dark mode reflects initiative, aligning with the assignment's encouragement for extra effort.


### Testing  
The application has been rigorously tested for edge cases (e.g., empty inputs, no tasks, persistence across refreshes) and performs well on Chrome, Firefox, and Safari.

### Challenges Overcome  
Successfully resolved an initial issue with task persistence on refresh by initializing state with localStorage data and correcting default values.

### Future Improvements  
Potential enhancements include task priorities, due dates, or integration with a backend API for multi-device support (post-internship).

## 🤝 Contribution Guidelines

This project is submitted for the RYGNeco internship and is not open for external contributions at this time. However, feedback is welcome via email at [talaganarajesh@gmail.com](mailto:talaganarajesh@gmail.com).

## 📜 License

This project is for educational purposes under the RYGNeco internship assignment and is not licensed for commercial use.  
**All rights reserved by Talagana Rajesh.**

## 🌐 Portfolio

Explore more of my projects at:  
👉 [https://talaganarajesh.vercel.app/](https://talaganarajesh.vercel.app/)
