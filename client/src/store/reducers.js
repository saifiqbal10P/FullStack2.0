const initialState = {
  auth: {
    email: "",
    password: ""
  },
  routelist: []
};

const reducer = (state = initialState, action) => {
  debugger;
  if (action.type === "LOGIN") {
    if (action.event.target.name === "email") {
      var auth = state.auth;
      auth.email = action.event.target.value;
      return {
        auth: auth
      };
    }
    if (action.event.target.name === "password") {
      var auth = state.auth;

      auth.password = action.event.target.value;
      state.auth = auth;

      return {
        auth: auth
      };
    }
  }

  if (action.type === "FETCHROUTES") {
    var routes = state.routelist;
    routes = action.routes;
    return {
      routelist: routes
    };
  }
  return state;
};

export default reducer;
