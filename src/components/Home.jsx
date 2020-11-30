import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Pages
import Card from "./Card/Card";
import Cdata from "./Card/Carddata";
import CollcardTwo from "./Collection/CollcardTwo";
import ColCardTwoData from "./Collection/ColCardTwoData";
import Restaurant from "./Restaurant/Restaurants";
import Restdata from "./Restaurant/RestData";
import Dealscard from "./DealsCard/Dealscard";
import Ddata from "./DealsCard/Data";

// Near Food images

const Home = () => {
  return (
    <>
      <div className="container-fluid" id="deals-conatiner">
        <div className="card-deck" id="deals-card-deck">
          <div className="row">
            <div className="col-3">
              <Dealscard imgsrc={Ddata[0].imgsrc} />
            </div>
            <div className="col-3">
              <Dealscard imgsrc={Ddata[1].imgsrc} />
            </div>
            <div className="col-3">
              <Dealscard imgsrc={Ddata[2].imgsrc} />
            </div>
            <div className="col-3">
              <Dealscard imgsrc={Ddata[3].imgsrc} />
            </div>
          </div>
        </div>
      </div>
      {/* RELEVANCE-items */}
      <div className="container-fluid" id="relevance-container">
        <div className="rel-header">
          <div className="rel-heading w-25 float-left">
            <h5 className="rel-heading-text">312 restaurants</h5>
          </div>
          <div className="rel-menu-container w-75 float-right">
            <ul className="rel-menu">
              <li className="rel-item">Relevance</li>
              <li className="rel-item">Cost For Two</li>
              <li className="rel-item">Delivery Time</li>
              <li className="rel-item">Rating</li>
            </ul>
          </div>
        </div>
        <div className="card-deck" id="rel-card-deck">
          <div className="row" id="rel-card-row">
            <div className="col-3">
              <Card
                imgsrc={Cdata[0].imgsrc}
                // title={Cdata[0].title}
                // cname={Cdata[0].cname}
              />
            </div>
            <div className="col-3">
              <Card
                imgsrc={Cdata[1].imgsrc}
                // title={Cdata[1].title}
                // cname={Cdata[1].cname}
              />
            </div>
            <div className="col-3">
              <Card
                imgsrc={Cdata[2].imgsrc}
                // title={Cdata[2].title}
                // cname={Cdata[2].cname}
              />
            </div>
            <div className="col-3">
              <Card
                imgsrc={Cdata[3].imgsrc}
                // title={Cdata[3].title}
                // cname={Cdata[3].cname}
              />
            </div>
          </div>
        </div>
        <div className="card-deck" id="rel-card-deck">
          <div className="row mb-5" id="rel-card-row">
            <div className="col-3">
              <Card
                imgsrc={Cdata[4].imgsrc}
                // title={Cdata[3].title}
                // cname={Cdata[3].cname}
              />
            </div>
            <div className="col-3">
              <Card
                imgsrc={Cdata[5].imgsrc}
                // title={Cdata[3].title}
                // cname={Cdata[3].cname}
              />
            </div>
            <div className="col-3">
              <Card
                imgsrc={Cdata[6].imgsrc}
                // title={Cdata[3].title}
                // cname={Cdata[3].cname}
              />
            </div>
            <div className="col-3">
              <Card
                imgsrc={Cdata[7].imgsrc}
                // title={Cdata[3].title}
                // cname={Cdata[3].cname}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Collection card-2 */}
      <div className="container-fluid" id="Coll-card-two-container">
        <div className="Coll-card-text-div">
          <h2 className="Card-text" id="Coll-head-text">
            Food Category
          </h2>
        </div>
        <div className="card-group" id="Coll-card-two-deck">
          <div className="row" id="Coll-card-two-row">
            <CollcardTwo
              imgsrc={ColCardTwoData[0].imgsrc}
              title={ColCardTwoData[0].title}
            />
            <CollcardTwo
              imgsrc={ColCardTwoData[1].imgsrc}
              title={ColCardTwoData[1].title}
            />
            <CollcardTwo
              imgsrc={ColCardTwoData[2].imgsrc}
              title={ColCardTwoData[2].title}
            />
            <CollcardTwo
              imgsrc={ColCardTwoData[3].imgsrc}
              title={ColCardTwoData[3].title}
            />
            <CollcardTwo
              imgsrc={ColCardTwoData[4].imgsrc}
              title={ColCardTwoData[4].title}
            />
            {/*  */}
          </div>
        </div>
        <div className="card-group mt-4" id="Coll-card-two-deck">
          <div className="row" id="Coll-card-two-row">
            <CollcardTwo
              imgsrc={ColCardTwoData[5].imgsrc}
              title={ColCardTwoData[5].title}
            />
            <CollcardTwo
              imgsrc={ColCardTwoData[6].imgsrc}
              title={ColCardTwoData[6].title}
            />
            <CollcardTwo
              imgsrc={ColCardTwoData[7].imgsrc}
              title={ColCardTwoData[7].title}
            />
            <CollcardTwo
              imgsrc={ColCardTwoData[8].imgsrc}
              title={ColCardTwoData[8].title}
            />
            <CollcardTwo
              imgsrc={ColCardTwoData[9].imgsrc}
              title={ColCardTwoData[9].title}
            />
          </div>
        </div>
      </div>
      {/* Restaurants */}
      <div className="container-fluid" id="Rest-container">
        <div className="Rest-card-text-div">
          <h2 className="Card-text" id="Rest-head-text">
            Restaurants Near Me
          </h2>
        </div>
        <div className="card-deck" id="Rest-card-deck">
          <div className="row" id="Rest-card-row">
            <Restaurant
              imgsrc={Restdata[0].imgsrc}
              title={Restdata[0].title}
              details={Restdata[0].details}
            />
            <Restaurant imgsrc={Restdata[1].imgsrc} title={Restdata[1].title} />
            <Restaurant imgsrc={Restdata[2].imgsrc} title={Restdata[2].title} />
            <Restaurant imgsrc={Restdata[3].imgsrc} title={Restdata[3].title} />
          </div>
          <div className="row">
            <Restaurant imgsrc={Restdata[4].imgsrc} title={Restdata[4].title} />
            <Restaurant imgsrc={Restdata[5].imgsrc} title={Restdata[5].title} />
            <Restaurant imgsrc={Restdata[6].imgsrc} title={Restdata[6].title} />
            <Restaurant imgsrc={Restdata[7].imgsrc} title={Restdata[7].title} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
