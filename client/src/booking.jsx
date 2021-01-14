import { Grid ,Button, TextField } from "@material-ui/core";
import Header from "./header";
import React,{useState,useContext} from 'react'
import Footer from "./footer";
import { makeStyles } from '@material-ui/styles';
import { UserContext } from "./userContext";
import {useHistory } from 'react-router-dom'
import axios from 'axios'
import { RoomContext } from "./roomsContext";
const useStyles = makeStyles(() => ({

  footer: {
    direction: 'row',
    justify: 'center',
    alignContent: 'flex-end',
    position: 'absolute',
    bottom: '0vh',
  },
}));
export default function Booking(){
  const history =useHistory();
  const classes = useStyles();
  const [check_in,setCheck_in] = useState('');
  const [check_out,setCheck_out] = useState(''); 
  const {userstore} = useContext(UserContext);
  const {roomstore} = useContext(RoomContext);
  
  console.log(userstore.user)
  console.log(userstore.id)
  console.log(userstore.email)
  console.log(userstore.phonenumber)
  console.log(userstore.address)
  const Submit = (e)=> {
    e.preventDefault();
   axios
   .post('http://localhost:5000/bookings', {
    user_id:userstore.id,
    check_in,
    check_out,
    room_id:roomstore.id,
    user_name:userstore.user,
    
    phonenumber:userstore.phonenumber,
    email:userstore.email,
    address:userstore.address
   })
   .then((response) => {
     console.log(response.id)
     window.alert("booked room successfully")
    history.push('/')
   })
   .catch((error) => {
     console.log(error.data)
     window.alert("Room is already Booked ");
   });
   };

  return(
    
    <Grid container>

      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid container xs={12} style={{marginTop:"45px"}} justify="center" >
          <Grid container justify="center">
          <h1 style={{paddingLeft:"2px",paddingBottom:"20px" , fontSize:"38px"}}>
          <span  style={{color:"#EB984E"}} > BOOKING  </span> PAGE  </h1>        
                    
                  <Grid container justify="center">   
            <Grid item xs={7}  style={{fontSize:"15px",paddingBottom:"20px"}}>CHECK-IN:
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                type="date"
                name="checkin"
                value={check_in}
                onChange={(e) => {
                  setCheck_in(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={7}  style={{fontSize:"15px",paddingBottom:"20px"}}>CHECK-OUT:
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                type="date"
                name="checkout"
                value={check_out}
                onChange={(e) => {
                  setCheck_out(e.target.value);
                }}
              />
            </Grid>
            </Grid>
                    <Grid container justify="center">
                      <Button
            type="submit"
            variant="contained"
            color="tan"
            style={{marginBottom:"60px",marginTop:"25px"}}
            onClick={Submit}
          >
            BOOK
          </Button>
                    </Grid>
                   
          </Grid>
                    

               
          </Grid>
          <Grid item container className={classes.footer}>
        <Footer />
      </Grid> 
    </Grid>
  )
}