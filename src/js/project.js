const idInput = document.querySelector('#project-index');
const nameInput = document.querySelector('#name');
const addProject = document.querySelector('.add-project');
const project = document.querySelector('#projects');

class Project {
  static showProjectsList(projects) {
    let output = '';
    projects.forEach((project, index) => {
      output += `
      <li class="project">
          <div class="form-check">
            <label class="form-check-label">
              ${project.name}
            </label>
          </div>
          <div class="project-actions">
          <a class="edit-project" data-id="${index}">
            <i class="fa fa-pencil"></i>
            </a>
            <a class="remove-project" data-id="${index}">
            <i class="fa fa-trash-o"></i>
            </a>
          </div>
        </li>
      `;
    });

    project.innerHTML = output;
  }

  static clearFields() {
    nameInput.value = '';
  }

  static fillForm(data) {
    nameInput.value = data.name;
    idInput.value = data.index;

    this.changeFormState('edit');
  }

  // Clear ID hidden value
  static clearIdInput() {
    idInput.value = '';
  }

  // Change the form state
  static changeFormState(type) {
    if (type === 'edit') {
      addProject.textContent = 'Update';
      if (document.querySelector('.post-cancel') == null) {
        // Create cancel button
        const button = document.createElement('button');
        button.className = 'post-cancel btn btn-cancel';
        button.appendChild(document.createTextNode('Cancel'));

        // Get parent
        const cardForm = document.querySelector('.add-items');
        // Get element to insert before
        const formEnd = document.querySelector('.form-end');
        // Insert cancel button
        cardForm.insertBefore(button, formEnd);
      }
    } else {
      addProject.textContent = 'Add';
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      this.clearIdInput();
      // Clear text
      this.clearFields();
    }
  }
}

export default new Project();
