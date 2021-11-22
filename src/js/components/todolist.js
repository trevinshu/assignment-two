import makeElement from '../utils/makeElement';

const todolist = function () {
  const template = `
    <div>
      <div id="todos"></div>
    </div>
  `;

  const element = makeElement(template);
  return element;
};
export default todolist;
