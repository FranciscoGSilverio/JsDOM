(() => {
  const newTask = document.querySelector("[data-form-button]");

  //Creates a delete button for each task added.
  function createDeleteButton() {
    const deleteButton = document.createElement("span");
    deleteButton.innerText = `x`;
    deleteButton.className = "close";

    //Checks wether the delete button is clicked.
    deleteButton.addEventListener("click", deleteTask);

    return deleteButton;
  }
  //Creates a conclude button to check the finished tasks.
  function createConcludeButton() {
    const concludeButton = document.createElement("input");

    //Set an atribute and a class for the created button.
    concludeButton.setAttribute("type", "checkbox");
    concludeButton.classList = "form-check-input";

    concludeButton.addEventListener("click", finishTask);

    return concludeButton;}

  function finishTask(event) {
    const concludeButtonClicked = event.target;

    //Selects the parent of the selected item.
    const listItemConcluded = concludeButtonClicked.parentElement;
    listItemConcluded.classList.toggle("taskFinished");
    }
  
  //Deletes the task when its delete button is pressed.
  function deleteTask(event) {
    const clickedButton = event.target;
    const listItem = clickedButton.parentElement;
    listItem.remove();
  }

  //Add a new task to the list when the "+" button is pressed.
  function createTask(event) {
    event.preventDefault();

    const inputTask = document.querySelector("[data-form-input]");
    const taskValue = inputTask.value;

    //Checks if the input is not empty.
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

      //Resets the input value to empty.
      inputTask.value = "";
    }
  }
  //Checks wether the "+" button is clicked.
  newTask.addEventListener("click", createTask);
})();
