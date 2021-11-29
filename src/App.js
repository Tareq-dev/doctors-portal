import React from "react";
import './App.css';
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from './components/Home/Home/Home';
import Login from "./components/Login/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
        <Home />
   </Route>
    <Route path="/appointment">
        <Appointment />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  
  </Switch>
</Router>
  );
}

export default App;
