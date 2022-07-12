import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { signin, signup } from '../actions/auth';
import "./Login.css";

const initialState = { firstName: '', lastName: '', email: '', password: '' };

const Login = () => {
  const theme = createTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState)
  const [isSignup, setIsSignup] = useState(false)
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))
  
  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {isSignup ? "Sign up" : "Sign in"}
              </Typography>
             
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {isSignup && (
                      <>
                        <Grid item xs={12} sm={6}>
                          <TextField onChange={handleChange} autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField onChange={handleChange} required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                        </Grid>
                      </>
                    )}
                  <Grid item xs={12}>
                    <TextField onChange={handleChange} required fullWidth id="email" label="Email Address" name="email" autoComplete="email"/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField onChange={handleChange} required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                      <Button onClick={switchMode}>
                        {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                      </Button>
                  </Grid>
                </Grid>
              </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
