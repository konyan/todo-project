import { initDB, storeData, getStoreData } from './data';
import { project } from './project';
import { todo } from './todo';
import showAlert from './alert';

const getDefault = () => {
  initDB();
  console.log(getStoreData());
  project.showProjectsList(getStoreData());
  todo.renderProjectDropDown(getStoreData());
};

const addNewProject = (e) => {
  const name = document.querySelector('#name').value;
  const project_index = document.querySelector('#project-index').value;
  console.log('HE:', name);

  // Validate input
  if (name === '') {
    showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    const data = getStoreData();
    if (project_index === '') {
      data.push({ name });
      project.clearFields();
      getDefault();
    } else {
      data[project_index].name = name;
      showAlert('Post updated', 'alert alert-success');
      project.changeFormState('add');
      getDefault();
    }
    storeData(data);
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
    if (confirm('Are you sure?')) {
      const data = getStoreData();
      data.splice(index, 1);
      storeData(data);
      project.showProjectsList(data);
      showAlert('Deleted', 'alert alert-danger');
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
    const data = getStoreData();

    if (!todo_index) {
      if (!data[project_index].hasOwnProperty('todos')) {
        data[project_index]['todos'] = [body];
      } else {
        data[project_index]['todos'].push(body);
      }
      showAlert('Post Added', 'alert alert-success');
    } else {
      data[project_index]['todos'][todo_index] = body;
      showAlert('Post Updated', 'alert alert-success');
      todo.changeToDoFormState('add');
    }
    storeData(data);
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
    let priority = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[1].textContent.trim();

    priority = todo.convertPriorityToNumber(priority);

    const body = {
      project_index,
      todo_index,
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
    const todo_index = e.target.parentElement.dataset.id;
    const project_index =
      e.target.parentElement.parentElement.parentElement.parentElement.dataset
        .id;

    if (confirm('Are you sure?')) {
      const data = getStoreData();
      data[project_index].todos.splice(todo_index, 1);
      storeData(data);
      showAlert('Deleted', 'alert alert-danger');
      todo.showTodo(data);
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
//CANCEL PROJECT
document.querySelector('.add-items').addEventListener('click', cancelEdit);

//TODO PARTS
//ADD NEW TODO
document.querySelector('#addTodo').addEventListener('submit', addNewTodo);
//EDIT TODO
document.querySelector('#todos').addEventListener('click', editTodo);
//DELETE TODO
document.querySelector('#todos').addEventListener('click', deleteTodo);
