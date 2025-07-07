
import React from "react";

export default function SpecialityCircle() {
  return (
    <div className="relative flex justify-center items-center w-full h-[400px]">
      {/* Outer circles */}
      <div className="absolute w-80 h-80 rounded-full border border-blue-200"></div>
      <div className="absolute w-64 h-64 rounded-full border border-blue-100"></div>

      {/* Central Circle */}
      <div className="z-10 bg-blue-500 text-white rounded-full flex justify-center items-center w-40 h-40 text-center text-xl font-bold">
        Our <br /> Speciality
      </div>

      {/* Orbiting Icons */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-blue-100 p-3 rounded-full shadow">
          🧪
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-pink-100 p-3 rounded-full shadow">
          ❤️
        </div>
      </div>

      <div className="absolute right-80 top-1/2 transform -translate-y-1/2">
        <div className="bg-green-100 p-3 rounded-full shadow">
          📶
        </div>
      </div>

      <div className="absolute left-80 top-20 transform -translate-y-1/2">
        <div className="bg-yellow-100 p-3 rounded-full shadow">
          👥
        </div>
      </div>
    </div>
  );
}
