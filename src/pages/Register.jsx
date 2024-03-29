import React from "react";
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="Username" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <button>Login</button>
        <p>THere is an error!</p>
        <span>
          Don't you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
