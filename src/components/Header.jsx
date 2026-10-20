import React from "react";
import logo from "../assets/swiggy.png";
import { GoArrowUpRight } from "react-icons/go";
import veggi from "../assets/veggi.png";
import food from "../assets/food.png";
import location from "../assets/location.png";
import { IoChevronDown, IoSearch } from "react-icons/io5";
// import location from "../assets/location.svg";

const Header = () => {
  return (
    <header className="relative z-0 flex flex-col items-center bg-[#ff5200]">
      <div className="mx-auto flex w-full max-w-310 items-center justify-between px-8 py-8 sticky">
        <img
          src={logo}
          alt="Swiggy logo"
          className="h-12 w-38 cursor-pointer object-contain"
        />

        <nav className="hidden items-center gap-10 font-sans text-base font-bold text-white lg:flex">
          <a
            href="https://www.swiggy.com/corporate/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            Swiggy Corporate
          </a>

          <a
            href="https://partner.swiggy.com/food/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            Partner with us
          </a>

          <a
            href="https://www.swiggy.com/"
            className="flex items-center gap-2 rounded-2xl border-2 border-white px-4 py-3 hover:bg-white hover:text-black"
          >
            Get the App
            <GoArrowUpRight size={20} />
          </a>

          <a
            href="https://www.swiggy.com/"
            className="whitespace-nowrap rounded-2xl bg-black px-8 py-4 text-white hover:bg-gray-800"
          >
            Sign in
          </a>
        </nav>
      </div>
      <div className="relative w-full pt-16 pb-10">
        <img
          src={veggi}
          alt="left_img"
          className="pointer-events-none absolute left-0 top-0  h-112.5 w-65 object-contain object-top-left"
        />
        <img
          src={food}
          className="pointer-events-none absolute right-0 top-0 z-0 h-112.5 w-65 object-contain object-top-right"
          alt="right_img"
        />
        <h1 className="relative z-10 mx-auto mb-6 max-w-237.5 px-4 text-center text-5xl font-bold leading-[1.08] text-white">
          Order Food and groceries. Discover
          <br />
          best restaurants. Swiggy it!
        </h1>
        <div className="relative z-10 mx-auto mt-6 flex w-full max-w-230 flex-col gap-4 px-4 md:flex-row">
          <div className="flex h-16 w-full items-center gap-3 rounded-2xl bg-white px-5 md:w-80 md:shrink-0">
            <img src={location} alt="Location" className="h-7 w-5 shrink-0" />
            <input
              className="min-w-0 flex-1 bg-transparent text-base font-medium text-gray-500 outline-none placeholder:text-gray-400"
              placeholder="Enter your delivery location"
            />
            <IoChevronDown className="shrink-0 text-xl text-gray-800" />
          </div>

          <div className="flex h-16 w-full items-center gap-3 rounded-2xl bg-white px-5 md:flex-1">
            <input
              placeholder="Search for restaurant and items for more"
              className="min-w-0 flex-1 bg-transparent text-base font-medium text-gray-600 outline-none placeholder:text-gray-500"
            />
            <IoSearch className="shrink-0 text-xl text-gray-500" />
          </div>
        </div>
      </div>
      <div className="max-w-[75%] container mx-auto flex ">
          <a href="https://www.swiggy.com/restaurants" target="_blank">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="img"  />
          </a>
          <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" target="_blank">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="img"  />
          </a>
          <a href="https://www.swiggy.com/dineout" target="_blank">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="img"  />
          </a>
          {/* <a href="https://www.swiggy.com/restaurants" target="_blank">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="img"  />
          </a> */}
      </div>
    </header>
  );
};

export default Header;
