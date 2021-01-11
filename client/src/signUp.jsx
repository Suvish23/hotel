import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './userContext';
import {useHistory} from 'react-router-dom'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©
      <Link color="inherit" to="/">
      <span style={{color:"#EB984E"}}>SkyLine </span> Hotel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginBottom: theme.spacing(3),
    color:'#333' ,
    backgroundColor:'#EB984E',
    '&:hover':{
      color:"white",
      backgroundColor:"#333"
    }
  },
}));
const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [address,setAddress]=useState('');
  

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/Register",
    {name,email,password,phonenumber,address})
    .then((response) =>{
console.log(response.data)
dispatch({type:'addUser', payload:{name:response.data.name,id:response.data.user_id}});
    })
    .catch((error)=>{
console.log(error)
    })
    history.push('/')
  };
    
    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" color="textprimary">
        <span style={{color:"#EB984E"}}> Sign</span> up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
              
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Phone Number"
                id="phonenumber"
                name="phonenumber"
                value={phonenumber}
                onChange={(e) => {
                  setPhonenumber(e.target.value);
                }}
              
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Address"
                id="Address"
                name="Address"
               value={address}
               onChange={(e) => {
                setAddress(e.target.value);
              }}
              
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={Submit}
            disabled={!address || !phonenumber || !name || !password || !email}
            className={classes.submit}
            
          >
            Sign Up
          </Button>
          <Grid container justify="center" spacing={4}>
            <Grid item>
              <Link to="/Login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box>
        <Copyright />
      </Box>
    </Container>
  );
};
export default SignUp;