// import React from 'react';
import React, { Component } from "react";
import { useSpring, animated, useTrail } from "react-spring";
import M from "materialize-css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginFailure, loginSuccess } from "../redux/actions/authAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPercent,
  faEnvelopeOpenText,
  faShareSquare,
  faUserTie,
  faUserAlt,
  faUser,
  faWallet,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class User extends Component {
  state = {
    allUser: [],
    profile: {},
    notice: false,
    request: false,
    address: false,
    pay: false,
    stamp: false,
  };

  componentDidMount() {
    this.setState({
      allUser: JSON.parse(localStorage.users),
      profile: JSON.parse(localStorage.u1),
    });
  }

  render() {
    return (
      <>
        <div className="dashboard">
          <div className="row">
            <div className="col l4 m5 s12">
              {/* <h3 stlye={{ height: "100%" }}> mavis</h3> */}
              <div className="user" stlye={{ padding: "1rem" }}>
                <div
                  className="card center"
                  // style={{ backgroundColor: "#5B3833" }}
                >
                  <div style={{ padding: " 3rem 0" }}>
                    <FontAwesomeIcon
                      icon={faUserCog}
                      style={{ fontSize: "4rem", color: "gray" }}
                    />
                  </div>
                  {/* <h5>{profile.username}</h5> */}
                  <ul style={{ padding: "0 1.5rem" }}>
                    <li
                      onClick={() =>
                        this.setState((state) => ({
                          ...state,
                          notice: !this.state.notice,
                        }))
                      }
                    >
                      <h6 style={{ textAlign: "left" }}>
                        <span>
                          {" "}
                          <FontAwesomeIcon
                            icon={faUserCog}
                            style={{
                              fontSize: "1.2rem",
                              marginRight: ".3rem",
                              color: "gray",
                              transform: "translate(0, -3px)",
                            }}
                          />
                        </span>
                        Notification
                        {this.state.notice ? (
                          <p style={{ textAlign: "left" }}>pending..</p>
                        ) : null}
                      </h6>
                    </li>
                    {/* 
                    <li
                      onClick={() => setRequest(!request)}
                      style={{
                        display: "flex",
                        justifyContent: "spaceBetween",
                      }}
                    >
                      <h6 style={{ textAlign: "left" }}>
                        {" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon
                            icon={faShareSquare}
                            style={{
                              fontSize: "1.2rem",
                              marginRight: ".3rem",
                              color: "gray",
                              transform: "translate(0, -3px)",
                            }}
                          />
                        </span>
                        Requet withdrawal
                      </h6>
                      <div className="tags">
                        {request ? (
                          <h6
                            style={{ textAlign: "right", marginLeft: "1rem" }}
                          >
                            pending..
                          </h6>
                        ) : null}
                      </div>
                    </li>
                    <li
                      onClick={() => setStamp(!stamp)}
                      style={{
                        display: "flex",
                        justifyContent: "spaceBetween",
                      }}
                    >
                      <h6 style={{ textAlign: "left" }}>
                        <span>
                          {" "}
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{
                              fontSize: "1.2rem",
                              marginRight: ".3rem",
                              color: "gray",
                              transform: "translate(0, -3px)",
                            }}
                          />
                        </span>
                        Verified {profile.verify}
                      </h6>
                      {stamp ? (
                        <h6 style={{ textAlign: "right", marginLeft: "1rem" }}>
                          pending..
                        </h6>
                      ) : null}
                    </li>
                    <li
                      onClick={() => setAddress(!address)}
                      style={{
                        display: "flex",
                        justifyContent: "spaceBetween",
                      }}
                    >
                      <h6 style={{ textAlign: "left" }}>
                        {" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon
                            icon={faWallet}
                            style={{
                              fontSize: "1.2rem",
                              marginRight: ".3rem",
                              color: "gray",
                              transform: "translate(0, -3px)",
                            }}
                          />
                        </span>
                        External wallet
                      </h6>
                      <div className="tags">
                        {address ? (
                          <h6
                            style={{ textAlign: "right", marginLeft: "1rem" }}
                          >
                            pending..
                          </h6>
                        ) : null}
                      </div>
                    </li>
                    <li
                      onClick={() => setPay(!pay)}
                      style={{
                        display: "flex",
                        justifyContent: "spaceBetween",
                      }}
                    >
                      <h6 style={{ textAlign: "left" }}>
                        {" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon
                            icon={faPercent}
                            style={{
                              fontSize: "1.2rem",
                              marginRight: ".3rem",
                              color: "gray",
                              transform: "translate(0, -3px)",
                            }}
                          />
                        </span>
                        Rate
                        {profile.rate}
                      </h6>
                      <div className="tags">
                        {pay ? (
                          <h6
                            style={{ textAlign: "right", marginLeft: "1rem" }}
                          >
                            pending..
                          </h6>
                        ) : null}
                      </div>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "spaceBetween",
                      }}
                    >
                      <h6 style={{ textAlign: "left" }}>
                        <span>
                          {" "}
                          <FontAwesomeIcon
                            icon={faUserCog}
                            style={{
                              fontSize: "1.2rem",
                              marginRight: ".3rem",
                              color: "gray",
                              transform: "translate(0, -3px)",
                            }}
                          />
                        </span>
                        Change password
                      </h6>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col l8 m7 s12">
              <div className="fund-wallet">
                <div className="row">
                  <div className="col  m6 s6">
                    <div className="center">
                      <FontAwesomeIcon
                        icon={faWallet}
                        style={{ fontSize: "4.5rem", color: "#3d4154" }}
                      />
                      <h6 style={{ marginBottom: "0", color: "#5B3833" }}>
                        {" "}
                        Fund wallet!
                      </h6>
                    </div>
                  </div>

                  <div className="col  m6 s6 ">
                    <div className="center">
                      <FontAwesomeIcon
                        icon={faShareSquare}
                        style={{ fontSize: "4.5rem", color: "#3d4154" }}
                      />
                      <h6 style={{ marginBottom: "0", color: "#5B3833" }}>
                        withdraw cash!
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="otheruser "
                style={{ border: "2px solid", padding: ".9rem" }}
              >
                <ul className="card" style={{ padding: "0 .9rem" }}>
                  <li className="row" style={{ backgroundColor: "#2d2623" }}>
                    <span className="col l3 m4 s4 ">
                      <h5>User</h5>
                    </span>
                    <span className="col l3 hide-on-med-and-down">
                      <h5>Payout</h5>
                    </span>
                    <span className="col l3 m4 s4">
                      <h5>Invesment</h5>
                    </span>
                    <span className="col l3 m4 s4">
                      <h5>Weekly withdrawal</h5>
                    </span>
                  </li>

                  <div className="table-body">
                    {/* {this.state.alluser.map((cur) => (
                      <li
                        // onClick={() => handleUser(cur.id)}
                        key={cur.id}
                        className="row"
                      >
                        <span className="col l3 m4 s4">
                          <FontAwesomeIcon
                            icon={faUserTie}
                            style={{ fontSize: "1.5rem", color: "gray" }}
                          />
                          {cur.username}
                        </span>
                        <span className="col l3 hide-on-med-and-down">
                         
                        </span>
                        <span className="col l3 m4 s4">{cur.invest}</span>
                        <span className="col l3 m4 s4">{cur.rate}</span>
                      </li>
                    ))} */}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default User;
