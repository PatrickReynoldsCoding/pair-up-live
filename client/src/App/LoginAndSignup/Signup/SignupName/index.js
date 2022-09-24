import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";


export default function SignupName({ addName, user }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const paperStyle = {
    padding: 20,
    height: "20vh",
    width: 400,
    margin: "250px auto",
  };

  function handleChange() {
    addName(firstNameRef.current.value, lastNameRef.current.value);
    console.log(user);
  }

  return (

    

    <Grid>
      <div className="header">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.8 }}
          transition={{ delay: 0.1, duration: 2.5 }}
        >
          Please provide your first name and last name!
        </motion.h2>
      </div>

      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" spacing={5}></Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "15vh",

          }}
        >
          <FormGroup>
            <TextField
              type="text"
              inputRef={firstNameRef}
              id="filled-basic"
              label="First Name"
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
              inputRef={lastNameRef}
              id="filled-basic"
              label="Last Name"
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

          <Link
            to="/signupskill"
            onClick={() => {
              addName(firstNameRef.current.value, lastNameRef.current.value);
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "black",
                backgroundColor: "#b7bfe4",
                border: "2px black solid",
                bottom: -100,
                left: -150,
              }}
              className="btn btn-primary btn-bloack"
            >
              Next
            </Button>
          </Link>
        </div>
      </Paper>
    </Grid>
  );
}
