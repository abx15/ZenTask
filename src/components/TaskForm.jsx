import React, { useState, useEffect } from 'react'

const TaskForm = ({ task, onSave, onCancel, isDarkMode, colors }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('medium')
  const [tags, setTags] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (task) {
      setTitle(task.title || '')
      setDescription(task.description || '')
      setDueDate(task.dueDate || '')
      setPriority(task.priority || 'medium')
      setTags(task.tags ? task.tags.join(', ') : '')
    }
  }, [task])

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

  const getPriorityColor = (priorityLevel) => {
    switch (priorityLevel) {
      case 'high':
        return currentColors.accent // Red for high priority
      case 'medium':
        return currentColors.primary // Teal for medium priority
      case 'low':
        return '#6B7280' // Gray for low priority
      default:
        return currentColors.primary
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!title.trim()) {
      return
    }

    setIsSubmitting(true)
    
    const taskData = {
      title: title.trim(),
      description: description.trim(),
      dueDate: dueDate || null,
      priority: priority,
      tags: tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : []
    }

    // Simulate a brief loading state for better UX
    setTimeout(() => {
      if (task) {
        onSave(task.id, taskData)
      } else {
        onSave(taskData)
      }
      setIsSubmitting(false)
    }, 300)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel()
    }
  }

  const priorityOptions = [
    { value: 'low', label: 'Low', color: getPriorityColor('low') },
    { value: 'medium', label: 'Medium', color: getPriorityColor('medium') },
    { value: 'high', label: 'High', color: getPriorityColor('high') }
  ]

  return (
    <div 
      className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm transition-all duration-300"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleOverlayClick}
    >
      <div 
        className="w-full max-w-md rounded-2xl border transition-all duration-300 transform scale-100 max-h-[90vh] overflow-y-auto"
        style={{
          backgroundColor: currentColors.surface,
          borderColor: currentColors.border,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
        }}
      >
        {/* Header */}
        <div 
          className="sticky top-0 px-6 py-4 border-b"
          style={{
            backgroundColor: currentColors.surface,
            borderColor: currentColors.border
          }}
        >
          <div className="flex justify-between items-center">
            <h2 
              className="text-xl font-semibold"
              style={{ color: currentColors.text }}
            >
              {task ? 'Edit Task' : 'Add New Task'}
            </h2>
            <button
              onClick={onCancel}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                color: currentColors.mutedText,
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = isDarkMode ? '#334155' : '#F3F4F6';
                e.target.style.color = currentColors.text;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = currentColors.mutedText;
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title Input */}
          <div>
            <label 
              htmlFor="title" 
              className="block mb-2 text-sm font-semibold"
              style={{ color: currentColors.text }}
            >
              Title *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-4 py-3 w-full rounded-xl border-2 transition-all duration-200 focus:outline-none"
              style={{
                backgroundColor: isDarkMode ? '#0F172A' : '#FFFFFF',
                borderColor: currentColors.border,
                color: currentColors.text
              }}
              placeholder="Enter task title"
              required
              disabled={isSubmitting}
            />
            <style jsx>{`
              input:focus {
                border-color: ${currentColors.primary};
                box-shadow: 0 0 0 3px ${currentColors.primary}15;
              }
              input::placeholder {
                color: ${currentColors.mutedText};
              }
            `}</style>
          </div>

          {/* Description Input */}
          <div>
            <label 
              htmlFor="description" 
              className="block mb-2 text-sm font-semibold"
              style={{ color: currentColors.text }}
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="px-4 py-3 w-full rounded-xl border-2 transition-all duration-200 resize-none focus:outline-none"
              style={{
                backgroundColor: isDarkMode ? '#0F172A' : '#FFFFFF',
                borderColor: currentColors.border,
                color: currentColors.text
              }}
              placeholder="Enter task description (optional)"
              disabled={isSubmitting}
            />
            <style jsx>{`
              textarea:focus {
                border-color: ${currentColors.primary};
                box-shadow: 0 0 0 3px ${currentColors.primary}15;
              }
              textarea::placeholder {
                color: ${currentColors.mutedText};
              }
            `}</style>
          </div>

          {/* Due Date Input */}
          <div>
            <label 
              htmlFor="dueDate" 
              className="block mb-2 text-sm font-semibold"
              style={{ color: currentColors.text }}
            >
              Due Date
            </label>
            <input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="px-4 py-3 w-full rounded-xl border-2 transition-all duration-200 focus:outline-none"
              style={{
                backgroundColor: isDarkMode ? '#0F172A' : '#FFFFFF',
                borderColor: currentColors.border,
                color: currentColors.text
              }}
              disabled={isSubmitting}
            />
            <style jsx>{`
              input[type="date"]:focus {
                border-color: ${currentColors.primary};
                box-shadow: 0 0 0 3px ${currentColors.primary}15;
              }
              input[type="date"]::-webkit-calendar-picker-indicator {
                filter: ${isDarkMode ? 'invert(1)' : 'none'};
                cursor: pointer;
              }
            `}</style>
          </div>

          {/* Priority Selection */}
          <div>
            <label 
              className="block mb-2 text-sm font-semibold"
              style={{ color: currentColors.text }}
            >
              Priority
            </label>
            <div className="flex gap-2">
              {priorityOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPriority(option.value)}
                  className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                    priority === option.value ? 'text-white' : ''
                  }`}
                  style={{
                    backgroundColor: priority === option.value 
                      ? option.color 
                      : isDarkMode ? '#0F172A' : '#F3F4F6',
                    color: priority === option.value 
                      ? '#FFFFFF' 
                      : currentColors.text,
                    border: `1px solid ${priority === option.value ? option.color : currentColors.border}`
                  }}
                  onMouseEnter={(e) => {
                    if (priority !== option.value) {
                      e.target.style.backgroundColor = isDarkMode ? '#334155' : '#E5E7EB';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (priority !== option.value) {
                      e.target.style.backgroundColor = isDarkMode ? '#0F172A' : '#F3F4F6';
                    }
                  }}
                  disabled={isSubmitting}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tags Input */}
          <div>
            <label 
              htmlFor="tags" 
              className="block mb-2 text-sm font-semibold"
              style={{ color: currentColors.text }}
            >
              Tags
            </label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="px-4 py-3 w-full rounded-xl border-2 transition-all duration-200 focus:outline-none"
              style={{
                backgroundColor: isDarkMode ? '#0F172A' : '#FFFFFF',
                borderColor: currentColors.border,
                color: currentColors.text
              }}
              placeholder="Enter tags separated by commas (optional)"
              disabled={isSubmitting}
            />
            <style jsx>{`
              input:focus {
                border-color: ${currentColors.primary};
                box-shadow: 0 0 0 3px ${currentColors.primary}15;
              }
              input::placeholder {
                color: ${currentColors.mutedText};
              }
            `}</style>
            <p 
              className="mt-1 text-xs"
              style={{ color: currentColors.mutedText }}
            >
              Separate tags with commas (e.g., work, urgent, personal)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-3 font-medium rounded-xl transition-all duration-200"
              style={{
                backgroundColor: isDarkMode ? '#0F172A' : '#F3F4F6',
                color: currentColors.text,
                border: `1px solid ${currentColors.border}`
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = isDarkMode ? '#334155' : '#E5E7EB';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = isDarkMode ? '#0F172A' : '#F3F4F6';
                e.target.style.transform = 'translateY(0)';
              }}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim() || isSubmitting}
              className="flex-1 px-4 py-3 font-medium text-white rounded-xl transition-all duration-200"
              style={{
                backgroundColor: !title.trim() || isSubmitting
                  ? (isDarkMode ? '#475569' : '#9CA3AF')
                  : currentColors.primary,
                opacity: !title.trim() || isSubmitting ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (title.trim() && !isSubmitting) {
                  e.target.style.backgroundColor = currentColors.primary + 'DD';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 8px 25px ${currentColors.primary}40`;
                }
              }}
              onMouseLeave={(e) => {
                if (title.trim() && !isSubmitting) {
                  e.target.style.backgroundColor = currentColors.primary;
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
              onMouseDown={(e) => {
                if (title.trim() && !isSubmitting) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = `0 4px 15px ${currentColors.primary}20`;
                }
              }}
              onMouseUp={(e) => {
                if (title.trim() && !isSubmitting) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 8px 25px ${currentColors.primary}40`;
                }
              }}
            >
              {isSubmitting ? (
                <div className="flex justify-center items-center">
                  <svg className="mr-2 -ml-1 w-4 h-4 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </div>
              ) : (
                task ? 'Update Task' : 'Add Task'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskForm