import React from 'react';
import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(() => ({
 icon:{
     width:"3vw",
     height:"5vh",
     paddingTop:"20px",
     paddingLeft:"25px",
     '&:hover':{
         color:"#EB984E"
     }
 }
}));

export default function Footer() {
    const classes= useStyles();
    return (
       <Grid container style={{backgroundColor:"#222",maxWidth:"100vw",color:"whitesmoke"}}>
           <Grid item container style={{marginLeft:"33.5vw"}}>
                <FacebookIcon className={classes.icon}></FacebookIcon>
                <InstagramIcon className={classes.icon}></InstagramIcon>
                <YouTubeIcon className={classes.icon}></YouTubeIcon>
                <LinkedInIcon className={classes.icon}></LinkedInIcon>
                <TwitterIcon className={classes.icon}></TwitterIcon>
                <WhatsAppIcon className={classes.icon}></WhatsAppIcon>
           </Grid>
          <p style={{marginLeft:"40vw",fontFamily:"sans-serif"}}>Copyrigth © 2020 - <span style={{color:"#EB984E"}}>SkyLine </span>Hotel</p> 
       </Grid>
    )
}
