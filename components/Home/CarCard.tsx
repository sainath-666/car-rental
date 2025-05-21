import Image from "next/image";
import React, { useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

function CarCard(props: any) {
  const [car, setCar] = useState(props.car);
  return (
    <div
      className="group p-2 sm:
    hover:border-[1px] cursor-pointer
    border-blue-500"
    >
      <h2 className="text-[20px] font-medium mb-2 ">{car.name}</h2>
      <h2 className="text-[28px] font-bold mb-2">
        <span className="text-[12px] font-light">$</span>
        {car.price}
        <span className="text-[12px] font-light">/day</span>
      </h2>
      <Image
        src={car.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className="w-[250px] h-[150px]
      mb-3 object-contain"
      />
      <div className="flex justify-around group-hover:hidden">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">{car.carType}</h2>
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
      <button className="">Rent Now</button>
    </div>
  );
}

export default CarCard;
