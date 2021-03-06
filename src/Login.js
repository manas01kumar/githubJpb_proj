import React,{useEffect} from 'react'
import "./Login.css"
import {Link, useHistory,Redirect} from "react-router-dom"




function Login() {
    const history = useHistory();
    const formFunc=(e)=>{
        e.preventDefault();
        history.push('/jobs');
        
    
    }
    

    return (
        <form onSubmit={formFunc} className="m-5">
                <h3>Login</h3>
                
                <div className="form-group">
                    <label>Email address*</label>
                    <input type="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password*</label>
                    <input type="password" className="form-control" placeholder="Enter password" required/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
    )
}

export default Login
