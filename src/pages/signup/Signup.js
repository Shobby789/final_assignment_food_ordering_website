import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegisterData((values) => ({ ...values, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/createUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User Registerd");
        navigate("/");
      });

    setRegisterData({
      userName: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
    });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "110vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
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
          Register
        </Typography>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Name"
          onChange={handleChange}
          value={registerData.userName}
          name="userName"
          required
          sx={{ mb: 3, width: "300px" }}
        />
        <TextField
          id="outlined-email-input"
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={handleChange}
          value={registerData.email}
          name="email"
          fullWidth
          required
          sx={{ mb: 3, width: "300px" }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Address"
          onChange={handleChange}
          value={registerData.address}
          name="address"
          fullWidth
          required
          sx={{ mb: 3, width: "300px" }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Phone Number"
          onChange={handleChange}
          value={registerData.phoneNumber}
          name="phoneNumber"
          fullWidth
          required
          sx={{ mb: 3, width: "300px" }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={handleChange}
          value={registerData.password}
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
          Register
        </Button>
        <Typography>
          Already Have an Account? <Link to="/">Sign in</Link>
        </Typography>
      </form>
    </div>
  );
}
