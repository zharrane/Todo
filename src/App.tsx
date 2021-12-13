import "./App.scss"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        {/* * Not FOUND Page for later* */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  )
}

export default App
