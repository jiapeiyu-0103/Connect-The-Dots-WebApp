import { useState } from 'react';
import * as States from '../constants/States';
import LoginForm from './Account/LoginForm';
import Dashboard from './Dashboard';
function Main() {
const [state, setState] = useState(States.LOGIN_PAGE);
const [curUser, setCurUser] = useState({})
  switch(state) {
      case States.DASHBOARD:
          return (
              <Dashboard setState={setState} curUser={curUser}/>
          );
      default:
        return (
            <LoginForm setState={setState} user={setCurUser}/>
        );
  }
 
}

export default Main;
