// const toDoListTasks = document.querySelector(".todolist");
// const inputToDo = document.querySelector(".todo-input");

let toDoListTasks;
let inputToDo;
let errorToDoInfo;
let ulListtoDoTaks;
let btnAddTask;
//let createNewElement;

const mainEvent = () => {
  substitutionOfDataFromDOMElements();
  substitutionOfDataFromDOMEvents();
};

const substitutionOfDataFromDOMElements = () => {
  toDoListTasks = document.querySelector(".todolist");
  inputToDo = document.querySelector(".todo-input");
  errorToDoInfo = document.querySelector(".error-info");
  ulListtoDoTaks = document.querySelector(".todolist ul");
  btnAddTask = document.querySelector(".btn-add");
};
const substitutionOfDataFromDOMEvents = () => {
  btnAddTask.addEventListener("click", addTastToDoList);
  ulListtoDoTaks.addEventListener("click", checkOptions);
};

const addTastToDoList = () => {
  if (inputToDo.value !== "") {
    const createNewElement = document.createElement("li");
    createNewElement.textContent = inputToDo.value;
    addAreaPanel(createNewElement);
    ulListtoDoTaks.append(createNewElement);
    //console.log("ok");

    inputToDo.value = "";
    errorToDoInfo.textContent = "";
  } else {
    errorToDoInfo.textContent = "Error";
  }
};

const addAreaPanel = (c) => {
  //font-size =0
  const panelTool = document.createElement("div");
  panelTool.classList.add("tools");
  c.append(panelTool);

  const btnComplete = document.createElement("button");
  btnComplete.classList.add("complete");
  btnComplete.innerHTML = '<i class="fas fa-check"></i>';
  const btnCancel = document.createElement("button");
  btnCancel.classList.add("delete");
  btnCancel.innerHTML = '<i class="fas fa-times"></i>';
  const btnEdit = document.createElement("button");
  btnEdit.classList.add("edit");
  btnEdit.textContent = "EDIT";

  panelTool.append(btnComplete, btnEdit, btnCancel);
};

const checkOptions = (e) => {
  if (e.target.matches(".complete")) {
    // console.log(e.target.closest("li"));
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    console.log("ok");
  } else if (e.target.matches(".delete")) {
    console.log("delete");
  }
};

document.addEventListener("DOMContentLoaded", mainEvent);
