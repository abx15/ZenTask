import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ({ isDarkMode, toggleDarkMode }) => {
  // Color system based on your design
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
      className="flex flex-col justify-center items-center px-4 min-h-screen transition-colors duration-300"
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

      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 text-center">
          <div className="flex flex-row gap-2 justify-center items-center mb-2">
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
        </div>

        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Illustration */}
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-2xl opacity-10"
              style={{ backgroundColor: currentColors.primary }}
            />
            <svg 
              width="500" 
              height="400" 
              viewBox="0 0 500 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* Background shapes */}
              <circle cx="250" cy="200" r="180" fill={currentColors.primary + "20"} />
              <circle cx="150" cy="100" r="40" fill={currentColors.accent + "20"} />
              <circle cx="350" cy="300" r="60" fill={currentColors.success + "20"} />
              
              {/* Main character */}
              <g>
                {/* Head */}
                <circle cx="250" cy="150" r="50" fill="#FBBEBE" />
                
                {/* Body */}
                <path d="M200 200 L300 200 L280 350 L220 350 Z" fill={currentColors.primary} />
                
                {/* Arms */}
                <path d="M150 180 L200 200 L180 230 L130 210 Z" fill={currentColors.primary + "CC"} />
                <path d="M300 200 L350 180 L370 210 L320 230 Z" fill={currentColors.primary + "CC"} />
                
                {/* Task clipboard */}
                <rect x="320" y="100" width="80" height="100" rx="10" fill={currentColors.surface} stroke={currentColors.border} strokeWidth="2" />
                <rect x="335" y="115" width="50" height="8" rx="4" fill={currentColors.border} />
                <rect x="335" y="130" width="50" height="8" rx="4" fill={currentColors.border} />
                <rect x="335" y="145" width="30" height="8" rx="4" fill={currentColors.primary} />
                <rect x="335" y="160" width="50" height="8" rx="4" fill={currentColors.border} />
                
                {/* Confused face */}
                <circle cx="235" cy="140" r="6" fill={currentColors.text} />
                <circle cx="265" cy="140" r="6" fill={currentColors.text} />
                <path d="M240 170 Q250 180 260 170" stroke={currentColors.text} strokeWidth="3" strokeLinecap="round" fill="none" />
                
                {/* 404 Numbers on body */}
                <text x="250" y="230" textAnchor="middle" fontSize="48" fontWeight="bold" fill={currentColors.text}>
                  4
                </text>
                <text x="250" y="280" textAnchor="middle" fontSize="48" fontWeight="bold" fill={currentColors.text}>
                  0
                </text>
                <text x="250" y="330" textAnchor="middle" fontSize="48" fontWeight="bold" fill={currentColors.text}>
                  4
                </text>
                
                {/* Search magnifying glass */}
                <circle cx="180" cy="120" r="25" fill="none" stroke={currentColors.mutedText} strokeWidth="3" />
                <path d="M200 140 L220 160" stroke={currentColors.mutedText} strokeWidth="3" strokeLinecap="round" />
                
                {/* Floating tasks */}
                <circle cx="100" cy="250" r="15" fill={currentColors.success} opacity="0.8">
                  <animate attributeName="cy" values="250;240;250" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="150" r="12" fill={currentColors.accent} opacity="0.8">
                  <animate attributeName="cx" values="400;410;400" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="80" cy="100" r="8" fill={currentColors.primary} opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="4s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Decorative elements */}
              <path d="M50 50 Q100 30 150 80" stroke={currentColors.primary + "40"} strokeWidth="2" fill="none" />
              <path d="M450 350 Q400 370 350 320" stroke={currentColors.accent + "40"} strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 
                className="mb-4 text-7xl font-black"
                style={{ color: currentColors.primary }}
              >
                404
              </h2>
              <h3 
                className="mb-4 text-3xl font-bold"
                style={{ color: currentColors.text }}
              >
                Task Not Found
              </h3>
              <p 
                className="mb-6 text-lg"
                style={{ color: currentColors.mutedText }}
              >
                Looks like this page has been marked as "completed" and archived away. 
                Or maybe it never existed in the first place...
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-center">
                  <div 
                    className="flex justify-center items-center w-8 h-8 rounded-lg"
                    style={{ backgroundColor: currentColors.accent + "20" }}
                  >
                    <svg className="w-4 h-4" style={{ color: currentColors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.134 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span style={{ color: currentColors.mutedText }}>
                    The page you're looking for doesn't exist or has been moved
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <div 
                    className="flex justify-center items-center w-8 h-8 rounded-lg"
                    style={{ backgroundColor: currentColors.primary + "20" }}
                  >
                    <svg className="w-4 h-4" style={{ color: currentColors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <span style={{ color: currentColors.mutedText }}>
                    Check if you've archived or deleted this task/page
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <div 
                    className="flex justify-center items-center w-8 h-8 rounded-lg"
                    style={{ backgroundColor: currentColors.success + "20" }}
                  >
                    <svg className="w-4 h-4" style={{ color: currentColors.success }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span style={{ color: currentColors.mutedText }}>
                    Don't worry, you can always create a new task to replace it
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 pt-8 sm:flex-row">
              <Link
                to="/"
                className="flex-1 px-6 py-3 font-medium text-center text-white rounded-xl transition-all duration-200"
                style={{ backgroundColor: currentColors.primary }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = currentColors.primary + 'DD'
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = `0 10px 25px ${currentColors.primary}40`
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = currentColors.primary
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                <div className="flex gap-2 justify-center items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Dashboard
                </div>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="flex-1 px-6 py-3 font-medium text-center rounded-xl transition-all duration-200"
                style={{
                  backgroundColor: isDarkMode ? '#334155' : '#E5E7EB',
                  color: currentColors.text,
                  border: `1px solid ${currentColors.border}`
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = isDarkMode ? '#475569' : '#D1D5DB'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = isDarkMode ? '#334155' : '#E5E7EB'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                <div className="flex gap-2 justify-center items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Go Back
                </div>
              </button>
            </div>

            {/* Quick Tasks */}
            <div className="pt-8 border-t" style={{ borderColor: currentColors.border }}>
              <p 
                className="mb-4 text-sm font-medium"
                style={{ color: currentColors.mutedText }}
              >
                While you're here, why not:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Check your pending tasks',
                  'Review completed items',
                  'Organize your workspace',
                  'Take a productivity break'
                ].map((suggestion, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-pointer hover:scale-105"
                    style={{
                      backgroundColor: currentColors.primary + '10',
                      color: currentColors.primary,
                      border: `1px solid ${currentColors.primary}20`
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = currentColors.primary + '20'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = currentColors.primary + '10'
                    }}
                  >
                    {suggestion}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-8 text-center">
              <p 
                className="text-sm opacity-60"
                style={{ color: currentColors.mutedText }}
              >
                Built with 💖 by Arun Kumar Bind • ZenTask Productivity Suite
              </p>
              <p 
                className="mt-2 text-xs opacity-40"
                style={{ color: currentColors.mutedText }}
              >
                Error 404 • Page Not Found • Lost in the task void
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound