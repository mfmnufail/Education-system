import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100px',
    paddingTop: '20px',
    paddingLeft: '250px',
   
    color: 'black'
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['19th Batch', '6th Semester', 'Software Project'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function Header() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
             labelProps.optional = <Typography variant="caption">EE5306</Typography>;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <hr style={{marginLeft:'-50px'}}/>
      <div>
        {activeStep === steps.length ? (
          <div>
            {/* <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button> */}
          </div>
        ) : (
          <div>
            {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
            <div>
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )} */}

              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}





// import Divider from '@material-ui/core/Divider';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';


// import React from 'react';
// import './Header.css';



// const Header =(props) =>{

//     const categories = {

//           children: [
        
//             { dp: 'Electrical and Information Engineering', lec:'DR.M.R Udawalpola',dat:'2020.06.11'},
        

//           ],
       
     
//     };


//     return (
        
//       <div className="header__main">
//           <List>
//               <div className="header__left">
               
//                 <ListItem> 
//                   <ListItemText>
//                     Department : 
//                   </ListItemText>
//                   <ListItemText>
//                        Electrical and Information Engineering
//                   </ListItemText>
//               </ListItem>

//               <ListItem>
//                   <ListItemText>
//                     Lecturer : 
//                   </ListItemText>
//                   <ListItemText>
//                        DR M.R Udawalpola
//                   </ListItemText>
//               </ListItem>

//               </div>

//               <div className="header__right">
//               <ListItem>
//                   <ListItemText>
//                     Date : 
//                   </ListItemText>
//                   <ListItemText>
//                        11.06.2020
//                   </ListItemText>
//               </ListItem>

//               <ListItem>
//                   <ListItemText>
//                    Semester : 
//                   </ListItemText>
//                   <ListItemText>
//                        5
//                   </ListItemText>
//               </ListItem>
//               </div>
               
//           </List>
          
      
     
     
//     </div>
//     )
// }

// export default Header;
