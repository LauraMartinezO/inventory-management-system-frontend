import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import axios from '../config/axios'
import Cookies from 'js-cookie';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    try {
      const response = await axios.post('/login/',{email:email,password:password})
      
      console.log(response.data)

      //Cookies.set('token')
    } 
    catch (e) {
      console.log(e)
    }
    dispatch(setPersonEdit({id:"",name:"",username:"",email:""}))
  }

  return (
    <Grid container sx={{ height: "100vh", width: "100vw" }}>
      <Grid
        item
        xs={false}
        sm={2}
        md={7}
        sx={{
          backgroundImage:"url(https://www.advotics.com/wp-content/uploads/2022/12/cover-Proses-Manajemen-Inventory-dan-Metode-Penerapannya-01-1-1536x984.png)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize:"cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 20,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "success.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={""} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={(e)=>login()}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#00a76f",
                '&:hover': {
                  backgroundColor: "#0062cc",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Login;
