import React, { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

export default function Signin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/api/loginUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User logged in msg from frontend");
        window.localStorage.setItem("token", data.data[1]);
        window.localStorage.setItem("userEmail", loginData.email);
        if (data.data[0].UserType === "Admin") {
          // localStorage.setItem("UserType", data.data[0].UserType);
          navigate("/Dashboard");
        } else {
          navigate("/Home");
        }
      });

    setLoginData({
      email: "",
      password: "",
    });
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="signin-page">
      <form
        style={{
          border: "1px solid silver",
          padding: "10px 40px",
          width: "450px",
          height: "93vh",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 0 10px silver",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
        action={<Link to="/login" />}
        autoComplete="off"
      >
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Login
        </Typography>
        <TextField
          id="outlined-email-input"
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={onChangeHandler}
          value={loginData.email}
          name="email"
          fullWidth
          required
          sx={{ mb: 3, width: "300px" }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={onChangeHandler}
          value={loginData.password}
          name="password"
          required
          fullWidth
          sx={{ mb: 3, width: "300px" }}
        />
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
          sx={{ mb: 3 }}
        >
          Login
        </Button>
        <Typography>
          Don't Have an Account? <Link to="/Signup">Sign Up</Link>
        </Typography>
      </form>
    </div>
  );
}
