import React from "react";

const IMG_BASE =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

const FoodCard = ({ data }) => {
  const { imageId, action, accessibility } = data;

  return (
    <a
      href={action?.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-2xl transition-transform hover:scale-[1.03]"
    >
      <img
        src={`${IMG_BASE}${imageId}`}
        alt={accessibility?.altText ?? action?.text}
        loading="lazy"
        className="h-40 w-50 object-contain"
      />
    </a>
  );
};

export default FoodCard;