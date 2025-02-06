import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Import assets properly

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+918967458965",
    address: {
      line1: "10th Cross, Richmond",
      line2: "Church Road, Basavangudi",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <div className="flex flex-col items-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        {isEdit ? (
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="mt-2 border border-gray-300 p-2 rounded"
          />
        ) : (
          <h2 className="text-xl font-semibold mt-2">{userData.name}</h2>
        )}
      </div>

      <div className="mt-4">
        <p className="text-gray-600">Email:</p>
        {isEdit ? (
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        ) : (
          <p>{userData.email}</p>
        )}
      </div>

      <div className="mt-4">
        <p className="text-gray-600">Phone:</p>
        {isEdit ? (
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        ) : (
          <p>{userData.phone}</p>
        )}
      </div>

      <div className="mt-4">
        <p className="text-gray-600">Address:</p>
        {isEdit ? (
          <>
            <input
              type="text"
              name="line1"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="line2"
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
              className="w-full border border-gray-300 p-2 rounded mt-2"
            />
          </>
        ) : (
          <p>
            {userData.address.line1}, {userData.address.line2}
          </p>
        )}
      </div>

      <div className="mt-4">
        <p className="text-gray-600">Gender:</p>
        <p>{userData.gender}</p>
      </div>

      <div className="mt-4">
        <p className="text-gray-600">Date of Birth:</p>
        <p>{userData.dob}</p>
      </div>

      <button
        onClick={() => setIsEdit(!isEdit)}
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        {isEdit ? "Save Changes" : "Edit Profile"}
      </button>
    </div>
  );
};

export default MyProfile;
