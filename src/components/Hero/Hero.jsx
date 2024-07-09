import React from 'react';

function Hero() {
  return (
    <div className="relative flex items-center justify-center h-[85vh] bg-cover bg-center bg-no-repeat object-cover"
      style={{ backgroundImage: "url('./background.jpg')" }}>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-[5%] ">
        <div className="relative z-10  text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Welcome to Eriqueenah's <br /> Green Grocery Shop
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            Your trusted one-way <br /> stop for 100% Organic br& Fresh Fruits
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
