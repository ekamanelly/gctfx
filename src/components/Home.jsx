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
            <div className="absolute-div">
    
         
          {/* <section className="graph">
              <h3>graph comes here</h3>
          </section> */}
                <section

                >
                    <div className="row">
                        <div className="col l6 m12 s12">
                            <div className="container"
                            //  style={{ height: '85vh' }}
                            >
                                <div className="card-frame" >
                                    <div className="card card-1">
                                        <div class="card-image">
                                            <img src="img2/img1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="card card-2 ">
                                        <div class="card-image">
                                            <img src="img2/img2.jpg" alt="" />
                                            <span class="card-title">Card Title</span>
                                        </div>
                                    </div>
                                    <div className="card card-3">
                                        <div class="card-image">
                                            <img src="img2/img3.jpg" alt="" />
                                            <span class="card-title">will always care</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l6 m12 s12">
                            <div className="ins">
                                <h2 className="blue-text  text-darken-4">We bring all your picture in one frame</h2>
                                <h5 className="blue-text  text-darken-3">Kleekit is focused on the creation of Website, Web app, mobile applications and computer software for our clients success. We contributed to learn and refine our process as we evolve. e build affordable well tailored digital solutions for your Products and services. We are confident your business will do better with us because we provide fast delivery of all projects and give our clients nothing but the absolutebest for their business needs</h5>
                                <h5 className="blue-text  text-darken-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos eum ipsa obcaecati quia inventore tempora nisi perspiciatis autem quae neque eveniet, voluptates, reiciendis laboriosam cupiditate blanditiis magnam minus repudiandae.</h5>
                                <h5 className="blue-text  text-darken-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos eum ipsa obcaecati quia inventore tempora nisi perspiciatis autem quae neque eveniet, voluptates, reiciendis laboriosam cupiditate blanditiis magnam minus repudiandae.</h5>
                            </div>
                        </div>
                    </div>
                </section>

                {/* our tech */}
                <section className="our--tech">

                    <div className="container">
                        <h3 className="indigo-text text-darken-4">What we've done.....</h3>
                        <div className="row">
                            <div className="col l4 m4">
                                <div className=""><div className="card">
                                    <div class="card-image">
                                        <img src="img2/img3.jpg" alt="" />
                                        <span class="card-title">will always care</span>
                                    </div>
                                </div></div>
                                <div className="">
                                    <div className="card">
                                        <div class="card-image">
                                            <img src="img2/img3.jpg" alt="" />
                                            <span class="card-title">will always care</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col l8 m8 s12">
                                <div className="card">
                                    <div class="card-image">
                                        <img src="img2/img3.jpg" alt="" />
                                        <span class="card-title">will always care</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* passion section  */}
                <section className="passion">
                    <div className="card" style={{ margin: '0' }}>
                        <div className="card-image "><img src="img2/passion.jpg" className="passion-img" alt="kleekit passion" />
                            <div className="card-title">
                                <div className="row passion-row " >
                                    <div className="col l6 m6 hide-on-med-and-down">
                                        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel quam minus quia voluptate ex minima eaque quaerat reiciendis illo. Praesentium et necessitatibus fuga, illo itaque earum? Modi, velit molestias?</p>
                                        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel quam minus quia voluptate ex minima eaque quaerat reiciendis illo. Praesentium et necessitatibus fuga, illo itaque earum? Modi, velit molestias?</p>
                                    </div>
                                    <div className="col l6 m6 hide-on-med-and-down passion-right-p" >
                                        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel quam minus quia voluptate ex minima eaque quaerat reiciendis illo. Praesentium et necessitatibus fuga, illo itaque earum? Modi, velit molestias?</p>
                                        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel quam minus quia voluptate ex minima eaque quaerat reiciendis illo. Praesentium et necessitatibus fuga, illo itaque earum? Modi, velit molestias?</p>
                                    </div>
                                    <div className="col m12 passion-mobile-paragraph hide-on-large-only" >
                                        <p class="passion-mobile-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel quam minus quia voluptate ex minima eaque quaerat reiciendis illo. Praesentium et necessitatibus fuga, illo itaque earum? Modi, velit molestias?</p>
                                        <p class="passion-mobile-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel quam minus quia voluptate ex minima eaque quaerat reiciendis illo. Praesentium et necessitatibus fuga, illo itaque earum? Modi, velit molestias?</p>
                                        <p class="passion-mobile-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel quam minus quia voluptate ex minima eaque quaerat reiciendis illo. Praesentium et necessitatibus fuga, illo itaque earum? Modi, velit molestias?</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* </div>
              </div> */}

                </section>
 {/* contact footer */}
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