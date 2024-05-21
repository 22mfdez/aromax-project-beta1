// src/components/Banner.jsx
import React from "react";

const Banner = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg mb-8">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full opacity-75"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
