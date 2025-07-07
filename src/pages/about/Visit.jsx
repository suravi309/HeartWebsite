
import React from 'react'

export default function Visit() {
  return (
    <div>
      

          {/* Right: Text and Stats */}
          <div className="lg:ml-10 mt-10 lg:mt-0 text-center lg:text-left max-w-2xl">
            {/* Headline */}
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
              Visit us at any time for diagnosis and treatment <br /> with our 24/7 online clinic.
            </h1>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 my-6 flex-wrap">
              {/* Clinics */}
              <div className="text-center">
                <h2 className="text-3xl font-bold">+200</h2>
                <div className="bg-green-100 text-green-700 font-semibold px-4 py-1 mt-1 rounded-md">
                  Clinics
                </div>
              </div>

              {/* Doctors */}
              <div className="text-center">
                <h2 className="text-3xl font-bold">+500</h2>
                <div className="bg-green-100 text-green-700 font-semibold px-4 py-1 mt-1 rounded-md">
                  Doctors
                </div>
              </div>

              {/* Hours Open */}
              <div className="text-center">
                <h2 className="text-3xl font-bold">24</h2>
                <div className="text-sm text-gray-500 mt-1">Hours Open</div>
              </div>
            </div>

            {/* Caption */}
            <p className="text-sm italic text-gray-500 border-l-4 border-gray-300 pl-4">
              Save time and money. Receive quality care, every time.
            </p>
          </div>
    </div>
  )
}
