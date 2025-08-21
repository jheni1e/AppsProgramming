const addTask = () => {
    let nametask = document.getElementById('addtask').value;

    if (nametask != "") {
        let newtask = document.createElement('h4');
        
        newtask.className = 'task';
        newtask.textContent = nametask;
        
        let divtask = document.createElement('div');
        divtask.className = 'divtask';

        let img = document.createElement('img');
        img.src = "garbage.png";
        img.id = "imggarbage";
        img.style = "height: 60px;"

        divtask.appendChild(newtask);
        divtask.appendChild(img);

        setTimeout(() => {
            document.getElementById('addtask').value = "";    
        }, 50);

        document.getElementById('tasklist').appendChild(divtask);
    }
};