import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row spad">
            <div className="col-md-6 col-lg-3 footer-widget">
              <img src="img/logo.png" className="mb-4" alt="" />
              {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</p> */}
              <span>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
                {/* <script>document.write(new Date().getFullYear());</script>  */}
                All rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </span>
            </div>
            <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
              <h5 className="widget-title">Resources</h5>
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
                {/* <li>
                  <a href="#">How to Sell Coin</a>
                </li> */}
                {/* <li>
                  <a href="#">Purchase Theme</a>
                </li> */}
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget"></div>
            <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3"></div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              {/* <div className="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
                <a href="">
                  <img src="img/appstore.png" alt="" className="mr-2" />
                </a>
                <a href="">
                  <img src="img/playstore.png" alt="" />
                </a>
              </div> */}
              {/* <div className="col-lg-8 text-center text-lg-right">
                <ul className="footer-nav">
                  <li>
                    <a href="">DPA</a>
                  </li>
                  <li>
                    <a href="">Terms of Use</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy </a>
                  </li>
                  <li>
                    <a href="">support@company.com</a>
                  </li>
                  <li>
                    <a href="">(123) 456-7890</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
