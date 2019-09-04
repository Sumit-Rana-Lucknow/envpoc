import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import history from "../history";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

const Logout = () => {
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);
    
    function handleClose() {
        setOpen(false);
      }
      function handleOpen() {
        setOpen(true);
      }
    const confirmLogoutModal = () =>{
        
        console.log("Himanshu---->>");
        setOpen(false);
        sessionStorage.removeItem('accessTookCorrectPath');
        sessionStorage.removeItem('Signeduser');
        history.push("/");
            setTimeout(function() {
                window.location.reload()
            },3000); 
    }
    return(
        <React.Fragment>
            <Button variant="contained" color="secondary" className={classes.button} onClick = {() => handleOpen()} style = {{margin : '0px'}}>
                Logout
            </Button>
            <div>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Logout Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to logout from the system
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={confirmLogoutModal} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
                </div>
        </React.Fragment>
    )

}

export default Logout;