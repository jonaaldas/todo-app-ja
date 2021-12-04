// varieables
let todoInput = document.querySelector('.todo-input').addEventListener('input', getInputValue);
let addBtn = document.querySelector('.btn').addEventListener('keyup', addTodoToList);
let todoCont = document.querySelector('.todos');



// variables
let todoValue = '';

// functions

function getInputValue(){
   return todoValue = this.value;
}


function addTodoToList(){
  //validation
  if(todoValue != '' ){
    createsElements();
  } else {
    alert('add todo please')
  }
}
let ultag;
let litag;
let completeBtn;
let deleteBtn;

function createsElements(){
  //create elements
  ultag = document.createElement('ul');
  litag = document.createElement('li');
  completeBtn = document.createElement('button');
  deleteBtn = document.createElement('button');

  litag.innerHTML = todoValue;
  completeBtn.innerHTML = 'Complete';
  deleteBtn.innerHTML = 'Delete';
  completeBtn.className = 'delete-btn';
  deleteBtn.className = 'complete-btn';

  appendElements();
  //add event listeners 
  deleteBtn.addEventListener('click', deleteTodo);
  completeBtn.addEventListener('click', doneTodo )

  // functions for buttons
  function deleteTodo(){
    todoCont.removeChild(ultag);
  }

  // function for done todo
  function doneTodo(){
    litag.className = 'done-todo';
    console.log(deleteBtn)
  }
}

function appendElements(){
  // append elements
  ultag.appendChild(litag);
  ultag.appendChild(completeBtn);
  ultag.appendChild(deleteBtn);
  // append ol to the container
  todoCont.appendChild(ultag);
}