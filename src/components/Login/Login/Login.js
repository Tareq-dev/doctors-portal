import React from 'react';
import './Login.css';
import LoginBg from'../../../images/login.png';

const Login = () => {
     return (
          <section className="row py-5">
          <div className="col-md-6 py-5">
           <h3 className="text-brand ml-5">Login</h3> 
           <form className="login-form mt-5 ml-5 p-3">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>   
          </div>
          <div className="col-md-6">
           <img style={{height:"600px",width:"500px"}} src={LoginBg} alt="" />   
          </div>
          </section>
     );
};

export default Login;