import { Avatar, Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import Header from './header'
import Footer from './footer';
import React from 'react'
import border from './img/border.jpg'
import bg from './img/bg.jpg'

const useStyles = makeStyles(() => ({
image:{
    backgroundImage: `url(${border})`,
    minHeight: '300px',
    borderRadius:"50%",
    maxWidth: '400px',
    backgroundPosition: 'center center',
    backgroundSize: '29vw',
},
image2:{
    backgroundImage: `url(${bg})`,
    minHeight: '90vh',
    minWidth: '100%',
    backgroundPosition: 'no-repeat center center/cover ',
    backgroundSize:"85vw"
},
}))

function About() {
    const classes =useStyles();
    return (
        <Grid container>

            <Grid  style={{zIndex:"3"}}>
                <Header/>
            </Grid>
            <Grid container xs={12} style={{marginTop:"70px"}} >
                <Grid item xs={7}>
                <h1 style={{margin:"15px 30px 15px 54px",fontSize:"35px"}}>
                <span style={{color:"#EB984E"}}> About SkyLine</span> <span style={{color:"#333"}}>Hotel</span>
                </h1>
                <p style={{margin:"15px 30px 15px 54px",fontSize:"20px",marginRight:"0px"}} >
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ducimus dolore obcaecati exercitationem? Quisquam, laboriosam sit harum natus praesentium ducimus sed consequuntur expedita quibusdam voluptatibus laudantium modi et voluptatum doloribus, ullam odit quos molestiae quaerat ea repellat dicta obcaecati.
                   <br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id autem totam, incidunt dolor, est vel expedita rerum consectetur minus facilis deleniti? Aut, blanditiis excepturi repudiandae rerum qui recusandae nisi!
                </p>
                
     
                
                </Grid>
                
                <Grid item xs={5} >
                <p className={classes.image} style={{margin:"30px 60px 30px 100px"}}/>
                </Grid> 
                <Grid xs={2}/>
            </Grid>
            <Grid container className={classes.image2}>
                <Grid container justify="center"style={{fontSize:"50px",margin:"40px 40px 40px 40px"}}>
                <span style={{color:"#EB984E"}}> What Our </span > <span style={{color:"#333",marginLeft:"20px"}}> Guest Says</span>
                </Grid>
                
                <Grid container>
                <Grid item  xs={3} className={classes.image3} >
               <Card style={{padding:"20px",marginBottom:"20px",marginLeft:"84px",borderRadius:"20px"}} >
         <CardContent  >
         <Avatar  src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg' style={{height:"200px",width:"200px"}} />
        <p style={{marginTop:"35px"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet quasi, tenetur et pariatur possimus, atque nobis eaque culpa aspernatur excepturi inventore suscipit quisquam. Eveniet quas accusamus quasi reiciendis autem?
        </p>
            
         </CardContent>
     </Card>
               </Grid>
               <Grid xs={1}/>
               <Grid item  xs={3} >
               <Card style={{padding:"20px",marginBottom:"20px",marginLeft:"64px",borderRadius:"20px"}} >
         <CardContent  >
             
        
         <Avatar  src='https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&amp;ext=jpg' style={{height:"200px",width:"200px"}} />
        <p style={{marginTop:"35px"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet quasi, tenetur et pariatur possimus, atque nobis eaque culpa aspernatur excepturi inventore suscipit quisquam. Eveniet quas accusamus quasi reiciendis autem?
        </p>
            
         </CardContent>
     </Card>
               </Grid>
               <Grid xs={1}/>

               <Grid item  xs={3} >
               <Card style={{padding:"20px",marginBottom:"20px",marginLeft:"64px",borderRadius:"20px"}} >
         <CardContent  >
         <Avatar  src='https://www.mockofun.com/wp-content/uploads/2019/12/blur-part-of-an-image.jpg' style={{height:"200px",width:"200px"}} />
        <p style={{marginTop:"35px"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet quasi, tenetur et pariatur possimus, atque nobis eaque culpa aspernatur excepturi inventore suscipit quisquam. Eveniet quas accusamus quasi reiciendis autem?
        </p>
         </CardContent>
     </Card>
               </Grid>
               </Grid>
        </Grid>
        <Grid>
            <Footer/>
        </Grid>
        </Grid>
    )
}



export default About;