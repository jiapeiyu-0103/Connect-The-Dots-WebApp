import { useState } from 'react';
import * as States from '../constants/States';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
function Main() {
const [state, setState] = useState(States.LOGIN_PAGE);
  switch(state) {
      case States.DASHBOARD:
          return (
              <Dashboard setState={setState}/>
          );
      default:
        return (
            <LoginForm setState={setState}/>
        );
  }
 
}

export default Main;
