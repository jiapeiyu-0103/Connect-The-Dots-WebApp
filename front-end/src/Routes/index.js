import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// logins
import Diary from '../components/Diary';
import Message from '../components/Message';
import Dashboard from '../components/Dashboard'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Diary} />
        {/* <Route path="/employeelogin" component={EmployeeLogin} />
        <Route path="/adminlogin" component={AdminLogin} /> */}
        <Route path="/diary" component={Diary} />
        <Route path="/message" component={Message} />

        <Redirect to={"/"} />
      </Switch>
    );
  }
}

export default Routes;
