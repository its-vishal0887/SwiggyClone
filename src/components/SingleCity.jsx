import React from "react";

const PREFIX = "Order food online in ";

const SingleCity = ({ item }) => {
  // const name = item.text.replace(PREFIX, "").replace(/_/g, " ").trim();

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      title={item.text}
      className="flex h-full w-full items-center justify-center rounded-2xl border border-gray-300 px-4 py-4 text-center text-base font-medium text-gray-600 transition-colors hover:border-gray-500 hover:text-gray-900"
    >
      {item.text}
    </a>
  );
};

export default SingleCity;