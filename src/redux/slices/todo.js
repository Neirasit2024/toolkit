import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: JSON.parse(localStorage.getItem("todo")) || [],
    favorite: []
}

export const TodoSlices = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo(state, action){
            let data = [...state.todo, action.payload];
            localStorage.setItem("todo", JSON.stringify(data))
          state.todo = data
        }, 
        addDelete(state, action){
            state.todo = state.todo.filter((el)=> el.id !== action.payload)
        },
        addFavorite(state, action){
           state.favorite = [...state.favorite, ...state.todo.filter((el)=> el.id === action.payload)]
        }
    }
})
export const {addTodo, addDelete, addFavorite}=TodoSlices.actions
export default TodoSlices.reducer