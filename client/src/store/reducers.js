const initialState = {
  auth: {
    email: "",
    password: ""
  },
  routelist: [],
  userid: ""
};

const reducer = (state = initialState, action) => {
  debugger;
  if (action.type === "LOGIN") {
    debugger;
    if (action.event.target.name === "email") {
      var auth = Object.assign({}, state.auth);
      auth.email = action.event.target.value;
      return {
        ...state,
        auth: auth
      };
    }
    if (action.event.target.name === "password") {
      var auth = Object.assign({}, state.auth);
      auth.password = action.event.target.value;
      return {
        ...state,
        auth: auth
      };
    }
  }

  if (action.type === "FETCHROUTES") {
    var routes = Object.assign({}, state.routelist);
    routes = action.routes;
    return {
      ...state,
      routelist: routes
    };
  }

  if (action.type === "LOGGEDIN") {
    debugger;
    //var userid = state.userid;
    var userObj = Object.assign({}, state.userid);
    userObj = action.userid;
    return {
      ...state,
      userid: userObj
    };
  }
  return state;
};

export default reducer;
