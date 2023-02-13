import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtodo } from '../features/todo';

function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch({})
    const addTodo = () => {
        {
            dispatch(
                addtodo({
                    text: todo,
                })
            )
            setTodo('')
        }
    }
    return (
        <div className='container mx-auto text-center mt-8'>
            <input value={todo} type="text" onKeyPress={(e) => {
                if (e.key === "Enter") {
                    if (e.target.value !== '') {
                        addTodo()
                    }
                }
            }} placeholder='Please enter your todo....' onChange={(event) => setTodo(event.target.value)} className='border p-2 rounded-l-md md:w-96' />
            <button className='bg-teal-500 p-2 rounded-r-md' onClick={() => {
                if (todo !== '') {
                    addTodo()
                }
            }}>Add</button>
        </div>
    )
}

export default AddTodo