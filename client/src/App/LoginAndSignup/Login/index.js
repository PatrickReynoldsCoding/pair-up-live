import React, { Component, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const requestOptions = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    };
    fetch('http://localhost:8080/api/auth', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.token);
        localStorage.setItem('token', data.token);
        setRedirect(true);
      });
  };

  if (redirect) return <Navigate to="/welcome" />;

  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 500,
    margin: '20px auto',
  };

  const avatarStyle = { backgroundColor: '#89CFF0' };
  const btnstyle = { margin: '8px 0' };
  const fontColour = { color: 'black', align: 'left' };
  //const passwordStyle = { minWidth: 150, minHeight: 100, bottom: 0 };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" spacing={5}>
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
        </Grid>
        <br />
        <Typography variant="h3" gutterBottom component="div">
          Sign In
        </Typography>
        <form onSubmit={submit}>
          <div className="form-group"></div>

          {/* <TextField label="Email" placeholder="Enter Email:" fullWidth />
          <TextField label="Password" placeholder="Enter Password:" fullWidth /> */}

          <TextField
            minWidth={150}
            id="standard-basic"
            fullWidth
            label="Email"
            placeholder="Enter Email:"
            variant="standard"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            id="standard-basic"
            fullWidth
            type="password"
            placeholder="Enter Password:"
            variant="standard"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-group">
            <Box textAlign="center" m={2} pt={3}>
              <Button
                type="submit"
                variant="contained"
                onClick={() => '/profile'}
                className="btn btn-primary btn-bloack"
              >
                Login
              </Button>
            </Box>
            <Typography>
              <Link href="#">Forgot your password ?</Link>
            </Typography>
            <Typography>
              {' '}
              Don't have an account?
              <Link href="/Signupname"> Sign Up</Link>
            </Typography>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
