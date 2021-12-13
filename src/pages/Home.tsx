import { useState, useRef } from "react"
import InputField from "../components/InputField"

const Home = () => {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const textArea = useRef<HTMLTextAreaElement>(null)

  const handleKeyUp = (params: "input" | "textarea") => (e: any) => {
    if (params === "input") {
      if (
        (e.code === "NumpadEnter" || e.code === "Enter") &&
        e.target.value.trim() !== ""
      )
        textArea.current?.focus()
    } else {
    }
  }

  return (
    <main className="main__section">
      <div className="main__filter">
        <h1> Title HH</h1>
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
                value={description}
                className="text__area"
                onKeyUp={handleKeyUp("textarea")}
              />
            </div>
          </div>
        </div>
        <div className="main__body">
          <div className="separator" />
          <div className="main__list"></div>
          <div className="main__filter"></div>
        </div>
      </div>
    </main>
  )
}

export default Home
