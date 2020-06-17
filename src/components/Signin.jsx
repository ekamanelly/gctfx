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

const Signin = (props) => {
  const history = useHistory();
  const [preloader, setPreloader] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [err, setErr] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const ul = history.location.pathname;

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
    if (user.username === "" || user.password === "") {
      setErr(true);
      setErrmsg("please fill aleady");
    } else if (user.password.length < 8) {
      setErr(true);
      setErrmsg("password too short");
    } else {
      axios.post("http://localhost:5000/login", user).then(({ data }) => {
        // // console.log(data);
        // if (data.msg.length > 0) {
        //   setErrmsg(data.msg);
        //show msg
        // } else {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("u1", JSON.stringify(data.u1));
        localStorage.setItem("users", JSON.stringify(data.theRest));
        if (data.u1.mighty) {
          // console.log(`from if &{data.u1}`);
          // console.log(typeof data.u1.mighty);
          // alert(`mighty ${typeof data.u1.mighty}`);
          setTimeout(function() {
            history.replace("/dashboardm");
          }, 4000);
          //openstreet()
        } else if (data.u1.allmighty) {
          // console.log(`from else if &{data.u1}`);
          // console.log();
          // alert(`allmighty ${data.u1.allmighty}`);
          setTimeout(function() {
            history.replace("/dashboarda");
          }, 4000);
          // openalter()
        } else {
          // console.log(`from else &{data.u1}`);
          // alert(`reguler ${typeof data.u1.allmighty}`);
          setTimeout(function() {
            history.replace("/dashboard");
          }, 4000);
        }
        // props.LOGIN_SUCCESS(data.user);
        // props.ADD_TOKEN(data.accessToken);
        // props.ADD_PROFILE(data.accessToken);

        // }
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
  const calltry = () => {
    console.log(ul);
  };

  useEffect(() => {
    // alert('working')
    window.addEventListener("load", () => {
      if (ul.length > 70) {
        setErrmsg(`http://localhost:5000${ul}`);
        // console.log(`http://localhost:5000${ul}`)
        axios.get(`http://localhost:5000${ul}`).then(({ data }) => {
          // alert(data)
          //   console.log(data);
          setErrmsg(data.msg);
          //
        });
      } else {
        console.log("buttom");
      }
    });
  }, [ul]);
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
                      placeholder="you@mail.com"
                      className="browser-default"
                      value={user.username}
                      onChange={(event) => {
                        setUser({ ...user, username: event.target.value });
                        setErr(false);
                      }}
                      type="text"
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
export default connect(mapStateToProps, mapDispatchToProps)(Signin);

// export default connect (ma;
