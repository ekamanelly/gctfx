import React, { Component } from "react";
import App from "./src/App";
import { connect } from "react-redux";

class App1 extends Component {
  state = {
    isAuthenticated: pr,
  };
  componentDidMount() {
    if (this.state.isAuthenticated) {
      setAuthHeader(localStorage.accessToken);
      console.log("is auth");
      history.replace("/dashboard");
    } else {
      // axios.get("http://localhost:5000/logout").then((res) => alert(res.data));

      props.LOGIN_FAILURE();
      props.REMOVE_PROFILE();
      setAuthHeader();
      console.log("login-failure");
      history.replace("/");
    }
  }
  render() {
    return (
      <>
        <App />
      </>
    );
  }
}

export default App1;
