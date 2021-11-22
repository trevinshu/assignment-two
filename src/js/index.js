import { Router } from './routes/router';
import { createStore } from './redux/store';
import { dataFetcher } from './utils/dataFetcher';
import keyGenerator from './utils/key';

// MOVE THE ROUTER
const app = document.querySelector('#app');

const onAppInit = async function (e) {
  let todos = await dataFetcher('./static/data/todos.json');

  // DEMO IF THE DATA DOESN'T HAVE SOME UNIQUE KEY
  // example for this data as there is no unique id
  todos.forEach((item) => {
    if (item.id == undefined) {
      keyGenerator(item);
    }
  });
  createStore(todos);
  Router(window.location.pathname);
};

window.addEventListener('load', onAppInit);
