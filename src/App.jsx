import { Routes, Route } from "react-router-dom";
import HomePage from '../src/components/HomePage'
import './App.css'

function App() {
  return (
    <div>
    <Routes>
          <Route path="/" element={<HomePage />} /> 
        </Routes>
        </div>
  )
}

export default App
