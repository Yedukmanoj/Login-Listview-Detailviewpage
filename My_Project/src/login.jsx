import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('./listview', {replace: true});

    };
    return (
        <div className="login-container">
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your username"
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
            <br />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Login</button>
          </form>
        </div>
      );
    };
    
    export default Login;
