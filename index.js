const dashboard = document.getElementById('dashboard-button');
const dashboardPage = document.querySelector('.dashboard-page');
const board = document.getElementById('board-button');
const boardPage = document.querySelector('.board-container')






// opens the dashboard if pressed in the left navbar
dashboard.addEventListener('click', openDashboard)

// opens the dashboard if pressed in the left navbar
board.addEventListener('click', openBoard)




function openDashboard() {
        dashboardPage.style.display = 'inline';
        boardPage.style.display = 'none';
        dashboard.style.opacity = '100%';
        board.style.opacity = '70%';




}

function openBoard () {
        boardPage.style.display = 'flex';
        board.style.opacity = '100%';
        dashboard.style.opacity = '70%';
        dashboardPage.style.display = 'none';

}






//add tasks to the parent elements whenever someone is on the board page and chooses to press the add button. Within this function, there are functions that update the dashboard according to how many tasks are added to the parent element.

addTask()
function addTask () {
    const addButton = document.querySelectorAll('.add-task');

    addButton.forEach(addBtn => addBtn.addEventListener('click', () => {
        addBtnID = addBtn.id;
        const newDiv = document.createElement('div');
        const newTitle = document.createElement('input');
        const newDescription = document.createElement('input');
        const newButton = document.createElement('button');
        const closeTask = document.createElement('img');
        closeTask.src = './imgs/close-line.png';
        closeTask.className = 'close-button';
        newButton.className = 'new-add-button';
        newDiv.className = 'create-new-task';
        newTitle.className = 'new-title';
        newDescription.className = 'new-description';
        newTitle.placeholder = 'Task name'
        newDescription.placeholder = 'Task description'
        newButton.innerText = 'Add task';
        newDiv.appendChild(closeTask)
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newDescription);
        newDiv.appendChild(newButton);
        document.body.appendChild(newDiv);


        //close the pop up if someone presses the 'x';

        closeTaskPopUp();
        function closeTaskPopUp () {
            closeTask.addEventListener('click', () => {
                document.body.removeChild(newDiv)
            })
        }

        addTaskToParent();
        function addTaskToParent () {
            
            newButton.addEventListener('click', () => {
                if (addBtnID === '1'){
                    const parent1 = document.querySelector('.to-do-container');
                    const originalTaskContainer = document.querySelector('.to-do-tasks');
                    const cloneTask = originalTaskContainer.cloneNode(true);
                    cloneTask.className = 'to-do-tasks';


                    // add the title that the user inputs into the new task container
                    const titleInput = newTitle.value;
                    const taskTitle = cloneTask.querySelector('h2');
                    taskTitle.innerText = titleInput;
                    

                    //add the task description that the user inputs into the new task container

                    const descriptionInput = newDescription.value;
                    const taskDescription = cloneTask.querySelector('p');
                    const editTaskButton = cloneTask.querySelector('.edit-task')

                    editTaskButton.id += (Math.random() * 198);

                    taskDescription.innerText = descriptionInput;

                    parent1.appendChild(cloneTask);
                    document.body.removeChild(newDiv);


                    
                    
                }
                else if(addBtnID === '2'){
                    

                    const parent1 = document.querySelector('.in-progress-container');
                    const originalTaskContainer = document.querySelector('.in-progress');
                    const cloneTask = originalTaskContainer.cloneNode(true);
                    cloneTask.className = 'in-progress';


                    // add the title that the user inputs into the new task container
                    const titleInput = newTitle.value;
                    const taskTitle = cloneTask.querySelector('h2');
                    taskTitle.innerText = titleInput;
                   

                    //add the task description that the user inputs into the new task container

                    const descriptionInput = newDescription.value;
                    const taskDescription = cloneTask.querySelector('p');
                    const editTaskButton = cloneTask.querySelector('.edit-task')

                    editTaskButton.id += (Math.random() * 198);
                    taskDescription.innerText = descriptionInput;

                    parent1.appendChild(cloneTask);
                    document.body.removeChild(newDiv);
                    


                }
                else{
                    const parent1 = document.querySelector('.done-container');
                    const originalTaskContainer = document.querySelector('.done-tasks');
                    const cloneTask = originalTaskContainer.cloneNode(true);
                    cloneTask.className = 'done-tasks';


                    // add the title that the user inputs into the new task container
                    const titleInput = newTitle.value;
                    const taskTitle = cloneTask.querySelector('h2');
                    taskTitle.innerText = titleInput;
                  

                    //add the task description that the user inputs into the new task container

                    const descriptionInput = newDescription.value;
                    const taskDescription = cloneTask.querySelector('p');
                    const editTaskButton = cloneTask.querySelector('.edit-task')

                    editTaskButton.id += (Math.random() * 198);
                    taskDescription.innerText = descriptionInput;

                    parent1.appendChild(cloneTask);
                    document.body.removeChild(newDiv);

                } 
                editTask();

            })


            updateDashboard();

            function updateDashboard () {

                const allTasks = document.querySelector('.number-all-tasks')
                let value = 0;
                allTasks.innerText = value;
                console.log(value)

                    //update comlpeted tasks number display on dashboard
                if(addBtn.id === '3'){
                const completedTasks = document.querySelector('.number-completed-tasks');
                    const doneTasks = document.getElementsByClassName('done-tasks');
                    let doneTaskslength = doneTasks.length;
                    completedTasks.innerText = doneTaskslength;
                    value = value + doneTaskslength;
                    allTasks.innerText = value;

                    
                }
                else if (addBtn.id === '2'){
                //update comlpeted tasks number display on dashboard
                    const inProgressTasks = document.querySelector('.number-in-progress-tasks');
                    const inProgTasks = document.getElementsByClassName('in-progress');
                    let inProgressTaskslength = inProgTasks.length;
                    inProgressTasks.innerText = inProgressTaskslength;
                    value = value + inProgressTaskslength;
                    allTasks.innerText = value;

                    
                }
           
                }
        } 
        
    }))


}

viewTasksOnDashboard();
function viewTasksOnDashboard () {
    const viewTasksButton = document.querySelectorAll('.task-btn');
    viewTasksButton.forEach(btn => btn.addEventListener('click', openBoard))
}

editTask()
function editTask () {
    const editTaskButton = document.querySelectorAll('.edit-task');
    editTaskButton.forEach(btn => btn.addEventListener('click', (event) => {
        alert('edit task feature is still in progress;')
        event.preventDefault(); // Prevent default behavior
        event.stopPropagation();
        const mouseX = event.clientX;
        const mouseY = event.clientY;        
        const menuOptions = document.querySelector('.options');

        menuOptions.style.left = mouseX + 'px';
        menuOptions.style.top = mouseY + 'px';

        if (menuOptions.classList.contains('options-display')) {
            menuOptions.classList.remove('options-display');
        } else {
            menuOptions.classList.add('options-display');
        }
        
        console.log(event.currentTarget.id)
        deleteTask(event.currentTarget.id);


    }))
    }

    
    

  
    

    function deleteTask(targetid) {
        const deleteButton = document.querySelector('.delete');

        deleteButton.addEventListener('click', () => {
            let targetElement = document.getElementById(targetid)
                let parent = targetElement.parentNode;
                let grandparent = parent.parentNode;
                let greatGrandParent = grandparent.parentNode;
                let ultraparent = greatGrandParent.parentNode
                ultraparent.removeChild(greatGrandParent);
                
                
            

        })
    
  
    }
   


   



darkMode()
function darkMode () {

    const nav = document.querySelector('.left-navbar');
    const darkMode = document.querySelector('.dark-mode');
    const toDoContainer = document.querySelector('.to-do-container');
    const inProgressContainer = document.querySelector('.in-progress-container');
    const doneContainer = document.querySelector('.done-container')
    darkMode.addEventListener('click', () => {
            alert('Dark mode is still in progress!')

        document.body.classList.toggle('dark-mode-active');
        
        nav.classList.toggle('dark-mode-active');

        toDoContainer.classList.toggle('dark-mode-active');

        inProgressContainer.classList.toggle('dark-mode-active')

        doneContainer.classList.toggle('dark-mode-active')


    

        const imgs = document.querySelectorAll('img');
        imgs.forEach(img => img.classList.toggle('dark-mode-active-img'));
        
    })


}
























































const monthsArray = ['January','February','March','April','May','June','July', 'August', 'September','October','November','December'
]
const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();


updateMonthDate();
function updateMonthDate() {
    let currentMonth = document.querySelector('.month');
    let currentYear = document.querySelector('.year');      
    currentMonth.innerText = monthsArray[month];
    currentYear.innerText = year;    
}

