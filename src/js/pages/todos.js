import todoList from '../components/todolist';
import todoItem from '../components/todoitem';
import { getStore } from '../redux/store';
import { Router } from '../routes/router';
import button from '../components/button';
import heading from '../components/header';
import appLogo from '../components/logo';
import tagline from '../components/tagline';

const todoPage = () => {
  const page = document.createElement('div');
  page.classList.add('todoDiv');
  const todoContainer = todoList();

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('todoHeader');
  page.append(headerContainer);

  const logo = appLogo();
  const headerItems = document.createElement('div');
  headerItems.classList.add('headerItems');
  const todoHeading = heading('todoHeading', "Trevin's Todo App");
  const todoTagline = tagline('todoTagline', "App To Manage Your Todo's");
  headerItems.append(todoHeading, todoTagline);
  headerContainer.append(logo, headerItems);

  function onDeleteTodo(e) {
    const todoId = e.currentTarget.dataset.key;
    const todo = getStore().filter((todo) => todo.id === todoId);
    Router('/delete', todo[0]);
  }

  function onEditTodo(e) {
    const todoId = e.currentTarget.dataset.key;
    const todo = getStore().filter((todo) => todo.id === todoId);
    Router('/edit', todo[0]);
  }

  function onAddTodo(e) {
    e.preventDefault();
    Router('/add');
  }

  function render() {
    const div = todoContainer.querySelector('#todos');
    const todoElements = getStore().map((emp) => todoItem(emp));
    todoElements.forEach((element) => {
      element.querySelector('#delete').addEventListener('click', onDeleteTodo);
      element.querySelector('#edit').addEventListener('click', onEditTodo);
      div.append(element);
    });
    const addBtn = button('Add', 'addBtn');
    addBtn.addEventListener('click', onAddTodo);
    page.append(todoContainer);
    page.append(addBtn);
  }
  render();
  return page;
};

export default todoPage;
