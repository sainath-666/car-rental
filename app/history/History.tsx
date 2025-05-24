import React from "react";

function History() {
  const dummyHistory = [
    {
      id: 1,
      carName: "Tesla Model S",
      startDate: "2025-05-20",
      endDate: "2025-05-22",
      totalAmount: 240,
      status: "Completed",
    },
    {
      id: 2,
      carName: "BMW X5",
      startDate: "2025-05-15",
      endDate: "2025-05-18",
      totalAmount: 360,
      status: "Completed",
    },
    {
      id: 3,
      carName: "Mercedes-Benz C-Class",
      startDate: "2025-05-10",
      endDate: "2025-05-12",
      totalAmount: 280,
      status: "Cancelled",
    },
    {
      id: 4,
      carName: "Audi Q7",
      startDate: "2025-05-05",
      endDate: "2025-05-08",
      totalAmount: 420,
      status: "Completed",
    },
    {
      id: 5,
      carName: "Porsche 911",
      startDate: "2025-05-18",
      endDate: "2025-05-19",
      totalAmount: 550,
      status: "Completed",
    },
    {
      id: 6,
      carName: "Range Rover Sport",
      startDate: "2025-05-14",
      endDate: "2025-05-16",
      totalAmount: 480,
      status: "Cancelled",
    },
    {
      id: 7,
      carName: "Lexus RX",
      startDate: "2025-05-08",
      endDate: "2025-05-11",
      totalAmount: 390,
      status: "Completed",
    },
    {
      id: 8,
      carName: "Tesla Model X",
      startDate: "2025-05-01",
      endDate: "2025-05-04",
      totalAmount: 520,
      status: "Completed",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Rental History</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs text-gray-500 uppercase bg-gray-800 ">
            <tr>
              <th className="px-6 py-3">Car</th>
              <th className="px-6 py-3">Start Date</th>
              <th className="px-6 py-3">End Date</th>
              <th className="px-6 py-3">Total Amount</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyHistory.map((booking) => (
              <tr
                key={booking.id}
                className=" border-b hover:bg-gray-500 bg-gray-700"
              >
                <td className="px-6 py-4 font-medium  whitespace-nowrap">
                  {booking.carName}
                </td>
                <td className="px-6 py-4">{booking.startDate}</td>
                <td className="px-6 py-4">{booking.endDate}</td>
                <td className="px-6 py-4">${booking.totalAmount}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      booking.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
