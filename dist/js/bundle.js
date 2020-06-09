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
eval("__webpack_require__.r(__webpack_exports__);\nconst clearAlert = () => {\n  const currentAlert = document.querySelector('.alert');\n  if (currentAlert) {\n    currentAlert.remove();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((message, className) => {\n  clearAlert();\n\n  // CREATE DIV\n  const div = document.createElement('div');\n  // Add classes\n  div.className = className;\n  // ADD text\n  div.appendChild(document.createTextNode(message));\n\n  // Get Parent\n  const container = document.querySelector('.page-container');\n\n  container.insertAdjacentElement('afterbegin', div);\n\n  // TIMEOUT\n  setTimeout(() => {\n    clearAlert();\n  }, 3000);\n});\n\n\n//# sourceURL=webpack:///./src/js/alert.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert */ \"./src/js/alert.js\");\n\n\n\n\n\nconst getDefault = () => {\n  Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"initDB\"])();\n  _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showProjectsList(Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"getStoreData\"])());\n  _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderProjectDropDown(Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"getStoreData\"])());\n};\n\nconst addNewProject = (e) => {\n  const name = document.querySelector('#name').value;\n  const projectIndex = document.querySelector('#project-index').value;\n\n  // Validate input\n  if (name === '') {\n    Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Please fill in all fields', 'alert alert-danger');\n  } else {\n    const data = Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"getStoreData\"])();\n    if (projectIndex === '') {\n      data.push({ name });\n      _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearFields();\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Project updated', 'alert alert-primary');\n    } else {\n      data[projectIndex].name = name;\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Project updated', 'alert alert-success');\n      _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeFormState('add');\n    }\n    Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"storeData\"])(data);\n    getDefault();\n  }\n  e.preventDefault();\n};\n\nconst editProject = (e) => {\n  if (e.target.parentElement.classList.contains('edit-project')) {\n    const index = e.target.parentElement.dataset.id;\n    const name = e.target.parentElement.parentElement.previousElementSibling.childNodes[1].textContent.trim();\n    const data = {\n      index,\n      name,\n    };\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fillForm(data);\n  }\n  e.preventDefault();\n};\n\nconst deleteProject = (e) => {\n  if (e.target.parentElement.classList.contains('remove-project')) {\n    const index = e.target.parentElement.dataset.id;\n    if (window.confirm('Are you sure?')) {\n      const data = Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"getStoreData\"])();\n      data.splice(index, 1);\n      Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"storeData\"])(data);\n      _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showProjectsList(data);\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Deleted Project', 'alert alert-danger');\n      getDefault();\n    }\n  }\n  e.preventDefault();\n};\n\nconst cancelEdit = (e) => {\n  if (e.target.classList.contains('post-cancel')) {\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeFormState('add');\n  }\n  e.preventDefault();\n};\n\nconst addNewTodo = (e) => {\n  e.preventDefault();\n\n  const title = document.querySelector('#title').value;\n  const description = document.querySelector('#description').value;\n  const dueDate = document.querySelector('#dueDate').value;\n  const priority = parseInt(document.querySelector('#priority').value, 10);\n  const projectIndex = document.querySelector('#project').value;\n  const status = false;\n  const todoIndex = document.querySelector('#todoId').value;\n\n  const body = {\n    title,\n    description,\n    dueDate,\n    priority,\n    status,\n  };\n  console.log('I AM HER EEEE', body, todoIndex);\n\n  if (title === '' || description === '' || dueDate === '' || priority === '') {\n    Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Please fill in all fields', 'alert alert-danger');\n  } else {\n    const data = Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"getStoreData\"])();\n\n\n    if (!todoIndex) {\n      if (!Object.prototype.hasOwnProperty.call(data[projectIndex], 'todos')) {\n        data[projectIndex].todos = [body];\n      } else {\n        data[projectIndex].todos.push(body);\n      }\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('TODO Added', 'alert alert-success');\n    } else {\n      console.log('I AM HERE', body, todoIndex);\n      data[projectIndex].todos[todoIndex] = body;\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('TODO Updated', 'alert alert-success');\n      _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeToDoFormState('add');\n    }\n    Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"storeData\"])(data);\n    _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearFields();\n    _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showTodo(data);\n  }\n};\n\nconst convertPriorityToNumber = (data) => {\n  if (data === 'LOW') {\n    return 1;\n  }\n  if (data === 'MEDIUM') {\n    return 2;\n  }\n  return 3;\n};\n\nconst editTodo = (e) => {\n  e.preventDefault();\n  if (e.target.classList.contains('edit-todo')) {\n    const todoIndex = e.target.parentElement.dataset.id;\n    const projectIndex = e.target.parentElement.parentElement.parentElement.parentElement.dataset.id;\n    const title = e.target.parentElement.previousElementSibling.childNodes[1].childNodes[0].nodeValue.trim();\n    const dueDate = e.target.parentElement.previousElementSibling.children[0].firstElementChild.innerText.trim();\n    const description = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[0].nodeValue.trim();\n    let priority = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[1].textContent.trim();\n\n    priority = convertPriorityToNumber(priority);\n\n    const body = {\n      projectIndex,\n      todoIndex,\n      title,\n      description,\n      dueDate,\n      priority,\n    };\n    _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fillForm(body);\n  }\n};\n\nconst deleteTodo = (e) => {\n  e.preventDefault();\n  if (e.target.classList.contains('delete-todo')) {\n    const todoIndex = e.target.parentElement.dataset.id;\n    const projectIndex = e.target.parentElement.parentElement.parentElement.parentElement.dataset.id;\n\n    if (window.confirm('Are you sure?')) {\n      const data = Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"getStoreData\"])();\n      data[projectIndex].todos.splice(todoIndex, 1);\n      Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"storeData\"])(data);\n      Object(_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Deleted', 'alert alert-danger');\n      _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showTodo(data);\n    }\n  }\n};\n\n// DEFAULT CONTENT LOAD\ndocument.addEventListener('DOMContentLoaded', getDefault);\n\n// PROJECT PARTs\n// ADD NEW PROJECT\ndocument.querySelector('.add-project').addEventListener('click', addNewProject);\n// EDIT PROJECT\ndocument.querySelector('#projects').addEventListener('click', editProject);\n// DELETE PROJECT\ndocument.querySelector('#projects').addEventListener('click', deleteProject);\n// CANCEL PROJECT\ndocument.querySelector('.add-items').addEventListener('click', cancelEdit);\n\n// TODO PARTS\n// ADD NEW TODO\ndocument.querySelector('#addTodo').addEventListener('submit', addNewTodo);\n// EDIT TODO\ndocument.querySelector('#todos').addEventListener('click', editTodo);\n// DELETE TODO\ndocument.querySelector('#todos').addEventListener('click', deleteTodo);\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: initDB, storeData, getStoreData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initDB\", function() { return initDB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storeData\", function() { return storeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStoreData\", function() { return getStoreData; });\nconst data = [\n  {\n    name: 'Daily Schedule',\n    todos: [\n      {\n        title: 'Wake Up',\n        description: 'Wake Up Morning',\n        dueDate: '2020-01-02',\n        status: false,\n        priority: 1,\n      },\n      {\n        title: 'Wake Up',\n        description: 'Wake Up Morning',\n        dueDate: '2020-01-20',\n        status: true,\n        priority: 3,\n      },\n      {\n        title: 'Wake Up',\n        description: 'Wake Up Morning',\n        dueDate: '2020-02-20',\n        status: false,\n        priority: 2,\n      },\n    ],\n  },\n  {\n    name: 'Work Schedule',\n    todos: [\n      {\n        title: 'Wake Up',\n        description: 'Wake Up Morning',\n        dueDate: '2020-03-20',\n        status: false,\n        priority: 1,\n      },\n    ],\n  },\n];\n\nconst initDB = () => {\n  if (!localStorage.getItem('data')) {\n    localStorage.setItem('data', JSON.stringify(data));\n  }\n};\n\nconst storeData = (data) => {\n  localStorage.setItem('data', JSON.stringify(data));\n};\n\nconst getStoreData = () => JSON.parse(localStorage.getItem('data'));\n\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! exports provided: idInput, nameInput, addProject, project, forState, title, description, dueDate, priority, projectTodo, todoIdInput, projectsDropDown, todos, todoSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"idInput\", function() { return idInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nameInput\", function() { return nameInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project\", function() { return project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forState\", function() { return forState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"description\", function() { return description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dueDate\", function() { return dueDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"priority\", function() { return priority; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectTodo\", function() { return projectTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoIdInput\", function() { return todoIdInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsDropDown\", function() { return projectsDropDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todos\", function() { return todos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoSubmit\", function() { return todoSubmit; });\nconst idInput = document.querySelector('#project-index');\nconst nameInput = document.querySelector('#name');\nconst addProject = document.querySelector('.add-project');\nconst project = document.querySelector('#projects');\nconst forState = 'add';\n\n\nconst title = document.querySelector('#title');\nconst description = document.querySelector('#description');\nconst dueDate = document.querySelector('#dueDate');\nconst priority = document.querySelector('#priority');\nconst projectTodo = document.querySelector('#project');\nconst todoIdInput = document.querySelector('#todoId');\nconst projectsDropDown = document.querySelector('.project-select');\nconst todos = document.querySelector('.todos');\nconst todoSubmit = document.querySelector('.add-todo');\n\n//# sourceURL=webpack:///./src/js/dom.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n\n\nclass Project {\n  constructor(idInput, nameInput, addProject, project) {\n    this.idInput = idInput;\n    this.nameInput = nameInput;\n    this.addProject = addProject;\n    this.project = project;\n  }\n\n  showProjectsList(projects) {\n    let output = '';\n    projects.forEach((project, index) => {\n      output += `\n      <li class=\"project\">\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              ${project.name}\n            </label>\n          </div>\n          <div class=\"project-actions\">\n          <a class=\"edit-project\" data-id=\"${index}\">\n            <i class=\"fa fa-pencil\"></i>\n            </a>\n            <a class=\"remove-project\" data-id=\"${index}\">\n            <i class=\"fa fa-trash-o\"></i>\n            </a>\n          </div>\n        </li>\n      `;\n    });\n\n    this.project.innerHTML = output;\n  }\n\n  clearFields() {\n    this.nameInput.value = '';\n  }\n\n  fillForm(data) {\n    this.nameInput.value = data.name;\n    this.idInput.value = data.index;\n\n    this.changeFormState('edit-project');\n  }\n\n  // Clear ID hidden value\n  clearIdInput() {\n    this.idInput.value = '';\n  }\n\n  // Change the form state\n  changeFormState(type) {\n    if (type === 'edit-project') {\n      this.addProject.textContent = 'Update';\n      if (document.querySelector('.post-cancel') == null) {\n        // Create cancel button\n        const button = document.createElement('button');\n        button.className = 'post-cancel btn btn-cancel';\n        button.appendChild(document.createTextNode('Cancel'));\n\n        // Get parent\n        const cardForm = document.querySelector('.add-items');\n        // Get element to insert before\n        const formEnd = document.querySelector('.form-end');\n        // Insert cancel button\n        cardForm.insertBefore(button, formEnd);\n      }\n    } else {\n      this.addProject.textContent = 'Add';\n      if (document.querySelector('.post-cancel')) {\n        document.querySelector('.post-cancel').remove();\n      }\n      this.clearIdInput();\n      // Clear text\n      this.clearFields();\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Project(_dom__WEBPACK_IMPORTED_MODULE_0__[\"idInput\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"nameInput\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"project\"]));\n\n\n//# sourceURL=webpack:///./src/js/project.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n\n\n\nclass Todo {\n  constructor(title, description, dueDate, priority, project,\n    idInput, projectsDropDown, todos, todoSubmit) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.project = project;\n    this.status = false;\n    this.idInput = idInput;\n    this.projectsDropDown = projectsDropDown;\n    this.todos = todos;\n    this.todoSubmit = todoSubmit;\n  }\n\n  renderProjectDropDown(projects) {\n    let output = '';\n    projects.forEach((project, index) => {\n      output += `\n        <option value=${index}>${project.name}</option>\n      `;\n    });\n\n    this.projectsDropDown.innerHTML = output;\n\n    this.showTodo(projects);\n  }\n\n  showTodo(projects) {\n    let output = '';\n    projects.forEach((project, projectIndex) => {\n      if (project.todos) {\n        project.todos.forEach((todo, todoIndex) => {\n          let x = '';\n          let xColor = '';\n          if (todo.priority === 1) {\n            x = 'LOW';\n            xColor = 'badge-info';\n          } else if (todo.priority === 2) {\n            x = 'MEDIUM';\n            xColor = 'badge-primary';\n          } else {\n            x = 'HIGH';\n            xColor = 'badge-danger';\n          }\n          output += `\n                <li class=\"list-group-item\" data-id=${projectIndex}>\n                  <div class=\"todo-indicator bg-warning\"></div>\n                    <div class=\"widget-content p-0\">\n                      <div class=\"widget-content-wrapper\">\n                        <div class=\"widget-content-left mr-2\">\n                          <div class=\"custom-checkbox custom-control\">\n                            <input\n                                  class=\"custom-control-input\"\n                                  id=\"exampleCustomCheckbox12\"\n                                  type=\"checkbox\"\n                                /><label\n                                  class=\"custom-control-label\"\n                                  for=\"exampleCustomCheckbox12\"\n                                  >&nbsp;</label\n                                >\n                              </div>\n                            </div>\n                            <div class=\"widget-content-left\">\n                              <div class=\"widget-heading\">\n                                ${todo.title}\n                               <div class=\"badge badge-success ml-2\">\n                                  ${todo.dueDate}\n                                </div>\n                              </div>\n                              <div class=\"widget-subheading\">\n                                <div>\n                                  ${todo.description}\n                                  <div class=\"badge badge-pill ${xColor} ml-2\">\n                                    ${x}\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"widget-content-right\" id=\"todo-action\"  data-id=${todoIndex}>\n                              <i class=\"fa fa-pencil edit-todo\"></i>\n                              <i class=\"fa fa-trash-o delete-todo\"></i>\n                            </div>\n                          </div>\n                        </div>\n                      </li>\n          `;\n        });\n      }\n    });\n    this.todos.innerHTML = output;\n  }\n\n  clearFields() {\n    this.title.value = '';\n    this.description.value = '';\n    this.dueDate.value = '';\n  }\n\n  fillForm(data) {\n    this.title.value = data.title;\n    this.description.value = data.description;\n    this.dueDate.value = data.dueDate;\n    this.priority.value = data.priority;\n    this.projectsDropDown.value = data.projectIndex;\n    this.projectsDropDown.disabled = true;\n    this.idInput.value = data.todoIndex;\n\n    this.changeToDoFormState('edit');\n  }\n\n  changeToDoFormState(type) {\n    if (type === 'edit') {\n      this.todoSubmit.textContent = 'Update';\n      this.todoSubmit.className = 'add-todo u-full-width btn btn-warning';\n    } else {\n      this.todoSubmit.textContent = 'Add';\n      this.projectsDropDown.disabled = false;\n      this.todoSubmit.className = 'add-todo u-full-width btn btn-primary';\n      this.clearIdInput();\n    }\n  }\n\n  clearIdInput() {\n    this.idInput.value = '';\n    this.clearFields();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Todo(_dom__WEBPACK_IMPORTED_MODULE_0__[\"title\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"description\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"dueDate\"],\n  _dom__WEBPACK_IMPORTED_MODULE_0__[\"priority\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"projectTodo\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"todoIdInput\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"projectsDropDown\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"todos\"], _dom__WEBPACK_IMPORTED_MODULE_0__[\"todoSubmit\"]));\n\n//# sourceURL=webpack:///./src/js/todo.js?");

/***/ })

/******/ });