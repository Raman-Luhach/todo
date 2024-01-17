document.getElementById('todo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const todoInput = document.getElementById('todo-input');
  if (todoInput.value.trim() === '') {
    alert('Please enter a task!');
    return;
  }
  const todoList = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="checkbox">
    <span>${todoInput.value}</span>
    <span class="delete">❌</span>
  `;
  li.querySelector('.delete').addEventListener('click', function() {
    todoList.removeChild(li);
  });
  todoList.appendChild(li);
  todoInput.value = '';
});
