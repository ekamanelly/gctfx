import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import M from "materialize-css";
import { connect } from "react-redux";

import {
  loginFailure,
  loginSuccess,
  // removeToken,
} from "../redux/actions/authAction";
import axios from "axios";

const Navbar = (props) => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    });
  }, []);
  const [showMsg, setShowMsg] = useState(false);

  if (!showMsg) {
    setTimeout(() => {
      setShowMsg(false);
    }, 3000);
  }

  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/logout")
      .then((res) => console.log(res.data));
    props.LOGIN_FAILURE();
    // props.REMOVE_TTOKEN();
    // props.REMOVE_PROFILE();
    // setTimeout(() => {
    //   // history.replace("/auth");
    // }, 3000);
  };
  console.log(props);

  return (
    // console.log(props)
    <>
      <nav className=" navbar-fixed nav--section" style={{ boxShadow: "none" }}>
        <nav
          className="nav-extended nav--section"
          style={{
            boxShadow: "none",
            zIndex: "222",
          }}
        >
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                GCTfx
              </Link>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {!props.profile ? (
                  <>
                    <li>
                      <Link to="/simplethreestep">Get Started</Link>
                    </li>
                    <li>
                      <Link to="/signin">Signin</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/dashboard">Dashbourd</Link>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div
          className=""
          style={{
            // height: "12rem",
            position: "fixed",
            top: 0,
            right: 0,
          }}
        >
          <img
            src="/img/hero-bg.png"
            alt=""
            className="nav-img hide-on-large-only"
            style={{ height: "10rem" }}
          />
          <img
            src="/img/page-info-bg.png"
            alt=""
            className="nav-img hide-on-med-and-down"
            style={{ height: "15rem" }}
          />
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/threestep">Get Started </Link>
          /threestep
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/simplethreestep">Dashbourd </Link>
        </li>
      </ul>
    </>
  );
};
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth_reducer.isAuthenticated,
    profile: state.auth_reducer.userProfile,
    msg: state.auth_reducer.msg,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    LOGIN_FAILURE: () => dispatch(loginFailure()),
    // REMOVE_TTOKEN: () => dispatch(removeToken()),
    // LOGIN_SUCCESS: (user) => dispatch(loginSuccess(user)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
