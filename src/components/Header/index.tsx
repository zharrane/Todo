import { useRef, useState } from "react"
import InputField from "../InputField"
import { create } from "../../features/todo-slice"
import { useAppDispatch } from "../../app/hooks"

const Header = () => {
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const textArea = useRef<HTMLTextAreaElement>(null)

  const handleKeyUp = (params: "input" | "textarea") => (e: any) => {
    if (
      (e.code === "NumpadEnter" || e.code === "Enter") &&
      title.trim() !== ""
    ) {
      if (params === "input") {
        textArea.current?.focus()
      } else {
        const tempTitle = title.trim()
        const tempDesc = description.trim()
        dispatch(create({ title: tempTitle, description: tempDesc }))
        setTitle("")
        setDescription("")
      }
    }
  }
  return (
    <>
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
    </>
  )
}

export default Header
