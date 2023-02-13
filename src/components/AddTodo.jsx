import React from 'react'

function AddTodo() {
    return (
        <div className='container mx-auto text-center mt-8'>
            <input type="text" placeholder='Please enter your Todo ....' className='border p-2 rounded-l-md w-96' />
            <button className='bg-teal-500 p-2 rounded-r-md'>Add</button>
        </div>
    )
}

export default AddTodo