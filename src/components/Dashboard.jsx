// import React from "react";
// import { useSpring, animated, useTrail } from "react-spring";
// import M from "materialize-css";
// import { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { loginFailure, loginSuccess } from "../redux/actions/authAction";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCheckCircle,
//   faPercent,
//   faEnvelopeOpenText,
//   faShareSquare,
//   faUserTie,
//   faUserAlt,
//   faUser,
//   faWallet,
//   faUserCog,
// } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// // import { animated } from "react-spring/renderprops-universal";

// const Dashboard = (props) => {
//   let user = {};
//   const [alluser, setAlluser] = useState([]);
//   const [profile, setProfile] = useState({});
//   const [showForm, setShowform] = useState(false);
//   const [notice, setNotice] = useState(false);
//   const [request, setRequest] = useState(false);
//   const [address, setAddress] = useState(false);
//   const [pay, setPay] = useState(false);
//   const [stamp, setStamp] = useState(false);
//   const [formfield, setformfield] = useState({
//     username: "",
//     member: "",
//     invest: "",
//     withdraw: "",
//   });
//   const showNotice = useSpring({
//     opacity: notice ? 1 : 0,
//     visibility: notice ? "visible" : "hidden",
//     height: notice ? "" : 0,
//   });
//   const handleUser = (id) => {
//     // alert("working");
//     user = alluser.map((cur) => {
//       if (id === cur.id) return cur;
//     });

//     setShowform(true);
//     console.log(user);
//   };

//   const handlesubmit = (e) => {
//     e.preventDefault();

//     console.log(formfield);
//     axios
//       .post(`http://localhost:5000/update/${user.id}`, formfield)
//       .then((res) => console.log("working"));

//     setTimeout(function() {
//       setformfield((state) => ({
//         ...state,
//         username: "",
//         member: "",
//         invest: "",
//         withdraw: "",
//       }));
//     }, 3000);
//   };
//   useEffect(() => {
//     setAlluser(JSON.parse(localStorage.users));
//     setProfile(JSON.parse(localStorage.u1));
//   }, [alluser]);

//   return (
//     <>
//       <div className="dashboard">
//         <div className="row">
//           <div className="col l4 m5 s12">
//             {/* <h3 stlye={{ height: "100%" }}> mavis</h3> */}
//             <div className="user" stlye={{ padding: "1rem" }}>
//               <div
//                 className="card center"
//                 // style={{ backgroundColor: "#5B3833" }}
//               >
//                 <div style={{ padding: " 3rem 0" }}>
//                   <FontAwesomeIcon
//                     icon={faUserCog}
//                     style={{ fontSize: "4rem", color: "gray" }}
//                   />
//                 </div>
//                 <h5>{profile.username}</h5>
//                 <ul style={{ padding: "0 1.5rem" }}>
//                   <li onClick={() => setNotice(!notice)}>
//                     <h6 style={{ textAlign: "left" }}>
//                       <span>
//                         {" "}
//                         <FontAwesomeIcon
//                           icon={faUserCog}
//                           style={{
//                             fontSize: "1.2rem",
//                             marginRight: ".3rem",
//                             color: "gray",
//                             transform: "translate(0, -3px)",
//                           }}
//                         />
//                       </span>
//                       Notification
//                       {notice ? (
//                         <p style={{ textAlign: "left" }}>pending..</p>
//                       ) : null}
//                     </h6>
//                   </li>

//                   <li
//                     onClick={() => setRequest(!request)}
//                     style={{ display: "flex", justifyContent: "spaceBetween" }}
//                   >
//                     <h6 style={{ textAlign: "left" }}>
//                       {" "}
//                       <span>
//                         {" "}
//                         <FontAwesomeIcon
//                           icon={faShareSquare}
//                           style={{
//                             fontSize: "1.2rem",
//                             marginRight: ".3rem",
//                             color: "gray",
//                             transform: "translate(0, -3px)",
//                           }}
//                         />
//                       </span>
//                       Requet withdrawal
//                     </h6>
//                     <div className="tags">
//                       {request ? (
//                         <h6 style={{ textAlign: "right", marginLeft: "1rem" }}>
//                           pending..
//                         </h6>
//                       ) : null}
//                     </div>
//                   </li>
//                   <li
//                     onClick={() => setStamp(!stamp)}
//                     style={{ display: "flex", justifyContent: "spaceBetween" }}
//                   >
//                     <h6 style={{ textAlign: "left" }}>
//                       <span>
//                         {" "}
//                         <FontAwesomeIcon
//                           icon={faCheckCircle}
//                           style={{
//                             fontSize: "1.2rem",
//                             marginRight: ".3rem",
//                             color: "gray",
//                             transform: "translate(0, -3px)",
//                           }}
//                         />
//                       </span>
//                       Verified {profile.verify}
//                     </h6>
//                     {stamp ? (
//                       <h6 style={{ textAlign: "right", marginLeft: "1rem" }}>
//                         pending..
//                       </h6>
//                     ) : null}
//                   </li>
//                   <li
//                     onClick={() => setAddress(!address)}
//                     style={{ display: "flex", justifyContent: "spaceBetween" }}
//                   >
//                     <h6 style={{ textAlign: "left" }}>
//                       {" "}
//                       <span>
//                         {" "}
//                         <FontAwesomeIcon
//                           icon={faWallet}
//                           style={{
//                             fontSize: "1.2rem",
//                             marginRight: ".3rem",
//                             color: "gray",
//                             transform: "translate(0, -3px)",
//                           }}
//                         />
//                       </span>
//                       External wallet
//                     </h6>
//                     <div className="tags">
//                       {address ? (
//                         <h6 style={{ textAlign: "right", marginLeft: "1rem" }}>
//                           pending..
//                         </h6>
//                       ) : null}
//                     </div>
//                   </li>
//                   <li
//                     onClick={() => setPay(!pay)}
//                     style={{ display: "flex", justifyContent: "spaceBetween" }}
//                   >
//                     <h6 style={{ textAlign: "left" }}>
//                       {" "}
//                       <span>
//                         {" "}
//                         <FontAwesomeIcon
//                           icon={faPercent}
//                           style={{
//                             fontSize: "1.2rem",
//                             marginRight: ".3rem",
//                             color: "gray",
//                             transform: "translate(0, -3px)",
//                           }}
//                         />
//                       </span>
//                       Rate
//                       {profile.rate}
//                     </h6>
//                     <div className="tags">
//                       {pay ? (
//                         <h6 style={{ textAlign: "right", marginLeft: "1rem" }}>
//                           pending..
//                         </h6>
//                       ) : null}
//                     </div>
//                   </li>
//                   <li
//                     style={{ display: "flex", justifyContent: "spaceBetween" }}
//                   >
//                     <h6 style={{ textAlign: "left" }}>
//                       <span>
//                         {" "}
//                         <FontAwesomeIcon
//                           icon={faUserCog}
//                           style={{
//                             fontSize: "1.2rem",
//                             marginRight: ".3rem",
//                             color: "gray",
//                             transform: "translate(0, -3px)",
//                           }}
//                         />
//                       </span>
//                       Change password
//                     </h6>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="col l8 m7 s12">
//             <div className="fund-wallet">
//               <div className="row">
//                 <div className="col  m6 s6">
//                   <div className="center">
//                     <FontAwesomeIcon
//                       icon={faWallet}
//                       style={{ fontSize: "4.5rem", color: "#3d4154" }}
//                     />
//                     <h6 style={{ marginBottom: "0", color: "#5B3833" }}>
//                       {" "}
//                       Fund wallet!
//                     </h6>
//                   </div>
//                 </div>

//                 <div className="col  m6 s6 ">
//                   <div className="center">
//                     <FontAwesomeIcon
//                       icon={faShareSquare}
//                       style={{ fontSize: "4.5rem", color: "#3d4154" }}
//                     />
//                     <h6 style={{ marginBottom: "0", color: "#5B3833" }}>
//                       withdraw cash!
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="otheruser "
//               style={{ border: "2px solid", padding: ".9rem" }}
//             >
//               <ul className="card" style={{ padding: "0 .9rem" }}>
//                 <li className="row" style={{ backgroundColor: "#2d2623" }}>
//                   <span className="col l3 m4 s4 ">
//                     <h5>User</h5>
//                   </span>
//                   <span className="col l3 hide-on-med-and-down">
//                     <h5>Payout</h5>
//                   </span>
//                   <span className="col l3 m4 s4">
//                     <h5>Invesment</h5>
//                   </span>
//                   <span className="col l3 m4 s4">
//                     <h5>Weekly withdrawal</h5>
//                   </span>
//                 </li>
//                 {showForm ? (
//                   <div className="col  m6 s6 update">
//                     <form className="" style={{ width: "80%" }}>
//                       <div
//                         className="row update"
//                         style={{ paddingTop: "1rem" }}
//                       >
//                         <input
//                           placeholder="username"
//                           className="browser-default col l12"
//                           value={formfield.username}
//                           onChange={(event) => {
//                             setformfield({
//                               ...formfield,
//                               username: event.target.value,
//                             });
//                             // setErr(false);
//                           }}
//                           type="text"
//                         />
//                         <input
//                           placeholder="payout"
//                           className="browser-default col l12 "
//                           value={formfield.member}
//                           onChange={(event) => {
//                             setformfield({
//                               ...formfield,
//                               member: event.target.value,
//                             });
//                             // setErr(false);
//                           }}
//                           type="text"
//                         />
//                         <input
//                           placeholder="invest"
//                           className="browser-default col l12"
//                           value={formfield.invest}
//                           onChange={(event) => {
//                             setformfield({
//                               ...formfield,
//                               invest: event.target.value,
//                             });
//                             // setErr(false);
//                           }}
//                           type="text"
//                         />
//                         <input
//                           placeholder="withdraw"
//                           className="browser-default col l12"
//                           value={formfield.withdraw}
//                           onChange={(event) => {
//                             setformfield({
//                               ...formfield,
//                               withdraw: event.target.value,
//                             });
//                             // setErr(false);
//                           }}
//                           type="text"
//                         />
//                         <button onClick={handlesubmit}>submit</button>
//                         <button onClick={() => setShowform(false)}>
//                           x
//                         </button>{" "}
//                       </div>
//                     </form>
//                   </div>
//                 ) : (
//                   <div className="table-body">
//                     {alluser.map((cur) => (
//                       <li
//                         onClick={() => handleUser(cur.id)}
//                         key={cur.id}
//                         className="row"
//                       >
//                         <span className="col l3 m4 s4">
//                           <FontAwesomeIcon
//                             icon={faUserTie}
//                             style={{ fontSize: "1.5rem", color: "gray" }}
//                           />
//                           {cur.username}
//                         </span>
//                         <span className="col l3 hide-on-med-and-down">
//                           {/* {new Date(cur.member)} */}
//                         </span>
//                         <span className="col l3 m4 s4">{cur.invest}</span>
//                         <span className="col l3 m4 s4">{cur.rate}</span>
//                       </li>
//                     ))}
//                   </div>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// function mapStateToProps(state) {
//   return {
//     isAuthenticated: state.auth_reducer.isAuthenticated,
//     profile: state.auth_reducer.userProfile,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     LOGIN_FAILURE: () => dispatch(loginFailure()),
//     // LOGIN_SUCCESS: (user) => dispatch(loginSuccess(user)),
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
