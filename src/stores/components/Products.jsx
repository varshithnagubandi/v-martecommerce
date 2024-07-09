import React from "react";
import Mobiles from "./Mobiles";
import Computer from "./Computer";
import Watches from "./Watches";
import MenFashion from "./MenFashion";
import WomenFashion from "./WomenFashion";

import Furniture from "./Furniture";
import AirCondition from "./AirCondition";
import Kitchen from "./Kitchen";

import Fridges from "./Fridges";

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computer />
      <Watches />
      <MenFashion />
      <WomenFashion />

      <Furniture />
      <AirCondition />
      <Kitchen />

      <Fridges />
    </div>
  );
};

export default Products;
