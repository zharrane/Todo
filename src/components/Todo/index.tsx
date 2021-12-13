import { useCallback, useState } from "react"
import "./todo.scss"
import { FaTrashAlt as Delete } from "react-icons/fa"
import { MdOutlineDone as Done } from "react-icons/md"
import { AiOutlineUndo as Undo } from "react-icons/ai"
import { useAppSelector } from "../../app/hooks"
import clsx from "clsx"
import InputField from "../InputField"
import { useAppDispatch } from "../../app/hooks"
import { modify, deleteTodo, done } from "../../features/todo-slice"
type TodoProps = {
  id: string
}

const Todo: React.FC<TodoProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const todo = useAppSelector((state) => state.todos[id])

  const [title, setTitle] = useState<string>(todo.title)
  const [oldTitle, setOldTitle] = useState<string>(todo.title)
  const [description, setDescription] = useState<string>(todo.description)
  const [counter, setCounter] = useState<number>(0)

  const handleBlur = useCallback(() => {
    setCounter(counter + 1)
    if (title.trim() === "") {
      setTitle(oldTitle)
    } else {
      setOldTitle(title)
    }
    //Save changes
    dispatch(
      modify({
        id,
        title,
        description,
      })
    )
  }, [title, description])
  /** too many rerenders */
  console.log(`Recreation Counter : ${counter}`)

  return (
    <div className="todo__card">
      <div className="todo__drag" />

      <div className="todo__main">
        <div
          className={clsx("todo__inputs", todo.done ? "todo__blured" : "")}
          onBlur={handleBlur}
        >
          <InputField
            placeholder="Should never be empty"
            value={title}
            className={`todo__title ${todo.done ? "todo__done" : ""}`}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputField
            title={description}
            className={`todo__desc ${todo.done ? "todo__done" : ""}`}
            placeholder="Missing description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="todo__icons">
          <button
            onClick={() => {
              dispatch(deleteTodo({ id }))
            }}
          >
            <Delete className="todo__delete" />
          </button>
          {!todo.done ? (
            <button
              onClick={() => {
                dispatch(done({ id }))
              }}
            >
              <Done className="todo__done" />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(done({ id }))
              }}
            >
              <Undo className="todo__undo" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo
