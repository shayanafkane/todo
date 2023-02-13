import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function ListTodo() {

    const todo = useSelector((state) => state.todo);
    return (
        <div className='md:w-3/6 w-5/6 bg-slate-300  mx-auto mt-8 rounded-md list-todo'>
            <div className="todo-item-box py-6 px-8 flex flex-col-reverse">
                {todo.map((e, key) => {
                    return <TodoItem key={key} text={e.text} id={e.id} />
                })}
            </div>
        </div>
    )
}

export default ListTodo;