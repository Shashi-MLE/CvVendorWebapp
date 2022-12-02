import React,{useState, useContext} from 'react';
import { UserContext } from '../../Context/UserContext';
import './Landing.css';
import user from '../../Assets/usericon.png';
import Navbar from '../Header/LandNavbar';
// 
import TodoForm from "../Fav_List/TodoForm";
import TodoItem from "../Fav_List/TodoItem";
import DesItem from "../Fav_List/DesItem";
import DesForm from "../Fav_List/DesForm";
// 
const Landingpage = () => {



  const { history} = useContext(UserContext)

const [todos, setTodos] = useState([]);

const [todoss, setTodoss] = useState([]);

const addTodo = (text) => {
  let id = 1;
  if(todos.length > 0) {
    id = todos[0].id + 1
  }
  let todo = {id: id, text: text, completed: false, important: false}
  let newTodos = [todo, ...todos]
  setTodos(newTodos)
};

const removeTodo = (id) => {
  let updatedTodos = [...todos].filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};

const completeTodo = (id) => {
  let updatedTodos = todos.map((todo) => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  setTodos(updatedTodos)
}

const importantTodo = (id) => {
  let updatedTodos = todos.map((todo) => {
    if(todo.id === id) {
      todo.important = !todo.important
    }
    return todo
  })

  setTodos(updatedTodos)
}
let sortedTodos = todos.sort((a, b) => b.important - a.important)

// 
// 
// 
const addTodos = (text) => {
let id = 1;
if(todoss.length > 0) {
id = todoss[0].id + 1
}
let todos = {id: id, text: text, completed: false, important: false}
let newTodos = [todos, ...todoss]
setTodoss(newTodos)
};

const removeTodos = (id) => {
let updatedTodoss = [...todoss].filter((todos) => todos.id !== id);
setTodoss(updatedTodoss);
};

const completeTodos = (id) => {
let updatedTodoss = todoss.map((todos) => {
if(todos.id === id) {
  todos.completed = !todos.completed
}
return todos
})
setTodoss(updatedTodoss)
}

const importantTodos = (id) => {
let updatedTodoss = todoss.map((todos) => {
if(todos.id === id) {
  todos.important = !todos.important
}
return todos
})

setTodoss(updatedTodoss)
}
let sortedTodoss = todoss.sort((a, b) => b.important - a.important)


// 


    return (
        <>
            <Navbar />
            <div className=' Landing-page'>
                <div className="leftcontainer">
                    <div className="left1">
                        <div className="left-content1">
                            <p>Recent Searches</p>
                        </div>
                        <div className="left-content2">
                     {history.map((q,key)=>
                      <p key={key}>{q.query}</p>
                     )}

                        </div>
                    </div>
                    <div className="left2">
                        <div className="left-2">
                            <p>Recent chats</p>

                        </div>

                        <div className='left2-input'>
                            <div className='leftt'>
                                <div className='lefticon'>
                                    <img src={user} id="img1" alt="user" />

                                </div>
                                <div className='leftdetails'>
                                    <p className="p1">Linda Torres</p>
                                    <p className="p2">Anaylst Programmer,Avaee</p>
                                    <p className="p3">Email: LindaTorres12@gmail.com</p>
                                    <p className="p4">Phone: 234455555</p>


                                </div>

                            </div>

                            <div className='leftt'>
                                <div className='lefticon'>
                                    <img src={user} id="img1" alt="user" />

                                </div>
                                <div className='leftdetails'>
                                    <p className="p1">Linda Torres</p>
                                    <p className="p2">Anaylst Programmer,Avaee</p>
                                    <p className="p3">Email: LindaTorres12@gmail.com</p>
                                    <p className="p4">Phone: 234455555</p>


                                </div>




                            </div>
                            <div className='leftt'>
                                <div className='lefticon'>
                                    <img src={user} id="img1" alt="user" />

                                </div>
                                <div className='leftdetails'>
                                    <p className="p1">Linda Torres</p>
                                    <p className="p2">Anaylst Programmer,Avaee</p>
                                    <p className="p3">Email: LindaTorres12@gmail.com</p>
                                    <p className="p4">Phone: 234455555</p>


                                </div>




                            </div>



                        </div>

                    </div>

                </div>


                <div className="rightcontainer d-flex">

                    
<div className='right-1'>
    <p>graph</p>

</div>

<button class="btn btn-primary" id='btnnew' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> 
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
 </button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
{/* <h5 id="offcanvasRightLabel">Favorites--</h5> */}
<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
<div className="todo-app">
<h1>Add Favorites</h1>
<TodoForm addTodo={addTodo} />
<hr className="seperator"/>
<favlist>


{sortedTodos.map((todo) => {
return (



<TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>

)
})}
</favlist>
</div>

{/*  */}

<div className="todos-app">
{/* <h1>description</h1> */}
<DesForm addTodos={addTodos} />

{sortedTodoss.map((todos) => {
return (
<DesItem removeTodos={removeTodos} completeTodos={completeTodos} importantTodos={importantTodos} todos={todos} key={todos.id}/>
)
})}
</div>



</div>

</div>


</div>
            </div>


        </>



    );
};

export default Landingpage;