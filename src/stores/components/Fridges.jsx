import React from "react";
import { fridgeData } from "../data/fridge";
import { Link } from "react-router-dom";

const firstFiveImages = fridgeData.slice(0, 5);

const Fridges = () => {
  return (
    <>
      <h2 className="heading">FRIDGES</h2>
      <div className="proSection">
        {firstFiveImages.map((items) => {
          return (
            <div className="imgBox">
              <Link to="/fridges">
                <img className="proImage" src={items.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Fridges;
