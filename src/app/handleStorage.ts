const key = "todos"

export function loadState() {
  const todos = localStorage.getItem(key)
  if (!todos) return {}
  return JSON.parse(todos)
}

export function saveState(todos: any) {
  const stringifiedTodos = JSON.stringify(todos)
  localStorage.setItem(key, stringifiedTodos)
}
