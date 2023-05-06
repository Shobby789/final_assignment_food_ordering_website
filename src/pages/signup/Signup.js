import {
  Button,
  FormControl,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  // const [registerData, setRegisterData] = useState({
  //   userName: "",
  //   email: "",
  //   address: "",
  //   phoneNumber: "",
  //   password: "",
  //   UserType: null,
  // });
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState("");
  const [UserType, setUserType] = useState();
  const [secretKey, setSecretKey] = useState("");

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setRegisterData((values) => ({ ...values, [name]: value }));
  // };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (UserType === "Admin" && secretKey !== "shoaib") {
      return alert("Invalid Admin");
    }
    // console.log(userName);
    // console.log(email);
    // console.log(password);
    // console.log(phoneNumber);
    // console.log(email);
    // console.log(UserType);
    // console.log(secretKey);

    await fetch("http://localhost:8000/api/createUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
        phoneNumber,
        address,
        UserType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User Registerd");
        navigate("/");
      });

    setUserName("");
    setPassword("");
    setPhoneNumber(null);
    setEmail("");
    setAddress("");
    setUserType();
    setSecretKey("");
  };
  return (
    <div
      style={{
        width: "100%",
        height: "130vh",
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
          height: "125vh",
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
        <Typography variant="h4" sx={{ margin: "20px" }}>
          Register
        </Typography>
        <div style={{ marginBottom: 3, width: "300px" }}>
          <FormControl>
            <RadioGroup name="radio-buttons-group-focus" sx={{ my: 1 }}>
              <Typography>
                <Radio
                  label="Text"
                  defaultChecked
                  name="UserType"
                  value="User"
                  onChange={(e) => setUserType(e.target.value)}
                />
                User
              </Typography>

              <Typography>
                <Radio
                  label="Text"
                  name="UserType"
                  value="Admin"
                  onChange={(e) => setUserType(e.target.value)}
                />
                Admin
              </Typography>
            </RadioGroup>
          </FormControl>
        </div>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          onChange={(e) => setAddress(e.target.value)}
          value={address}
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
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          required
          fullWidth
          sx={{ mb: 3, width: "300px" }}
        />
        {UserType === "Admin" ? (
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Enter Admin Key"
            onChange={(e) => setSecretKey(e.target.value)}
            value={secretKey}
            name="secretKey"
            required
            sx={{ mb: 3, width: "300px" }}
          />
        ) : null}
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
