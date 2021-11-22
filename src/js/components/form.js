import makeElement from '../utils/makeElement';

const form = function (data = {}) {
  const template = `
    <form class="formContainer">
        <div class="idDiv">
            <label>ID:</label>
            <input type="text" id="id" value="${data != null ? data.id : ''}" placeholder="12345678" disabled>
        </div>
        <div class="titleDiv">
            <label>Title:</label>
            <input type="text" id="title" value="${data != null ? data.title : ''}" required>
        </div>
        <div class="descriptionDiv">
            <label>Description</label>
            <input type="text" id="description" value="${data != null ? data.description : ''}" required>
        </div>
        <div class="categoryDiv">
                <label>Category:</label>
                <select id="category" required>
                    <option value="">Select A Category</option>
                    <option value="school">school</option>
                    <option value="career">Career</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="Tech">Tech</option>
                </select>
        </div>
        <div class="checkboxDiv">
                <label>Completed:</label>
                <input type="checkbox" id="isComplete">
        </div>
        <div class="buttonContainer"></div>
    </form>
    
    
    `;
  return makeElement(template);
};

export default form;
