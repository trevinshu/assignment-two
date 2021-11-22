import button from '../components/button';
import reducer from '../redux/reducers';
import { getStore } from '../redux/store';
import { Router } from '../routes/router';
import form from '../components/form';
import heading from '../components/header';
import appLogo from '../components/logo';
const editPage = function (props) {
  function cleanUp() {
    cancelBtn.removeEventListener('click', onCancelEdit);
    editButton.removeEventListener('click', onEditTodo);
  }
  function onEditTodo(e) {
    e.preventDefault();
    Router('/todos');
    const index = getStore().findIndex((cat) => {
      return cat.id === props.id;
    });

    const updateItem = {
      id: editForm.querySelector('#id').value,
      title: editForm.querySelector('#title').value,
      description: editForm.querySelector('#description').value,
      category: editForm.querySelector('#category').value,
      isComplete: editForm.querySelector('#isComplete').checked ? true : false,
    };

    const action = {
      type: 'edit',
      payload: { index, updateItem },
      cb: () => {
        Router('/todos');
      },
    };

    reducer(action);
    cleanUp();
  }

  function onCancelEdit(e) {
    e.preventDefault();
    Router('/todos');
    cleanUp();
  }

  const page = document.createElement('div');
  page.classList.add('editDiv');
  const editButton = button('Update', 'editBtn');
  const cancelBtn = button('Cancel', 'cancelBtn');
  const editForm = form(props);
  const checkBox = editForm.querySelector('#isComplete');
  const category = editForm.querySelector('#category');

  if (props != null) {
    if (props.isComplete !== false) checkBox.checked = true;
    if (props.category !== null) category.value = props.category;
  }
  const editHeader = heading('editHeading', 'Edit Todo Item');
  const logo = appLogo();
  editButton.addEventListener('click', onEditTodo);
  cancelBtn.addEventListener('click', onCancelEdit);
  editForm.querySelector('div.buttonContainer').append(editButton, cancelBtn);
  page.append(logo, editHeader);
  page.append(editForm);
  return page;
};

export default editPage;
