import { useState, useRef } from "react"
import Filter from "../components/Filter"
import InputField from "../components/InputField"
import Todo from "../components/Todo"

const Home = () => {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [filter, setFilter] = useState<string>("all")
  const textArea = useRef<HTMLTextAreaElement>(null)

  const handleKeyUp = (params: "input" | "textarea") => (e: any) => {
    if (
      (e.code === "NumpadEnter" || e.code === "Enter") &&
      title.trim() !== ""
    ) {
      if (params === "input") {
        textArea.current?.focus()
      } else {
      }
    }
  }

  return (
    <main className="main__section">
      <div className="main__side">
        <h1> {filter}</h1>
      </div>
      <div>
        <div className="main__header">
          <h1>TODO</h1>
          <div className="inputs">
            <div className="input">
              <InputField
                placeholder="What's on your mind?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyUp={handleKeyUp("input")}
              />
            </div>
            <div className="input">
              <textarea
                rows={2}
                ref={textArea}
                placeholder="How would you describe it?"
                value={description}
                className="text__area"
                onChange={(e) => setDescription(e.target.value)}
                onKeyUp={handleKeyUp("textarea")}
              />
            </div>
          </div>
        </div>
        <div className="main__body">
          {/* <div className="separator" /> */}
          <div className="main__list">
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
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
