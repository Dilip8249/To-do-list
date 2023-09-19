const todoList = [
  { name: "make dinner", dueDate: "2023-09-14" },
  { name: "wash dishes", dueDate: "2023-09-14" },
];
render();
function render() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button" onclick= "
        todoList.splice(${i}, 1);
        render();
      ">Delete</button>
      `;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElm = document.querySelector(".js-input");
  const dateElm = document.querySelector(".js-date-input");

  const name = inputElm.value;
  const dueDate = dateElm.value;

  todoList.push({ name: name, dueDate: dueDate });
  inputElm.value = "";
  dateElm.value = "";
  render();
}
