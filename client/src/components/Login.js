import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  Login = () => {
    debugger;
    Axios.post("http://localhost:4000/api/login", {
      email: this.props.auth.email,
      password: this.props.auth.password
    })
      .then(res => {
        window.localStorage.setItem("authToken", res.data);
        this.props.onLoggedIn(res.data.userid);
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
                      onChange={event => this.props.onChange(event)}
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
                      onChange={event => this.props.onChange(event)}
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch({ type: "LOGIN", event: e }),
    onLoggedIn: userid => dispatch({ type: "LOGGEDIN", userid: userid })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
