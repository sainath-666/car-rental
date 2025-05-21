import React from "react";

interface Car {
  name: string;
  id: string;
  carAvg: number;
  carType: string;
  carBrand: string;
  price: number;
  seat: number;
}

function CarsList(props: { carsList?: Car[] }) {
  const cars = props.carsList || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car: Car, index: number) => (
        <div
          key={car.id}
          className="p-6 rounded-xl border-[1px] cursor-pointer hover:border-primary hover:shadow-sm transition-all"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p className="text-gray-500 mt-1">{car.carBrand}</p>
            </div>
            <h2 className="text-xl font-bold">
              ${car.price}
              <span className="text-sm">/day</span>
            </h2>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <img src="/window.svg" height={20} width={20} alt="seat" />
              <p className="text-gray-500">{car.seat} Seats</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/file.svg" height={20} width={20} alt="type" />
              <p className="text-gray-500">{car.carType}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/globe.svg" height={20} width={20} alt="average" />
              <p className="text-gray-500">{car.carAvg} km/l</p>
            </div>
          </div>

          <button className="w-full bg-primary text-white rounded-lg p-2 mt-6 hover:bg-primary/90">
            Rent Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default CarsList;
