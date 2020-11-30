import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Collcard(props) {
  return (
    <div className="card" id="c-t-card">
      <Link to="" className="text-white">
        <img src={props.imgsrc} className="card-img-top" alt="" />
        <div class="card-img-overlay">
          <p class="card-title" id="footer-text">
            {props.title}
          </p>
          <p className="mt-lg-n2" id="footer-text-2">
            {props.name}
            <RiArrowRightSFill className="arrow-icon" />
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Collcard;
