import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Fact from "./Fact";
import Newletter from "./Newsletter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faGooglePlusG,
  faFacebookSquare,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = (props) => {
  const history = useHistory();

  const calltry = () => {
    console.log(history);
    // console.log(`history from dom ${history}`);
  };

  return (
    <>
      <section
        style={{
          marginTop: "12rem",
          // color: "white",
          position: "absolute",
          width: "100%",
          // backgroundColor: "black",
          // height: "200vh",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col l8">
              <div className="">
                <img
                  src="/img/about-img.png"
                  alt=""
                  className=""
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col l4">
              <h1 onClick={calltry} style={{ color: "#3d34cc" }}>
                Invest with facts
              </h1>
              <h5 style={{ color: "#3d34cc" }}>Trade Smarter with bitcon</h5>
            </div>
          </div>
        </div>

        <Fact />

        <div className="currency">
          <div className="container">
            <h1 style={{ textAlign: "center", color: "#3d34cc" }}>
              Latest Exchange Rates
            </h1>

            <table>
              <thead>
                <tr style={{ color: "#3d34cc" }}>
                  <th>Name</th>
                  <th>Item Name</th>
                  <th>Item Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Newletter />

        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col l4">
                <h5 className="widget-title" style={{ color: "#5B3833" }}>
                  Resources
                </h5>
                <ul>
                  <li>
                    <a href="#">How to Invest</a>
                  </li>
                  <li>
                    <a href="#">Coin Overview</a>
                  </li>
                  <li>
                    <a href="#">Blog News</a>
                  </li>
                </ul>
              </div>
              <div className="col l4">
                <h5 className="widget-title" style={{ color: "#5B3833" }}>
                  Quick Links
                </h5>
                <ul>
                  <li>
                    <a href="#">Credit wallet</a>
                  </li>
                  <li>
                    <a href="#">Check withdrawable </a>
                  </li>
                </ul>
              </div>
              <div className="col l4">
                <h5 className="widget-title" style={{ color: "#5B3833" }}>
                  Contact Us
                </h5>
                <div className="row">
                  <a href="" className="col l3 ">
                    <FontAwesomeIcon
                      icon={faFacebookSquare}
                      style={{ fontSize: "4rem", color: "blue" }}
                    />
                  </a>
                  <a href="" className="google col l3">
                    <FontAwesomeIcon
                      icon={faGooglePlusG}
                      style={{ fontSize: "4rem", color: "#F44336" }}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="reserved">
          <p style={{ textAlign: "center", color: "#5B3833" }}>
            FXTM brand is authorized and regulated in various jurisdictions.
            ForexTime Limited (www.forextime.com/eu) is regulated by the Cyprus
            Securities and Exchange Commission with CIF license number 185/12,
            licensed by the Financial Sector Conduct Authority (FSCA) of South
            Africa, with FSP No. 46614. The company is also registered with the
            Financial Conduct Authority of the UK with number 600475. The office
            is at 35, Lamprou Konstantara, FXTM Tower, Kato Polemidia, 4156,
            Limassol, Cyprus. Exinity Limited (www.forextime.com) is regulated
            by the Financial Services Commission of the Republic of Mauritius
            with an Investment Dealer License bearing license number C113012295
            and it is situated at 5th Floor, 355 NEX Tower, Rue du Savoir,
            Cybercity, Ebene 72201, Mauritius . Forextime UK Limited is
            authorised and regulated by the Financial Conduct Authority, firm
            reference number 777911 and is situated at 88 Wood Street, EC2V 7QR,
            London, UK
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#5B3833",
              marginBottom: "4rem",
            }}
          >
            Your capital is at risk. You should not spend more than you can
            afford to lose and should ensure that you fully understand the risks
            involved. Using the products offered may not be suitable for
            everyone. Before you use these products, please take into
            consideration your level of experience, financial objectives and
            seek independent advice if necessary. It is the responsibility of
            the Client to ascertain whether he/she is permitted to use the
            services of the FXTM brand based on the legal requirements in
            his/her country of residence. Please read FXTM’s full Risk
            Disclosure.
          </p>
        </div>
      </section>
    </>
  );
};

// <div className=" col l3">
//   <div class="card">
//     <div class="card-image">
//       <img src="img/home1.jpg" />
//       <span class="card-title">
//         <h1>60 country supports</h1>
//       </span>
//     </div>
//   </div>
// </div>
//   <div className="col l3">
//     <div class="card">
//       <div class="card-image">
//         <img src="img/home3.jpg" />
//         <span class="card-title">
//           <h1>60 country supports</h1>
//         </span>
//       </div>
//     </div>
//   </div>
//   <div className="col l3">
//     <div class="card">
//       <div class="card-image">
//         <img src="img/home2.jpg" />
//         <span class="card-title">
//           <h1>60 country supports</h1>
//         </span>
//       </div>
//     </div>
//   </div>
//   <div className="col l3">
//     <div class="card">
//       <div class="card-image">
//         <img src="img/home1.jpg" />
//         <span class="card-title">
//           <h1>60 country supports</h1>
//         </span>
//       </div>
//     </div>
//   </div>
export default Home;
