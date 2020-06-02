import Project, { project } from "./project";

class Todo {
  constructor() {
    this.title = document.querySelector("#title");
    this.description = document.querySelector("#description");
    this.dueDate = document.querySelector("#dueDate");
    this.priority = document.querySelector("#priority");
    this.status = false;
    this.idInput = document.querySelector("#id");
    this.projectsDropDown = document.querySelector(".dropdown-select");
    this.todos = document.querySelector(".todos");
  }

  renderProjectDropDown(projects) {
    console.log("PRO", projects);
    let output = "";
    projects.map((project) => {
      output += `
        <option value=${project.id}>${project.name}</option>
      `;
    });

    this.projectsDropDown.innerHTML = output;

    this.showTodo(projects);
  }

  showTodo(projects) {
    let output = "";
    projects.map((project) => {
      if (project.todos.length) {
        project.todos.map((todo) => {
          output += `
                <li class="list-group-item">
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
                                  <div class="badge badge-pill badge-info ml-2">
                                    ${todo.priority}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="widget-content-right">
                              <i class="fa fa-pencil"></i>
                              <i class="fa fa-trash-o"></i>
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
}

export const todo = new Todo();
