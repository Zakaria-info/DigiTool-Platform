import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ cardData, setCount,cartItems, setCartItems }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCartCount = () => {

    toast.success(`${cardData.name} is Added to Cart`);
    setIsSelected(true);
    setCount(prev => prev + 1);
    setCartItems([...cartItems, cardData])
   
  };

  return (
    <div className="card  bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <img src={cardData.icon} alt="" />
          </div>
          <span className="badge badge-xs badge-warning">{cardData.tag}</span>
        </div>

        <div className="flex justify-between flex-col gap-4">
          <h2 className="text-3xl font-bold">{cardData.name}</h2>
          <p className="">{cardData.description}</p>
          <span className="text-xl">${cardData.price}/mo</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{cardData.features[0]}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{cardData.features[1]}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{cardData.features[2]}</span>
          </li>
        </ul>
        <div className="mt-6">
          <button
            className="btn btn-primary btn-block rounded-3xl"
            onClick={handleCartCount}
          >
            {isSelected === true ? "Added to cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
