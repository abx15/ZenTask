import React, { useState } from 'react'

const TaskItem = ({ task, onToggleComplete, onEdit, onDelete, isDarkMode, colors }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  // Use provided colors or fallback to default
  const currentColors = colors || {
    primary: '#4F8A8B',
    accent: '#E84545',
    success: '#2ECC71',
    text: isDarkMode ? '#F8FAFC' : '#1E293B',
    mutedText: isDarkMode ? '#94A3B8' : '#6B7280',
    surface: isDarkMode ? '#1E293B' : '#FFFFFF',
    border: isDarkMode ? '#334155' : '#E5E7EB',
    background: isDarkMode ? '#0F172A' : '#F9F7F7'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatDueDate = () => {
    if (!task.dueDate) return null
    
    const dueDate = new Date(task.dueDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    dueDate.setHours(0, 0, 0, 0)
    
    const timeDiff = dueDate - today
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    
    if (daysDiff < 0) {
      return { text: `Overdue ${Math.abs(daysDiff)}d`, isUrgent: true }
    } else if (daysDiff === 0) {
      return { text: 'Due today', isUrgent: true }
    } else if (daysDiff === 1) {
      return { text: 'Due tomorrow', isUrgent: false }
    } else if (daysDiff <= 7) {
      return { text: `Due in ${daysDiff}d`, isUrgent: false }
    } else {
      return { 
        text: dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        isUrgent: false 
      }
    }
  }

  const getPriorityBadge = () => {
    if (!task.priority || task.priority === 'medium') return null
    
    const priorityConfig = {
      high: { label: 'High', color: currentColors.accent },
      low: { label: 'Low', color: currentColors.mutedText }
    }
    
    const config = priorityConfig[task.priority]
    if (!config) return null
    
    return (
      <span 
        className="inline-flex items-center px-2 py-1 ml-2 text-xs font-medium rounded-full"
        style={{
          backgroundColor: config.color + '20',
          color: config.color,
          border: `1px solid ${config.color}30`
        }}
      >
        {config.label}
      </span>
    )
  }

  const handleDeleteClick = (e) => {
    e.stopPropagation()
    setShowDeleteConfirm(true)
  }

  const handleConfirmDelete = () => {
    onDelete(task.id)
    setShowDeleteConfirm(false)
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false)
  }

  const handleEditClick = (e) => {
    e.stopPropagation()
    onEdit(task)
  }

  const dueDateInfo = formatDueDate()

  return (
    <>
      <div 
        className="p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-lg"
        style={{
          backgroundColor: currentColors.surface,
          borderColor: currentColors.border,
          opacity: task.completed ? 0.7 : 1,
          transform: 'translateY(0)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)'
          e.currentTarget.style.borderColor = currentColors.primary + '40'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.borderColor = currentColors.border
        }}
        onClick={() => onToggleComplete(task.id)}
      >
        <div className="flex gap-4 items-start">
          {/* Checkbox */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggleComplete(task.id)
            }}
            className="flex flex-shrink-0 justify-center items-center mt-1 w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: task.completed ? currentColors.success : 'transparent',
              borderColor: task.completed ? currentColors.success : currentColors.border
            }}
            onMouseEnter={(e) => {
              if (!task.completed) {
                e.currentTarget.style.borderColor = currentColors.success
              }
            }}
            onMouseLeave={(e) => {
              if (!task.completed) {
                e.currentTarget.style.borderColor = currentColors.border
              }
            }}
          >
            {task.completed && (
              <svg className="w-3 h-3" fill="white" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          {/* Task Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 items-center mb-1">
              <h3 
                className={`text-lg font-semibold ${task.completed ? 'line-through' : ''}`}
                style={{
                  color: task.completed ? currentColors.mutedText : currentColors.text
                }}
              >
                {task.title}
              </h3>
              
              {getPriorityBadge()}
              
              {task.completed && (
                <span 
                  className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: currentColors.success + '20',
                    color: currentColors.success,
                    border: `1px solid ${currentColors.success}30`
                  }}
                >
                  ✓ Completed
                </span>
              )}
            </div>
            
            {task.description && (
              <p 
                className={`text-sm mb-3 ${task.completed ? 'line-through' : ''}`}
                style={{
                  color: task.completed ? currentColors.mutedText : currentColors.mutedText
                }}
              >
                {task.description}
              </p>
            )}

            {/* Tags */}
            {task.tags && task.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {task.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs rounded-lg"
                    style={{
                      backgroundColor: currentColors.primary + '10',
                      color: currentColors.primary,
                      border: `1px solid ${currentColors.primary}20`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 justify-between items-center">
              <span 
                className="text-xs"
                style={{ color: currentColors.mutedText }}
              >
                Created: {formatDate(task.createdAt)}
              </span>

              {dueDateInfo && (
                <span 
                  className={`text-xs font-medium px-2 py-1 rounded-lg ${
                    dueDateInfo.isUrgent ? 'animate-pulse' : ''
                  }`}
                  style={{
                    backgroundColor: dueDateInfo.isUrgent 
                      ? currentColors.accent + '20' 
                      : currentColors.primary + '10',
                    color: dueDateInfo.isUrgent 
                      ? currentColors.accent 
                      : currentColors.primary
                  }}
                >
                  {dueDateInfo.text}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleEditClick}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                color: currentColors.mutedText,
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = currentColors.primary
                e.currentTarget.style.backgroundColor = currentColors.primary + '10'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = currentColors.mutedText
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
              title="Edit task"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>

            <button
              onClick={handleDeleteClick}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                color: currentColors.mutedText,
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = currentColors.accent
                e.currentTarget.style.backgroundColor = currentColors.accent + '10'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = currentColors.mutedText
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
              title="Delete task"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div 
          className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm transition-all duration-300"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCancelDelete()
            }
          }}
        >
          <div 
            className="p-6 w-full max-w-sm rounded-2xl border transition-all duration-300"
            style={{
              backgroundColor: currentColors.surface,
              borderColor: currentColors.border,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div 
                className="flex justify-center items-center mx-auto mb-4 w-12 h-12 rounded-full"
                style={{
                  backgroundColor: currentColors.accent + '20'
                }}
              >
                <svg 
                  className="w-6 h-6" 
                  style={{ color: currentColors.accent }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.134 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 
                className="mb-2 text-lg font-semibold"
                style={{ color: currentColors.text }}
              >
                Delete Task
              </h3>
              <p 
                className="mb-6 text-sm"
                style={{ color: currentColors.mutedText }}
              >
                Are you sure you want to delete "{task.title}"? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleCancelDelete}
                  className="flex-1 px-4 py-2 font-medium rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: currentColors.border,
                    color: currentColors.text
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = currentColors.border + '80'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = currentColors.border
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="flex-1 px-4 py-2 font-medium text-white rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: currentColors.accent
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = currentColors.accent + 'DD'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = `0 4px 20px ${currentColors.accent}40`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = currentColors.accent
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TaskItem