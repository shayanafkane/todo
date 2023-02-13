import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo';

function TodoItem({ text, id }) {
    const dispatch = useDispatch();
    const handleDeleted = () => {
        dispatch(removeTodo({ id: id }))
    }
    return (
        <div className="todo-item border-b py-4">
            <p className='mb-0'>{text}</p>
            <div className="button-box mt-2">
                <button className='bg-red-500 p-1 text-xs rounded-md text-white' onClick={handleDeleted}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem