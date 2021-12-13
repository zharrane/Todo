import { useState } from "react"
import "./todo.scss"
import { FaTrashAlt as Delete } from "react-icons/fa"
import { MdOutlineDone as Done } from "react-icons/md"
const Todo = ({ id }: any) => {
  const [done, setDone] = useState<boolean>(false)
  const [title, setTitle] = useState<string>("My Task")
  const [oldTitle, setOldTitle] = useState<string>("My Task")
  const [description, setDescription] = useState<string>(
    "My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description My Description"
  )

  const handleOnBlur = () => {
    if (title.trim() === "") {
      setTitle(oldTitle)
    } else {
      setOldTitle(title)
    }
    console.log("blur")
    //Save changes
  }
  return (
    <div className="todo__card">
      <div className="todo__drag" />

      <div className="todo__main">
        <div className="todo__inputs" onBlur={handleOnBlur}>
          <input
            placeholder="Should never be empty"
            value={title}
            className={`todo__title ${done ? "todo__done" : ""}`}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            title={description}
            className={`todo__desc ${done ? "todo__done" : ""}`}
            placeholder="Missing description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="todo__icons">
          <button onClick={() => console.log()}>
            <Delete className="todo__delete" />
          </button>
          {!done && (
            <button onClick={() => console.log()}>
              <Done className="todo__done" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo
