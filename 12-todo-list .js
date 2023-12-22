/* Steps:
  1. Create array to store todos
  2.When we click "Add"
  3.Get text from textbox
  4.Console.log the arrray 
  */


  //IT's an array of objects i.e, const todolist = [];  in this case the array contains two objects with properties `name` and `dueDate`.

  //1.`todoList` is an array that uses square brackets `[]` to enclose its elements

  //the array as two elements, each of these enclosed within curly brackets`{}`
  
  //Each of these objects have properties(key-value pairs). In this case, each of these objects have two properties:`name` and `duedate`.
  const todoList = [{           
    name:'make dinner',
    dueDate:'25-10-2022'
  },
  {
    name: 'wash dishes',
    dueDate: '25-10-2022'
  }];  
 

  renderTodoList();

 function renderTodoList() {
        let todoListHTML = '';
         todoList.forEach((todoObject, index) => {
          
          const { name, dueDate } = todoObject;    
          

          const html = `
               <div>${name}</div>
               <div>${dueDate}</div>
               <button  class="delete-todo-button js-delete-todo-button">delete</button>
                
          `;  //generating the HTML


          todoListHTML += html;
         });


        
        
      
      
        document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

        document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', ()=> {
              todoList.splice(index,1);
              renderTodoList();
            })
        })
        
    }
    document.querySelector('.js-add-todo-button').addEventListener('click', () => {
      addTodo(); 
    })

    function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateinputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateinputElement.value;

    
    
    
    todoList.push({
      //name: name,
      //dueDate: dueDate  /* if the property and variable name are same than we type it only once*/
      name, 
      dueDate
    });

    

    inputElement.value = '';
    renderTodoList();
   
  }
