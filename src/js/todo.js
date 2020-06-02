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
  }

  showTodo(todos) {}
}

export const todo = new Todo();
