import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import socketClient from "socket.io-client";

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const socket = socketClient("http://127.0.0.1:4000");

    socket.on("UpdateRoutes", data => {
      debugger;
      this.props.fetchRoutes(data);
    });

    Axios.get("http://localhost:4000/api/routes")
      .then(res => {
        debugger;
        this.props.fetchRoutes(res.data);
      })
      .catch(err => {});
  }

  render() {
    var routeList = this.props.routelist.map(route => {
      return (
        <div
          style={{ backgroundColor: "white !important" }}
          key={route.id}
          className="card text-black  mb-3"
          style={{
            maxWidth: "50rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        >
          <div className="card-header">Bus Number : {route.numberPlate}</div>
          <div className="card-body">
            <h5 className="card-title">Route</h5>
            <p className="card-text">
              Quick sample text to create the card title and make up the body of
              the card's content.
            </p>
          </div>
          <div className="card-footer bg-transparent">
            Seats Remaining : {route.vehicledetails.availableSeats}
            <button
              onClick={e => BookRoute(route.id, this.props.userid)}
              className="btn btn-primary"
              style={{ float: "right" }}
            >
              Book
            </button>
          </div>
        </div>
      );
    });

    return <React.Fragment>{routeList}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    routelist: state.routelist,
    userid: state.userid
  };
};

function BookRoute(vehicleid, userid) {
  Axios.post("http://localhost:4000/api/routes/book", {
    userid: userid,
    vehicleid: vehicleid
  })
    .then(res => {})
    .catch(err => {});
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRoutes: routes => dispatch({ type: "FETCHROUTES", routes: routes })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
