import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import About from './pages/About'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="text-xl">Home</Link>
          <Link to="/movies" className="text-xl">Movies</Link>
          <Link to="/about" className="text-xl">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App