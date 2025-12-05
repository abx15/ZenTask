import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, onToggleComplete, onEditTask, onDeleteTask, isDarkMode, colors }) => {
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

  if (tasks.length === 0) {
    return (
      <div 
        className="p-12 text-center rounded-2xl border transition-colors duration-300"
        style={{
          backgroundColor: currentColors.surface,
          borderColor: currentColors.border
        }}
      >
        <div 
          className="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full"
          style={{
            backgroundColor: isDarkMode ? '#334155' : '#E5E7EB'
          }}
        >
          <svg 
            className="w-8 h-8"
            style={{ color: currentColors.mutedText }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 
          className="mb-2 text-lg font-semibold"
          style={{ color: currentColors.text }}
        >
          No tasks found
        </h3>
        <p 
          className="mx-auto max-w-sm text-sm"
          style={{ color: currentColors.mutedText }}
        >
          {`Create your first task to get started on your productivity journey`}
        </p>
        <div className="mt-6">
          <div 
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: currentColors.primary + '10',
              color: currentColors.primary,
              border: `1px solid ${currentColors.primary}20`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentColors.primary + '20'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentColors.primary + '10'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            onClick={() => {
              // This would typically be handled by parent component
              // For now, just console log
              console.log('Add first task clicked')
            }}
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Your First Task
          </div>
        </div>
      </div>
    )
  }

  // Sort tasks: incomplete first, then by due date, then by creation date
  const sortedTasks = [...tasks].sort((a, b) => {
    // First, sort by completion status (incomplete first)
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1
    }
    
    // Then sort by due date (sooner first, nulls last)
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate) - new Date(b.dueDate)
    }
    if (a.dueDate && !b.dueDate) return -1
    if (!a.dueDate && b.dueDate) return 1
    
    // Finally sort by creation date (newest first)
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  // Group tasks by status for better organization
  const incompleteTasks = sortedTasks.filter(task => !task.completed)
  const completedTasks = sortedTasks.filter(task => task.completed)

  return (
    <div className="space-y-6">
      {incompleteTasks.length > 0 && (
        <div>
          <div className="flex gap-3 items-center mb-4">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentColors.primary }}
            />
            <h3 
              className="text-lg font-semibold"
              style={{ color: currentColors.text }}
            >
              Pending Tasks
              <span 
                className="ml-2 px-2 py-0.5 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: currentColors.primary + '20',
                  color: currentColors.primary
                }}
              >
                {incompleteTasks.length}
              </span>
            </h3>
          </div>
          <div className="space-y-4">
            {incompleteTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
                isDarkMode={isDarkMode}
                colors={currentColors}
              />
            ))}
          </div>
        </div>
      )}

      {completedTasks.length > 0 && (
        <div>
          <div className="flex gap-3 items-center mb-4">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentColors.success }}
            />
            <h3 
              className="text-lg font-semibold"
              style={{ color: currentColors.text }}
            >
              Completed Tasks
              <span 
                className="ml-2 px-2 py-0.5 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: currentColors.success + '20',
                  color: currentColors.success
                }}
              >
                {completedTasks.length}
              </span>
            </h3>
          </div>
          <div 
            className="p-4 space-y-4 rounded-xl"
            style={{
              backgroundColor: isDarkMode ? '#0F172A' : '#F9F7F7',
              border: `1px solid ${currentColors.border}`
            }}
          >
            {completedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
                isDarkMode={isDarkMode}
                colors={currentColors}
              />
            ))}
          </div>
        </div>
      )}

      {/* Summary Footer */}
      <div 
        className="flex justify-between items-center pt-4 mt-6 text-sm border-t"
        style={{
          borderColor: currentColors.border,
          color: currentColors.mutedText
        }}
      >
        <div>
          Showing <span style={{ color: currentColors.text, fontWeight: 500 }}>{tasks.length}</span> tasks
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentColors.primary }}
            />
            <span>Pending</span>
          </div>
          <div className="flex gap-2 items-center">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentColors.success }}
            />
            <span>Completed</span>
          </div>
          <div className="flex gap-2 items-center">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentColors.accent }}
            />
            <span>Urgent</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskList