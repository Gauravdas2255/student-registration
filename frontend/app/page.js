"use client";

import { useState } from "react";

export default function Home() {

  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    department: "",
    semester: "",
    address: ""
  });

  function handleChange(e) {

    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value
    });

  }

async function handleSubmit(e) {

    e.preventDefault();

    try {

        const response = await fetch(
            "http://localhost:5000/api/students",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)
            }
        );

        const data = await response.json();

        alert(data.message);

        console.log(data);

    } catch (error) {

        console.error("Error:", error);

    }

}

  return (

  <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">

    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">
          Student Registration
        </h1>

        <p className="text-gray-500 mt-2">
          Register yourself to get started
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={student.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={student.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={student.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Department
            </label>
            <select
              name="department"
              value={student.department}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Department</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Semester
            </label>
            <select
              name="semester"
              value={student.semester}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Semester</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Address
          </label>
          <textarea
            name="address"
            value={student.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 hover:scale-[1.02] transition duration-300"
        >
          Register Student
        </button>

      </form>

      <p className="text-center text-gray-400 text-sm mt-6">
        Student Registration System © 2026
      </p>

    </div>
  </div>


  );

}
