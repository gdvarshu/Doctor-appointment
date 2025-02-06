import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    console.log("Doctors Data:", doctors);  // Debugging Log
  }, [doctors]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">My Appointments</h1>

      {doctors?.length === 0 ? (
        <p className="text-gray-600">No appointments scheduled yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {doctors?.slice(0, 2).map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 border">
              <div className="flex items-center gap-4">
                <img 
                  src={item?.image || 'default-image.jpg'} 
                  alt={item?.name || "Doctor"} 
                  className="w-20 h-20 object-cover rounded-full border border-gray-300" 
                />
                <div>
                  <h2 className="text-lg font-medium">{item?.name || "Doctor Name"}</h2>
                  <p className="text-sm text-gray-500">{item?.speciality || "Specialty"}</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 mt-2">
                <p className="font-medium">📍 Address:</p>
                <p>{item?.address?.line1 || "Not Available"}</p>
                <p>{item?.address?.line2 || ""}</p>
              </div>

              <p className="text-sm text-gray-500 font-medium mt-2">
                📅 <span className="text-gray-800">25 July 2024 | 8:30 PM</span>
              </p>

              <div className="flex gap-3 mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">💳 Pay Online</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">❌ Cancel Appointment</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyAppointments;
