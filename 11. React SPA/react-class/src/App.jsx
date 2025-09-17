import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Products from './pages/Products';
import Profiles from './pages/Profiles';

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Ínicio</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/users/1">Admin</Link>
          <Link to="/users/2">User 2</Link>
          <Link to="/users/3">User 3</Link>
          <Link to="/users/4">User 4</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:name" element={<Profiles />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/products/:category/:id" element={<Products />} />
      </Routes>
    </>
  )
}

export default App