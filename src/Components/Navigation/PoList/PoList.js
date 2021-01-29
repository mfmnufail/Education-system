import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'
import { useState, useEffect } from 'react';
import axios from 'axios';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(no, locode, loname, description, moredetails) {
  return {
    no,
    locode,
    loname,
    description,
    moredetails,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.no}
        </TableCell>
        <TableCell align="right">{row.locode}</TableCell>
        <TableCell align="right">{row.loname}</TableCell>
        <TableCell align="right">{row.description}</TableCell>
        {/* <TableCell align="right">{row.moredetails}</TableCell> */}
        <TableCell align="right"> <EditIcon/> </TableCell>
        <TableCell align="right"><DeleteIcon/></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                        <TableCell>The description part goes here...</TableCell>
                   </TableRow>
               
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function PoList() {

  var [polist, setPolist] = useState([]);

  
useEffect(() => {
  
  axios.get('https://localhost:44333/api/Polist')
  .then((response) => 
  {
    console.log(response);
    setPolist(response.data);
    console.log(response.data)
  }
  
  )
  

}, [])

  return (
    <TableContainer component={Paper}>
         <div style={{display:"flex"}}  >
      <h3 style={{textAlign:"center", flex:1}}>PROGRAMME OUTCOME LIST</h3>
      
      <div style={{flex:0.1}}>
      <Button href="/poslist/definepo" variant="contained" color="primary">  Define PO</Button>

      </div>

      
      </div>
      <Table aria-label="collapsible table">
         
        <TableHead >
          <TableRow>
            <TableCell  />
            <TableCell  style={{fontWeight:"bold", fontSize:"18px"}}  >No</TableCell>
            <TableCell  style={{fontWeight:"bold", fontSize:"18px"}} align="right">PO Code</TableCell>
            <TableCell style={{fontWeight:"bold", fontSize:"18px"}}  align="right">PO Name</TableCell>
            <TableCell  style={{fontWeight:"bold", fontSize:"18px"}} align="right">Description</TableCell>
            <TableCell style={{fontWeight:"bold", fontSize:"18px"}}  align="right">Weight</TableCell>
            <TableCell style={{fontWeight:"bold", fontSize:"18px"}}  align="right">Edit</TableCell>
            <TableCell style={{fontWeight:"bold", fontSize:"18px"}}  align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {polist.map((row) => (

              <TableRow>
              <TableCell  />
              <TableCell    >{row.id}</TableCell>
              <TableCell   align="right">{row.po_code}</TableCell>
              <TableCell  align="right">{row.po_name}</TableCell>
              <TableCell   align="right">{row.description}</TableCell>
              <TableCell  align="right">{row.weight}</TableCell>
              <TableCell align="right" > <EditIcon/> </TableCell>
              <TableCell align="right"><DeleteIcon/></TableCell>
              </TableRow>

            
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

