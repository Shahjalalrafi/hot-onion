import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Component/Home/Home';
import CheckOut from './Component/CheckOut/CheckOut';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path= "/">
            <Home />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path= '/check-out/:id'>
            <CheckOut />
          </Route>      

          <Route path='*'>
            notfound
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
