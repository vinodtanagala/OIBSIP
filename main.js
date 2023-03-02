const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');

addTaskBtn.addEventListener('click', function() {
  const taskValue = taskInput.value;
  if (taskValue === '') return;
  
  const taskHTML = `
    <li>
      <span>${taskValue}</span>
      <button>Delete</button>
    </li>
  `;
  taskList.insertAdjacentHTML('beforeend', taskHTML);
  taskInput.value = '';
  
  const deleteBtns = document.querySelectorAll('li button');
  deleteBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      this.parentElement.remove();
    });
  });
});