import data from './data';
import { project } from './project';
import { todo } from './todo';
import showAlert from './alert';

const getDefault = () => {
  console.log('DAta', data);
  project.showProjectsList(data);
  todo.renderProjectDropDown(data);
};

const addNewProject = () => {
  console.log('NEW PROJECT');
  showAlert('Please fill in all fields', 'alert alert-danger');
};

const editProject = (e) => {
  if (e.target.classList.contains('edit-project')) {
    const id = e.target.dataset.id;
    //EDIT PROJECT
    console.log('EDIT PROJECT', id);
    showAlert('Please fill in all fields', 'alert alert-danger');
  }
  e.preventDefault();
};

const deleteProject = (e) => {
  if (e.target.classList.contains('remove-project')) {
    const id = e.target.dataset.id;
    //DELETE PROJECT
    console.log('DELTE PROJECT', id);
    showAlert('Please fill in all fields', 'alert alert-danger');
  }
  e.preventDefault();
};

const addNewTodo = (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const dueDate = document.querySelector('#dueDate').value;
  const priority = document.querySelector('#priority').value;
  const project_index = document.querySelector('#project').value;
  const status = false;

  const body = {
    title,
    description,
    dueDate,
    priority,
    status,
  };
  console.log('ADD', body, project_index);

  if (title === '' || description === '' || dueDate === '' || priority === '') {
    showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    data[project_index]['todos'].push(body);
    showAlert('Post Added', 'alert alert-success');
    todo.clearFields();
    todo.showTodo(data);
  }
};

const editTodo = (e) => {
  e.preventDefault();
  console.log('EDIT TO DO', e.target);
};

const deleteTodo = (e) => {
  e.preventDefault();
  console.log('DELETE', e.target);
};

//DEFAULT CONTENT LOAD
document.addEventListener('DOMContentLoaded', getDefault);

//PROJECT PARTs
//ADD NEW PROJECT
document.querySelector('.add-project').addEventListener('click', addNewProject);
//EDIT PROJECT
document.querySelector('#projects').addEventListener('click', editProject);
//DELETE PROJECT
document.querySelector('#projects').addEventListener('click', deleteProject);
//TODO PARTS
//ADD NEW TODO
document.querySelector('#addTodo').addEventListener('submit', addNewTodo);
