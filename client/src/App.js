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
import axios from "axios";
import Payment from "./components/userComponents/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    margin:0;
    padding:0;
  }
  `
function App() {
   const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(()=>{
getStripeApiKey();
  },[])
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
          {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Route exact path="/process/payment" component={Payment} />
        </Elements>
      )}
        <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
