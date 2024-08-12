const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Add task function
function addTask() {
    if (inputBox.value === '') {
        // if input box is empty
        alert('You must write something!');
    }
    else {
        // create element in list
        let li = document.createElement('li');

        // add input value of input box to innerHTML of li
        li.innerHTML = inputBox.value;

        // now finally adding & displaying li to listContainer
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // '\u00d7' code for cross icon
        li.appendChild(span);
    }
    // Updating input box
    inputBox.value = '';

    // calling function for saving data
    saveData();
}

// Events for clickiing
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        // if click element is li then it will checked and unchecked
        e.target.classList.toggle('checked');

        // calling function for saving data
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        // if click element is span the it will delete span
        e.target.parentElement.remove();

        // calling function for saving data
        saveData();
    }

}, false);


// save data in browser
function saveData() {
    //it will save data of listConatiner what we input through input box
    localStorage.setItem('data', listContainer.innerHTML);
}

// show data in listContainer
function showTask() {
    // it will show data in list container
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();