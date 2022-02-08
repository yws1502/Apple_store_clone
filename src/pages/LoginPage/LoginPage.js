import { useNavigate } from "react-router-dom";
import clayful from "clayful/client-js";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function LoginPage () {
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
    }

    Customer.authenticate(payload, (err, result) => {
      if (err) {
        console.log(err.code)
        return;
      }

      const data = result.data;

      localStorage.setItem("customerUid", data.customer);
      localStorage.setItem("accessToken", data.token);
      navigate("/");
    });
  }

  return (
    <div className="auth-wrapper">
      <h1>로그인.</h1>
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
        <p>
          Apple ID는 iTunes, App Store, iCloud에 로그인할 때 사용하는 이메일 주소입니다.
        </p>

        <button type="submit">로그인.</button>
        <Link to="register" style={{ color: "gray", textDecoration: "none" }}>
          Apple ID가 없으신가요? 지금 생성.
        </Link>
      </form>
    </div>
  );
}