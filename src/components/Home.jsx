import React from "react";
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
        <section>
          <div className="row">
            <div className="col l6 m12 s12">
              <div
                className="container"
                //  style={{ height: '85vh' }}
              >
                <div className="card-frame">
                  <div className="card card-1">
                    <div class="card-image">
                      <img src="img2/img1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="card card-2 ">
                    <div class="card-image">
                      <img src="img2/img2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="card card-3">
                    <div class="card-image">
                      <img src="img2/img3.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l6 m12 s12">
              <div className="ins">
                <h2 className="blue-text  text-darken-4">Powering Future</h2>
                <h5 className="blue-text  text-darken-3">
                  Sustainable energy sources are often called “alternative
                  energy” because they’re considered to be an alternative to
                  traditional fossil fuels such as oil and coal. Just because an
                  energy source is renewable doesn’t mean it’s 100 percent
                  environmentally safe. For instance, dams harness the power of
                  moving water, but they can also harm fish and wildlife. Wind
                  turbines use the sun’s energy to generate clean electricity,
                  but there are environmental impacts from the manufacturing
                  process.
                </h5>
                <h5 className="blue-text  text-darken-3">
                  {" "}
                  All told, though, alternative energy resources pack a much
                  lighter environmental footprint than fossil fuels. This is why
                  renewable energy sources are so important – they are our
                  ticket to a less polluted world. Even if we did not face the
                  threat of climate change, minimizing pollution is basic for
                  good health.
                </h5>
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
                <div className="">
                  <div className="card">
                    <div class="card-image">
                      <img src="img2/img1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="card">
                    <div class="card-image">
                      <img src="img2/img3.jpg" alt="" />
                      {/* <span class="card-title">We Breath Safety</span> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col l8 m8 s12">
                <div className="card">
                  <div class="card-image">
                    <img src="img2/img2.jpg" alt="" />
                    <span class="card-title">When we OffShore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* passion section  */}
        <section className="passion">
          <div className="card" style={{ margin: "0" }}>
            <div className="card-image ">
              <img
                src="img2/passion.jpg"
                className="passion-img"
                alt="kleekit passion"
              />
              <div className="card-title">
                <div className="row passion-row ">
                  <div className="col l6 m6 hide-on-med-and-down">
                    <p class="">
                      For some solar shoppers who may not be able to install
                      solar on their property, community solar is a viable solar
                      option that more directly connects utility-scale solar
                      energy projects to residential consumers. As such,
                      community solar farms are typically built in a central
                      location as opposed to on any single customer’s property.
                    </p>
                    {/* <p class="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas vel quam minus quia voluptate ex minima eaque quaerat
                      reiciendis illo. Praesentium et necessitatibus fuga, illo
                      itaque earum? Modi, velit molestias?
                    </p> */}
                  </div>
                  <div className="col l6 m6 hide-on-med-and-down passion-right-p">
                    {/* <p class="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas vel quam minus quia voluptate ex minima eaque quaerat
                      reiciendis illo. Praesentium et necessitatibus fuga, illo
                      itaque earum? Modi, velit molestias?
                    </p> */}
                    <p class="">
                      Residential consumers can subscribe to a community solar
                      project to receive many of the benefits of solar power
                      without installing solar panels on their property.
                    </p>
                  </div>
                  <div className="col m12 passion-mobile-paragraph hide-on-large-only">
                    <p class="passion-mobile-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas vel quam minus quia voluptate ex minima eaque quaerat
                      reiciendis illo. Praesentium et necessitatibus fuga, illo
                      itaque earum? Modi, velit molestias?
                    </p>
                    <p class="passion-mobile-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas vel quam minus quia voluptate ex minima eaque quaerat
                      reiciendis illo. Praesentium et necessitatibus fuga, illo
                      itaque earum? Modi, velit molestias?
                    </p>
                    <p class="passion-mobile-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas vel quam minus quia voluptate ex minima eaque quaerat
                      reiciendis illo. Praesentium et necessitatibus fuga, illo
                      itaque earum? Modi, velit molestias?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div>
              </div> */}
        </section>
        {/* contact footer */}
        <footer
          className="indigo darken-4"
          //    style={{height:'20vh'}}
        >
          <div className="container">
            <div className="row" style={{ margin: "0" }}>
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
                  {/* <a href="" className="twitter col l3">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ fontSize: "4rem" }}
                    />
                  </a> */}
                  <div className="col l12" style={{ marginTop: "2rem" }}>
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
};

export default home;
