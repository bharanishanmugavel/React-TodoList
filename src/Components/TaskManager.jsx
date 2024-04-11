
// TaskManager.jsx
import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, { ...newTask, id: Date.now() }];
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (taskId, newTitle, newDescription) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
          description: newDescription
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleStatusChangeTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          status: newStatus
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredTasks = statusFilter === 'all' ? tasks : tasks.filter(task => task.status === statusFilter);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>MY ToDo</h1>
      <div>
        <div>
          <AddTaskForm onAddTask={handleAddTask} />
        </div>
      </div>
      <div className='change'>
        <select className='change-1' value={statusFilter} onChange={handleStatusFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div>
        <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} onChangeStatusTask={handleStatusChangeTask} />
      </div>
    </div>
  );
};

export default TaskManager;
