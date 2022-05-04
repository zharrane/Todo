import Filter, { filterType } from "../components/Filter"
import { TodoList, TodoState } from "../features/todo-slice"

import { BiTask as Empty } from "react-icons/bi"
import TodoCard from "../components/Todo"
import TodoInputs from "../components/Header"
import { useAppSelector } from "../app/hooks"
import { useState } from "react"

const filterFunc = (filter: Partial<filterType>, todos: TodoList) => {
  let temporary = Object.entries(todos)

  temporary = temporary.filter((item) => !item[1]["deleted"])

  const filterPicker: {
    [key in filterType]: [string, TodoState][]
  } = {
    incomplete: temporary.filter((item) => !item[1]["done"]),
    completed: temporary.filter((item) => item[1]["done"]),
    all: temporary
      .filter((item) => !item[1]["done"])
      .concat(temporary.filter((item) => item[1]["done"])),
  }

  return filterPicker[filter]
}

const Home = () => {
  const [filter, setFilter] = useState<filterType>("all")

  const todos = useAppSelector((state) => state.todos)

  const filteredTodos = filterFunc(filter, todos)

  return (
    <main className="section">
      <div className="side">
        <h1> {filter}</h1>
      </div>
      <div>
        <div className="header">
          <h1>TODO</h1>
          <TodoInputs />
        </div>
        <div className="main">
          <div className="list">
            {filteredTodos.length ? (
              filteredTodos.map(([key]) => <TodoCard key={key} id={key} />)
            ) : (
              <div className="empty-list">
                <Empty className="empty-img" />
              </div>
            )}
          </div>
          <div>
            <Filter setFilter={setFilter} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
