import makeElement from '../utils/makeElement';

const todoItem = ({ id, title, category, description, isComplete }) => {
  const template = `
        <ul data-key="${id}" class="itemUl ${category}">
            <div>
              <li class="liHeading">${title}</li>
              <li class="category">${category}</li>
              <li class="description">${description}</li>
              <li class"complete">${isComplete ? 'Completed' : ''}</li>
            </div>
            <div class="btnContainer" data-key="${id}">
                <a data-key="${id}" id="edit" class="editBtn">Edit</a>
                <a data-key="${id}" id="delete" class="removeBtn">Remove</a>
            </div>
        </ul>
    `;
  const element = makeElement(template);
  return element;
};

export default todoItem;
