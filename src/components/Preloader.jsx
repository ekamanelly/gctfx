import React from "react";

const Loader = (props) => {
  return (
    <div
      class="preloader-wrapper big active"
      // style={{
      //   backgroundColor: "pink",
      //   position: "fixed",
      //   left: "50%",
      //   top: "50%",
      //   transform: "translate(-10%, -10%)",
      // }}
    >
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
