import React from "react";
const Fact = (props) => {
  return (
    <>
      <div className="row bg--gradient fact--padding">
        <div className=" .contain--fact">
          <div className="col l4 m4 s12">
            <div className="fact--detail">
              <h1>60</h1>
              <h4>Support over country</h4>
              <i className="material-icons">language</i>
            </div>
          </div>
          <div className="col l4 m4 s12">
            <div className="fact--detail">
              <h1>+120</h1>
              <h4>
                Transaction <br /> every Hour
              </h4>
              <i className="material-icons">notifications_active</i>
            </div>
          </div>
          <div className="col l4 m4 s12">
            <div className="fact--detail">
              <h1>10%</h1>
              <h4>weekly witdraws</h4>
              <i className="material-icons">monetization_on</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fact;
