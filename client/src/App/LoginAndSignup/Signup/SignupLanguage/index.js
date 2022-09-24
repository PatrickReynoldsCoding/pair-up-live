import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

export default function SignupLanguage({ addLang, user }) {
  const rubyRef = useRef(null);
  const javascriptRef = useRef(null);
  const pythonRef = useRef(null);
  const paperStyle = {
    padding: 20,
    height: "20vh",
    width: 400,
    margin: "250px auto",
  };

  function sendSkillsArray() {
    let languages = [];

    if (rubyRef.current.checked === true) {
      languages.push("ruby");
    }
    if (javascriptRef.current.checked === true) {
      languages.push("javascript");
    }
    if (pythonRef.current.checked === true) {
      languages.push("python");
    }
    addLang(languages);
  }

  return (
    <Grid>
      <div className="header">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.8 }}
          transition={{ delay: 0.1, duration: 2.5 }}
        >
          What languages do you know?
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
            <FormControlLabel
              inputRef={rubyRef}
              control={<Checkbox />}
              value="Ruby"
              label="Ruby"
              onChange={sendSkillsArray}
            />
            <FormControlLabel
              inputRef={javascriptRef}
              control={<Checkbox />}
              value="Javascript"
              label="Javascript"
              onChange={sendSkillsArray}
            />
            <FormControlLabel
              inputRef={pythonRef}
              control={<Checkbox />}
              value="Python"
              label="Python"
              onChange={sendSkillsArray}
            />
            <Link to="/signupcredentials">
              <Button
                onClick={sendSkillsArray}
                variant="contained"
                sx={{
                  color: "black",
                  backgroundColor: "#b7bfe4",
                  border: "2px black solid",
                }}
                className="btn btn-primary btn-bloack"
              >
                Next
              </Button>
            </Link>
          </FormGroup>
        </div>
      </Paper>
    </Grid>
  );
}
