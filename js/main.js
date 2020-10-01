var searchInput = document.querySelector('#search-input');
var listUl = document.querySelector('#list-items');
var listItems = document.querySelectorAll('#list-items li');
var newTodoInput = document.querySelector('#new-todo');
var addTodoBtn = document.querySelector('#create-todo-btn');

searchInput.addEventListener('input', search);
addTodoBtn.addEventListener('click', addTodoAndClearInput);


/* Searching for a Todo */
function search(e) {
    var value = e.target.value.toLowerCase();

    listItems.forEach(element => {
        content = element.querySelector('.content');
        text = content.innerHTML;

        if (text.toLowerCase().includes(value)) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    });
}

/* Adding a Todo */
function addTodoAndClearInput(e) {
    addTodoToList(newTodoInput.value);
    clearInput();
}

function addTodoToList(todo) {
    contentSpan = createContentSpan(todo);
    deleteBtn = createDeleteBtn();

    listUl.appendChild(
        createTodoNode(contentSpan, deleteBtn)
    );
}

function createContentSpan(todo) {
    contentSpan = document.createElement('span');
    contentSpan.classList.add('content');
    contentSpan.appendChild(document.createTextNode(todo));
    
    return contentSpan;
}

function createDeleteBtn() {
    deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.appendChild(document.createTextNode("X"));

    return deleteBtn;
}

function createTodoNode(contentSpan, deleteBtn) {
    todoNode = document.createElement('li');
    todoNode.appendChild(contentSpan);
    todoNode.appendChild(deleteBtn)

    return todoNode;
}

function clearInput() {
    newTodoInput.value = "";
}