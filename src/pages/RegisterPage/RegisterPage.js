import clayful from "clayful/client-js";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage () {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Customer = clayful.Customer;

    const payload = {
      email,
      password,
    };

    Customer.createMe(payload, (err, result) => {
      if (err) {
        console.log(err.code, "๐ฌ");
        return
      }

      navigate("/login");
    });
  }

  return (
    <div className="pageWrapper">
      <div className="auth-wrapper">
        <h1>ํ์๊ฐ์.</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleEmailChange}
            placeholder="Apple Id"
            type="email"
            name="email"
            value={email}
          />
          <input
            onChange={handlePasswordChange}
            placeholder="Password"
            type="password"
            name="password"
            value={password}
          />

          <button type="submit">ํ์๊ฐ์.</button>
          <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
            ์ด๋ฏธ Apple ID๊ฐ ์๋ค๋ฉด? ์ง๊ธ ๋ก๊ทธ์ธ.
          </Link>
        </form>
      </div>
    </div>
  );
}
