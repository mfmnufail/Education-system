import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';



const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(no, pocode, poname, description, moredetails) {
  return {
    no,
    pocode,
    poname,
    description,
    moredetails,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}



function LoList() {

  var [lolist, setLolist] = useState([]);

  
useEffect(() => {
  
  axios.get('https://localhost:44333/api/Lolist')
  .then((response) => 
  {
    console.log(response);
    setLolist(response.data);
    console.log(response.data)
  }
  
  )
  

}, [])

  


  return (
    <TableContainer component={Paper}>
      <div style={{display:"flex"}}  >
      <h3 style={{textAlign:"center", flex:1}}>LEARNING OUTCOME LIST</h3>
      
      <div style={{flex:0.1}}>
      <Button href="/loslist/definelo" variant="contained" color="primary">  Define LO</Button>

      </div>

      
      </div>
         
         
      <Table aria-label="collapsible table">
         
        <TableHead >
          <TableRow>
            <TableCell  />
            <TableCell  style={{fontWeight:"bold", fontSize:"18px"}}  >No</TableCell>
            <TableCell  style={{fontWeight:"bold", fontSize:"18px"}} align="right">LO Code</TableCell>
            <TableCell style={{fontWeight:"bold", fontSize:"18px"}}  align="right">LO Name</TableCell>
            <TableCell  style={{fontWeight:"bold", fontSize:"18px"}} align="right">Description</TableCell>
            {/* <TableCell style={{fontWeight:"bold", fontSize:"18px"}}  align="right">More Details</TableCell> */}
            <TableCell style={{fontWeight:"bold", fontSize:"18px"}}  align="right">Edit</TableCell>
            <TableCell style={{fontWeight:"bold", fontSize:"18px"}}  align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lolist.map((row) => (

          <TableRow>
          <TableCell  />
          <TableCell    >{row.id}</TableCell>
          <TableCell   align="right">{row.lo_code}</TableCell>
          <TableCell  align="right">{row.lo_name}</TableCell>
          <TableCell   align="right">{row.description}</TableCell>
          {/* <TableCell  align="right">{row.lo_name}</TableCell> */}
          <TableCell align="right" > <EditIcon/> </TableCell>
          <TableCell align="right"><DeleteIcon/></TableCell>
          </TableRow>

            
           
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default LoList;
