import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"

export default function DesItem(props) {
    const { todos, removeTodos, completeTodos, importantTodos } = props
    return (
        <div className={todos.completed ? "todo-row complete" : "todo-row"} style={todos.important ? { background: "orange" } : {}}>
            {todos.text}
            <div className="iconsContainer">
                <button onClick={() => importantTodos(todos.id)} className="important-btn">!</button>
                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodos(todos.id)}/>
                <BiCheckCircle onClick={() => completeTodos(todos.id)}/>
            </div>
        </div>
    )
}