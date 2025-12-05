// Username storage functions
export const storeUsername = (username) => {
  try {
    localStorage.setItem('taskflow_username', username);
  } catch (error) {
    console.error('Error storing username:', error);
  }
};

export const getStoredUsername = () => {
  try {
    return localStorage.getItem('taskflow_username') || null;
  } catch (error) {
    console.error('Error retrieving username:', error);
    return null;
  }
};

export const clearStoredUsername = () => {
  try {
    localStorage.removeItem('taskflow_username');
  } catch (error) {
    console.error('Error clearing username:', error);
  }
};

// Tasks storage functions
export const storeTasks = (tasks) => {
  try {
    localStorage.setItem('taskflow_tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error storing tasks:', error);
  }
};

export const getTasks = () => {
  try {
    const storedTasks = localStorage.getItem('taskflow_tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    return [];
  }
};