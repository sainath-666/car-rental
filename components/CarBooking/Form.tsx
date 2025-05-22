import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { createBooking, getStoreLocation } from "@/services";
import React, { useContext, useEffect, useState } from "react";

function Form({ car }: any) {
  const [storeLocation, setStoreLocation] = useState<any>([]);
  const { showToastMsg, setShowToastMsg } = useContext(BookCreatedFlagContext);
  const [error, setError] = useState<string>("");
  const [formValue, setFormValue] = useState<any>({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "",
    carId: "",
  });

  useEffect(() => {
    getStoreLocation_();
  }, []);

  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carId: { connect: { id: car.id } },
      });
    }
  }, [car]);

  const getStoreLocation_ = async () => {
    const resp: any = await getStoreLocation();
    setStoreLocation(resp?.storesLocations);
  };

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Validate required fields
      if (
        !formValue.location ||
        !formValue.pickUpDate ||
        !formValue.dropOffDate ||
        !formValue.pickUpTime ||
        !formValue.dropOffTime ||
        !formValue.contactNumber
      ) {
        setError("Please fill in all required fields");
        return;
      }

      setError("");
      const resp = await createBooking(formValue);
      if (resp) {
        setShowToastMsg(true);
        setTimeout(() => {
          setShowToastMsg(false);
        }, 5000);
      }
    } catch (err: any) {
      console.error("Booking creation failed:", err);
      setError(err.message || "Failed to create booking. Please try again.");
    }
  };

  return (
    <div>
      {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
        >
          <option disabled defaultValue={""}>
            PickUp Location
          </option>
          {storeLocation &&
            storeLocation.map((loc: any, index: number) => (
              <option key={index}>{loc?.address}</option>
            ))}
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">PickUp Date</label>
          <input
            type="date"
            placeholder="Type here"
            name="pickUpDate"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            placeholder="Type here"
            name="dropOffDate"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">PickUp Time</label>
          <input
            type="time"
            placeholder="Type here"
            name="pickUpTime"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            placeholder="Type here"
            name="dropOffTime"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div>
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          name="contactNumber"
          onChange={handleChange}
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="modal-action">
        <button className="btn bg-gray-500 hover:bg-gray-900">Close</button>
        <button
          className="btn bg-blue-500 hover:bg-blue-900"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Form;
