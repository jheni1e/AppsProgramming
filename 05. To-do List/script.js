const addTask = () => {
    let nametask = document.getElementById('addtask').value;

    if (nametask != "") {
        let newtask = document.createElement('h4');
        
        newtask.className = 'task';
        newtask.textContent = nametask;
        newtask.onclick = doneTask;
        
        let divtask = document.createElement('div');
        divtask.className = 'divtask';

        let img = document.createElement('img');
        img.src = "garbage.png";
        img.id = "imggarbage";
        img.style = "height: 60px; cursor: pointer"
        img.onclick = delTask;

        divtask.appendChild(newtask);
        divtask.appendChild(img);

        setTimeout(() => {
            document.getElementById('addtask').value = "";    
        }, 50);

        document.getElementById('tasklist').appendChild(divtask);
    }
};

const delTask = (event) => {
    const thisimg = event.target;
    const divtask = thisimg.parentElement;
    divtask.remove();
};

const doneTask = (event) => {
    const thistask = event.target;
    if (thistask.style.textDecoration == "line-through") {
        thistask.style.textDecoration = "none";
    } else {
        thistask.style.textDecoration = "line-through";
    }
};