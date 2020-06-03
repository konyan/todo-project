class Project {
  constructor() {
    this.idInput = document.querySelector("#id");
    this.nameInput = document.querySelector("#name");
    this.projects = document.querySelector("#projects");
  }

  showProjectsList(projects) {
    let output = "";
    projects.map((project) => {
      output += `
      <li id="${project.id}" class="project">
                        <div class="form-check">
                          <label class="form-check-label">
                            ${project.name}
                          </label>
                        </div>
                        <div class="project-actions">
                          <i class="edit-project fa fa-pencil" data-id=${project.id}></i>
                          <i class="remove-project fa fa-trash-o" data-id=${project.id}></i>
                        </div>
                      </li>
      `;
    });

    this.projects.innerHTML = output;
  }

  clearFields() {
    this.nameInput.value = "";
  }

  fillForm(data) {
    this.nameInput.value = data.name;
    this.idInput.value = data.id;
  }
}

export const project = new Project();
