import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, onToggleComplete, onEditTask, onDeleteTask, isDarkMode }) => {
  if (tasks.length === 0) {
    return (
      <div className={`p-12 text-center rounded-2xl border transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-zinc-900 border-zinc-800' 
          : 'bg-white border-gray-200'
      }`}>
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
          <svg className={`w-8 h-8 ${
            isDarkMode ? 'text-gray-600' : 'text-gray-400'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className={`text-lg font-semibold mb-2 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          No tasks found
        </h3>
        <p className={`text-sm ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Create your first task to get started on your productivity journey
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  )
}

export default TaskList