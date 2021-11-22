import makeElement from '../utils/makeElement';
import { Router } from '../routes/router';
import { getStore } from '../redux/store';
import reducer from './../redux/reducers';
import button from '../components/button';
import todoItem from '../components/deleteitem';
import heading from '../components/header';
import appLogo from '../components/logo';

const cancelButton = button('cancel', 'cancelBtn');
const deleteButton = button('delete', 'deleteBtn');

const deletePage = (props) => {
  function cleanUp() {
    cancelButton.removeEventListener('click', onCancelDelete);
    deleteButton.removeEventListener('click', onRemoveTodo);
  }
  function onRemoveTodo(e) {
    if (props != null) {
      Router('/todos');
      const removeTodo = props;
      const index = getStore().findIndex((todo) => todo.id === removeTodo.id);
      const action = {
        type: 'delete',
        payload: { index },
        cb: () => Router('/todos'),
      };
      reducer(action);
      cleanUp();
    }
  }

  function onCancelDelete(e) {
    cleanUp();
    Router('/todos');
  }

  const page = document.createElement('div');
  page.classList.add('deleteDiv');

  const deleteHeader = heading('deleteHeading', 'Delete Todo Item');
  const logo = appLogo();
  page.append(logo, deleteHeader);
  const delItem = getStore().find((cat) => cat.id === props.id);
  const element = todoItem(delItem);
  cancelButton.addEventListener('click', onCancelDelete);
  deleteButton.addEventListener('click', onRemoveTodo);
  page.append(element);
  page.append(cancelButton);
  page.append(deleteButton);
  return page;
};

export default deletePage;
