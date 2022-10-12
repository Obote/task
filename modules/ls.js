function LS() { }

LS.prototype.fetchTask = () => {
  let tasks = localStorage.getItem('tasks');

  if (tasks) {
    tasks = JSON.parse(tasks);
  } else {
    tasks = [];
  }
  return tasks;
};

LS.prototype.storeTask = (task) => {
  const tasks = this.fetchTask();
  tasks.unshift(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

LS.prototype.deleteTask = (id) => {
  const tasks = this.fetchTask();
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

LS.prototype.completeTask = (id) => {
  const tasks = this.fetchTask();
  const index = tasks.findIndex((task) => task.id === id);
  if (tasks[index].isComplete) {
    tasks[index].isComplete = false;
  } else {
    tasks[index].isComplete = true;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

LS.prototype.findTask = (id) => {
  const tasks = this.fetchTask();
  return tasks.find((task) => task.id === id);
};

LS.prototype.updateTask = (id, title) => {
  const tasks = this.fetchTask();
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].title = title;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default LS;