import React from 'react'
import { useSelector } from 'react-redux';

function ListTodo() {
    const todo = useSelector((state) => state.todo);
    return (
        <div className='w-3/6 bg-slate-300  mx-auto mt-8 rounded-md list-todo'>
            <div className="todo-item-box py-6 px-8 flex flex-col-reverse">
                {todo.map((e, key) => {
                    return <div className="todo-item border-b py-4" key={key}>
                        <p className='mb-0'>{e.text}</p>
                        <div className="button-box mt-2">
                            <button className='bg-red-500 p-1 text-xs rounded-md text-white '>Delete</button>
                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default ListTodo;