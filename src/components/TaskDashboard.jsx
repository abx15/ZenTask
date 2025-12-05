import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import { getTasks, storeTasks } from '../utils/localStorage';

const TaskDashboard = ({ username, onLogout, isDarkMode, toggleDarkMode }) => {
  // Initialize tasks state with data from localStorage
  const [tasks, setTasks] = useState(() => getTasks());
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    // Save tasks to localStorage whenever tasks change
    storeTasks(tasks);
  }, [tasks]);

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
  };

  const currentColors = isDarkMode ? colors.dark : colors.light;

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      description: taskData.description || '',
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: taskData.dueDate || null,
      priority: taskData.priority || 'medium',
      tags: taskData.tags || []
    };
    setTasks([...tasks, newTask]);
    setShowTaskForm(false);
  };

  const updateTask = (taskId, updatedData) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedData } : task
      )
    );
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      currentFilter === 'all' ||
      (currentFilter === 'completed' && task.completed) ||
      (currentFilter === 'pending' && !task.completed);

    const matchesSearch =
      !searchQuery ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const taskCounts = {
    all: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: currentColors.background }}
    >
      {/* Header */}
      <header
        className="border-b transition-colors duration-300"
        style={{
          backgroundColor: isDarkMode ? '#0F172A' : '#FFFFFF',
          borderColor: currentColors.border
        }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div
                className="flex justify-center items-center w-12 h-12 rounded-xl"
                style={{ backgroundColor: currentColors.primary }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 
                  className="text-3xl font-bold tracking-tight"
                  style={{ color: currentColors.text }}
                >
                  Zen<span style={{ color: currentColors.primary }}>Task</span>
                </h1>
                <p 
                  className="text-sm"
                  style={{ color: currentColors.mutedText }}
                >
                  Welcome back, {username}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: isDarkMode ? '#1E293B' : '#E5E7EB',
                  color: currentColors.text
                }}
                aria-label="Toggle dark mode"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = isDarkMode ? '#334155' : '#D1D5DB';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = isDarkMode ? '#1E293B' : '#E5E7EB';
                }}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>

              {/* Logout Button */}
              <button
                onClick={onLogout}
                className="px-4 py-2 font-medium rounded-lg border transition-all duration-200"
                style={{
                  color: currentColors.text,
                  borderColor: currentColors.accent + '40',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = currentColors.accent + '15';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-3">
            {/* Quick Actions */}
            <div
              className="p-6 rounded-2xl border transition-colors duration-300"
              style={{
                backgroundColor: currentColors.surface,
                borderColor: currentColors.border
              }}
            >
              <h2
                className="mb-4 text-lg font-semibold"
                style={{ color: currentColors.text }}
              >
                Quick Actions
              </h2>
              <button
                onClick={() => setShowTaskForm(true)}
                className="px-4 py-3 w-full font-medium text-white rounded-xl transition-all duration-200 active:scale-95"
                style={{ backgroundColor: currentColors.primary }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = currentColors.primary + 'DD';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(79, 138, 139, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = currentColors.primary;
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 15px rgba(79, 138, 139, 0.2)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(79, 138, 139, 0.3)';
                }}
              >
                + Add New Task
              </button>
            </div>

            {/* Task Statistics */}
            <div
              className="px-6 pt-6 pb-3 rounded-2xl border transition-colors duration-300"
              style={{
                backgroundColor: currentColors.surface,
                borderColor: currentColors.border
              }}
            >
              <h2
                className="mb-4 text-lg font-semibold"
                style={{ color: currentColors.text }}
              >
                Statistics
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm"
                    style={{ color: currentColors.mutedText }}
                  >
                    Total Tasks
                  </span>
                  <span
                    className="font-bold"
                    style={{ color: currentColors.text }}
                  >
                    {taskCounts.all}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm"
                    style={{ color: currentColors.mutedText }}
                  >
                    Completed
                  </span>
                  <span 
                    className="font-bold"
                    style={{ color: currentColors.success }}
                  >
                    {taskCounts.completed}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm"
                    style={{ color: currentColors.mutedText }}
                  >
                    Pending
                  </span>
                  <span 
                    className="font-bold"
                    style={{ color: currentColors.primary }}
                  >
                    {taskCounts.pending}
                  </span>
                </div>
              </div>
              <div className="pt-6 mt-8 border-t" style={{ borderColor: currentColors.border }}>
                <p 
                  className="text-xs font-medium text-center"
                  style={{ color: currentColors.mutedText }}
                >
                  Built by Arun Kumar Bind for ZenTask
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="space-y-6 lg:col-span-9">
            {/* Search and Filter */}
            <div
              className="p-6 rounded-2xl border transition-colors duration-300"
              style={{
                backgroundColor: currentColors.surface,
                borderColor: currentColors.border
              }}
            >
              <div className="flex flex-col gap-4 mb-6 sm:flex-row">
                {/* Search Bar */}
                <div className="flex-1">
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 w-5 h-5 transform -translate-y-1/2"
                      style={{ color: currentColors.mutedText }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search tasks..."
                      className="py-3 pr-4 pl-10 w-full rounded-xl border-2 transition-all duration-200 focus:outline-none"
                      style={{
                        backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF',
                        borderColor: currentColors.border,
                        color: currentColors.text
                      }}
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
                </div>
              </div>

              {/* Filter Tabs */}
              <TaskFilter
                currentFilter={currentFilter}
                onFilterChange={setCurrentFilter}
                taskCounts={taskCounts}
                isDarkMode={isDarkMode}
                colors={currentColors}
              />
            </div>

            {/* Task List */}
            <TaskList
              tasks={filteredTasks}
              onToggleComplete={toggleTaskCompletion}
              onEditTask={setEditingTask}
              onDeleteTask={deleteTask}
              isDarkMode={isDarkMode}
              colors={currentColors}
            />
          </div>
        </div>
      </main>

      {/* Task Form Modal */}
      {(showTaskForm || editingTask) && (
        <TaskForm
          task={editingTask}
          onSave={editingTask ? updateTask : addTask}
          onCancel={() => {
            setShowTaskForm(false);
            setEditingTask(null);
          }}
          isDarkMode={isDarkMode}
          colors={currentColors}
        />
      )}
    </div>
  );
};

export default TaskDashboard;