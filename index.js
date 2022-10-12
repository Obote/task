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
