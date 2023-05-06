import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userEmail");
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/getUsers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("All Users", data.data);
        setUsers(data.data);
      });
  }, [users]);
  return (
    <div style={{ width: "100%", minHeight: "80vh", backgroundColor: "white" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">USER NAME</TableCell>
              <TableCell align="center">PHONE NUMBER</TableCell>
              <TableCell align="center">EMAIL</TableCell>
              <TableCell align="center">ADDRESS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {user.userName}
                </TableCell>
                <TableCell align="center">{user.phoneNumber}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <button
        onClick={handleLogout}
        style={{
          position: "relative",
          top: 100,
          width: "100px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          outline: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}
