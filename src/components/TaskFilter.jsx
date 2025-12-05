import React from 'react'

const TaskFilter = ({ currentFilter, onFilterChange, taskCounts, isDarkMode, colors }) => {
  const filters = [
    { key: 'all', label: 'All Tasks', count: taskCounts.all },
    { key: 'pending', label: 'Pending', count: taskCounts.pending },
    { key: 'completed', label: 'Completed', count: taskCounts.completed }
  ]

  // Use provided colors or fallback to default
  const currentColors = colors || {
    primary: '#4F8A8B',
    surface: isDarkMode ? '#1E293B' : '#FFFFFF',
    text: isDarkMode ? '#F8FAFC' : '#1E293B',
    mutedText: isDarkMode ? '#94A3B8' : '#6B7280',
    border: isDarkMode ? '#334155' : '#E5E7EB',
    success: '#2ECC71'
  }

  const getButtonStyles = (filterKey) => {
    const isActive = currentFilter === filterKey
    
    if (isActive) {
      return {
        backgroundColor: currentColors.primary,
        color: '#FFFFFF',
        borderColor: currentColors.primary,
        boxShadow: `0 4px 20px ${currentColors.primary}40`
      }
    }
    
    return {
      backgroundColor: isDarkMode ? '#1E293B' : '#F9F7F7',
      color: currentColors.text,
      borderColor: currentColors.border
    }
  }

  const getCountStyles = (filterKey) => {
    const isActive = currentFilter === filterKey
    
    if (isActive) {
      return {
        backgroundColor: '#FFFFFF',
        color: currentColors.primary
      }
    }
    
    return {
      backgroundColor: isDarkMode ? '#334155' : '#E5E7EB',
      color: currentColors.mutedText
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const buttonStyles = getButtonStyles(filter.key)
        const countStyles = getCountStyles(filter.key)
        const isActive = currentFilter === filter.key

        return (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className="px-4 py-2 font-medium rounded-xl border transition-all duration-200"
            style={buttonStyles}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.target.style.backgroundColor = isDarkMode ? '#334155' : '#E5E7EB';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.target.style.backgroundColor = buttonStyles.backgroundColor;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }
            }}
            onMouseDown={(e) => {
              if (isActive) {
                e.target.style.transform = 'scale(0.95)';
              }
            }}
            onMouseUp={(e) => {
              if (isActive) {
                e.target.style.transform = 'scale(1)';
              }
            }}
          >
            <span className="flex gap-2 items-center">
              {filter.label}
              <span 
                className="px-2 py-0.5 text-xs rounded-full font-semibold transition-all duration-200"
                style={countStyles}
              >
                {filter.count}
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default TaskFilter