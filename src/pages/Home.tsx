import { useState, useRef, useEffect } from "react"
import Filter from "../components/Filter"
import InputField from "../components/InputField"
import Todo from "../components/Todo"
import { BiTask as Task } from "react-icons/bi"
import { useAppSelector } from "../app/hooks"
import Header from "../components/Header"
import { TodoList } from "../features/todo-slice"

const filterFunc = (filter: string, todos: TodoList) => {
  let temporary = Object.entries(todos)
  switch (filter) {
    case "incomplete":
      return temporary.filter((item) => item[1]["done"] === false)
    case "completed":
      return temporary.filter((item) => item[1]["done"] === true)
    default:
      return temporary
  }
}
const Home = () => {
  /** Internal state */

  const [filter, setFilter] = useState<string>("all")

  /** Data from store */
  const todos = useAppSelector((state) => state.todos)
  // will rerender any way
  const filteredTodos = filterFunc(filter.toLocaleLowerCase(), todos)

  return (
    <main className="main__section">
      <div className="main__side">
        <h1> {filter}</h1>
      </div>
      <div>
        <div className="main__header">
          <h1>TODO</h1>
          <Header />
        </div>
        <div className="main__body">
          {/* <div className="separator" /> */}
          <div className="main__list">
            {filteredTodos.length === 0 ? (
              // Empty
              <div className="main__empty">
                <Task className="main__empty__img" />
              </div>
            ) : (
              //Render filtered todos
              filteredTodos.map(([key]) => <Todo key={key} id={key} />)
            )}
          </div>
          <div className="main__filter">
            <Filter setFilter={setFilter} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
