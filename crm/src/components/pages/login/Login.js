import React, { useState, useEffect } from "react";
import "./Login.css";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginForm);
  };

  return (
    <>
      <div className="loginForm w-80 mt-5">
        <h1 className="w-50 mx-auto text-center">Login to the CRM</h1>
        <form onSubmit={handleSubmit} className="w-25 mx-auto">
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Account"
              id="accounName"
              name="name"
              value={loginForm.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="exampleInputPassword1"
              name="password"
              value={loginForm.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
