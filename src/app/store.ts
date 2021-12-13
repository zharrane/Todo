import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "../features/todo-slice"

export const store = configureStore({
  reducer: { todos: todoSlice },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
