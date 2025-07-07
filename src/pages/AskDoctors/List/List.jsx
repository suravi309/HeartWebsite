import React from 'react';

const List = () => {

  return (
    <div>
      <ul className="menu bg-base-200 rounded-box w-56 gap-5 p-4">
        <li className="menu-title text-5xl font-bold text-sky-700">
          Ask Doctors
        </li>

        <li>
          <button
            className="rounded-full bg-sky-400 text-white text-center px-4 py-2 w-full hover:bg-sky-600"
          >
            All
          </button>
        </li>

        <li>
          <button
            className="rounded-full bg-sky-400 text-white text-center px-4 py-2 w-full hover:bg-sky-600"
          >
            Orthopedic
          </button>
        </li>

        <li>
          <button
            className="rounded-full bg-sky-400 text-white text-center px-4 py-2 w-full hover:bg-sky-600"
          >
            Nutritionist
          </button>
        </li>
        <li>
          <button
            className="rounded-full bg-sky-400 text-white text-center px-4 py-2 w-full hover:bg-sky-600"
          >
            Pediatric
          </button>
        </li>
        <li>
          <button
            className="rounded-full bg-sky-400 text-white text-center px-4 py-2 w-full hover:bg-sky-600"
          >
            Anaesthestic
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
