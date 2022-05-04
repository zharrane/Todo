import "./todo.scss"

import { deleteTodo, done, modify } from "../../features/todo-slice"
import { useCallback, useState } from "react"

import { FaTrashAlt as Delete } from "react-icons/fa"
import { MdOutlineDone as Done } from "react-icons/md"
import InputField from "../InputField"
import { AiOutlineUndo as Undo } from "react-icons/ai"
import clsx from "clsx"
import { useAppDispatch } from "../../app/hooks"
import { useAppSelector } from "../../app/hooks"

type TodoCardProps = {
  id: string
}

const TodoCard: React.FC<TodoCardProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const todo = useAppSelector((state) => state.todos[id])

  const [title, setTitle] = useState<string>(todo.title)
  const [oldTitle, setOldTitle] = useState<string>(todo.title)
  const [description, setDescription] = useState<string>(todo.description)

  const handleBlur = useCallback(() => {
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

  return (
    <div className="card">
      <div className="drag" />

      <div className="todo-main">
        <div
          className={clsx("todo-inputs", todo.done ? "todo-blured" : "")}
          onBlur={handleBlur}
        >
          <InputField
            placeholder="Should never be empty"
            value={title}
            className={`todo-title ${todo.done ? "todo-done" : ""}`}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputField
            title={description}
            className={`todo-desc ${todo.done ? "todo-done" : ""}`}
            placeholder="Missing description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="todo-icons">
          <button
            onClick={() => {
              dispatch(deleteTodo({ id }))
            }}
          >
            <Delete className="todo-delete" />
          </button>
          {!todo.done ? (
            <button
              onClick={() => {
                dispatch(done({ id }))
              }}
            >
              <Done className="todo-done" />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(done({ id }))
              }}
            >
              <Undo className="todo-undo" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoCard
