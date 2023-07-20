import { Routes, Route } from "react-router-dom";
import HomePage from '../src/components/HomePage'
import MoviePage from "../src/components/MoviePage";
import './App.css'


function App() {
  return (
    <div>
    <Routes>
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/movies" element={<MoviePage />} />
        </Routes>
        </div>
  )
}

export default App