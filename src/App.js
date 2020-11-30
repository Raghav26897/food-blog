import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Profile from "./components/Profile";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Products" exact component={Products} />
        <Route path="/Profile" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
