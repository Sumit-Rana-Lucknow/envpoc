import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import TstEnvList from './TstEnvList';
import Logout from '../logout/Logout';
import ListItemText from '@material-ui/core/ListItemText';
import './SideNav.css';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));
 const  SideNav = (props) => {
    const showNameOfUser = JSON.parse(sessionStorage.getItem("Signeduser"));
    const classes = useStyles();
    const handleChange = (text, index) =>{
      
      console.log("shek", index+1);
      console.log("hima", text);
    }
    
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" noWrap>
            Hi, <i className="fa fa-user" style={{"color": "red"}} aria-hidden="true"></i> {showNameOfUser.name.toUpperCase()} 
            
          </Typography>
          <Logout />
        </Toolbar>
        
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List className="ListOfEnvList">
        {TstEnvList.map((text, index) => (
            <ListItem  button key={index}>
            <Divider />
              <ListItemText primary={text.env } />
              <Typography className = "showListBetterView" variant="h1" noWrap>
              <FormControlLabel control={<Switch disabled={!text.status}  onChange={() => handleChange(text.env ,index)}/>}label={text.status ? '200' : '400'} active={text.status.toString()}/>
              </Typography>
              
            
            </ListItem>
            
          ))}
        </List>
      </Drawer>
      
    </div>
  );
}
export default SideNav;