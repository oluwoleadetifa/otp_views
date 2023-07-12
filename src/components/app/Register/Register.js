import React, { useState } from 'react';
import './Register.scss';
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    firstName: " ",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prevState => ({...prevState, [name]:value}))
  }


  const reg_submit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }
  return (
    <div className="body">
      <form className="form">
        <div className="register">Register</div>
        <div className="name">
          <input
            type="text"
            name="firstName"
            placeholder="Input First name"
            className="input-field"
            onChange={handleChange}
            value={user.firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Input Last name"
            className="input-field"
            onChange={handleChange}
            value={user.lastName}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Input e-mail"
          className="input-field"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Input Phone"
          className="input-field"
          onChange={handleChange}
          value={user.phone}
        />
        <input
          type="password"
          name="password"
          placeholder="Input Password"
          className="input-field"
          onChange={handleChange}
          value={user.password}
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          className="input-field"
        />
        <input
          className="btn"
          name="button"
          type="submit"
          value={"Register"}
          onClick={reg_submit}
        />
        <div className="option">
          Have an account? <Link to={"../"}>Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register