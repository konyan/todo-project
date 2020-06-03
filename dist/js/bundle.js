/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/alert.js":
/*!*************************!*\
  !*** ./src/js/alert.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((message, className) => {\n  clearAlert();\n\n  //CREATE DIV\n  const div = document.createElement(\"div\");\n  //Add classes\n  div.className = className;\n  //ADD text\n  div.appendChild(document.createTextNode(message));\n\n  //Get Parent\n  const container = document.querySelector(\".page-container\");\n\n  container.insertAdjacentElement(\"afterbegin\", div);\n\n  //TIMEOUT\n  setTimeout(() => {\n    clearAlert();\n  }, 3000);\n});\n\nconst clearAlert = () => {\n  const currentAlert = document.querySelector(\".alert\");\n  if (currentAlert) {\n    currentAlert.remove();\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/alert.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert */ \"./src/js/alert.js\");\n\n\n\n\n\nconst getDefault = () => {\n  _project__WEBPACK_IMPORTED_MODULE_1__[\"project\"].showProjectsList(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  _todo__WEBPACK_IMPORTED_MODULE_2__[\"todo\"].renderProjectDropDown(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\nconst addNewProject = (e) => {\n  const name = document.getElementById('name').value;\n\n  _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push({ name });\n  _project__WEBPACK_IMPORTED_MODULE_1__[\"project\"].clearFields();\n  console.log(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  getDefault();\n  e.preventDefault();\n};\n\nconst editProject = (e) => {\n  if (e.target.parentElement.classList.contains('edit-project')) {\n    const id = e.target.dataset.id;\n    const name =\n      e.target.previousElementSibling.previousElementSibling.textContent;\n\n    const data = {\n      id,\n      name,\n    };\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"project\"].fillForm(data);\n  }\n  e.preventDefault();\n};\n\nconst deleteProject = (e) => {\n  if (e.target.parentElement.classList.contains('remove-project')) {\n    const index = e.target.parentElement.dataset.id;\n    if (confirm('Are you sure?')) {\n      _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(index, 1);\n      _project__WEBPACK_IMPORTED_MODULE_1__[\"project\"].showProjectsList(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Deleted', 'alert alert-danger');\n    }\n  }\n  console.log(e.target.parentElement);\n  e.preventDefault();\n};\n\nconst addNewTodo = (e) => {\n  e.preventDefault();\n\n  const title = document.querySelector('#title').value;\n  const description = document.querySelector('#description').value;\n  const dueDate = document.querySelector('#dueDate').value;\n  const priority = document.querySelector('#priority').value;\n  const project_index = document.querySelector('#project').value;\n  const status = false;\n  const todo_index = document.querySelector('#todoId').value;\n\n  const body = {\n    title,\n    description,\n    dueDate,\n    priority,\n    status,\n  };\n  console.log('ADD', body, project_index);\n\n  if (title === '' || description === '' || dueDate === '' || priority === '') {\n    Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Please fill in all fields', 'alert alert-danger');\n  } else {\n    if (!todo_index) {\n      if (!_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][project_index].hasOwnProperty('todos')) {\n        _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][project_index]['todos'] = [body];\n      } else {\n        _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][project_index]['todos'].push(body);\n      }\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Post Added', 'alert alert-success');\n    } else {\n      _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][project_index]['todos'][todo_index] = body;\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Post Updated', 'alert alert-success');\n      _todo__WEBPACK_IMPORTED_MODULE_2__[\"todo\"].changeToDoFormState('add');\n    }\n    _todo__WEBPACK_IMPORTED_MODULE_2__[\"todo\"].clearFields();\n    _todo__WEBPACK_IMPORTED_MODULE_2__[\"todo\"].showTodo(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n};\n\nconst editTodo = (e) => {\n  e.preventDefault();\n  if (e.target.classList.contains('edit-todo')) {\n    const todo_index = e.target.parentElement.dataset.id;\n    const project_index =\n      e.target.parentElement.parentElement.parentElement.parentElement.dataset\n        .id;\n    const title = e.target.parentElement.previousElementSibling.childNodes[1].childNodes[0].nodeValue.trim();\n    const dueDate = e.target.parentElement.previousElementSibling.children[0].firstElementChild.innerText.trim();\n    const description = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[0].nodeValue.trim();\n    const priority = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[1].textContent.trim();\n\n    const body = {\n      project_index,\n      todo_index,\n      title,\n      description,\n      dueDate,\n      priority,\n    };\n    console.log('EDIT TO DO', body);\n\n    _todo__WEBPACK_IMPORTED_MODULE_2__[\"todo\"].fillForm(body);\n  }\n};\n\nconst deleteTodo = (e) => {\n  e.preventDefault();\n  if (e.target.classList.contains('delete-todo')) {\n    const todo_index = e.target.parentElement.dataset.id;\n    const project_index =\n      e.target.parentElement.parentElement.parentElement.parentElement.dataset\n        .id;\n\n    if (confirm('Are you sure?')) {\n      _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][project_index].todos.splice(todo_index, 1);\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Deleted', 'alert alert-danger');\n      _todo__WEBPACK_IMPORTED_MODULE_2__[\"todo\"].showTodo(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    }\n    console.log('DELETE TO DO', todo_index, project_index, _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n};\n\n//DEFAULT CONTENT LOAD\ndocument.addEventListener('DOMContentLoaded', getDefault);\n\n//PROJECT PARTs\n//ADD NEW PROJECT\ndocument.querySelector('.add-project').addEventListener('click', addNewProject);\n//EDIT PROJECT\ndocument.querySelector('#projects').addEventListener('click', editProject);\n//DELETE PROJECT\ndocument.querySelector('#projects').addEventListener('click', deleteProject);\n\n//TODO PARTS\n//ADD NEW TODO\ndocument.querySelector('#addTodo').addEventListener('submit', addNewTodo);\n//EDIT TODO\ndocument.querySelector('#todos').addEventListener('click', editTodo);\n//DELETE TODO\ndocument.querySelector('#todos').addEventListener('click', deleteTodo);\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {\n    name: 'Daily Schedule',\n    todos: [\n      {\n        title: 'Wake Up',\n        description: 'Wake Up Morning',\n        dueDate: '2020-01-02',\n        status: false,\n        priority: 1,\n      },\n      {\n        title: 'Wake Up',\n        description: 'Wake Up Morning',\n        dueDate: '2020-01-20',\n        status: true,\n        priority: 1,\n      },\n      {\n        title: 'Wake Up',\n        description: 'Wake Up Morning',\n        dueDate: '2020-02-20',\n        status: false,\n        priority: 2,\n      },\n    ],\n  },\n  {\n    name: 'Work Schedule',\n    todos: [\n      {\n        title: 'Wake Up',\n        description: 'Wake Up Morning',\n        dueDate: '2020-03-20',\n        status: false,\n        priority: 1,\n      },\n    ],\n  },\n]);\n\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/*! exports provided: project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project\", function() { return project; });\nclass Project {\n  constructor() {\n    this.nameInput = document.querySelector(\"#name\");\n    this.addProject = document.querySelector(\".add-project\");\n    this.project = document.querySelector(\"#projects\");\n    this.forState = \"add\";\n  }\n\n  showProjectsList(projects) {\n    let output = \"\";\n    projects.forEach((project, index) => {\n      output += `\n      <li class=\"project\">\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              ${project.name}\n            </label>\n          </div>\n          <div class=\"project-actions\">\n          <a class=\"edit-project\" data-id=\"${index}\">\n            <i class=\"fa fa-pencil\"></i>\n            </a>\n            <a class=\"remove-project\" data-id=\"${index}\">\n            <i class=\"fa fa-trash-o\"></i>\n            </a>\n          </div>\n        </li>\n      `;\n    });\n\n    this.project.innerHTML = output;\n  }\n\n  clearFields() {\n    this.nameInput.value = \"\";\n  }\n\n  fillForm(data) {\n    this.nameInput.value = data.name;\n  }\n}\n\nconst project = new Project();\n\n\n//# sourceURL=webpack:///./src/js/project.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/*! exports provided: todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todo\", function() { return todo; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n\n\nclass Todo {\n  constructor() {\n    this.title = document.querySelector('#title');\n    this.description = document.querySelector('#description');\n    this.dueDate = document.querySelector('#dueDate');\n    this.priority = document.querySelector('#priority');\n    this.project = document.querySelector('#project');\n    this.status = false;\n    this.idInput = document.querySelector('#todoId');\n    this.projectsDropDown = document.querySelector('.project-select');\n    this.todos = document.querySelector('.todos');\n    this.todoSubmit = document.querySelector('.add-todo');\n  }\n\n  renderProjectDropDown(projects) {\n    let output = '';\n    projects.map((project, index) => {\n      output += `\n        <option value=${index}>${project.name}</option>\n      `;\n    });\n\n    this.projectsDropDown.innerHTML = output;\n\n    this.showTodo(projects);\n  }\n\n  showTodo(projects) {\n    let output = '';\n    projects.map((project, project_index) => {\n      if (project.todos) {\n        project.todos.map((todo, todo_index) => {\n          output += `\n                <li class=\"list-group-item\" data-id=${project_index}>\n                  <div class=\"todo-indicator bg-warning\"></div>\n                    <div class=\"widget-content p-0\">\n                      <div class=\"widget-content-wrapper\">\n                        <div class=\"widget-content-left mr-2\">\n                          <div class=\"custom-checkbox custom-control\">\n                            <input\n                                  class=\"custom-control-input\"\n                                  id=\"exampleCustomCheckbox12\"\n                                  type=\"checkbox\"\n                                /><label\n                                  class=\"custom-control-label\"\n                                  for=\"exampleCustomCheckbox12\"\n                                  >&nbsp;</label\n                                >\n                              </div>\n                            </div>\n                            <div class=\"widget-content-left\">\n                              <div class=\"widget-heading\">\n                                ${todo.title}\n                               <div class=\"badge badge-success ml-2\">\n                                  ${todo.dueDate}\n                                </div>\n                              </div>\n                              <div class=\"widget-subheading\">\n                                <div>\n                                  ${todo.description}\n                                  <div class=\"badge badge-pill badge-info ml-2\">\n                                    ${todo.priority}\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"widget-content-right\" id=\"todo-action\"  data-id=${todo_index}>\n                              <i class=\"fa fa-pencil edit-todo\"></i>\n                              <i class=\"fa fa-trash-o delete-todo\"></i>\n                            </div>\n                          </div>\n                        </div>\n                      </li>\n          `;\n        });\n      }\n    });\n    this.todos.innerHTML = output;\n  }\n\n  clearFields() {\n    this.title.value = '';\n    this.description.value = '';\n    this.dueDate.value = '';\n  }\n\n  fillForm(data) {\n    this.title.value = data.title;\n    this.description.value = data.description;\n    this.dueDate.value = data.dueDate;\n    this.priority.value = data.priority;\n    this.projectsDropDown.value = data.project_index;\n    this.projectsDropDown.disabled = true;\n    this.idInput.value = data.todo_index;\n\n    this.changeToDoFormState('edit');\n  }\n\n  changeToDoFormState(type) {\n    if (type === 'edit') {\n      this.todoSubmit.textContent = 'Update';\n      this.todoSubmit.className = 'add-todo u-full-width btn btn-warning';\n    } else {\n      this.todoSubmit.textContent = 'Add';\n      this.todoSubmit.className = 'add-todo u-full-width btn btn-primary';\n      this.clearIdInput();\n    }\n  }\n\n  clearIdInput() {\n    this.idInput.value = '';\n    this.clearFields();\n  }\n}\n\nconst todo = new Todo();\n\n\n//# sourceURL=webpack:///./src/js/todo.js?");

/***/ })

/******/ });