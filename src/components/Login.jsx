import React, { useEffect, useState, useRef } from 'react'
import { storeUsername } from '../utils/localStorage'

const Login = ({ onLogin, isDarkMode, toggleDarkMode }) => {
  const [username, setUsername] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username.trim()) {
      return
    }

    setIsSubmitting(true)

    // Simulate a brief loading state for better UX
    setTimeout(() => {
      storeUsername(username.trim())
      onLogin(username.trim())
      setIsSubmitting(false)
    }, 500)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Color variables based on your design system
  const colors = {
    light: {
      primary: '#4F8A8B',
      secondary: '#F9F7F7',
      accent: '#E84545',
      success: '#2ECC71',
      text: '#1E293B',
      mutedText: '#6B7280',
      surface: '#FFFFFF',
      border: '#E5E7EB',
      background: '#F9F7F7'
    },
    dark: {
      primary: '#4F8A8B',
      background: '#0F172A',
      surface: '#1E293B',
      text: '#F8FAFC',
      mutedText: '#94A3B8',
      accent: '#E84545',
      success: '#2ECC71',
      border: '#334155'
    }
  }

  const currentColors = isDarkMode ? colors.dark : colors.light

  return (
    <div 
      className="flex justify-center items-center px-4 min-h-screen transition-colors duration-300"
      style={{ backgroundColor: currentColors.background }}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 ${
          isDarkMode 
            ? 'text-white bg-gray-800 hover:bg-gray-700' 
            : 'text-gray-800 bg-white hover:bg-gray-100'
        }`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <div className="space-y-8 w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center">
          <div className='flex flex-row gap-2 justify-center items-center mb-2'>
            <div 
              className="flex justify-center items-center w-10 h-10 rounded-xl"
              style={{ backgroundColor: currentColors.primary }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 
              className="text-4xl font-bold tracking-tight"
              style={{ color: currentColors.text }}
            >
              Zen<span style={{ color: currentColors.primary }}>Task</span>
            </h1>
          </div>
          <p 
            className="text-base"
            style={{ color: currentColors.mutedText }}
          >
            Your one stop task manager
          </p>
        </div>

        {/* Login Form */}
        <div 
          className="px-6 py-8 rounded-2xl border shadow-2xl transition-all duration-300"
          style={{
            backgroundColor: currentColors.surface,
            borderColor: currentColors.border
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="username" 
                className="block mb-2 text-sm font-semibold"
                style={{ color: currentColors.text }}
              >
                Username
              </label>
              <input
                ref={inputRef}
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-3 w-full rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF',
                  borderColor: currentColors.border,
                  color: currentColors.text
                }}
                placeholder="Enter your username"
                required
                disabled={isSubmitting}
              />
              <style jsx>{`
                input:focus {
                  border-color: ${currentColors.primary};
                  ring-color: ${currentColors.primary}40; /* 40 = 25% opacity in hex */
                }
                input::placeholder {
                  color: ${currentColors.mutedText};
                }
              `}</style>
            </div>

            <button
              type="submit"
              disabled={!username.trim() || isSubmitting}
              className="px-4 py-3 w-full font-semibold text-white rounded-xl transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed"
              style={{
                backgroundColor: !username.trim() || isSubmitting 
                  ? (isDarkMode ? '#475569' : '#9CA3AF')
                  : currentColors.primary,
                opacity: !username.trim() || isSubmitting ? 0.7 : 1,
                transform: !username.trim() || isSubmitting ? 'none' : 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                if (username.trim() && !isSubmitting) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(79, 138, 139, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (username.trim() && !isSubmitting) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
              onMouseDown={(e) => {
                if (username.trim() && !isSubmitting) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 15px rgba(79, 138, 139, 0.2)';
                }
              }}
              onMouseUp={(e) => {
                if (username.trim() && !isSubmitting) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(79, 138, 139, 0.3)';
                }
              }}
            >
              {isSubmitting ? (
                <div className="flex justify-center items-center">
                  <svg className="mr-3 -ml-1 w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
            <style jsx>{`
              button:focus {
                ring-color: ${currentColors.primary}40;
              }
              button:hover:not(:disabled) {
                background-color: ${currentColors.primary}DD; /* DD = 87% opacity */
              }
            `}</style>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center">
          <a
            href='https://arun15dev.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className="text-sm font-semibold opacity-60 transition-opacity hover:opacity-100"
            style={{ color: currentColors.mutedText }}
          >
            Built with 💖 by Arun Kumar Bind
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login