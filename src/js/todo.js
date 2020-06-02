import Project from "./project";

class Todo {
  constructor() {
    this.title = document.querySelector("#title");
    this.description = document.querySelector("#description");
    this.dueDate = document.querySelector("#dueDate");
    this.priority = document.querySelector("#priority");
    this.status = false;
    this.idInput = document.querySelector("#id");
  }

  showTodo(todos) {}
}
