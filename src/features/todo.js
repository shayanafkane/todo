import {
    createSlice
} from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name: "todo",
    initialState:
        [
            {
                id: 1,
                text: "Hello ! im shayan , This is first todo"
            },
            {
                id: 2,

                text: "This is first todo"
            },
        ],

    reducers: {
        addtodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload.text
            }
            state.push(newTodo)
        },
        removeTodo: (state, action) => {

           return state.filter((todo) => todo.id !== action.payload.id)
        }
    }
})


export const {
    addtodo, removeTodo
} = todoSlice.actions;

export default todoSlice.reducer;