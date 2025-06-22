import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import GameInfo from './pages/GameInfo';
import './styles/Navbar.css';
import './styles/Global.css';

function App() {
  // init login state
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // handle login stuff
  function handleLogin() {
    if (loginEmail && loginPassword) {
      // Simulate login
      setUserEmail(loginEmail);
      setShowLoginForm(false);
    }
  }

  function getInitials(email) {
    return email.charAt(0).toUpperCase();
  }

  return (
    <Router>
      <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/Wishlist" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Wishlist
        </NavLink>
        <NavLink to="/Settings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Settings
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>
      </div>
      {/* this should be its own comp but whatever lol */}
      <div className="nav-right">
          {userEmail ? (
            <div className="profile-badge" title={userEmail}>
              {getInitials(userEmail)}
            </div>
          ) : (
            <>
              <button
                className="nav-link login-button"
                onClick={() => setShowLoginForm(prev => !prev)}
              >
                Login
              </button>
              {showLoginForm && (
                <div className="login-dropdown">
                  <input
                    type="email"
                    placeholder="Email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <button className="login-submit" onClick={handleLogin}>
                    Log In
                  </button>
                  <p className="signup-redirect">
                    Don’t have an account? <NavLink to="/signup">Sign up</NavLink>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Wishlist" element={<Wishlist/>} />
        <Route path="/Settings" element={<Settings userEmail={userEmail} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gameinfo" element={<GameInfo />} />
      </Routes>
    </Router>
  );
}

export default App;