class ToDoList {
  constructor() {
    this.toDoListTasks = document.querySelector(".todolist");
    this.inputToDo = document.querySelector(".todo-input");
    this.errorToDoInfo = document.querySelector(".error-info");
    this.ulListToDoTasks = document.querySelector(".todolist ul");
    this.btnAddTask = document.querySelector(".btn-add");
    this.popup = document.querySelector(".popup");
    this.popupInfo = document.querySelector(".popup-info");
    this.popupInput = document.querySelector(".popup-input");
    this.popupAddBtn = document.querySelector(".accept");
    this.popupCloseBtn = document.querySelector(".cancel");
    this.todoToEdit = null;

    this.mainEvent();
  }

  mainEvent() {
    this.substitutionOfDataFromDOMEvents();
  }

  substitutionOfDataFromDOMEvents() {
    this.btnAddTask.addEventListener("click", this.addTaskToDoList.bind(this));

    this.ulListToDoTasks.addEventListener(
      "click",
      this.checkOptions.bind(this)
    );
    this.popupCloseBtn.addEventListener(
      "click",
      this.popupClosePanel.bind(this)
    );
    this.popupAddBtn.addEventListener(
      "click",
      this.editTextToDoTask.bind(this)
    );
    this.inputToDo.addEventListener("keyup", this.keyEnter.bind(this));
  }

  addTaskToDoList() {
    if (this.inputToDo.value !== "") {
      const createNewElement = document.createElement("li");
      createNewElement.textContent = this.inputToDo.value;
      console.log(this);
      this.addAreaPanel(createNewElement);
      this.ulListToDoTasks.appendChild(createNewElement);

      this.inputToDo.value = "";
      this.errorToDoInfo.textContent = "";
    } else {
      this.errorToDoInfo.textContent = "Content must not be empty";
    }
  }

  addAreaPanel(taskElement) {
    const panelTool = document.createElement("div");
    panelTool.classList.add("tools");
    taskElement.appendChild(panelTool);

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
  }

  checkOptions(e) {
    if (e.target.matches(".complete")) {
      e.target.closest("li").classList.toggle("completed");
      e.target.classList.toggle("completed");
    } else if (e.target.matches(".edit")) {
      this.popupOpenPanel(e);
    } else if (e.target.matches(".delete")) {
      this.deleteTask(e);
    }
  }

  popupOpenPanel(e) {
    this.popup.style.display = "flex";
    this.todoToEdit = e.target.closest("li");
    this.popupInput.value = this.todoToEdit.firstChild.textContent;
  }

  popupClosePanel() {
    this.popup.style.display = "none";
    this.popupInfo.textContent = "";
  }

  editTextToDoTask() {
    if (this.popupInput.value !== "") {
      this.todoToEdit.firstChild.textContent = this.popupInput.value;
      this.popupInfo.textContent = "";
      this.popup.style.display = "none";
    } else {
      this.popupInfo.textContent = "Content must not be empty";
    }
  }

  deleteTask(e) {
    e.target.closest("li").remove();
    const allLi = document.querySelectorAll("li");
    if (!allLi.length) {
      this.errorToDoInfo.textContent = "No tasks on the list.";
    }
  }

  keyEnter(e) {
    if (e.key === "Enter") {
      this.addTaskToDoList();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => new ToDoList());
