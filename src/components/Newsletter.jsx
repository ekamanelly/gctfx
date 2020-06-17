import React from "react";

const newletter = (props) => {
  return (
    <>
      <div className="row bg--gradient newsletter  ">
        <div className="col l8 m12  s12">
          <h3>Subscribe to our Newaletter</h3>
          <h5>
            Sign up for our weekly industry updates, insider in-depth market
            analysis.
          </h5>
        </div>
        <div className="col l4  m12 s12 form-input">
          <form>
            <label className="row">
              <input
                type="text"
                name="name"
                className=" browser-default col l8 "
                placeholder="you@email.com"
              />
              <input type="submit" value="Submit" className="l4" />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default newletter;
