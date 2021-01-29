import React from 'react'
import { Grid,Paper,  TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ruhunu from './ruhunu1.png';
import axios from 'axios';




const Login=()=>{


    const paperStyle={padding :20,height:'80vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    const headerStyle = { margin: 0 }

    
    
    return(
        <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                    <img src={ruhunu} alt='logo' />
                <h2 style={headerStyle}>Sign In</h2>
               
            </Grid>
                <TextField name='username' label='Username'   placeholder='Enter Username' fullWidth required />
                <TextField name='password' label='Password'    placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link   href="/signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}



export default Login