import React from "react";
import { BiRupee } from "react-icons/bi";

function Restaurant(props) {
  return (
    <>
      <div className="col-3">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            // width="675"
            // height="auto"
            alt=""
          />
          <div className="card-body">
            <h6 className="card-title text-dark" id="Rest-card-title">
              {props.title}
            </h6>
            <h6 className="Rest-card-text-details">{props.details}</h6>
            <div className="price-div">
              <BiRupee className="rupee-icon" />
              <span>150 For two</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
