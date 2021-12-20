const newTaskButton = document.getElementById('criar-tarefa');

// Aqui é recuperado o elemento 'ol' do HTML
const htmlTaskList = document.querySelector('#lista-tarefas');

// Aqui e recuperado o botão que apaga toda a lista de tarefas.
const clearTasksButton = document.getElementById('apaga-tudo');

// Aqui e recuperado o botão que apaga tarefas marcadas como completadas.
const clearDoneTasksButton = document.getElementById('remover-finalizados');

// Aqui é declarada a função que altera a cor de fundo dos items da lista que forem clicados 1 vez e remove a cor de fundo dos outros.
function grayBgColor(element, index, array) {
  element.addEventListener('click', (e) => {
    for (let i = 0; i < array.length; i += 1) {
      const arrayItem = array[i];
      arrayItem.style.backgroundColor = '';
    }
    e.target.style.backgroundColor = 'gray';
  });
}

// Aqui é declarada a função que adiciona a classe que adiciona/remove a linha através dos itens que forem clicados 2 vezes.
function lineThrough(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

// Aqui é declarada a função que cria os item e os adiciona dentro da 'ol'.
function createAndAddItem(value) {
  const taskElement = document.createElement('li');
  taskElement.innerText = value;
  taskElement.className = 'todo-item';
  taskElement.addEventListener('dblclick', lineThrough);
  htmlTaskList.append(taskElement);
}

function addNewTask() {
  const inputValue = document.getElementById('texto-tarefa').value;
  createAndAddItem(inputValue);
  document.getElementById('texto-tarefa').value = '';
  const nodeTaskList = document.querySelectorAll('.todo-item');
  nodeTaskList.forEach(grayBgColor);
}

function deleteAllTask() {
  const toBeClearedTaskList = document.querySelectorAll('.todo-item');
  for (let i = 0; i < toBeClearedTaskList.length; i += 1) {
    toBeClearedTaskList[i].remove();
  }
}

function deleteDoneTasks() {
  const toBeClearedTaskList = document.querySelectorAll('.todo-item');
  for (let i = 0; i < toBeClearedTaskList.length; i += 1) {
    if (toBeClearedTaskList[i].classList.contains('completed')) {
      toBeClearedTaskList[i].remove();
    }
  }
}

newTaskButton.addEventListener('click', addNewTask);

clearTasksButton.addEventListener('click', deleteAllTask);

clearDoneTasksButton.addEventListener('click', deleteDoneTasks);
