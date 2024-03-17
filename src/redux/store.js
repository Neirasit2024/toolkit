import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todo.js"

export const store = configureStore({
    reducer:{
        todo,
    }
})