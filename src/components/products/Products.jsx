import React from "react";
import Card from "../card/Card";

const Products = ({ cardDatas }) => {
  console.log(cardDatas, "cardDatas");
  return (
    <div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cardDatas.map((cardData) => {
        console.log(cardData, "cardData");
        return (
          <Card cardData={cardData}/>
        );
      })}
        </div>
    
    </div>
  );
};

export default Products;
