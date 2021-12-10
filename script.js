let taskList = document.querySelector('#lista-tarefas');

document.getElementById('criar-tarefa').addEventListener('click', () => {
  let inputValue = document.getElementById('texto-tarefa').value;
  createAndAddItem(inputValue);
  document.getElementById('texto-tarefa').value = '';
});

function createAndAddItem(value) {
  let taskElement = document.createElement('li');
  taskElement.innerText = value;
  taskList.append(taskElement);
}
