import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MdAdsClick } from "react-icons/md"

interface TodoState {
  title: string
  description: string
  done: boolean
  deleted: true
}

interface Todos {
  todos: Record<string, TodoState>
}

const initialState: Todos = {
  todos: {},
}
