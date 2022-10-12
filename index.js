/* eslint-disable no-unused-vars */
import UI from './modules/ui.js';
import Task from './modules/task.js';

const ui = new UI();

ui.showAllTasks();

document.querySelector('.AddTaskBtn').addEventListener('click', (e) => {
  const taskTitle = document.querySelector('#newtaskID').value;

  if (taskTitle.length > 0) {
    const task = new Task(taskTitle);

    ui.addToUI(task);
  }
});

document.querySelector('.task-list').addEventListener('click', (e) => {
  if (e.target.className.includes('task__op_edit')) {
    ui.editTask(e);
  }

  if (e.target.className.includes('task__op_delete')) {
    ui.deleteTask(e);
  }

  if (e.target.className.includes('task-check')) {
    ui.completeTask(e);
  }
});
