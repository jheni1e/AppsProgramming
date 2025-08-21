const addTask = () => {
    let nametask = document.getElementById('addtask').value;

    if (nametask != null) {
        let newtask = document.createElement('h4');
        newtask.className = 'task';
        newtask.textContent = nametask;

        setTimeout(() => {
            document.getElementById('addtask').value = "";    
        }, 50);

        document.getElementById('tasklist').appendChild(newtask);
    }
};