const htmlTaskList = document.querySelector('#lista-tarefas');

function grayBgColor(element, index, array) {
  element.addEventListener('click', (e) => {
    for (let i = 0; i < array.length; i += 1) {
      const arrayItem = array[i];
      arrayItem.style.backgroundColor = '';
    }
    e.target.style.backgroundColor = 'gray';
  });
}

function lineThrough(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function createAndAddItem(value) {
  const taskElement = document.createElement('li');
  taskElement.innerText = value;
  taskElement.className = 'todo-item';
  taskElement.addEventListener('dblclick', lineThrough);
  htmlTaskList.append(taskElement);
}

document.getElementById('criar-tarefa').addEventListener('click', () => {
  const inputValue = document.getElementById('texto-tarefa').value;
  createAndAddItem(inputValue);
  document.getElementById('texto-tarefa').value = '';

  const nodeTaskList = document.querySelectorAll('.todo-item');

  nodeTaskList.forEach(grayBgColor);
});
