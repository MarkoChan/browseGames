import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Settings from './pages/Settings';
import './styles/Navbar.css';
import './styles/Global.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/Wishlist" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Wishlist
        </NavLink>
        <NavLink to="/Profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Profile
        </NavLink>
        <NavLink to="/Settings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Settings
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Wishlist" element={<Wishlist/>} />
        <Route path="/Profile" element={<Login/>} />
        <Route path="/Settings" element={<Settings/>} />
      </Routes>
    </Router>
  );
}

export default App;