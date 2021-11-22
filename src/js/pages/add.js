import form from '../components/form';
import { Router } from '../routes/router';
import keyGenerator from '../utils/key';
import reducer from '../redux/reducers';
import button from '../components/button';
import heading from '../components/header';
import appLogo from '../components/logo';
const addPage = function (props) {
  function cleanUp() {
    cancelBtn.removeEventListener('click', onCancelAdd);
    addBtn.removeEventListener('click', onAddTodo);
  }
  function onAddTodo(e) {
    e.preventDefault();
    Router('/todos');
    const newItem = {
      id: addForm.querySelector('#id').value,
      title: addForm.querySelector('#title').value,
      description: addForm.querySelector('#description').value,
      category: addForm.querySelector('#category').value,
      isComplete: addForm.querySelector('#isComplete').checked ? true : false,
    };

    if (newItem.id == '') {
      keyGenerator(newItem);
    }

    const action = {
      type: 'add',
      payload: { newItem },
      cb: () => {
        Router('/todos');
      },
    };
    reducer(action);
    cleanUp();
  }

  function onCancelAdd(e) {
    e.preventDefault();
    Router('/todos');
    cleanUp();
  }
  const page = document.createElement('div');
  page.classList.add('addDiv');
  const addHeader = heading('editHeading', 'Edit Todo Item');
  const logo = appLogo();
  const addBtn = button('add', 'addBtn');
  const cancelBtn = button('cancel', 'cancelBtn');
  const addForm = form(props);
  addBtn.addEventListener('click', onAddTodo);
  cancelBtn.addEventListener('click', onCancelAdd);
  addForm.querySelector('div.buttonContainer').append(addBtn, cancelBtn);
  page.append(logo, addHeader);
  page.append(addForm);
  return page;
};

export default addPage;
