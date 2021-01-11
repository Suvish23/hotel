
import { makeStyles } from '@material-ui/styles';

import showcase from "../src/img/showcase.jpg"
const useStyles = makeStyles({

    image: {
        backgroundImage: `url(${showcase})`,
        minHeight: '84.5vh',
        minWidth: '98.75vw',
        backgroundPosition: 'center center',
        backgroundSize: '100vw',
      },
    
  });
  
export default function Content(){
    const classes=useStyles();

    return(
        <div className={classes.image }>
        
       <p style={{textAlign:"center",margin:"0px",color:"#fff",fontFamily:"sans-serif",fontSize:"4rem",paddingTop:"30vh"}}><span style={{color:"#E59866 "}}>Enjoy</span> your stay</p> 

         </div>

    )
       
}