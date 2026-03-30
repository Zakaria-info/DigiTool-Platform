import React from 'react';
import Bannerimg from '../../assets/banner.png'
import PlayImg from '../../assets/Play.png'

const Banner = () => {
    return (
        <div className="w-full">
      <div className="max-w-400 mx-auto px-4 mb-21.25">

        {/* MAIN FLEX */}
        <div className="flex flex-col lg:flex-row items-center gap-15">

          {/* LEFT CONTENT */}
          <div className="flex-1">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm mb-6">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              New: AI-Powered Tools Available
            </div>

            {/* Heading */}
            <h2 className="text-[40px] lg:text-5xl font-bold text-[#101727] leading-tight">
              Supercharge Your <br /> Digital Workflow
            </h2>

            {/* Description */}
            <p className="text-[#627382] mt-4 max-w-xl leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today. Explore Products
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-6 flex-wrap">

              {/* Primary Button */}
              <button className=" rounded-3xl text-white px-6 py-3 
            bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
            hover:opacity-90">
                Explore Products
              </button>

              {/* Secondary Button */}
              <button className="flex items-center gap-2 px-6 py-3 border border-purple-500 text-purple-600 rounded-full hover:bg-purple-50">
                <img
                  src={PlayImg}
                  alt="play"
                  className="w-4 h-4"
                />
                Watch Demo
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 mt-21.25 lg:mt-21.25]">
            <img
              src={Bannerimg}
              alt="banner"
              className="w-full max-w-125 mx-auto rounded-xl"
            />
          </div>

        </div>
      </div>
    </div>
    );
};

export default Banner;