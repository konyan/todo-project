class Project {
  constructor() {
    this.nameInput = document.querySelector("#name");
    this.addProject = document.querySelector(".add-project");
    this.project = document.querySelector("#projects");
    this.forState = "add";
  }

  showProjectsList(projects) {
    let output = "";
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
    this.nameInput.value = "";
  }

  fillForm(data) {
    this.nameInput.value = data.name;
  }
}

export const project = new Project();
