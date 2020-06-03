import Project, { project } from './project';

class Todo {
  constructor() {
    this.title = document.querySelector('#title');
    this.description = document.querySelector('#description');
    this.dueDate = document.querySelector('#dueDate');
    this.priority = document.querySelector('#priority');
    this.project = document.querySelector('#project');
    this.status = false;
    this.idInput = document.querySelector('#id');
    this.projectsDropDown = document.querySelector('.project-select');
    this.todos = document.querySelector('.todos');
  }

  renderProjectDropDown(projects) {
    console.log('PRO', projects);
    let output = '';
    projects.map((project, index) => {
      output += `
        <option value=${index}>${project.name}</option>
      `;
    });

    this.projectsDropDown.innerHTML = output;

    this.showTodo(projects);
  }

  showTodo(projects) {
    let output = '';
    projects.map((project, project_index) => {
      if (project.todos) {
        project.todos.map((todo, todo_index) => {
          output += `
                <li class="list-group-item" data-id=${project_index}>
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
                            <div class="widget-content-right" id="todo-action">
                              <i class="fa fa-pencil" data-id=${todo_index}></i>
                              <i class="fa fa-trash-o" data-id=${todo_index}></i>
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
    this.title.value = '';
    this.description.value = '';
    this.dueDate.value = '';
  }
}

export const todo = new Todo();
