import React from "react";
import logo from "../assets/swiggy.png";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import PlayStore from '../assets/PlayStore.png';
import AppStore from '../assets/AppStore.png';

const FooterSection = () => {
  return (
    <div className="bg-[#f0f0f5] py-12">
      <div className="mx-auto flex w-full max-w-310 flex-wrap justify-between gap-x-6 gap-y-10 px-4 relative">
        <div className="w-full lg:w-72">
          <img
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="company_png"
            className="h-14 w-auto"
          />
          <div  className="mt-2 text-base text-[#3d4152]/80">© 2026 Vishal Limited</div>
        </div>
        <div className="w-40">
          <div className="text-xl font-semibold text-[#02060c]">Company</div>
          <div className="mt-5">
            <ul className="space-y-4 text-base text-[#3d4152]/80 [&_a:hover]:text-[#02060c]">
              <li>
                <a href="https://www.swiggy.com/about">About Us</a>
              </li>
              <li>
                <a href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
              </li>
              <li>
                <a href="https://www.swiggy.com/careers">Careers</a>
              </li>
              <li>
                <a href="https://www.swiggy.com/team">Team</a>
              </li>
              <li>
                <a href="https://www.swiggy.com/team">Swiggy One</a>
              </li>
              <li>
                <a href="https://www.swiggy.com/team">Swiggy Instamart</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-40">
          <div className="text-xl font-semibold text-[#02060c]">
            Contace Us
            <div className="mt-5">
              <ul className="space-y-4 text-base font-normal text-[#3d4152]/80 [&_a:hover]:text-[#02060c]">
                <li>
                  <a href="https://www.swiggy.com/support">Help & Support</a>
                </li>
                <li>
                  <a href="https://partner-with-us.swiggy.com/onboard#/swiggy">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="https://ride.swiggy.com/">Ride With Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-xl font-semibold text-[#02060c]">
            Legal
            <div className="mt-5">
              <ul className="space-y-4 text-base font-normal text-[#3d4152]/80 [&_a:hover]:text-[#02060c]">
                <li>
                  <a href="https://www.swiggy.com/terms-and-conditions">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="https://www.swiggy.com/cookie-policy">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.swiggy.com/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="w-40">
            <div className=" text-xl font-semibold text-[#02060c]">
              Available in : 
            </div>
            <div className="mt-5">
              <ul className="space-y-4 text-base font-normal text-[#3d4152]/80 [&_a:hover]:text-[#02060c]">
                <li>
                  <a href="https://www.swiggy.com/city/bangalore">Banglore</a>
                </li>
                <li>
                  <a href="https://www.swiggy.com/city/gurgaon">Gurgaon</a>
                </li>
                <li>
                  <a href="https://www.swiggy.com/city/hyderabad">Hyderabad</a>
                </li>
                <li>
                  <a href="https://www.swiggy.com/city/delhi">Delhi</a>
                </li>
                <li>
                  <a href="https://www.swiggy.com/city/mumbai">Mumbai</a>
                </li>
                <li>
                  <a href="https://www.swiggy.com/city/pune">Pune</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-44">
          <div className="text-xl font-semibold text-[#02060c]">
            Life At Swiggy
            <div className="mt-5">
              <ul className="space-y-4 text-base font-normal text-[#3d4152]/80 [&_a:hover]:text-[#02060c]">
                <li>
                  <a href="https://blog.swiggy.com/">Explore With Swiggy</a>
                </li>
                <li>
                  <a href="https://blog.swiggy.com/category/swiggy-restaurant-awards/">
                    Swiggy News
                  </a>
                </li>
                <li>
                  <a href="https://blog.swiggy.com/category/snackables/campaigns/">
                    Snackables
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-16 text-xl font-semibold text-[#02060c]">
              Social Links
              <div className="mt-4 flex items-center gap-5 text-xl font-normal text-[#3d4152]">
                <div className="cursor-pointer hover:opacity-70">
                  <a href="https://www.linkedin.com/company/swiggy-in/" target="_blank">
                    <FaLinkedin />
                  </a>
                </div>
                <div className="cursor-pointer hover:opacity-70">
                  <a href="https://www.instagram.com/swiggyindia/?hl=en" target="_blank"><AiFillInstagram /></a>
                </div>
                <div className="cursor-pointer hover:opacity-70">
                  <a href="https://www.facebook.com/swiggy.in/" target="_blank">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="cursor-pointer hover:opacity-70">
                  <a href="https://in.pinterest.com/swiggyindia/" target="_blank">
                  <FaPinterest /></a>
                </div>
                <div className="cursor-pointer hover:opacity-70">
                  <a href="https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px absolute bottom-22 bg-gray-900 container mx-auto"></div>
        <div className="flex justify-center gap-10 max-w-310 container mx-auto ">
          <div className="text-2xl font-semibold text-[#02060c]">
            For better experience, download the Swiggy app now
          </div>
          <div className="flex w-auto gap-10">
            <div>
              <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
                <img src={AppStore} alt="AppStore" />
              </a>
            </div>
          <div>
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
              <img src={PlayStore} alt="PlayStore" />
            </a>
          </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
