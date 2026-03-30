import React from "react";

const Rating = () => {
  return (
    <div className="w-full mb-30">
      <div className="max-w-400 mx-auto px-4">
        {/* Main Box */}
        <div
          className="h-62  
          bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
          flex flex-col lg:flex-row items-center justify-around text-white"
        >
          {/* Item 1 */}
          <div className="text-center">
            <h2 className="text-4xl font-bold">50K+</h2>
            <p className="mt-2 text-2xl opacity-90">Active Users</p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-20 bg-white opacity-40"></div>

          {/* Item 2 */}
          <div className="text-center">
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="mt-2 text-2xl opacity-90">Premium Tools</p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-20 bg-white opacity-40"></div>

          {/* Item 3 */}
          <div className="text-center">
            <h2 className="text-4xl font-bold">4.9</h2>
            <p className="mt-2 text-2xl opacity-90">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
