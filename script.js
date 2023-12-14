// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
  // Select all list items within an unordered list
  var listItems = document.querySelectorAll('ul li');

  // Loop through each list item
  listItems.forEach(function (item) {
    // Attach a click event listener to each list item for strikethrough effect
    item.addEventListener('click', strikethrough);

    // Create a delete button for each list item
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    item.appendChild(deleteButton);

    // Attach a click event listener to each delete button for removing the list item
    deleteButton.addEventListener('click', deleteListItem);
  });

  // Function to get the length of the input value
  function inputLength() {
    return input.value.length;
  }

  // Function to create a new list item
  function createListElement() {
    // Create a new list item
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    // Create a delete button for the new list item
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);

    // Append the new list item to the unordered list
    ul.appendChild(li);
    input.value = ""; // Clear the input field

    // Attach a click event listener to the new list item for strikethrough effect
    li.addEventListener('click', strikethrough);

    // Attach a click event listener to the delete button for removing the new list item
    deleteButton.addEventListener('click', deleteListItem);
  }

  // Function to add a new list item after a button click
  function addListAfterClick() {
    if (inputLength() > 0) {
      createListElement();
    }
  }

  // Function to add a new list item after a keypress event (Enter key)
  function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
  }

  // Function for applying or removing strikethrough effect on a list item
  function strikethrough() {
    event.target.classList.toggle('done');
  }

  // Function for deleting a list item
  function deleteListItem(event) {
    var listItem = event.target.parentElement;
    listItem.remove();
  }

  // Get references to the button, input, and unordered list elements
  var button = document.getElementById("enter");
  var input = document.getElementById("userinput");
  var ul = document.querySelector("ul");

  // Attach click event listeners to the button and input elements
  button.addEventListener("click", addListAfterClick);
  input.addEventListener("keypress", addListAfterKeypress);
});
