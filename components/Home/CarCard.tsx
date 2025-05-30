import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

function CarCard(props: any) {
  const [car, setCar] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.car) {
      setCar(props.car);
      setLoading(false);
    }
  }, [props.car]);

  const defaultCarImage = "/logo.png"; // Using your logo as fallback, you can change this to any default car image

  if (loading) {
    return (
      <div className="p-2">
        <div className="skeleton h-6 w-2/3 mb-2"></div>
        <div className="skeleton h-8 w-1/3 mb-2"></div>
        <div className="skeleton h-[150px] w-[250px] mb-3"></div>
        <div className="flex justify-around">
          <div className="skeleton h-16 w-16"></div>
          <div className="skeleton h-16 w-16"></div>
          <div className="skeleton h-16 w-16"></div>
        </div>
      </div>
    );
  }

  return (
    car && (
      <div
        className="group p-2 sm:
    hover:border-[1px] cursor-pointer
    border-blue-500 hover:rounded-lg hover:bg-gray-700"
      >
        <h2 className="text-[20px] font-medium mb-2 ">{car?.name}</h2>
        <h2 className="text-[28px] font-bold mb-2">
          <span className="text-[12px] font-light">$</span>
          {car.price}
          <span className="text-[12px] font-light">/day</span>
        </h2>
        <Image
          src={car.image?.url || defaultCarImage}
          alt={car?.name || "Car image"}
          width={300}
          height={300}
          className="w-full h-[150px] object-cover rounded-lg mb-3"
          />
        <div className="flex justify-around group-hover:hidden">
          <div className="text-center text-gray-500">
            <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car.carType}
            </h2>
          </div>
          <div className="text-center text-gray-500">
            <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">{car.seat}</h2>
          </div>
          <div className="text-center text-gray-500">
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car.carAvg} MPG
            </h2>
          </div>
        </div>
        <button
          className="hidden group-hover:flex bg-gradient-to-r from-blue-400 to-blue-800
        p-2 rounded-lg w-full px-5 justify-between"
        >
          <span className="bg-blue-400 p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
          Rent Now
        </button>
      </div>
    )
  );
}

export default CarCard;
