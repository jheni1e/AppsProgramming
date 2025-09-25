import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import User from './pages/User';

function App() {

  return (
    <>
    <header>
      <nav>
        <Link to="/" className="text-xl">Home</Link>
        <Link to="/list" className="text-xl">List</Link>
      </nav>
    </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  )
}

export default App