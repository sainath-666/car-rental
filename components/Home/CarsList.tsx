import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

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
  const [selectedCar, setSelectedCar] = useState<any>([]);

  return (
    <div
      id="car-list"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {cars.map((car: Car) => (
        <div
          key={car.id}
          onClick={() => {
            (window as any).my_modal_4.showModal();
            setSelectedCar(car);
          }}
        >
          <CarCard car={car} />
        </div>
      ))}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <BookingModal car={selectedCar} />
      </dialog>
    </div>
  );
}

export default CarsList;
