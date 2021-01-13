import HomePage from "./homePage";
import About from "./about";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./login";
import SignUp from './signUp';
import Booking from './booking';
import Contact from './contact';
import RoomStatus from "./roomStatus";
import FoodTable from "./foodTable";


function App() {
  document.body.style.margin='0'
  document.body.style.padding='0'

  return (
    <Router>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/About" exact component={About} />
      <Route path="/Login" exact component={Login} />
      <Route path="/SignUp" exact component={SignUp} />
      <Route path="/Booking" exact component={Booking} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/roomstatus" exact component={RoomStatus} />
      <Route path="/foods" exact component={FoodTable} />
      
      </Switch>
    </Router>
      
  

  );
}

export default App;

