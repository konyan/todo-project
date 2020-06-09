import { initDB, storeData, getStoreData } from './data';
import project from './project';
import todo from './todo';
import showAlert from './alert';

const getDefault = () => {
  initDB();
  project.showProjectsList(getStoreData());
  todo.renderProjectDropDown(getStoreData());
};

const addNewProject = (e) => {
  const name = document.querySelector('#name').value;
  const projectIndex = document.querySelector('#project-index').value;

  // Validate input
  if (name === '') {
    showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    const data = getStoreData();
    if (projectIndex === '') {
      data.push({ name });
      project.clearFields();
      showAlert('Project updated', 'alert alert-primary');
    } else {
      data[projectIndex].name = name;
      showAlert('Project updated', 'alert alert-success');
      project.changeFormState('add');
    }
    storeData(data);
    getDefault();
  }
  e.preventDefault();
};

const editProject = (e) => {
  if (e.target.parentElement.classList.contains('edit-project')) {
    const index = e.target.parentElement.dataset.id;
    const name = e.target.parentElement.parentElement.previousElementSibling.childNodes[1].textContent.trim();
    const data = {
      index,
      name,
    };
    project.fillForm(data);
  }
  e.preventDefault();
};

const deleteProject = (e) => {
  if (e.target.parentElement.classList.contains('remove-project')) {
    const index = e.target.parentElement.dataset.id;
    if (window.confirm('Are you sure?')) {
      const data = getStoreData();
      data.splice(index, 1);
      storeData(data);
      project.showProjectsList(data);
      showAlert('Deleted Project', 'alert alert-danger');
      getDefault();
    }
  }
  e.preventDefault();
};

const cancelEdit = (e) => {
  if (e.target.classList.contains('post-cancel')) {
    project.changeFormState('add');
  }
  e.preventDefault();
};

const addNewTodo = (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const dueDate = document.querySelector('#dueDate').value;
  const priority = parseInt(document.querySelector('#priority').value, 10);
  const projectIndex = document.querySelector('#project').value;
  const status = false;
  const todoIndex = document.querySelector('#todoId').value;

  const body = {
    title,
    description,
    dueDate,
    priority,
    status,
  };
  console.log('I AM HER EEEE', body, todoIndex);

  if (title === '' || description === '' || dueDate === '' || priority === '') {
    showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    const data = getStoreData();


    if (!todoIndex) {
      if (!Object.prototype.hasOwnProperty.call(data[projectIndex], 'todos')) {
        data[projectIndex].todos = [body];
      } else {
        data[projectIndex].todos.push(body);
      }
      showAlert('TODO Added', 'alert alert-success');
    } else {
      console.log('I AM HERE', body, todoIndex);
      data[projectIndex].todos[todoIndex] = body;
      showAlert('TODO Updated', 'alert alert-success');
      todo.changeToDoFormState('add');
    }
    storeData(data);
    todo.clearFields();
    todo.showTodo(data);
  }
};

const convertPriorityToNumber = (data) => {
  if (data === 'LOW') {
    return 1;
  }
  if (data === 'MEDIUM') {
    return 2;
  }
  return 3;
};

const editTodo = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('edit-todo')) {
    const todoIndex = e.target.parentElement.dataset.id;
    const projectIndex = e.target.parentElement.parentElement.parentElement.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.childNodes[1].childNodes[0].nodeValue.trim();
    const dueDate = e.target.parentElement.previousElementSibling.children[0].firstElementChild.innerText.trim();
    const description = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[0].nodeValue.trim();
    let priority = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[1].textContent.trim();

    priority = convertPriorityToNumber(priority);

    const body = {
      projectIndex,
      todoIndex,
      title,
      description,
      dueDate,
      priority,
    };
    todo.fillForm(body);
  }
};

const deleteTodo = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('delete-todo')) {
    const todoIndex = e.target.parentElement.dataset.id;
    const projectIndex = e.target.parentElement.parentElement.parentElement.parentElement.dataset.id;

    if (window.confirm('Are you sure?')) {
      const data = getStoreData();
      data[projectIndex].todos.splice(todoIndex, 1);
      storeData(data);
      showAlert('Deleted', 'alert alert-danger');
      todo.showTodo(data);
    }
  }
};

// DEFAULT CONTENT LOAD
document.addEventListener('DOMContentLoaded', getDefault);

// PROJECT PARTs
// ADD NEW PROJECT
document.querySelector('.add-project').addEventListener('click', addNewProject);
// EDIT PROJECT
document.querySelector('#projects').addEventListener('click', editProject);
// DELETE PROJECT
document.querySelector('#projects').addEventListener('click', deleteProject);
// CANCEL PROJECT
document.querySelector('.add-items').addEventListener('click', cancelEdit);

// TODO PARTS
// ADD NEW TODO
document.querySelector('#addTodo').addEventListener('submit', addNewTodo);
// EDIT TODO
document.querySelector('#todos').addEventListener('click', editTodo);
// DELETE TODO
document.querySelector('#todos').addEventListener('click', deleteTodo);
