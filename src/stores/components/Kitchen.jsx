import React from "react";
import { kitchenData } from "../data/kitchen";
import { Link } from "react-router-dom";

const firstFiveImages = kitchenData.slice(0, 5);

const Kitchen = () => {
  return (
    <>
      <h2 className="heading">KITCHEN</h2>
      <div className="proSection">
        {firstFiveImages.map((items) => {
          return (
            <div className="imgBox">
              <Link to="/kitchen">
                <img className="proImage" src={items.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Kitchen;
