import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState({});
  const [selectedDay, setSelectedDay] = useState("MON");
  const [selectedSlot, setSelectedSlot] = useState({});

  // Define specific timings for each day
  const dailyTimings = {
    MON: { start: 10, end: 18 },
    TUE: { start: 9, end: 18 },
    WED: { start: 11, end: 17 },
    THUR: { start: 10, end: 14 },
    FRI: { start: 15, end: 19 },
    SAT: { start: 10, end: 16 },
  };

  useEffect(() => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  }, [doctors, docId]);

  useEffect(() => {
    if (!docInfo) return;

    let slots = {};

    daysOfWeek.forEach((day) => {
      let today = new Date();
      let targetDayIndex = daysOfWeek.indexOf(day);
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + targetDayIndex);

      let timings = dailyTimings[day];
      if (timings) {
        slots[day] = [];
        for (let hour = timings.start; hour < timings.end; hour++) {
          let slotTime = new Date(currentDate);
          slotTime.setHours(hour, 0, 0, 0);

          slots[day].push({
            dateTime: slotTime,
            time: slotTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          });
        }
      }
    });

    setDocSlots(slots);
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        {/* Doctor Profile Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="Verified" />
            </p>
            <p className="text-sm mt-1 text-gray-600">
              {docInfo.degree} - {docInfo.speciality}
            </p>

            {/* Experience and About Section (Displayed Once) */}
            <div className="mt-3">
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience} years
              </button>
            </div>
            <p className="text-sm text-gray-500 max-w-[700px] mt-2">{docInfo.about}</p>

            {/* Appointment Fee */}
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:
              <span className="text-gray-600"> {currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* Day Selection */}
        <div className="mt-6 font-medium text-gray-700">
          <p>Select a Day:</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                className={`py-2 px-4 rounded-full text-sm cursor-pointer ${
                  selectedDay === day ? "bg-primary text-white" : "border border-gray-200"
                }`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Available Slots */}
        <div className="mt-4 font-medium text-gray-700">
          <p>Available Slots for {selectedDay}:</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots[selectedDay] && docSlots[selectedDay].length > 0 ? (
              docSlots[selectedDay].map((slot, index) => (
                <div
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    selectedSlot[selectedDay] === index ? "bg-primary text-white" : "border border-gray-200"
                  }`}
                  onClick={() => setSelectedSlot({ ...selectedSlot, [selectedDay]: index })}
                >
                  <p>{slot.time}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No slots available</p>
            )}
          </div>
        </div>

        {/* Selected Slot Display */}
        <div className="mt-4 text-gray-700">
          {selectedSlot[selectedDay] !== undefined && docSlots[selectedDay] ? (
            <p className="text-sm font-light">
              Selected Slot: {docSlots[selectedDay][selectedSlot[selectedDay]].time}
            </p>
          ) : (
            <p className="text-gray-500">No slot selected</p>
          )}
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'> Book an Appointment</button>
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

      
      </div>

    )
  );
};

export default Appointment;
