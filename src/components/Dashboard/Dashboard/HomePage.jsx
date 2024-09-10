import React from "react";

const HomePage = () => {
  return (
    <div className="h-full bg-white">
        <div className="h-full flex flex-col justify-center items-center text-black  animate-wiggle">
          <h1 className="text-8xl lg:text-9xl font-musky drop-shadow hover:text-[#f2707f] cursor-pointer">
            Parakh
          </h1>
          <h1 className="text-xl lg:text-2xl font-Poppins font-light tracking-widest drop-shadow hover:text-[#f2707f] cursor-pointer">
            Let's find the best
          </h1>
        </div>
    </div>
  );
};

export default HomePage;
