function UI() {}

const ls = new LS();

UI.prototype.showAllTasks = () => {
  const tasks = ls.fetchTask();
  let newHtml = '';
  tasks.forEach((taks) => {
    newHtml += `
               <div class="task ${taks.isComplete ? 'completed' : ''}" data-createdat="${taks.id}">
               <div class="task__details">
                 <input type="checkbox" class="task-check" ${taks.isComplete ? 'checked' : ''} />
                 <label class="task-title">${taks.title}</label>
               </div>
   
               <div class="task__op">
                 <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
                 <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
               </div>
             </div>
             `;
  });

  document.querySelector('.task-list').innerHTML = newHtml;
};

UI.prototype.addToUI = (task) => {
  ls.storeTask(task);

  const newHtml = `
    <div class="task" data-createdat="${task.id}">
    <div class="task__details">
      <input type="checkbox" class="task-check" />
      <label class="task-title">${task.title}</label>
    </div>

    <div class="task__op">
      <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
      <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
    </div>
  </div>
    
    `;

  document.querySelector('.task-list').insertAdjacentHTML('afterbegin', newHtml);
};

UI.prototype.resetForm = () => {
  document.querySelector('#newtaskID').value = '';
};

export default UI;