import React from "react";
import { watchData } from "../data/watch";
import { Link } from "react-router-dom";

const Watches = () => {
  const firstFiveImages = watchData.slice(0, 5);
  return (
    <>
      <h2 className="heading">WATCHES</h2>
      <div className="proSection">
        {firstFiveImages.map((items) => {
          return (
            <div className="imgBox">
              <Link to="/watch">
                <img className="proImage" src={items.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Watches;
