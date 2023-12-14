document.addEventListener('DOMContentLoaded', function () {
  var listItems = document.querySelectorAll('ul li');

  listItems.forEach(function (item) {
    // Attach click event listener to list item
    item.addEventListener('click', strikethrough);

    // Add a delete button to each list item
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    item.appendChild(deleteButton);

    // Attach click event listener to delete button
    deleteButton.addEventListener('click', deleteListItem);
  });

  function inputLength() {
    return input.value.length;
  }

  function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    // Add a delete button to the new list item
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);

    ul.appendChild(li);
    input.value = "";

    // Attach click event listener to the new list item
    li.addEventListener('click', strikethrough);

    // Attach click event listener to delete button
    deleteButton.addEventListener('click', deleteListItem);
  }

  function addListAfterClick() {
    if (inputLength() > 0) {
      createListElement();
    }
  }

  function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
  }

  function strikethrough() {
    event.target.classList.toggle('done');
  }

  function deleteListItem(event) {
    var listItem = event.target.parentElement;
    listItem.remove();
  }

  var button = document.getElementById("enter");
  var input = document.getElementById("userinput");
  var ul = document.querySelector("ul");

  button.addEventListener("click", addListAfterClick);
  input.addEventListener("keypress", addListAfterKeypress);
});