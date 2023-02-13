import {
    createSlice
} from "@reduxjs/toolkit";

const initialStateValue = 
    {
        todos: [
            {
                text: "Hello ! im shayan , This is first todo"
            },
            {
                text: "Hello ! im shayan , This is first todo"
            },
        ],
    }
;

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: initialStateValue
    },
    reducers: {

    }
})


// export const {
    
// } = todoSlice.actions;

export default todoSlice.reducer;