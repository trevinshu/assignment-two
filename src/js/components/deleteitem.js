import makeElement from '../utils/makeElement';

const deleteItem = ({ id, title, category, description, isComplete }) => {
  const template = `
        <ul data-key="${id}" class="itemUl ${category}">
            <div>
              <li class="liHeading">${title}</li>
              <li class="category">${category}</li>
              <li class="description">${description}</li>
              <li class"complete">${isComplete ? 'Completed' : ''}</li>
            </div>
        </ul>
    `;
  const element = makeElement(template);
  return element;
};

export default deleteItem;
