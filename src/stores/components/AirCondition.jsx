import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";

const firstFiveImages = acData.slice(0, 5);

const AirCondition = () => {
  return (
    <>
      <h2 className="heading">AC</h2>
      <div className="proSection">
        {firstFiveImages.map((items) => {
          return (
            <div className="imgBox">
              <Link to="/ac">
                <img className="proImage" src={items.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AirCondition;
