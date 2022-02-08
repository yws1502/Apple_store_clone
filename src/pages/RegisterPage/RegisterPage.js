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
        console.log(err.code, "🚬");
        return
      }

      navigate("/login");
    });
  }

  return (
    <div className="auth-wrapper">
      <h1>회원가입.</h1>
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

        <button type="submit">회원가입.</button>
        <Link to="login" style={{ color: "gray", textDecoration: "none" }}>
          이미 Apple ID가 있다면? 지금 로그인.
        </Link>
      </form>
    </div>
  );
}
