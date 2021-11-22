import homePage from '../pages/home';
import todoPage from '../pages/todos';
import deletePage from '../pages/delete';
import editPage from '../pages/edit';
import addPage from '../pages/add';
import pageNotFound from '../pages/pageNotFound';

/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/

const routes = {
  '/': homePage,
  '/todos': todoPage,
  '/delete': deletePage,
  '/edit': editPage,
  '/add': addPage,
  '/404': pageNotFound,
};
// params that is page data......
const Router = function (pathname, params = null) {
  const isValidRoute = Object.keys(routes).find((key) => key === pathname);

  // loading and unloading pages into the div app
  const app = document.querySelector('#app');
  app.innerHTML = '';

  window.history.pushState({}, pathname, window.location.origin + pathname);

  // app.appendChild(routes[window.location.pathname]())
  if (isValidRoute === undefined || isValidRoute === '') {
    app.appendChild(pageNotFound());
  } else {
    app.appendChild(routes[isValidRoute](params));
  }
};

export { Router };
