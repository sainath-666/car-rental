import Image from "next/image";
import React from "react";

function Hero() {
  const handleExploreClick = () => {
    const element = document.getElementById("car-list");
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Premium Car Rental in Your Area
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Experience the thrill of driving with our top-notch car rental
          service. Discover a wide range of vehicles to suit your needs, from
          luxury sedans to rugged SUVs. Whether it's a weekend getaway or a
          business trip, we have the perfect car for you. Enjoy competitive
          rates, flexible rental options, and exceptional customer service. Book
          your dream car today and hit the road in style!
        </h2>
        <button
          onClick={handleExploreClick}
          className="p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-150 transition-all"
        >
          Explore Cars
        </button>
      </div>
      <div>
        <Image
          src="/hero-car.jpg"
          alt="image"
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-lg  md:ml-10 mt-5 md:mt-0"
        />
      </div>
    </div>
  );
}

export default Hero;
