import {
  idInput, nameInput, addProject, project,
} from './dom';

class Project {
  constructor(idInput, nameInput, addProject, project) {
    this.idInput = idInput;
    this.nameInput = nameInput;
    this.addProject = addProject;
    this.project = project;
  }

  showProjectsList(projects) {
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

    this.project.innerHTML = output;
  }

  clearFields() {
    this.nameInput.value = '';
  }

  fillForm(data) {
    this.nameInput.value = data.name;
    this.idInput.value = data.index;

    this.changeFormState('edit-project');
  }

  // Clear ID hidden value
  clearIdInput() {
    this.idInput.value = '';
  }

  // Change the form state
  changeFormState(type) {
    if (type === 'edit-project') {
      this.addProject.textContent = 'Update';
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
      this.addProject.textContent = 'Add';
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      this.clearIdInput();
      // Clear text
      this.clearFields();
    }
  }
}

export default new Project(idInput, nameInput, addProject, project);
