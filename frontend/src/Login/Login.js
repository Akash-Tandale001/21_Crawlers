import React from 'react'
import '../Login/Login.css'
const Login = () => {
  return (
    <div className='loginForm'>
            <div class="container" id="container">
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h5>Only For Admins and Approved StartUps!</h5>
                        <h1>Sign in</h1>
                        <span>Use your email</span>
                        <input type="email" placeholder="Email"  name="email" />
                        <input type="password" placeholder="Password"  name="pass" />
                        <br />
                        <button className="btn">Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <h1>Hey there, startup!</h1>
                            <p>Enter your details and start your journey with UPSTART</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login