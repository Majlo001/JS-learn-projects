const listContainer = document.getElementById('listContainer');
const addNewList = document.getElementById('addNewList');
const addNewListInput = document.getElementById('addNewListInput');
const deleteListBtn = document.getElementById('deleteListBtn');

const todoContainer = document.getElementById('todoContainer');
const listTitle = document.getElementById('listTitle');
const taskRemaining = document.getElementById('taskRemaining');
const taskContainer = document.getElementById('taskContainer');

const taskTemplate = document.getElementById('taskTemplate');
const addNewTask = document.getElementById('addNewTask');
const addNewTaskInput = document.getElementById('newTaskInput');


const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [
    { id: 1, name: 'School', tasks: [{ id: 1, name: "Math exam", done: true }, { id: 2, name: "English homework", done: false }] },
    { id: 2, name: 'Work', tasks: [{ id: 1, name: "Todo website", done: false }] },
    { id: 3, name: 'Graphics', tasks: [{ id: 1, name: "Learn Adobe XD", done: false }] }
];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)


render();

function render() {
    renderLists();
    const selectedList = lists.find(list => list.id == selectedListId);
    if (selectedListId == null) {
        todoContainer.style.display = 'none';
    } else {
        todoContainer.style.display = '';
        listTitle.innerText = selectedList.name;
        let count = countTasks(selectedList);
        if (count == 1) {
            taskRemaining.innerText = count + " task remaining";
        } else {
            taskRemaining.innerText = count + " tasks remaining";
        }
        clearElements(taskContainer);
        renderTasks(selectedList);
    }
}

function renderLists() {
    clearElements(listContainer);
    lists.forEach(list => {
        let liElement = document.createElement('li');
        liElement.dataset.listId = list.id;
        liElement.classList.add('todo-name');
        liElement.innerText = list.name;
        if (list.id == selectedListId) {
            liElement.classList.add('active');
        }
        listContainer.appendChild(liElement);
    });
}

function renderTasks(selectedList) {
    selectedList.tasks.forEach((task) => {
        let taskElement = document.importNode(taskTemplate.content, true);
        let checkbox = taskElement.querySelector('input');
        console.log(checkbox);
        checkbox.id = task.id;
        checkbox.checked = task.done;
        let labelp = taskElement.querySelector('p');
        labelp.htmlFor = task.id;
        labelp.append(task.name);
        taskContainer.appendChild(taskElement);
    })
}

// Function that create new tasks
addNewTask.addEventListener('submit', i => {
    i.preventDefault();
    const taskName = addNewTaskInput.value;
    if (taskName != '' && taskName != null) {
        const task = createNewTask(taskName);
        addNewTaskInput.value = '';
        let selectedList = lists.find(list => list.id === selectedListId);
        selectedList.tasks.push(task);
        save();
        render();
    } else {
        return;
    }
});

function createNewTask(newTaskName) {
    return { id: Date.now().toString(), name: newTaskName, done: false };
}

// Function that count tasks
function countTasks(selectedList) {
    return selectedList.tasks.filter(task => !task.done).length;
}

// Function that create new list
addNewList.addEventListener('submit', i => {
    i.preventDefault();
    const newListName = addNewListInput.value;
    if (newListName != '' && newListName != null) {
        const list = createNewList(newListName);
        addNewListInput.value = '';
        lists.push(list);
        save();
        render();
    } else {
        //Alert button here
        return;
    }
});

// funcion that make list active
listContainer.addEventListener('click', i => {
    if (i.target.tagName.toLowerCase() == 'li') {
        selectedListId = i.target.dataset.listId;
        save();
        render();
    }
});

// funcion that delete active list
deleteListBtn.addEventListener('click', i => {
    lists = lists.filter(list => list.id != selectedListId)
    selectedListId = null;
    save();
    render();
});

// funcion that save local storage
function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function clearElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


function createNewList(newListName) {
    return { id: Date.now().toString(), name: newListName, tasks: [] };
}