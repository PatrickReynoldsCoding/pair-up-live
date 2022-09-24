import React, { useRef } from "react";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

export default function SignupSkill({ user, addSkill }) {
  const beginnerRef = useRef();
  const intermediateRef = useRef();
  const expertRef = useRef();
  const paperStyle = {
    padding: 20,
    height: "20vh",
    width: 400,
    margin: "250px auto",
  };

  const nextButtonRef = useRef();

  function handleChange() {
    let skill = '';

    if (beginnerRef.current.checked === true) {

      skill = "Beginner";
    } else if (intermediateRef.current.checked === true) {
      skill = "Intermediate";
    } else if (expertRef.current.checked === true) {
      skill = "Expert";
    }
    addSkill(skill);
  }

  return (
    <Grid>
      <div className="header">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.8 }}
          transition={{ delay: 0.1, duration: 2.5 }}
        >
          What coding level are you?
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
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Coding Level
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                inputRef={beginnerRef}
                value="Beginner"
                control={<Radio />}
                label="Beginner"
                onChange={handleChange}
              />
              <FormControlLabel
                inputRef={intermediateRef}
                value="Intermediate"
                control={<Radio />}
                label="Intermediate"
                onChange={handleChange}
              />
              <FormControlLabel
                inputRef={expertRef}
                value="Expert"
                control={<Radio />}
                label="Expert"
                onChange={handleChange}
              />
            </RadioGroup>
            <Link to="/signuplanguage">
              <Button
                inputRef={nextButtonRef}
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
          </FormControl>
        </div>
      </Paper>
    </Grid>
    // <>
    //   <div className="codinglevel">
    //     <h3>What's your coding level?</h3>
    //     <input
    //       ref={beginnerRef}
    //       type="radio"
    //       value="beginner"
    //       name="radAnswer"
    //       onChange={handleChange}
    //     />
    //     Beginner
    //     <input
    //       ref={intermediateRef}
    //       type="radio"
    //       value="intermediate"
    //       name="radAnswer"
    //       onChange={handleChange}
    //     />
    //     Intermediate
    //     <input
    //       ref={expertRef}
    //       type="radio"
    //       value="expert"
    //       name="radAnswer"
    //       onChange={handleChange}
    //     />
    //     Expert
    //   </div>
    //   <Link to="/signuplanguage">
    //     <button className="next-btn" ref={nextButtonRef} disabled={true}>
    //       NEXT
    //     </button>
    //   </Link>
    // </>
  );
}
