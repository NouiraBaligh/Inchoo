import React from "react";

function Banner() {
  return (
    <div className="relative bg-[url('/beautybanner2.jpg')] bg-no-repeat bg-cover h-[75vh] px-[200px]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col text-white w-[50%] pt-[10%]">
        <span className="text-[30px] mt-3">
          Discover Your Radiance With Our Handpicked Beauty Essentials{" "}
        </span>
        <h1 className="text-3xl mt-3">Glow with confidence</h1>
        <div className="flex items-center mt-[20px]">
          <button className="bg-[#e48bcd] p-[10px] w-[200px] text-wrap cursor-pointer mr-9">
            Shop now
          </button>
          <button className="bg-gray-500 p-[10px] w-[200px] text-wrap cursor-pointer mr-9">
            Call : (+216 52 745 149)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
