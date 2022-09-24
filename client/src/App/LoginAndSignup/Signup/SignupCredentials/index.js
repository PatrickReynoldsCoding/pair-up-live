import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

export default function SignupCredentials({
  createUser,
  addCredentials,
  user,
}) {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);
  const postcodeRef = useRef(null);
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 400,
    margin: "150px auto",
  };
  const button = {
    height: "40vh",
    width: 400,
    margin: "350px auto",
  };

  function handleChange() {
    addCredentials(
      usernameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      postcodeRef.current.value
    );
    console.log(user);
  }

  return (
    <Grid>
      <div className="header">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.8 }}
          transition={{ delay: 0.1, duration: 2.5 }}
        >
          Please fill in the below!
        </motion.h1>
      </div>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" spacing={5}></Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
          }}
        >
          <FormGroup>
            <TextField
              type="text"
              inputRef={usernameRef}
              id="Username_"
              label="Username"
              variant="filled"
              sx={{
                color: "black",
                backgroundColor: "white",
                border: "2px black solid",
                maxWidth: "300px",
                maxHeight: "60px",
                minWidth: "360px",
                minHeight: "60px",
              }}
              onChange={handleChange}
            />
            <br />
            <TextField
              type="text"
              inputRef={emailRef}
              id="Email_"
              label="Email"
              variant="filled"
              sx={{
                color: "black",
                backgroundColor: "white",
                border: "2px black solid",
                maxWidth: "300px",
                maxHeight: "60px",
                minWidth: "360px",
                minHeight: "60px",
              }}
              onChange={handleChange}
            />
            <br />
            <TextField
              type="text"
              inputRef={passwordRef}
              id="Password_"
              label="Password"
              variant="filled"
              sx={{
                color: "black",
                backgroundColor: "white",
                border: "2px black solid",
                maxWidth: "300px",
                maxHeight: "60px",
                minWidth: "360px",
                minHeight: "60px",
              }}
              onChange={handleChange}
            />
            <br />
            {/* <TextField
              type="text"
              inputRef={password2Ref}
              id="Password2_"
              label="Password Checker"
              variant="filled"
              sx={{
                color: "black",
                backgroundColor: "white",
                border: "2px black solid",
                maxWidth: "300px",
                maxHeight: "60px",
                minWidth: "360px",
                minHeight: "60px",
              }}
              onChange={handleChange}
            /> */}

            <TextField
              type="text"
              inputRef={postcodeRef}
              //style={firstName}
              id="Postcode_"
              label="Postcode"
              variant="filled"
              sx={{
                color: "black",
                backgroundColor: "white",
                border: "2px black solid",
                maxWidth: "300px",
                maxHeight: "60px",
                minWidth: "360px",
                minHeight: "60px",
              }}
              onChange={handleChange}
            />
          </FormGroup>
          <Link to="/login">
            <Button
              onClick={() => {
                addCredentials(
                  usernameRef.current.value,
                  emailRef.current.value,
                  passwordRef.current.value,
                  postcodeRef.current.value
                );
                createUser(user);
              }}
              variant="contained"
              sx={{
                color: "black",
                backgroundColor: "#b7bfe4",
                border: "2px black solid",
                left: "-130px",
                bottom: "-225px",
                maxWidth: "100px",
                maxHeight: "100px",
                minWidth: "100px",
                minHeight: "100px",
              }}
              className="btn btn-primary btn-bloack"
            >
              Create User
            </Button>
          </Link>
        </div>
      </Paper>
    </Grid>
  );
}
