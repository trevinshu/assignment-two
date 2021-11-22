import { getStore, updateStore } from './store';

function reducer(action) {
  console.log(action);

  switch (action.type) {
    case 'delete':
      // grabing the current store
      const store = getStore();
      const index = action.payload.index;
      const newStore = [...store.slice(0, index), ...store.slice(index + 1)];
      updateStore(newStore);
      action.cb();
      break;
    case 'edit':
      const store2 = getStore();
      const index2 = action.payload.index;
      const newItem = action.payload.updateItem;
      const updateItem = Object.assign(store2[index2], newItem);
      const newStore2 = [...store2.slice(0, index2), updateItem, ...store2.slice(index2 + 1)];
      updateStore(newStore2);
      action.cb();
      break;
    case 'add':
      const store3 = getStore();
      const newItem2 = action.payload.newItem;
      const newStore3 = store3.concat(newItem2);
      updateStore(newStore3);
      action.cb();
      break;
    default:
      return store;
  }
}

export default reducer;
