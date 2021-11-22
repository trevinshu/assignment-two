import makeElement from '../utils/makeElement';

const heading = (className = 'ui-heading', label = 'ui heading') => {
  const template = `<h1 class="${className}">${label}</h1>`;
  const element = makeElement(template);
  return element;
};

export default heading;
