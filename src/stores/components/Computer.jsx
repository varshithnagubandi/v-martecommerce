import React from "react";
import { computerData } from "../data/computers";
import { Link } from "react-router-dom";

const firstFiveImages = computerData.slice(0, 5);

const Computer = () => {
  return (
    <>
      <h2 className="heading">COMPUTERS</h2>
      <div className="proSection">
        {firstFiveImages.map((items) => {
          return (
            <div className="imgBox">
              <Link to="/computers">
                <img className="proImage" src={items.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Computer;
