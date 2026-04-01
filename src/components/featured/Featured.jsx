import { use, useState } from "react";
import Products from "../products/Products";
import Cart from "./cart/Cart";

const Featured = ({ dataPromise, setCount, count }) => {
  // console.log(dataPromise)
  const cardDatas = use(dataPromise);
  // console.log(cardDatas);

  const [activeTab, setActiveTab] = useState("products");
  const [cart] = useState([]); // initially empty

  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="w-full mb-[120px] container mx-auto">
      <div className="max-w-[1600px] mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-[#101727]">
          Premium Digital Tools
        </h2>

        {/* Description */}
        <p className="text-[#627382] mb-4 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center items-center gap-[4px] mb-4">
          {/* Products Button */}
          <button
            onClick={() => setActiveTab("products")}
            className={`w-[120px] h-[50px] rounded-full text-sm font-medium transition ${
              activeTab === "products"
                ? "text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Products
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setActiveTab("cart")}
            className={`w-[120px] h-[50px] rounded-full text-sm font-medium transition ${
              activeTab === "cart"
                ? "text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Cart({cartItems.length})
          </button>
        </div>

        {/* Content Area */}
        <div className="mt-6">
          {activeTab === "products" ? (
            <p className="text-gray-500"></p>
          ) : cart.length === 0 ? (
            <p className="text-gray-400"></p>
          ) : (
            <p>Cart items will show here</p>
          )}
        </div>
      </div>
      {activeTab === "products" ? (
        <Products
          cardDatas={cardDatas}
          count={count}
          setCount={setCount}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems} count={count}  setCount={setCount}  />
      )}
    </div>
  );
};

export default Featured;
