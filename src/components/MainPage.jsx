import React from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

function MainPage() {
    return (
        <div>
            <h1 className='text-center mt-4 text-4xl font-bold text-gray-600'>Todo App</h1>
            <AddTodo />
            <ListTodo />
        </div>
    )
}

export default MainPage