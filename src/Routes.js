import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from './login/Login';
import Signup from "./registration/Signup";
import Dashboard from "./dashboard/Dashborad";
export default () => 

  
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route component={NotFound} />

        </Switch>
      
  
