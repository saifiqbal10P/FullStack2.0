import React, { Component } from "react";
import { Route, Link, Router } from "react-router-dom";
import Login from "../components/Login";
import Routes from "../components/Routes";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    var authToken = localStorage.getItem("authToken");

    this.state = {
      isLoggedIn: authToken === null ? false : true
    };
  }

  // test = () => {
  //   const { isLoggedIn } = this.state;
  //   this.setState({ isLoggedIn: true });
  // };

  render() {
    return (
      <div>
        <header>
          <div className="row">
            <div className="col" style={{ color: "white", fontSize: "30px" }}>
              Chair Lift
            </div>
            <div className="col">
              <nav style={{ float: "right" }}>
                {this.state.isLoggedIn === true && (
                  <React.Fragment>
                    <Link to="/">Home</Link>

                    <Link to="/Bookings">Bookings</Link>

                    <Link to="/Routes">Routes</Link>
                  </React.Fragment>
                )}
                {this.state.isLoggedIn === false && (
                  <Link className="customlinks" to="/Login">
                    Login
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </header>
        <section>
          <Route path="/Login" component={Login} />

          <Route path="/Bookings" component={Login} />
          <Route path="/Routes" component={Routes} />
        </section>
      </div>
    );
  }
}
export default Main;
