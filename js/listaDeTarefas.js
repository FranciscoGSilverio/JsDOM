(() => {
  const newTask = document.querySelector("[data-form-button]");
  const inputTask = document.querySelector("[data-form-input]");

  function createDeleteButton() {
    const deleteButton = document.createElement("span");
    deleteButton.innerText = `x`;
    deleteButton.className = "close";

    deleteButton.addEventListener("click", deleteTask);

    return deleteButton;
  }

  function deleteTask(event) {

    const clickedButton = event.target;
    const listItem = clickedButton.parentElement;
    listItem.remove();

  }

  function createTask(event) {
    event.preventDefault();

    const taskValue = inputTask.value;

    if (taskValue != "") {
      const tasksList = document.querySelector("[data-task]");

      const newLabel = document.createElement("label");
      newLabel.innerText = `- ${taskValue}`;
      newLabel.className = "form-check-label";

      newItem = document.createElement("li");
      newItem.appendChild(newLabel);
      newItem.appendChild(createDeleteButton());

      tasksList.appendChild(newItem);

      inputTask.value = "";
    }
  }

  newTask.addEventListener("click", createTask);
})();
