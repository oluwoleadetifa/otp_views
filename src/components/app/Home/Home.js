import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="body">
      <form className="form">
        <div className="Login">Login</div>
        <input
          type="text"
          name="firstName"
          placeholder="Input FirstName"
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Input Password"
          className="input-field"
        />
        <input name="button" type="submit" value={"Login"} />

        <div>
          Don't have an account? <Link to={'/register'}>Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Home