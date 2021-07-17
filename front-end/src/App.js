import './App.css';
import Main from './components/Main';

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
function App() {
  return (
    <div className="App">
        {/* <BrowserRouter>
          <Routes />
        </BrowserRouter> */}
        <Main/>
    </div>
  );
}

export default App;
