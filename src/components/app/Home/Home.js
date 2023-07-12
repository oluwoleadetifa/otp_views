import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="body">
      <form className="form_reg">
        <div className="login">Login</div>
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
        <input className='btn' name="button" type="submit" value={"Login"} />

        <div className='option'>
          Don't have an account? <Link to={'/register'}>Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Home