import React from 'react'
import {useState} from 'react';
import './DefineLo.css'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
// import { DataGrid } from '@material-ui/data-grid';


function DefineLo() {

  const [LoCode, setLoCode] = useState('')
  const [LoName, setLoName] = useState('')
  const [Description, setDescription] = useState('')
  const [Pos, setPos] = useState('');


  const handleSubmit = (event) => 
  {
     event.preventDefault();

     const data = {
       Lo_code : LoCode,
       Lo_name : LoName,
       Description: Description,
       

     }
     console.log(data);

     axios.post("https://localhost:44333/api/Lolist",data)
     .then((res) => {
       console.log(res)
       console.log(res.data)
     })

  }

  





    return (

      <form onSubmit={handleSubmit} >
        
        <div className="definelo_main">

            <div style={{display:"flex" }}>
                
        <TextField
          style={{flex:0.1}}
          label="LO Code"
          id="outlined-start-adornment"
          className=""
          name='Lo_code'
          onChange={(e)=>setLoCode(e.target.value)}
          
          variant="outlined"
        />

        <TextField
        style={{flex:0.9}}
          label="LO Name"
          name='Lo_name'
          id="outlined-start-adornment"
          className=""
          fullWidth
          variant="outlined"
          onChange={(e)=>setLoName(e.target.value)}
        />
            

            </div>

            

              <FormControl  fullWidth className="" variant="outlined" style={{marginTop:"20px"}}>
                <InputLabel  name="Description" htmlFor="outlined-adornment-amount" style={{fontWeight:"bold", fontSize:"20px"}}>Description</InputLabel>
                <OutlinedInput
                    onChange={(e)=>setDescription(e.target.value)}
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    labelWidth={60}
                />
                </FormControl>
                
               <Divider/>

              <FormGroup row>


                 

                </FormGroup>

                <Divider/>

              <div>

              <TableContainer style={{marginTop:"20px"}} component={Paper}>
              <Table className="" aria-label="simple table">
             <TableHead>
              <TableRow>
              <FormControlLabel
                        onCheck={(e)=>setPos(e.target.value)}
                        name = 'PO' id='' control={<Checkbox  name="checkedA" />}
                        label="PO1"
                    />
                    <FormControlLabel
                        control={<Checkbox  name="checkedA" />}
                        label="PO2"
                    />
                    <FormControlLabel
                        control={<Checkbox  name="checkedA" />}
                        label="PO3"
                    />
              <FormControlLabel
                        control={<Checkbox  name="checkedA" />}
                        label="PO4"
                    />
                    <FormControlLabel
                        control={<Checkbox  name="checkedA" />}
                        label="PO5"
                    />
                    <FormControlLabel
                        control={<Checkbox  name="checkedA" />}
                        label="PO6"
                    />
          </TableRow>
        </TableHead>
        
      </Table>
    </TableContainer>
              </div>
                
                

        </div>

        <div style={{display:"flex", justifyContent:"center"}}>
        <Button  type="submit" variant="contained" color="secondary">
            Submit
        </Button>
        </div>
        

      </form>

    
       
    );
}

export default DefineLo
