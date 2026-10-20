import React from 'react'
import Banner from "../assets/Banner.png";

const BannerCard = () => {
  return (
    <div className="mx-auto w-full max-w-310 px-4 py-10 mt-70">
      <img src={Banner} alt="BannerImg" />
    </div>
  )
}

export default BannerCard