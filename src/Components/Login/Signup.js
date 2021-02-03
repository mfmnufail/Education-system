import React from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ruhunu from './ruhunu1.png';




const Signup = () => {

   
    const paperStyle = { padding: '30px 20px ', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    
    const marginTop = { marginTop: 5 }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                        <img src={ruhunu} alt='logo' />
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name"  />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                   


                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend" >Position</FormLabel>
                        <RadioGroup aria-label="position" name="position" style={{ display: 'initial' }}>
                            <FormControlLabel value="Lecturer" control={<Radio />} label="Lecturer" />
                            <FormControlLabel value="Staff" control={<Radio />} label="Staff" />
                        </RadioGroup>
                    </FormControl>

                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth type='password' label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth type='password' label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}



export default Signup;