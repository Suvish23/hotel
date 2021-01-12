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
      minWidth: 650,
    },
  });

function RoomStatus() {
    const classes=useStyles();
    const [status,setStatus] = React.useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:5000/getStatus')
        .then(res=>{
        console.log(res.data)
        setStatus(res.data.data)
        }) .catch((error)=>{
   console.log(error)
        })
      },[]);
    return (
        <Grid item container style={{marginTop:"20px"}}>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Room_id</TableCell>
                <TableCell >User_id</TableCell>
                <TableCell >Check_in</TableCell>
                <TableCell >Check_out</TableCell>
                <TableCell >phonenumber</TableCell>
                <TableCell >address</TableCell>
                <TableCell >email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {status.map((row) => (
            <StyledTableRow>
              <StyledTableCell >{row.user_name}</StyledTableCell>
              <StyledTableCell align="left">
               {row.room_id}</StyledTableCell>
              <StyledTableCell align="left">
              {row.user_id}</StyledTableCell>
              <StyledTableCell >{row.check_in}</StyledTableCell>
              <StyledTableCell >{row.check_out}</StyledTableCell>
              <StyledTableCell >{row.phonenumber}</StyledTableCell>
              <StyledTableCell >{row.email}</StyledTableCell>
              <StyledTableCell >{row.address}</StyledTableCell>
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
      </Grid>
     
    )
}

export default RoomStatus
