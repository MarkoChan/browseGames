import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSignup(e) {
        e.preventDefault();
        // TODO: add signup logic
        alert(`Signing up with:\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
        navigate('/'); // redirect to home after signup
    }

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSignup}>
                <h1 className="login-title">Sign Up</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="login-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit" className="login-btn">Create Account</button>

                <p className="login-footer">
                    Already have an account? <a href="/">Sign in</a>
                </p>
            </form>
        </div>
    );
}
