import React from "react";
import CarCard from "./CarCard";

interface Car {
  name: string;
  id: string;
  carAvg: number;
  carType: string;
  carBrand: string;
  price: number;
  seat: number;
  image?: {
    url: string;
  };
}

function CarsList(props: { carsList?: Car[] }) {
  const cars = props.carsList || [];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cars.map((car: Car) => (
        <div key={car.id}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}

export default CarsList;
