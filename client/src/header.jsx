import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Grid } from '@material-ui/core';
import { useHistory} from 'react-router-dom'
import { UserContext } from './userContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity:"0.8",
    zIndex:"2",
  

  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontSize:"1.7rem",
    
  },
  button:{
    color:"white",
    '&:hover':{
      color:"#EB984E",
      borderBottom:"1px solid #EB984E"
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  const {userstore} =useContext(UserContext);
  console.log(userstore.user);
  const { dispatch } = useContext(UserContext);
  const history =useHistory();
  const onclickhomehandler=()=>{
    history.push('/')
  }
  const onclickabouthandler=()=>{
    history.push('/About')
  }
  const onclickContacthandler=()=>{
    history.push('/Contact')
  }
  const onclickloginhandler=()=>{
    history.push('/Login')
  }
  const onclicklogouthandler=()=>{
    dispatch({type :'logout',payload:{name:userstore.name}})
    window.alert("Logged out successfully")
      history.push('/')
  }
  

  return (
    <Grid container className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:"#000",maxwidth:"100vw"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
         <AccountBalanceIcon></AccountBalanceIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           <span style={{color:"#EB984E"}}>SkyLine</span> Hotel
          </Typography>
          <h3 className={classes.button} color="inherit">
          {userstore.user}
            </h3>
          <Button className={classes.button} color="inherit"  onClick= {onclickhomehandler}>Home</Button>
          <Button className={classes.button} color="inherit"  onClick= {onclickabouthandler}>About</Button>
          <Button className={classes.button} color="inherit"  onClick= {onclickContacthandler}>Contact</Button>
          <Button className={classes.button} color="inherit" onClick= {onclickloginhandler} disabled={userstore.user}>Login</Button>
          <Button onClick={onclicklogouthandler} color="inherit" className={classes.button} disabled={!userstore.user} ><ExitToAppIcon/>
        </Button>
        </Toolbar>
      </AppBar>
    </Grid >
  );
}
