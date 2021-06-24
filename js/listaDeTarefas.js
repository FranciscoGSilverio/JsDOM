(() => {
  const newTask = document.querySelector("[data-form-button]");

  function createDeleteButton() {
    const deleteButton = document.createElement("span");
    deleteButton.innerText = `x`;
    deleteButton.className = "close";

    deleteButton.addEventListener("click", deleteTask);

    return deleteButton;
  }

  function createConcludeButton() {
    const concludeButton = document.createElement("input");

    concludeButton.setAttribute("type", "checkbox");
    concludeButton.classList = "form-check-input";

    concludeButton.addEventListener("click", finishTask);

    return concludeButton;

    function finishTask(event) {
      const concludeButtonClicked = event.target;
      const listItemConcluded = concludeButtonClicked.parentElement;
      listItemConcluded.classList.toggle("taskFinished");
    }
  }

  function deleteTask(event) {
    const clickedButton = event.target;
    const listItem = clickedButton.parentElement;
    listItem.remove();
  }

  function createTask(event) {
    event.preventDefault();

    const inputTask = document.querySelector("[data-form-input]");
    const taskValue = inputTask.value;

    if (taskValue != "") {
      const tasksList = document.querySelector("[data-task]");

      const newLabel = document.createElement("label");
      newLabel.innerText = `- ${taskValue}`;
      newLabel.className = "form-check-label";

      newItem = document.createElement("li");
      newItem.appendChild(newLabel);
      newItem.appendChild(createDeleteButton());
      newItem.appendChild(createConcludeButton());

      tasksList.appendChild(newItem);

      inputTask.value = "";
    }
  }

  newTask.addEventListener("click", createTask);
})();
