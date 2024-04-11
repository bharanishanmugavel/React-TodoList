
// TaskList.jsx
import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onEditTask, onChangeStatusTask }) => {
  return (
    <div className="row">
      {tasks.map(task => (
        <div className="col-md-4 mb-4" key={task.id}>
          <div className="card shadow-lg rounded">
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.description}</p>
              <div className="form-group">
                <select 
                  value={task.status} 
                  onChange={(e) => onChangeStatusTask(task.id, e.target.value)} 
                  className="form-control">
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <button 
                onClick={() => onEditTask(task.id, prompt('Enter new title:', task.title), prompt('Enter new description:', task.description))} 
                className="btn-1">
                Edit
              </button>
              <button 
                onClick={() => onDeleteTask(task.id)} 
                className="btn-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
