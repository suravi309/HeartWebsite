
import aboutImg from '../../../assets/doctor.avif'; 


export default function Booking() {
  return (

    <div className="hero my-2 rounded-3xl overflow-hidden">
      <div
        className="hero-content bg-fixed bg-cover bg-center flex-col lg:flex-row w-full py-16 px-6 md:px-12 lg:px-2 relative"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center lg:text-left max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Your Free Health Consultation or Book Your Appointment Now
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae commodo ipsum, eu ullamcorper magna. Nam non posuere lacus, eget viverra massa sed magna ligula.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
            <button className="btn btn-primary font-bold text-lg">Consultation Now</button>
            <button className="btn btn-secondary font-bold text-lg">Appointment</button>
{/* <Link
  to="/appointment"
  className="btn btn-secondary font-bold text-lg"
>
  Book Appointment
</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
