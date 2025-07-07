import React from 'react';
import aboutImg from '../../assets/doctor.avif'; // ✅ Make sure the path is correct

export default function Booking() {
  return (
    <div className="hero my-20 rounded-full">
      <div
        className="hero-content bg-fixed bg-cover rounded-[100px] bg-center flex-col lg:flex-row w-full py-12 px-4"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* Left: Circular image with overlay */}
        <div className="relative overflow-hidden">
          <p className='font-bold px-60 text-sky-800 text-3xl'>Get Your Free Health Consultation or Book Your Appointment Now</p>
          <p className='px-60 pt-5 text-sm text-violet-900'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Fusce vitae commodo ipsum, eu ullam corper magna. Nam non posuere lacus, eget viverra massa sed magna ligula.</p>
          <div className='gap-10 flex mx-60 my-10'>
            <button className="btn btn-primary font-bold text-lg">Consultation Now</button>
            <button className="btn btn-primary font-bold text-lg">Make Appointment</button>
          </div>
          </div> 

      </div>
    </div>
  );
}
