import React, {Component} from 'react';
import './Step2.css'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import LinearProgress from '@material-ui/core/LinearProgress';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },button: {
    margin: theme.spacing(1),
  }
}));


const Step2 = (props) => { 
  let textInput = React.createRef();
  function handleClick() {
    document.getElementById("file").click();
  };
  function handleChange(){
    console.log("file has been selected");
  }
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div><div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography className={classes.heading}>Stop weblogic servers</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Button variant="contained" color="secondary" className={classes.button} onClick = {() => console.log("Hello")} style = {{position: 'relative', right: '0', margin : '-2px 20px'}}>
                Stop Build
            </Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Disable CI Builds</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Button variant="contained" color="secondary" className={classes.button} onClick = {() => console.log("Hello")} style = {{position: 'relative', right: '0', margin : '-2px 20px'}}>
               Disable Builds
            </Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Start Environment Privisioning</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Button variant="contained" color="default" className={classes.button} onClick={handleClick}>
                Upload
              <CloudUploadIcon className={classes.rightIcon} />
            </Button><br></br>
            <input type="file" id="file" ref="fileUploader" style={{display: "none"}} ref={textInput} onChange={handleChange}/><br></br>
            <LinearProgress color="secondary" variant="determinate" value={completed} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Start Weblogic servers</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Button variant="contained" color="secondary" className={classes.button} onClick = {() => console.log("Hello")} style = {{position: 'relative', right: '0', margin : '-2px 20px'}}>
               Start Server
            </Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Enable CI Builds</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Button variant="contained" color="secondary" className={classes.button} onClick = {() => console.log("Hello")} style = {{position: 'relative', right: '0', margin : '-2px 20px'}}>
               Start Builds
            </Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div></div>
  );
}

export default Step2;