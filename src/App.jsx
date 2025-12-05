import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import TaskDashboard from './components/TaskDashboard'
import { getStoredUsername, clearStoredUsername } from './utils/localStorage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if user is already logged in
    const storedUsername = getStoredUsername()
    if (storedUsername) {
      setIsLoggedIn(true)
      setUsername(storedUsername)
    }

    // Check for dark mode preference
    const darkModePreference = localStorage.getItem('darkMode')
    if (darkModePreference === 'true') {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Save dark mode preference
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
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'dark:bg-black' : 'bg-white'
    }`}>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      ) : (
        <TaskDashboard 
          username={username} 
          onLogout={handleLogout} 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
      )}
    </div>
  )
}

export default App