import { useState } from 'react';
import '../styles/Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        // TODO: Add auth logic
        alert(`Logging in with:\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
    }

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleLogin}>
                <h1 className="login-title">Sign In</h1>

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

                <button type="submit" className="login-btn">Log In</button>

                <p className="login-footer">
                    Don’t have an account? <a href="/signup">Sign up</a>
                </p>
            </form>
        </div>
    );
}
