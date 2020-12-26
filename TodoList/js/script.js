const listContainer = document.getElementById('todo-list-data');
const addNewList = document.getElementById('addNewList');
const addNewListInput = document.getElementById('addNewListInput');

let lists = [{ id: 1, name: 'School' }, { id: 2, name: 'Work' }, { id: 3, name: 'Graphics' }];

function render() {
    clearElements(listContainer);
    lists.forEach(list => {
        let liElement = document.createElement('li');
        liElement.dataset.listId = list.id;
        liElement.classList.add('todo-name');
        liElement.innerText = list.name;
        listContainer.appendChild(liElement);
    });
}

render();



addNewList.addEventListener('submit', i => {
    i.preventDefault();
    const newListName = addNewListInput.value;
    if (newListName != '' && newListName != null) {
        const list = createNewList(newListName);
        addNewListInput.value = '';
        lists.push(list);
        render();
    } else {
        return;
    }
});



function clearElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


function createNewList(newListName) {
    return { id: Date.now().toString(), name: newListName, tasks: [] };
}