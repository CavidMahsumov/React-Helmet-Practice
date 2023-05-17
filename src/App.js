import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <Router>
    <div>
 
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
       
      </Switch>
    </div>
  </Router>

  );
}

export default App;
