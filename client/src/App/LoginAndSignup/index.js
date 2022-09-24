import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import background from "./images/Pairing-men-colour.png";

export default function LoginAndSignup() {
  const logIn = {
    minWidth: 150,
    minHeight: 100,
    bottom: 0,
    left: 150,
    fontSize: 20,
  };
  const signUp = {
    minWidth: 150,
    minHeight: 100,
    bottom: -100,
    right: 150,
    fontSize: 20,
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "15%",
      }}
    >
      <div>
        <div className="header">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.8 }}
            transition={{ delay: 0.1, duration: 2.5 }}
          >
            Pair Up!
          </motion.h1>
        </div>
      </div>

      <h2 className="header2">
        A website to pair program with coders from around the world
      </h2>
      <Link to="/Signupname">
        <Box textAlign="center">
          <Button
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "#b7bfe4",
              border: "2px black solid",
            }}
            style={signUp}
            className="btn btn-primary btn-bloack"
          >
            Sign up
          </Button>
        </Box>
      </Link>

      <Link to="/login">
        <Box textAlign="center">
          <Button
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "#b7bfe4",
              border: "2px black solid",
            }}
            style={logIn}
            className="btn btn-primary btn-bloack"
          >
            Log in
          </Button>
        </Box>
      </Link>
    </div>
  );
}
