import React, { Component } from 'react'

export default class login extends Component {
  render() {
    return (
        <div class="login-section">
        <div class="login-form">
          <div class="login-header">
            <h2>Sign in to account</h2>
            <p>Enter email and password to login</p>
          </div>
          <div class="form">
            <div class="input-field">
              <label for="email">Email Address</label>
              <input type="email"/>
            </div>
             <div class="input-field">
              <label for="email">Password</label>
              <input type="password"/>
            </div>
            <div class="input">
              <input type="checkbox" name="" id="remember"/><label for="remember">Remember Password</label>
            </div>
            <button class="button p-btn">Login</button>
            <div class="form-action">
              <span>Or Sign in with</span>
              <div class="option-container">
                <div class="option-box">
                  <button>Google</button>
                </div>
                <div class="option-box">
                  <button>Twitter</button>
                </div>
                <div class="option-box">
                  <button>Facebook</button>
                </div>
              </div>
              <div class="form-text">
                <p>Don't have account? <a href="#">Create Account</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
