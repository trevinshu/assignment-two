import makeElement from '../utils/makeElement';

const tagline = (className = 'tagline', label = 'tagline') => {
  const template = `<p class="${className}">${label}</p>`;
  const element = makeElement(template);
  return element;
};

export default tagline;
