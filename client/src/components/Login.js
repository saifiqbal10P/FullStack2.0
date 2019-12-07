import React, { Component } from "react";
import Axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  Login = () => {
    debugger;
    Axios.post("http://localhost:4000/api/login", {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        window.localStorage.setItem("authToken", res.data);
        this.props.history.push("/Routes");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="login">
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form">
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label className="text-info">Username:</label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      onChange={this.onChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="text-info">Password:</label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                    </label>
                    <br />
                    <input
                      defaultValue="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      onClick={this.Login}
                      type="button"
                    ></input>
                  </div>
                  <div id="register-link" className="text-right"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
