import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";
import { connect } from "react-redux";
import setAuthHeader from "./util/setAuthHeader";
import { loginFailure, loginSuccess } from "./redux/actions/authAction";

//style
import { useTransition, animated } from "react-spring";

// components
import Signin from "./components/Signin";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import fourOFour from "./components/FourOFour";
import Dashboard from "./components/Dashboard";
import DashboardA from "./components/DashboardA";
import DashboardM from "./components/DashboardM";
import User from "./components/User";
// import authCheck from "./util/authCheck";

const App = (props) => {
  const history = useHistory();
  const { location } = history;
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/user" component={User} />
        <Route path="/dashboardm" component={DashboardM} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboarda" component={DashboardA} />
        <Route path="*" component={fourOFour} />
      </Switch>
    </animated.div>
  ));
};
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth_reducer.isAuthenticated,
    profile: state.auth_reducer.userProfile,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    LOGIN_FAILURE: () => dispatch(loginFailure()),
    LOGIN_SUCCESS: (user) => dispatch(loginSuccess(user)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
