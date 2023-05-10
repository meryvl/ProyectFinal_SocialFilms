import React from "react";
import { Link } from "react-router-dom";
const Login =()=>{
return(<>
<Link to="/">
				<button className="btn btn-primary justify-content-end">Back home</button>
</Link>
<div className="bodyPage">
<div className="inFormBackground">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="inLoginForm">
      <form className="form "onsubmit="return false">
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
        <Link to="/createcuenta" className="create">Create cuenta</Link>
      
      </form>
    </div>
  </div>
  </div>
</>)

}
export default Login;