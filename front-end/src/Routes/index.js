import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// logins
import Login from "../components/Account/LoginForm";
import Register from "../components/Account/RegisterForm";
import Diary from "../components/Diary/DiaryMainView";
import Message from "../components/Message/MessageMainView";
import Data from "../components/Data/PieChart";
import Account from "../components/Account/Account";


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/diary" component={Diary} />
        <Route path="/message" component={Message} />
        <Route path="/data" component={Data} />
        <Route path="/account" component={Account} />


        <Redirect to={"/"} />
      </Switch>
    );
  }
}

export default Routes;
