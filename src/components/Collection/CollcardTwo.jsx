import React from "react";

function CollcardTwo(props) {
  return (
    <>
      <div className="col-2">
        <div className="" id="Coll-card-two">
          <img src={props.imgsrc} className="card-img-bottom" alt="" />
          <h6 className="text-center mt-2" id="Coll-card-two-title">
            {props.title}
          </h6>
        </div>
      </div>
    </>
  );
}

export default CollcardTwo;
