import React from "react";
import { useHistory } from "react-router-dom";
import {
  loginFailure,
  loginSuccess,
  // addToken,
} from "../redux/actions/authAction";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpenText,
  faShareSquare,
  faPaperPlane,
  faUserTie,
  faUserAlt,
  faUser,
  faWallet,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

//
import Loader from "./Preloader";
import { useSpring, animated } from "react-spring";
import axios from "axios";

const Signup = (props) => {
  const history = useHistory();
  const [preloader, setPreloader] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [err, setErr] = useState(false);
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  //   const ul = history.location.pathname;

  const showPreloader = useSpring({
    opacity: preloader ? 1 : 0,
    visibility: preloader ? "visible" : "hidden",
  });
  const hideButton = useSpring({
    opacity: !preloader ? 1 : 0,
    visibility: !preloader ? "visible" : "hidden",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "" || user.password === "" || user.email === "") {
      setErr(true);
      setErrmsg("please fill aleady");
    } else if (user.password.length < 8) {
      setErr(true);
      setErrmsg("password too short");
    } else {
      axios.post("http://localhost:5000/signup", user).then(({ data }) => {
        // console.log(data);
        if (data.msg.length > 0) {
          setErrmsg(data.msg);
          // setTimeout(function () {
          //     history.replace("/");
          // }, 5000);
          //show msg
        }
      });

      setErr(false);
      setPreloader(true);
      setTimeout(function() {
        setUser((state) => ({
          ...state,
          email: "",
          password: "",
        }));
      }, 3000);
    }
  };
  //   const calltry = () => {
  //     console.log(ul);
  //   };

  //   useEffect(() => {
  //     // alert('working')
  //     window.addEventListener("load", () => {
  //       if (ul.length > 70) {
  //         setErrmsg(`http://localhost:5000${ul}`);
  //         // console.log(`http://localhost:5000${ul}`)
  //         axios.get(`http://localhost:5000${ul}`).then(({ data }) => {
  //           // alert(data)
  //           //   console.log(data);
  //           setErrmsg(data.msg);
  //           //
  //         });
  //       } else {
  //         console.log("buttom");
  //       }
  //     });
  //   }, []);
  return (
    <>
      <div className="step-page">
        <div className="container">
          <p style={{ color: "blue", textAlign: "center" }}>{errmsg}</p>
          <h3 style={{ color: "blue", textAlign: "center" }}>Sigin</h3>
          <div className="row">
            <div className="col l4  m8 offset-m2 offset-l4 steps-card card">
              <div className="center">
                <FontAwesomeIcon
                  icon={faUserCog}
                  style={{
                    fontSize: "2rem",
                    textAlign: "center",
                    color: "#eee",
                    marginBottom: "1rem",
                  }}
                />
              </div>
              <div className="row">
                <div className="col l10 s8 m6 offset-l1 offset-m3 offset-s2">
                  <span onClick={() => setPreloader(!preloader)}> show</span>
                  <form action="" className="row">
                    <input
                      placeholder="Jake"
                      className="browser-default"
                      value={user.username}
                      onChange={(event) => {
                        setUser({ ...user, username: event.target.value });
                        setErr(false);
                      }}
                      type="text"
                    />
                    <input
                      placeholder="you@Email.com"
                      className="browser-default"
                      value={user.email}
                      onChange={(event) => {
                        setUser({ ...user, email: event.target.value });
                        setErr(false);
                      }}
                      type="email"
                    />
                    <input
                      placeholder="*******"
                      className="browser-default"
                      value={user.password}
                      onChange={(event) => {
                        setUser({ ...user, password: event.target.value });
                        setErr(false);
                      }}
                      name="username"
                      type="password"
                    />
                    <div className="center">
                      {/* <div className="sign-notice"> */}
                      {err ? (
                        <div style={{ height: "4rem" }}>
                          <h6 className="errmsg" style={{ margin: "0" }}>
                            {errmsg}
                            <span onClick={() => setErr(false)}>x</span>
                          </h6>
                        </div>
                      ) : (
                        <div style={{ height: "4rem" }}>
                          <animated.div style={showPreloader}>
                            <Loader />
                          </animated.div>
                        </div>
                      )}
                      <animated.button
                        style={hideButton}
                        className="point"
                        // className="center"
                        onClick={handleSubmit}
                      >
                        signin
                      </animated.button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth_reducer.isAuthenticated,
    profile: state.auth_reducer.userProfile,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // LOGIN_FAILURE: () => dispatch(loginFailure()),
    LOGIN_SUCCESS: (user) => dispatch(loginSuccess(user)),
    // ADD_TOKEN: (cTk) => dispatch(addToken(cTk)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);

// export default connect (ma;
