import { initDB, storeData, getStoreData } from './data';
import { project } from './project';
import { todo } from './todo';
import showAlert from './alert';

const getDefault = () => {
  initDB();
  project.showProjectsList(getStoreData());
  todo.renderProjectDropDown(getStoreData());
};

const addNewProject = (e) => {
  const name = document.getElementById('name').value;

  const data = getStoreData();
  data.push({ name });
  storeData(data);
  project.clearFields();
  getDefault();
  e.preventDefault();
};

const editProject = (e) => {
  if (e.target.parentElement.classList.contains('edit-project')) {
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
  if (e.target.parentElement.classList.contains('remove-project')) {
    const index = e.target.parentElement.dataset.id;
    if (confirm('Are you sure?')) {
      getStoreData().splice(index, 1);
      project.showProjectsList(getStoreData());
      showAlert('Deleted', 'alert alert-danger');
    }
  }
  console.log(e.target.parentElement);
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
  const todo_index = document.querySelector('#todoId').value;

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
    if (!todo_index) {
      if (!getStoreData()[project_index].hasOwnProperty('todos')) {
        getStoreData()[project_index]['todos'] = [body];
      } else {
        getStoreData()[project_index]['todos'].push(body);
      }
      showAlert('Post Added', 'alert alert-success');
    } else {
      getStoreData()[project_index]['todos'][todo_index] = body;
      showAlert('Post Updated', 'alert alert-success');
      todo.changeToDoFormState('add');
    }
    todo.clearFields();
    todo.showTodo(getStoreData());
  }
};

const editTodo = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('edit-todo')) {
    const todo_index = e.target.parentElement.dataset.id;
    const project_index =
      e.target.parentElement.parentElement.parentElement.parentElement.dataset
        .id;
    const title = e.target.parentElement.previousElementSibling.childNodes[1].childNodes[0].nodeValue.trim();
    const dueDate = e.target.parentElement.previousElementSibling.children[0].firstElementChild.innerText.trim();
    const description = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[0].nodeValue.trim();
    const priority = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[1].textContent.trim();

    const body = {
      project_index,
      todo_index,
      title,
      description,
      dueDate,
      priority,
    };
    console.log('EDIT TO DO', body);

    todo.fillForm(body);
  }
};

const deleteTodo = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('delete-todo')) {
    const todo_index = e.target.parentElement.dataset.id;
    const project_index =
      e.target.parentElement.parentElement.parentElement.parentElement.dataset
        .id;

    if (confirm('Are you sure?')) {
      getStoreData()[project_index].todos.splice(todo_index, 1);
      showAlert('Deleted', 'alert alert-danger');
      todo.showTodo(getStoreData());
    }
  }
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
//EDIT TODO
document.querySelector('#todos').addEventListener('click', editTodo);
//DELETE TODO
document.querySelector('#todos').addEventListener('click', deleteTodo);
