import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./components/userComponents/Home";
import Sell from "./components/userComponents/Sell";
import Placeorder from "./components/userComponents/Placeorder";
import Orders from "./components/userComponents/Orders";
import Boughtstatus from "./components/userComponents/Boughtstatus";
import Soldstatus from "./components/userComponents/Soldstatus";
import Register from "./components/authComponents/Register";
import Login from "./components/authComponents/Login";
import ResetPassword from "./components/authComponents/Resetpassword";
import ForgotPassword from "./components/authComponents/Forgotpassword"

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    margin:0;
    padding:0;
  }
  `
function App() {
  return (
    <>
      <Router>
          <Switch>
           <Route path="/login">
            <Login/>
          </Route>
           <Route path="/register">
            <Register/>
          </Route>
          <Route path="/passwordreset/:resetToken">
            <ResetPassword/>
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword/>
          </Route>
          <Route path="/sell">
            <Sell/>
          </Route>
          <Route path="/placeorder">
            <Placeorder/>
          </Route>
          <Route path="/boughtstatus">
            <Boughtstatus/>
          </Route>
          <Route path="/soldstatus">
            <Soldstatus/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
        <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
