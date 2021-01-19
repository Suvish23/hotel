import { Button, Grid  } from '@material-ui/core';
import React , { useEffect,useContext  } from 'react'


import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';
import Header from './header';
import { UserContext } from './userContext';
import { useHistory } from 'react-router-dom';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
 
  const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
    button:{
      color:"black",
      '&:hover':{
        backgroundColor:"orange",
      }
    },
  });

function FoodTable() {
    const classes=useStyles();
    const history = useHistory();
    const {userstore} =useContext(UserContext);
    const [breakfast,setBreakfast] = React.useState([]);
    const [lunch,setLunch] = React.useState([]);
    const [dinner,setDinner] = React.useState([]);

    const OnclickmealsHandler = () => {
    history.push('/addmeals')
    }


    useEffect(()=>{
        axios
        .get('http://localhost:5000/breakfast')
        .then(res=>{
        console.log(res.data)
        setBreakfast(res.data.data)
        }) .catch((error)=>{
   console.log(error)
        })
      },[]);
    useEffect(()=>{
        axios
        .get('http://localhost:5000/lunch')
        .then(res=>{
        console.log(res.data)
        setLunch(res.data.data)
        }) .catch((error)=>{
   console.log(error)
        })
      },[]);
    useEffect(()=>{
        axios
        .get('http://localhost:5000/dinner')
        .then(res=>{
        console.log(res.data)
        setDinner(res.data.data)
        }) .catch((error)=>{
   console.log(error)
        })
      },[]);
    return (
        <Grid  container>
    <Grid xs={12}>
                <Header/>
            </Grid>
            <Grid container style={{marginTop:"10vh"}} >
            <Grid xs={4}> 
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell><h1>Breakfast</h1></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {breakfast.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="left">
               {row.meals}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        <Grid xs={4}>

       
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell><h1>Lunch</h1></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {lunch.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="left">
               {row.meals}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        <Grid xs={4}>

        
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell><h1>Dinner</h1></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {dinner.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="left">
               {row.meals}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        </Grid>
        <Grid container justify="center" style={{marginTop:"2vh"}}>
        {
    (userstore.user==="admin") &&  <Button className={classes.button} onClick={OnclickmealsHandler} >ADD MEALS
    </Button>
  }
        </Grid>
       
      </Grid>
     
    )
}

export default FoodTable
