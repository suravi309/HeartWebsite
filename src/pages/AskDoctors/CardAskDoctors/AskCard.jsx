
import { BiSolidLike } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";

const doctors = [
  {
    id: 1,
    name: "Dr. Jena Doe",
    specialization: "Pediatric Surgeon",
    experience: "4 Years",
    rating: "95%",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Dr. John Smith",
    specialization: "Cardiologist",
    experience: "10 Years",
    rating: "98%",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 3,
    name: "Dr. Sarah Lee",
    specialization: "Orthopedic Surgeon",
    experience: "7 Years",
    rating: "92%",
    image: "https://randomuser.me/api/portraits/women/46.jpg"
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    experience: "12 Years",
    rating: "97%",
    image: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    id: 5,
    name: "Dr. Emily White",
    specialization: "Dermatologist",
    experience: "5 Years",
    rating: "94%",
    image: "https://randomuser.me/api/portraits/women/48.jpg"
  },
  {
    id: 6,
    name: "Dr. Alex Brown",
    specialization: "General Physician",
    experience: "8 Years",
    rating: "96%",
    image: "https://randomuser.me/api/portraits/men/49.jpg"
  }
];

export default function AskCard() {
  return (
    <div className="grid grid-cols-2 gap-20">
      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <div className="bg-sky-200 shadow-md rounded-lg p-4 w-80">
            {/* Header */}
            <div className="flex items-center relative space-x-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-16 h-16 rounded-tr-full rounded-bl-full rounded-br-full object-cover absolute bottom-5 -left-10"
              />
              <div>
                <h2 className="text-lg font-semibold mx-10">{doctor.name}</h2>
                <p className="text-gray-500 mx-10">{doctor.specialization}</p>
              </div>
            </div>

            <hr className="my-4" />

            {/* Stats */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1 text-gray-600">
                <BiSolidLike />
                <span>{doctor.rating}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <CiCalendarDate />
                <span>{doctor.experience}</span>
              </div>
              <button className="bg-sky-900 text-white px-4 py-1 rounded-full text-sm hover:bg-green-600">
                CHAT
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
