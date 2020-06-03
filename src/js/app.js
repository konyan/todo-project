import data from "./data";
import { project } from "./project";
import { todo } from "./todo";
import showAlert from "./alert";

const getDefault = () => {
  project.showProjectsList(data);
  todo.renderProjectDropDown(data);
};

const addNewProject = (e) => {
  const name = document.getElementById("name").value;

  data.push({ name });
  project.clearFields();
  console.log(data);
  getDefault();
  e.preventDefault();
};

const editProject = (e) => {
  if (e.target.parentElement.classList.contains("edit-project")) {
    const id = e.target.dataset.id;
    const name =
      e.target.previousElementSibling.previousElementSibling.textContent;

    const data = {
      id,
      name,
    };
    project.fillForm(data);
  }
  e.preventDefault();
};

const deleteProject = (e) => {
  if (e.target.parentElement.classList.contains("remove-project")) {
    const index = e.target.parentElement.dataset.id;
    if (confirm("Are you sure?")) {
      data.splice(index, 1);
      project.showProjectsList(data);
      showAlert("Deleted", "alert alert-danger");
    }
  }
  console.log(e.target.parentElement);
  e.preventDefault();
};

//DEFAULT CONTENT LOAD
document.addEventListener("DOMContentLoaded", getDefault);

//PROJECT PARTs
//ADD NEW PROJECT
document.querySelector(".add-project").addEventListener("click", addNewProject);
//EDIT PROJECT
document.querySelector("#projects").addEventListener("click", editProject);
//DELETE PROJECT
document.querySelector("#projects").addEventListener("click", deleteProject);
