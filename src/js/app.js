import data from "./data";
import { project } from "./project";

const getDefault = () => {
  console.log("DAta", data);
  project.showProjectsList(data);
};

document.addEventListener("DOMContentLoaded", getDefault);

function Todo(title, description, dueDate) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  //   this.priority = priority;
}

function UI() {}

UI.prototype.addTodoList = function (todo) {
  const todos = document.getElementById("todos");
  const list = document.createElement("li");
  list.innerHTML = `
  <div class="form-check">
  <label class="form-check-label">
  <input class="checkbox" type="checkbox">
    ${todo.title} | ${todo.description} | ${todo.dueDate}
  <i class="input-helper"></i>
  </label>
   </div>

 <a href="#" data-id="">
 <i class="fa fa-pencil"></i>
</a>
<i class="remove mdi mdi-close-circle-outline"></i>

   `;
  todos.appendChild(list);
};

document.getElementById("addTodos").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value,
    description = document.getElementById("description").value,
    dueDate = document.getElementById("dueDate").value;

  const todo = new Todo(title, description, dueDate);

  ui = new UI();

  ui.addTodoList(todo);

  e.preventDefault();
});

// Enable Edit State
