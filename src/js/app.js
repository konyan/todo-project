import data from "./data";
import { project } from "./project";
import { todo } from "./todo";
import showAlert from "./alert";

const getDefault = () => {
  console.log("DAta", data);
  project.showProjectsList(data);
  todo.renderProjectDropDown(data);
};

const addNewProject = (e) => {
  const name = document.getElementById("name").value;
  data.push({ name });
  project.showProjectsList(data);
  e.preventDefault();
};

const editProject = (e) => {
  if (e.target.classList.contains("edit-project")) {
    const id = e.target.dataset.id;
    //EDIT PROJECT
    console.log("EDIT PROJECT", id);
    showAlert("Please fill in all fields", "alert alert-danger");
  }
  e.preventDefault();
};

const deleteProject = (e) => {
  if (e.target.classList.contains("remove-project")) {
    const id = e.target.dataset.id;

    //DELETE PROJECT
    console.log("DELTE PROJECT", id);
    showAlert("Please fill in all fields", "alert alert-danger");
  }
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
