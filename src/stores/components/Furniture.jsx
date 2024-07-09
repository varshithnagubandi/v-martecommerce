import React from "react";
import { furnitureData } from "../data/furniture";
import { Link } from "react-router-dom";

const Furniture = () => {
  const firstFiveImages = furnitureData.slice(0, 5);
  return (
    <>
      <h2 className="heading">FURNITURE</h2>
      <div className="proSection">
        {firstFiveImages.map((items) => {
          return (
            <div className="imgBox">
              <Link to="/furnitures">
                <img className="proImage" src={items.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Furniture;
