import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import ResetPassword from "./components/Resetpassword";
import ForgotPassword from "./components/Forgotpassword"
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
        <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
