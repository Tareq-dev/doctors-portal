import React from "react";
import './App.css';
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from './components/Home/Home/Home';
import Login from "./components/Login/Login/Login";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  return (
    
<div>
<Home></Home>
<Appointment></Appointment>
<Login></Login>
</div>
  );
        // <Router>
   
        //         <Routes>
        //       <Route exact path="/home">
        //        <Home />
        //       </Route>
        //       <Route path="/appointment">
        //       <Appointment></Appointment>
        //       </Route>
        //       </Routes>
        
        // </Router>
      
    
    


}

export default App;
