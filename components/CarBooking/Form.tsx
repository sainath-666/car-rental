import React from "react";

function Form() {
  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select className="select select-bordered w-full max-w-lg">
          <option disabled selected>
            PickUp Location
          </option>
          <option>Location 1</option>
          <option>Location 2</option>
          <option>Location 3</option>
          <option>Location 4</option>
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">PickUp Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            placeholder="Type here"
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
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div>
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
    </div>
  );
}

export default Form;
