import React from "react";
// import DealOne from "../image/S-deal-card-1.jpg";
function Dealscard(props) {
  return (
    <>
      <div className="card" id="deals-card">
        <img
          src={props.imgsrc}
          className="card-img-top"
          width="260"
          height="260"
          alt=""
        />
      </div>
    </>
  );
}

export default Dealscard;
