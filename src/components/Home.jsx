import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
    faGooglePlusG,
    faFacebookSquare,
    faInstagramSquare,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";


const home = (props) => {
    return ( 
        <>
            <div style={{
                right: 0,
                // marginTop: "12rem",
                // color: "white",
                position: "absolute",
                width: "100%",
                // backgroundColor: "black",
                // height: "200vh",
            }}>
    
          {/* contact footer */}
          {/* <section className="graph">
              <h3>graph comes here</h3>
          </section> */}

           <footer className="indigo darken-4" 
        //    style={{height:'20vh'}}
           >
              <div className="container">
                        <div className="row" style={{ margin: '0' }}>
                            <div className="col l6"></div>
                          
                            <div className="col l6">
                                <h3>Contact us</h3>
                                <div className="row">
                                    <a href="" className="col l3 ">
                                        <FontAwesomeIcon
                                            icon={faFacebookSquare}
                                            style={{ fontSize: "4rem", color: "blue" }}
                                        />
                                    </a>
                               
                                    <a href="" className="instagram col l3">
                                        <FontAwesomeIcon
                                            icon={faInstagramSquare}
                                            style={{ fontSize: "4rem", color: "#b79b06" }}
                                        />
                                    </a>
                                    <a href="" className="twitter col l3">
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            style={{ fontSize: "4rem" }}
                                        />
                                    </a>
                                    <a href="" className="twitter col l3">
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            style={{ fontSize: "4rem" }}
                                        />
                                    </a>
                                    <div className="col l12" style={{marginTop:'2rem'}}>
                                        <div class="mr-3">© 2020 Kleekit, LTD.</div>
                                    </div>    
                                </div>
                            </div>
                        </div>
              </div>
              
          </footer>
        </div>
       
        </>
     );
}
 
export default home;