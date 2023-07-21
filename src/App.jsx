import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import MoviePage from "./components/MoviePage/MoviePage";
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