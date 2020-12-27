const listContainer = document.getElementById('listContainer');
const addNewList = document.getElementById('addNewList');
const addNewListInput = document.getElementById('addNewListInput');
const deleteListBtn = document.getElementById('deleteListBtn');


const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [
    { id: 1, name: 'School', tasks: [] },
    { id: 2, name: 'Work', tasks: [] },
    { id: 3, name: 'Graphics', tasks: [] }
];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)


render();

function render() {
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