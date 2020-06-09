!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=[{name:"Daily Schedule",todos:[{title:"Wake Up",description:"Wake Up Morning",dueDate:"2020-01-02",status:!1,priority:1},{title:"Wake Up",description:"Wake Up Morning",dueDate:"2020-01-20",status:!0,priority:3},{title:"Wake Up",description:"Wake Up Morning",dueDate:"2020-02-20",status:!1,priority:2}]},{name:"Work Schedule",todos:[{title:"Wake Up",description:"Wake Up Morning",dueDate:"2020-03-20",status:!1,priority:1}]}],r=e=>{localStorage.setItem("data",JSON.stringify(e))},i=()=>JSON.parse(localStorage.getItem("data")),a=document.querySelector("#project-index"),d=document.querySelector("#name"),c=document.querySelector(".add-project"),l=document.querySelector("#projects"),s=document.querySelector("#title"),u=document.querySelector("#description"),p=document.querySelector("#dueDate"),m=document.querySelector("#priority"),h=document.querySelector("#project"),v=document.querySelector("#todoId"),f=document.querySelector(".project-select"),g=document.querySelector(".todos"),y=document.querySelector(".add-todo");var S=new class{constructor(e,t,n,o){this.idInput=e,this.nameInput=t,this.addProject=n,this.project=o}showProjectsList(e){let t="";e.forEach((e,n)=>{t+=`\n      <li class="project">\n          <div class="form-check">\n            <label class="form-check-label">\n              ${e.name}\n            </label>\n          </div>\n          <div class="project-actions">\n          <a class="edit-project" data-id="${n}">\n            <i class="fa fa-pencil"></i>\n            </a>\n            <a class="remove-project" data-id="${n}">\n            <i class="fa fa-trash-o"></i>\n            </a>\n          </div>\n        </li>\n      `}),this.project.innerHTML=t}clearFields(){this.nameInput.value=""}fillForm(e){this.nameInput.value=e.name,this.idInput.value=e.index,this.changeFormState("edit-project")}clearIdInput(){this.idInput.value=""}changeFormState(e){if("edit-project"===e){if(this.addProject.textContent="Update",null==document.querySelector(".post-cancel")){const e=document.createElement("button");e.className="post-cancel btn btn-cancel",e.appendChild(document.createTextNode("Cancel"));const t=document.querySelector(".add-items"),n=document.querySelector(".form-end");t.insertBefore(e,n)}}else this.addProject.textContent="Add",document.querySelector(".post-cancel")&&document.querySelector(".post-cancel").remove(),this.clearIdInput(),this.clearFields()}}(a,d,c,l);var b=new class{constructor(e,t,n,o,r,i,a,d,c){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.project=r,this.status=!1,this.idInput=i,this.projectsDropDown=a,this.todos=d,this.todoSubmit=c}renderProjectDropDown(e){let t="";e.forEach((e,n)=>{t+=`\n        <option value=${n}>${e.name}</option>\n      `}),this.projectsDropDown.innerHTML=t,this.showTodo(e)}showTodo(e){let t="";e.forEach((e,n)=>{e.todos&&e.todos.forEach((e,o)=>{let r="",i="";1===e.priority?(r="LOW",i="badge-info"):2===e.priority?(r="MEDIUM",i="badge-primary"):(r="HIGH",i="badge-danger"),t+=`\n                <li class="list-group-item" data-id=${n}>\n                  <div class="todo-indicator bg-warning"></div>\n                    <div class="widget-content p-0">\n                      <div class="widget-content-wrapper">\n                        <div class="widget-content-left mr-2">\n                          <div class="custom-checkbox custom-control">\n                            <input\n                                  class="custom-control-input"\n                                  id="exampleCustomCheckbox12"\n                                  type="checkbox"\n                                /><label\n                                  class="custom-control-label"\n                                  for="exampleCustomCheckbox12"\n                                  >&nbsp;</label\n                                >\n                              </div>\n                            </div>\n                            <div class="widget-content-left">\n                              <div class="widget-heading">\n                                ${e.title}\n                               <div class="badge badge-success ml-2">\n                                  ${e.dueDate}\n                                </div>\n                              </div>\n                              <div class="widget-subheading">\n                                <div>\n                                  ${e.description}\n                                  <div class="badge badge-pill ${i} ml-2">\n                                    ${r}\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class="widget-content-right" id="todo-action"  data-id=${o}>\n                              <i class="fa fa-pencil edit-todo"></i>\n                              <i class="fa fa-trash-o delete-todo"></i>\n                            </div>\n                          </div>\n                        </div>\n                      </li>\n          `})}),this.todos.innerHTML=t}clearFields(){this.title.value="",this.description.value="",this.dueDate.value=""}fillForm(e){this.title.value=e.title,this.description.value=e.description,this.dueDate.value=e.dueDate,this.priority.value=e.priority,this.projectsDropDown.value=e.projectIndex,this.projectsDropDown.disabled=!0,this.idInput.value=e.todoIndex,this.changeToDoFormState("edit")}changeToDoFormState(e){"edit"===e?(this.todoSubmit.textContent="Update",this.todoSubmit.className="add-todo u-full-width btn btn-warning"):(this.todoSubmit.textContent="Add",this.projectsDropDown.disabled=!1,this.todoSubmit.className="add-todo u-full-width btn btn-primary",this.clearIdInput())}clearIdInput(){this.idInput.value="",this.clearFields()}}(s,u,p,m,h,v,f,g,y);const j=()=>{const e=document.querySelector(".alert");e&&e.remove()};var D=(e,t)=>{j();const n=document.createElement("div");n.className=t,n.appendChild(document.createTextNode(e));document.querySelector(".page-container").insertAdjacentElement("afterbegin",n),setTimeout(()=>{j()},3e3)};const E=()=>{localStorage.getItem("data")||localStorage.setItem("data",JSON.stringify(o)),S.showProjectsList(i()),b.renderProjectDropDown(i())};document.addEventListener("DOMContentLoaded",E),document.querySelector(".add-project").addEventListener("click",e=>{const t=document.querySelector("#name").value,n=document.querySelector("#project-index").value;if(""===t)D("Please fill in all fields","alert alert-danger");else{const e=i();""===n?(e.push({name:t}),S.clearFields(),D("Project updated","alert alert-primary")):(e[n].name=t,D("Project updated","alert alert-success"),S.changeFormState("add")),r(e),E()}e.preventDefault()}),document.querySelector("#projects").addEventListener("click",e=>{if(e.target.parentElement.classList.contains("edit-project")){const t={index:e.target.parentElement.dataset.id,name:e.target.parentElement.parentElement.previousElementSibling.childNodes[1].textContent.trim()};S.fillForm(t)}e.preventDefault()}),document.querySelector("#projects").addEventListener("click",e=>{if(e.target.parentElement.classList.contains("remove-project")){const t=e.target.parentElement.dataset.id;if(window.confirm("Are you sure?")){const e=i();e.splice(t,1),r(e),S.showProjectsList(e),D("Deleted Project","alert alert-danger"),E()}}e.preventDefault()}),document.querySelector(".add-items").addEventListener("click",e=>{e.target.classList.contains("post-cancel")&&S.changeFormState("add"),e.preventDefault()}),document.querySelector("#addTodo").addEventListener("submit",e=>{e.preventDefault();const t=document.querySelector("#title").value,n=document.querySelector("#description").value,o=document.querySelector("#dueDate").value,a=parseInt(document.querySelector("#priority").value,10),d=document.querySelector("#project").value,c=document.querySelector("#todoId").value,l={title:t,description:n,dueDate:o,priority:a,status:!1};if(""===t||""===n||""===o||""===a)D("Please fill in all fields","alert alert-danger");else{const e=i();c?(e[d].todos[c]=l,D("TODO Updated","alert alert-success"),b.changeToDoFormState("add")):(Object.prototype.hasOwnProperty.call(e[d],"todos")?e[d].todos.push(l):e[d].todos=[l],D("TODO Added","alert alert-success")),r(e),b.clearFields(),b.showTodo(e)}}),document.querySelector("#todos").addEventListener("click",e=>{if(e.preventDefault(),e.target.classList.contains("edit-todo")){const n=e.target.parentElement.dataset.id,o=e.target.parentElement.parentElement.parentElement.parentElement.dataset.id,r=e.target.parentElement.previousElementSibling.childNodes[1].childNodes[0].nodeValue.trim(),i=e.target.parentElement.previousElementSibling.children[0].firstElementChild.innerText.trim(),a=e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[0].nodeValue.trim();let d=e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].childNodes[1].textContent.trim();d="LOW"===(t=d)?1:"MEDIUM"===t?2:3;const c={projectIndex:o,todoIndex:n,title:r,description:a,dueDate:i,priority:d};b.fillForm(c)}var t}),document.querySelector("#todos").addEventListener("click",e=>{if(e.preventDefault(),e.target.classList.contains("delete-todo")){const t=e.target.parentElement.dataset.id,n=e.target.parentElement.parentElement.parentElement.parentElement.dataset.id;if(window.confirm("Are you sure?")){const e=i();e[n].todos.splice(t,1),r(e),D("Deleted","alert alert-danger"),b.showTodo(e)}}})}]);