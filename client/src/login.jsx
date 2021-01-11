import React, {useContext,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import room from './img/room.jpg';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Footer from './footer';
import { UserContext } from './userContext';
import {useHistory} from 'react-router-dom'



function Copyright() {
 
  return (
    <Typography color="textprimary" align="center">
      Copyright © 
      <Link color="primary" to='/'>
        <span style={{color:"#EB984E"}}>SkyLine </span> Hotel
      </Link>{'  '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${room})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '767px',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    
    margin: theme.spacing(3, 0, 2), //spacing(top,rightleft,bottom)
    color:'#333' ,
    backgroundColor:'#EB984E',
    '&:hover':{
      color:"white",
      backgroundColor:"#333"
    }
      
    }
}));

 export function Login() {
  const classes = useStyles();
  const history =useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState(''); 
  const { dispatch } = useContext(UserContext);
  const Submit = (e)=> {
    e.preventDefault();
   axios
   .post('http://localhost:5000/Login', {
     email,
     password
   })
   .then((response) => {
     console.log(response.id)
    dispatch({type:'addUser', payload:{name:response.data.name,id:response.data.id}});
    history.push('/')
   })
   .catch((error) => {
     console.log(error)
     window.alert("Incorrect Details");
   });
   };
  return (
    <Grid container component="main" className={classes.root}>

      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          <span style={{color:"#EB984E"}}> Sign </span> in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined" //this is for border
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
               
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={Submit}
              className={classes.submit}
              
            >
              
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
               <Link to='/SignUp'>Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid>
        <Footer/>
      </Grid>
     
      
    </Grid>
  );
}
export default Login;