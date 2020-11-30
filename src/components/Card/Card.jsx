import React from "react";
import { Link } from "react-router-dom";
// import Delivery from "./image/food-1.jpg";

function Card(props) {
  return (
    <>
      <div className="card" id="rel-card">
        <Link to="">
          <img
            src={props.imgsrc}
            className="card-img-top"
            width="260"
            height="260"
            alt=""
          />
          {/* <div className="card-text">
            <h2 className="cname">{props.cname}</h2>
            <p className="title">{props.title}</p>
          </div> */}
        </Link>
      </div>
    </>
  );
}

export default Card;
