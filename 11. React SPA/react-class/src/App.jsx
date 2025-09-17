import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Ínicio</Link>
          <Link to="/about">Sobre</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:name" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App