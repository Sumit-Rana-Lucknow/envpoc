import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Logout from '../logout/Logout';
import './SideNav.css';
import logoWhite from "../assets/hcl_logo_white_1.png";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  
}));

const  SideNav = (props) => { 
  const showNameOfUser = JSON.parse(sessionStorage.getItem("Signeduser"));
    
    
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        
      >
        <Toolbar>
         
          <div className="row col-md-12">
            <div className="col-md-6 text-left"><img src={logoWhite} className="navLogo" alt="Logo"/>
            
            
          </div>
            <div className="col-md-5 text-right">
              
          <Typography variant="h4" noWrap className="headingText">
            <span className="icon-circle"><i className="fa fa-user iconSpace" style={{"color": "white"}} aria-hidden="true"></i></span> Hi, {showNameOfUser.name } 
            
          </Typography>
            </div>
            <div className="col-md-1">
            <Logout />
            </div>
          </div>
          
          
        </Toolbar>
      </AppBar>
      
      
      </div>
  );
}

export default SideNav;