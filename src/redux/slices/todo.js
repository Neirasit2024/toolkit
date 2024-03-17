import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [],
    favorite: []
}

export const TodoSlices = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo(state, action){
          state.todo = [...state.todo, action.payload]
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