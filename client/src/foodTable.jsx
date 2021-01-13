import { Grid  } from '@material-ui/core';
import React , { useEffect  } from 'react'


import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';
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
  });

function FoodTable() {
    const classes=useStyles();
    const [breakfast,setBreakfast] = React.useState([]);
    const [lunch,setLunch] = React.useState([]);
    const [dinner,setDinner] = React.useState([]);
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
        <Grid item container style={{marginTop:"20px"}}>
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
     
    )
}

export default FoodTable
