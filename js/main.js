let form = document.querySelector('form');
let inputItem = document.getElementById('inputItem');
let listItens = document.getElementById('ListItems');

let showSucessTrashItem = document.querySelector('footer');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let newContainerItem = document.createElement('div');
  newContainerItem.classList.add('item_container');

  let checkboxItem = document.createElement('input');
  checkboxItem.type = 'checkbox';

  let labelItem = document.createElement('label');
  labelItem.classList.add('nameItemCheck');
  labelItem.textContent = inputItem.value;

  let deleteIcon = document.createElement('img');
  deleteIcon.src = '../assets/icons/trash.svg';
  deleteIcon.alt = 'ícone de excluir';

  deleteIcon.addEventListener('click', () => {
    listItens.removeChild(newContainerItem);
    showSucessTrashItem.classList.add('showSucessTrash');

    setTimeout(() => {
      showSucessTrashItem.classList.remove('showSucessTrash');
    }, 1000);

  });

  newContainerItem.append(checkboxItem, labelItem, deleteIcon);
  listItens.append(newContainerItem);

  inputItem.value = '';
});
