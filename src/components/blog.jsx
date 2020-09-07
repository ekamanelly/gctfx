import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import M from "materialize-css";

const home = (props) => {
  return (
    <>
      <div className="absolute-div">
        <section className="our--tech">
          <div className="container">
            <h3 className="indigo-text text-darken-4">Don't miss out!!!</h3>
            <div className="row">
              <div className="col l4 m4">
                <div className="">
                  <div className="card">
                    <div class="card-image">
                      <img src="img2/img6.jpg" alt="" />
                      <span class="card-title">will always care</span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img src="img2/img2.jpg" alt="" />
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">
                        Our FPSOs<i class="material-icons right">more_vert</i>
                      </span>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">
                        How they work
                        <i class="material-icons right">close</i>
                      </span>
                      <p style={{ color: "#000", fontSize: "1.5rem" }}>
                        FPSOs are effective development solutions for both
                        deepwater and ultra-deepwater fields. A central mooring
                        system allows the vessel to rotate freely to best
                        respond to weather conditions, or weathervane, while
                        spread-mooring systems anchor the vessel from various
                        locations on the seafloor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col l8 m8 s12">
                <div class="card">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="img2/img6.jpg" alt="" />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Jackup Rig<i class="material-icons right">more_vert</i>
                    </span>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                      How Do Jackups Work
                      <i class="material-icons right">close</i>
                    </span>
                    <p style={{ color: "#000", fontSize: "1.5rem" }}>
                      jackup rigs rest on the sea floor rather than float. The
                      premise of a jackup rig is that it is self-elevating;
                      here, the legs are stationed on ocean floor and the
                      drilling equipment is jacked up above the water's surface.
                      Providing a very stable drilling environment, in
                      comparison to other types of offshore drilling rigs,
                      jackups can drill in waters up to 350 feet deep. Once
                      drilling is required in waters that are deeper than the
                      capabilities of a jackup, semisubmersibles and drillships
                      become a more logical choice for exploration and
                      development operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  <a href="" className="twitter col l3">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ fontSize: "4rem" }}
                    />
                  </a>
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
