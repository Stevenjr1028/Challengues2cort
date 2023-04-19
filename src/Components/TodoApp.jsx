import React, { useEffect, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import * as types from "./types";

const initialState = []
const init =() => {
    return JSON.parse(localStorage.getItem("todos")) || []
}

export const TodoApp = () => {
    const [todos,dispatch]= useReducer(TodoReducer, initialState, init);

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) =>{
        const action ={
            type: types.CREATE_TODO, 
            payload: todo
        }
        dispatch (action)
    }

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    )
}