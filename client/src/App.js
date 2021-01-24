
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from '../src/pages/Home'
import Inventory from '../src/pages/Inventory'
import User from '../src/pages/User'
import './App.css';

function App() {
  return (
    
      <Router>
      <div>

          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/Inventory" component={Inventory} />
            <Route exact path="/User" component={User} />

          </Switch>
          
      </div>
    </Router>
  ); 
} 

export default App;
