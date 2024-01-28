import React from "react";
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";
function Production() {
  const productList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 px-5 md:px-16 mt-7">
      {productList.map((product) => (
        <div className="border-[3px] border-[rgb(38,42,58)] bg-gradient-to-b from-[#2E303C] to-[#1F202B] rounded-lg hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer relative shadow-xl shadow-black hover:border-[#c5c5c5] group">
          <video
            src={product.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 z-0 rounded-md ms-2 mt-1 scale-105 opacity-0 group-hover:opacity-50"
          />
          <img src={product.image} className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
}

export default Production;
