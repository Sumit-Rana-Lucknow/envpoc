import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './DashboardContent.css';
import Step1 from './StepsRequired/Step1';
import Step2 from './StepsRequired/Step2';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Pre staging process', 'Provisioning', 'Post provisioning process'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return(<div className="showDataStep1"><Step1 /></div>) ;
    case 1:
      return(<div className="showDataStep1"><Step2 /></div>);
       
    case 2:
      return(<div className="showDataStep1"><p>Step 5: This is the bit I really care about!?</p>
      <p>Step 6: This is the last step required</p> </div>)
       
    default:
      return 'Unknown step';
  }
}

const DashboardContent = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  function totalSteps() {
    return steps.length;
  }

  function completedSteps() {
    return Object.keys(completed).length;
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps();
  }

  function handleNext() {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  function handleComplete() {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  }

  function handleReset() {
    setActiveStep(0);
    setCompleted({});
  }

  return (
    <div className={classes.root}>
      
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="showContentButton">
              <Button disabled={activeStep === 0} variant="contained" color="secondary" onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardContent;