import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from './components/Login'
import TaskDashboard from './components/TaskDashboard'
import NotFound from "./components/NotFound"
import { getStoredUsername, clearStoredUsername } from './utils/localStorage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedUsername = getStoredUsername()
    if (storedUsername) {
      setIsLoggedIn(true)
      setUsername(storedUsername)
    }

    const darkModePreference = localStorage.getItem('darkMode')
    if (darkModePreference === 'true') {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  const handleLogin = (loginUsername) => {
    setUsername(loginUsername)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    clearStoredUsername()
    setIsLoggedIn(false)
    setUsername('')
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDarkMode ? 'dark:bg-black' : 'bg-white'
        }`}
      >
        <Routes>

          {/* 👇 Login Route */}
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />

          {/* 👇 Dashboard Route (Protected) */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <TaskDashboard
                  username={username}
                  onLogout={handleLogout}
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          {/* 👇 404 Page Route */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
