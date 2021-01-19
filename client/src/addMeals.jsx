import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import Header from './header';
const useStyles = makeStyles(()=>({
    button:{
       
        '&:hover':{
          backgroundColor:"orange",
        }
      },
}))

function AddMeals() {
    const classes = useStyles();
    const [meal_type,setMeal_type] =React.useState('');
    const [meals,setMeals] =React.useState('');
const onclicksubmitmealstypehandler = ()=> {
    axios.post('http://localhost:5000/addmeals',
    {
        meal_type,
        meals
    })
.then((response)=>{
console.log(response.data)
})
.catch((error)=>{
console.log(error)
})
};
    return (
        <Grid container  >
            <Grid xs={12}>
                <Header/>
            </Grid>
            <Grid container  justify="center" style={{marginTop:"20vh"}}>
        <Grid item xs={7}   style={{fontSize:"25px",paddingBottom:"20px"}}>Meal Type
  <TextField
    variant="outlined"
    required
    fullWidth
    id="meal_type"
    label="meal_type"
    name="meal_type"
    value={meal_type}
    onChange={(e) => {
      setMeal_type(e.target.value);
    }}
  />
</Grid>


        <Grid item xs={7}  style={{fontSize:"25px",paddingBottom:"20px"}}>Meals
  <TextField
    variant="outlined"
    required
    fullWidth
    id="meals"
    label="meals "
    name="meals"
    value={meals}
    onChange={(e) => {
      setMeals(e.target.value);
    }}
  />
</Grid>
</Grid>
<Grid container justify="center">
<Button onClick={onclicksubmitmealstypehandler} className={classes.button}>
Submit
</Button>
</Grid>

</Grid>
    )
}

export default AddMeals
