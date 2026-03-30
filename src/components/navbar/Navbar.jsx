import React from "react";
import CartImg from "../../assets/products/shopping-cart.png"

const Navbar = () => {
  return (
    <div className="w-full bg-white ">
      <div className="max-w-400 mx-auto h-23 px-4 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="text-2xl font-bold">
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </span>
        </div>

        {/* MIDDLE: Menu (Hidden on small devices) */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">Products</li>
          <li className="hover:text-black cursor-pointer">Features</li>
          <li className="hover:text-black cursor-pointer">Pricing</li>
          <li className="hover:text-black cursor-pointer">Testimonials</li>
          <li className="hover:text-black cursor-pointer">FAQ</li>
        </ul>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4">

          {/* Cart Icon */}
          <img
            src={CartImg}
            alt="cart"
            className="w-6 h-6 cursor-pointer"
          />

          {/* Login */}
          <button className="hidden sm:block font-medium text-gray-700 hover:text-black">
            Login
          </button>

          {/* Get Started Button */}
          <button className="btn border-none rounded-3xl text-white px-5 
            bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
            hover:opacity-90">
            Get Started
          </button>

          {/* Mobile Menu Icon (DaisyUI) */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
              <li><a>Login</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
