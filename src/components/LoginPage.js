import React, { Component } from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import logo from "../images/app_logo.png";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div class="main">
        <img id="logo" src={logo} alt="App Logo" />

        <p class="sign" align="center">
          Sign in
        </p>
        <form class="form1">
          <input
            class="un "
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          <a class="submit" align="center">
            Sign in
          </a>
          <p class="forgot" align="center">
            <a href="#">Register</a>
          </p>
          <p class="forgot" align="center">
            <a href="#">Forgot Password?</a>
          </p>
        </form>
      </div>

      // <div className="loginContainer">

      //   <img id="logo" src={logo} alt="App Logo" />

      //   <h2>Login</h2>
      //   <Form className="form">
      //     <FormGroup>
      //       <Label for="emailInput">Username</Label>
      //       <Input
      //         type="email"
      //         name="email"
      //         id="emailInput"
      //         placeholder="example@example.com"
      //       />
      //     </FormGroup>
      //     <FormGroup>
      //       <Label for="passwordInput">Password</Label>
      //       <Input
      //         type="password"
      //         name="password"
      //         id="passwordInput"
      //         placeholder="Password"
      //       />
      //     </FormGroup>
      //     <Button className="loginBtn">Login</Button>
      //   </Form>

      //   <Button>Register</Button>

      // </div>
    );
  }
}

export default LoginPage;
