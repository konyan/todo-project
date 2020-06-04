class Todo {
  constructor() {
    this.title = document.querySelector("#title");
    this.description = document.querySelector("#description");
    this.dueDate = document.querySelector("#dueDate");
    this.priority = document.querySelector("#priority");
    this.project = document.querySelector("#project");
    this.status = false;
    this.idInput = document.querySelector("#todoId");
    this.projectsDropDown = document.querySelector(".project-select");
    this.todos = document.querySelector(".todos");
    this.todoSubmit = document.querySelector(".add-todo");
  }

  renderProjectDropDown(projects) {
    let output = "";
    projects.forEach((project, index) => {
      output += `
        <option value=${index}>${project.name}</option>
      `;
    });

    this.projectsDropDown.innerHTML = output;

    this.showTodo(projects);
  }

  showTodo(projects) {
    let output = "";
    projects.forEach((project, projectIndex) => {
      if (project.todos) {
        project.todos.forEach((todo, todoIndex) => {
          let x = "";
          let xColor = "";
          if (todo.priority === 1) {
            x = "LOW";
            xColor = "badge-info";
          } else if (todo.priority === 2) {
            x = "MEDIUM";
            xColor = "badge-primary";
          } else {
            x = "HIGH";
            xColor = "badge-danger";
          }
          output += `
                <li class="list-group-item" data-id=${projectIndex}>
                  <div class="todo-indicator bg-warning"></div>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                          <div class="custom-checkbox custom-control">
                            <input
                                  class="custom-control-input"
                                  id="exampleCustomCheckbox12"
                                  type="checkbox"
                                /><label
                                  class="custom-control-label"
                                  for="exampleCustomCheckbox12"
                                  >&nbsp;</label
                                >
                              </div>
                            </div>
                            <div class="widget-content-left">
                              <div class="widget-heading">
                                ${todo.title}
                               <div class="badge badge-success ml-2">
                                  ${todo.dueDate}
                                </div>
                              </div>
                              <div class="widget-subheading">
                                <div>
                                  ${todo.description}
                                  <div class="badge badge-pill ${xColor} ml-2">
                                    ${x}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="widget-content-right" id="todo-action"  data-id=${todoIndex}>
                              <i class="fa fa-pencil edit-todo"></i>
                              <i class="fa fa-trash-o delete-todo"></i>
                            </div>
                          </div>
                        </div>
                      </li>
          `;
        });
      }
    });
    this.todos.innerHTML = output;
  }

  clearFields() {
    this.title.value = "";
    this.description.value = "";
    this.dueDate.value = "";
  }

  fillForm(data) {
    this.title.value = data.title;
    this.description.value = data.description;
    this.dueDate.value = data.dueDate;
    this.priority.value = data.priority;
    this.projectsDropDown.value = data.project_index;
    this.projectsDropDown.disabled = true;
    this.idInput.value = data.todo_index;

    this.changeToDoFormState("edit");
  }

  changeToDoFormState(type) {
    if (type === "edit") {
      this.todoSubmit.textContent = "Update";
      this.todoSubmit.className = "add-todo u-full-width btn btn-warning";
    } else {
      this.todoSubmit.textContent = "Add";
      this.todoSubmit.className = "add-todo u-full-width btn btn-primary";
      this.clearIdInput();
    }
  }

  clearIdInput() {
    this.idInput.value = "";
    this.clearFields();
  }
}

export default new Todo();
