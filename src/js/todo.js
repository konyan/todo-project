const title = document.querySelector('#title');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#dueDate');
const priority = document.querySelector('#priority');
const idInput = document.querySelector('#todoId');
const projectsDropDown = document.querySelector('.project-select');
const todos = document.querySelector('.todos');
const todoSubmit = document.querySelector('.add-todo');

class Todo {
  static renderProjectDropDown(projects) {
    let output = '';
    projects.forEach((project, index) => {
      output += `
        <option value=${index}>${project.name}</option>
      `;
    });

    projectsDropDown.innerHTML = output;

    this.showTodo(projects);
  }

  static showTodo(projects) {
    let output = '';
    projects.forEach((project, projectIndex) => {
      if (project.todos) {
        project.todos.forEach((todo, todoIndex) => {
          let x = '';
          let xColor = '';
          if (todo.priority === 1) {
            x = 'LOW';
            xColor = 'badge-info';
          } else if (todo.priority === 2) {
            x = 'MEDIUM';
            xColor = 'badge-primary';
          } else {
            x = 'HIGH';
            xColor = 'badge-danger';
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
    todos.innerHTML = output;
  }

  static clearFields() {
    title.value = '';
    description.value = '';
    dueDate.value = '';
  }

  static fillForm(data) {
    title.value = data.title;
    description.value = data.description;
    dueDate.value = data.dueDate;
    priority.value = data.priority;
    projectsDropDown.value = data.projectIndex;
    projectsDropDown.disabled = true;
    idInput.value = data.todoIndex;

    this.changeToDoFormState('edit');
  }

  static changeToDoFormState(type) {
    if (type === 'edit') {
      todoSubmit.textContent = 'Update';
      todoSubmit.className = 'add-todo u-full-width btn btn-warning';
    } else {
      todoSubmit.textContent = 'Add';
      todoSubmit.className = 'add-todo u-full-width btn btn-primary';
      this.clearIdInput();
    }
  }

  static clearIdInput() {
    idInput.value = '';
    this.clearFields();
  }
}

export default new Todo();
