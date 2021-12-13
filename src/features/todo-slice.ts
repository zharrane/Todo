import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loadState } from "../app/handleStorage"

interface TodoState {
  title: string
  description: string
  done?: boolean
  deleted?: boolean
}
const oldState = loadState().todos
const initialState: Record<string, TodoState> = {
  ...oldState,
}

export type TodoList = typeof initialState

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoState>) => {
      const id = Date.now()
      const done = false
      const deleted = false
      state[id] = { done, deleted, ...action.payload }
    },

    done: (state, action: PayloadAction<{ id: string }>) => {
      state[action.payload.id].done = !state[action.payload.id].done
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state[action.payload.id].deleted = !state[action.payload.id].deleted
    },
    modify: (
      state,
      action: PayloadAction<{ id: string; title: string; description: string }>
    ) => {
      state[action.payload.id].title = action.payload.title
      state[action.payload.id].description = action.payload.description
    },
  },
})

export const { create, done, deleteTodo, modify } = todosSlice.actions
export default todosSlice.reducer
