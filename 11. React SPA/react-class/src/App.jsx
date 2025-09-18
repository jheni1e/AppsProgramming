import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Products from './pages/Products';
import Profiles from './pages/Profiles';
import UsersList from './pages/UsersList';

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Ínicio</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/userslist">Lista de Usuários</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:name" element={<Profiles />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/products/:category/:id" element={<Products />} />
        <Route path="/userslist" element={<UsersList />} />
      </Routes>
    </>
  )
}

export default App