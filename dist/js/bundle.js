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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ \"./src/js/alert.js\");\n\n\n\n\nconst getDefault = () => {\n  console.log(\"DAta\", _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  _project__WEBPACK_IMPORTED_MODULE_1__[\"project\"].showProjectsList(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\nconst addNewProject = () => {\n  console.log(\"NEW PROJECT\");\n  Object(_alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Please fill in all fields\", \"alert alert-danger\");\n};\n\nconst editProject = (e) => {\n  if (e.target.classList.contains(\"edit-project\")) {\n    const id = e.target.dataset.id;\n    //EDIT PROJECT\n    console.log(\"EDIT PROJECT\", id);\n    Object(_alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Please fill in all fields\", \"alert alert-danger\");\n  }\n  e.preventDefault();\n};\n\nconst deleteProject = (e) => {\n  if (e.target.classList.contains(\"remove-project\")) {\n    const id = e.target.dataset.id;\n    //DELETE PROJECT\n    console.log(\"DELTE PROJECT\", id);\n    Object(_alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Please fill in all fields\", \"alert alert-danger\");\n  }\n  e.preventDefault();\n};\n\n//DEFAULT CONTENT LOAD\ndocument.addEventListener(\"DOMContentLoaded\", getDefault);\n\n//PROJECT PARTs\n//ADD NEW PROJECT\ndocument.querySelector(\".add-project\").addEventListener(\"click\", addNewProject);\n//EDIT PROJECT\ndocument.querySelector(\"#projects\").addEventListener(\"click\", editProject);\n//DELETE PROJECT\ndocument.querySelector(\"#projects\").addEventListener(\"click\", deleteProject);\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {\n    id: 1,\n    name: \"Daily Schedule\",\n    todos: [\n      {\n        id: 1,\n        title: \"Wake Up\",\n        description: \"Wake Up Morning\",\n        dueDate: \"20/01/2020\",\n        status: false,\n        priority: 1,\n      },\n      {\n        id: 2,\n        title: \"Wake Up\",\n        description: \"Wake Up Morning\",\n        dueDate: \"20/01/2020\",\n        status: true,\n        priority: 1,\n      },\n      {\n        id: 3,\n        title: \"Wake Up\",\n        description: \"Wake Up Morning\",\n        dueDate: \"20/01/2020\",\n        status: false,\n        priority: 2,\n      },\n    ],\n  },\n  {\n    id: 2,\n    name: \"Work Schedule\",\n    todos: [\n      {\n        id: 1,\n        title: \"Wake Up\",\n        description: \"Wake Up Morning\",\n        dueDate: \"20/01/2020\",\n        status: false,\n        priority: 1,\n      },\n    ],\n  },\n]);\n\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/*! exports provided: project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project\", function() { return project; });\nclass Project {\n  constructor() {\n    this.name = document.querySelector(\"#name\");\n    this.projects = document.querySelector(\"#projects\");\n  }\n\n  showProjectsList(projects) {\n    let output = \"\";\n    projects.map((project) => {\n      output += `\n<li id=\"${project.id}\" class=\"project\">\n                        <div class=\"form-check\">\n                          <label class=\"form-check-label\">\n                            ${project.name}\n                          </label>\n                        </div>\n                        <div class=\"project-actions\">\n                          <i class=\"edit-project fa fa-pencil\" data-id=${project.id}></i>\n                          <i class=\"remove-project fa fa-trash-o\" data-id=${project.id}></i>\n                        </div>\n                      </li>\n      `;\n    });\n\n    this.projects.innerHTML = output;\n  }\n}\n\nconst project = new Project();\n\n\n//# sourceURL=webpack:///./src/js/project.js?");

/***/ })

/******/ });