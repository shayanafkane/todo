import React from 'react'

function ListTodo() {
    return (
        <div className='w-3/6 bg-slate-300  mx-auto mt-8 rounded-md list-todo'>
            <div className="todo-item-box py-6 px-8">
                <div className="todo-item border-b py-4">
                    <p className='mb-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div className="button-box mt-2">
                        <button className='bg-red-500 p-1 text-xs rounded-md text-white '>Delete</button>
                    </div>
                </div>
                <div className="todo-item border-b py-4">
                    <p className='mb-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div className="button-box mt-2">
                        <button className='bg-red-500 p-1 text-xs rounded-md text-white '>Delete</button>
                    </div>
                </div>
                <div className="todo-item border-b py-4">
                    <p className='mb-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div className="button-box mt-2">
                        <button className='bg-red-500 p-1 text-xs rounded-md text-white '>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListTodo;