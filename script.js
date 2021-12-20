const newTaskButton = document.getElementById('criar-tarefa');

const htmlTaskList = document.querySelector('#lista-tarefas');

const clearTasksButton = document.getElementById('apaga-tudo');

const clearDoneTasksButton = document.getElementById('remover-finalizados');

// Função que é utilizada para recuperar a 'ol' de forma que ela esteja sempre atualizada com as ultimas 'li'.
function getUpdatedTaskList() {
  const UpdatedTaskList = document.querySelectorAll('.todo-item');
  return UpdatedTaskList;
}

// Aqui é declarada a função que altera/remove o 'background-color' dos itens da lista.
function grayBgColor(element, index, array) {
  element.addEventListener('click', (e) => {
    for (let i = 0; i < array.length; i += 1) {
      const arrayItem = array[i];
      arrayItem.style.backgroundColor = '';
    }
    e.target.style.backgroundColor = 'gray';
  });
}

// Aqui é declarada a função que adiciona/remove a classe 'completed' aos itens da ol.
function lineThrough(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

// Aqui é declarada a função que cria a 'li' com o valor fornecido e a anexa a 'ol'.
function createItem(value) {
  const taskElement = document.createElement('li');
  taskElement.innerText = value;
  taskElement.className = 'todo-item';
  taskElement.addEventListener('dblclick', lineThrough);
  htmlTaskList.append(taskElement);
}

// Aqui é declarada a função que recupera o valor da caixa de texto e o passa para a função responsavel por criar a li e a anexar a ol.
function addNewTask() {
  const inputValue = document.getElementById('texto-tarefa').value;
  createItem(inputValue);
  document.getElementById('texto-tarefa').value = '';
  const tasksToVerifyBGColor = getUpdatedTaskList();
  tasksToVerifyBGColor.forEach(grayBgColor);
}

// Aqui é declarada a função que passa por todos os elementos da lista e os remove.
function deleteAllTasks() {
  const toBeDeletedTasks = getUpdatedTaskList();
  for (let i = 0; i < toBeDeletedTasks.length; i += 1) {
    toBeDeletedTasks[i].remove();
  }
}

// Aqui é declarada a função que passa por todos os elementos da lista, e caso verifique que o mesmo contem a classe 'completed', os remove.
function deleteDoneTasks() {
  const toBeDeletedDoneTasks = getUpdatedTaskList();
  for (let i = 0; i < toBeDeletedDoneTasks.length; i += 1) {
    if (toBeDeletedDoneTasks[i].classList.contains('completed')) {
      toBeDeletedDoneTasks[i].remove();
    }
  }
}

newTaskButton.addEventListener('click', addNewTask);

clearTasksButton.addEventListener('click', deleteAllTasks);

clearDoneTasksButton.addEventListener('click', deleteDoneTasks);
