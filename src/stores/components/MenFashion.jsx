import React from "react";
import { menData } from "../data/men";
import { Link } from "react-router-dom";

const MenFashion = () => {
  const firstFiveImages = menData.slice(0, 5);
  return (
    <>
      <h2 className="heading">MENS FASHION</h2>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <Link to="/men">
                <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenFashion;
