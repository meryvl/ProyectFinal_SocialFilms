import React from "react";

const Login =()=>{
return(<>
<div className="bodyPage">
<div className="inFormBackground">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="inLoginForm">
      <form onsubmit="return false">
        <div className="title">
          <h3>Login Here</h3>
        </div>
        <div className="inputGroup">
          <label for="email">Email</label>
          <input type="email" placeholder="Enter Email" id="email"/>
        </div>
        <div className="inputGroup">
          <label for="password">Password</label>
          <input type="email" placeholder="Enter Password" id="password"/>
        </div>
        <button className="submitForm">Log In</button>
        <div className="social">
          <div className="go"><i class="fab fa-google"></i></div>
          <div className="fb"><i class="fab fa-facebook"></i></div>
          <div className="tw"><i class="fab fa-twitter"></i></div>
        </div>
      </form>
    </div>
  </div>
  </div>
</>)

}
export default Login;