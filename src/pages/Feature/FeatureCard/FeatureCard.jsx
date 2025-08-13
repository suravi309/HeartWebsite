import React from "react";
import { BsHeartPulse } from "react-icons/bs";
import { RiHeartAdd2Line } from "react-icons/ri";
import { LuHandHeart } from "react-icons/lu";
import { TbHeartRateMonitor } from "react-icons/tb";
import { MdOutlineMedicalServices } from "react-icons/md";
import { TbDropletHeart } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BsClipboardHeart } from "react-icons/bs";
export default function FeatureCard() {
  const servicesData = [
    {
      id: 1,
      category: "Primary Care",
      icon: <RiHeartAdd2Line />,
      image: "https://i.ibb.co/RpGGrLPW/service-01.jpg",
      button: "Read More",
      services: ["General Practitioners (GPs)", "Preventive Care"]
    },
    {
      id: 2,
      category: "Specialty Care",
      icon: <LuHandHeart />,
      image: "https://i.ibb.co/0p6nfTH8/service-02.webp",
      services: ["Cardiology", "Oncology"]
    },
    {
      id: 3,
      category: "Emergency Care",
      icon: <TbHeartRateMonitor />,
      image: "https://i.ibb.co/rfZGHTdd/Services.jpg",
      services: ["Emergency Rooms (ER)", "Trauma Centers"]
    },
    {
      id: 4,
      category: "Surgical Services",
      icon: <MdOutlineMedicalServices />,
      image: "https://i.ibb.co/twYShywX/Surgical-Services.jpg",
      services: ["General Surgery", "Specialized Surgery"]
    },
    {
      id: 5,
      category: "Physiotherapy Services",
      icon: <BsHeartPulse />,
      image: "https://i.ibb.co/CpFL4Zxr/Mental-Health-Services.jpg",
      services: ["Psychiatry", "Psychology"]
    },
    {
      id: 6,
      category: "Cildren Services",
      icon: <TbDropletHeart />,
      image: "https://i.ibb.co/4RLWw8k9/service-03.webp",
      services: ["General Care", "Specialized Care"]
    },
    {
      id: 7,
      category: "Nutrition & Diet Services",
      icon: <BsClipboardHeart />,
      image: "https://i.ibb.co/rRRkq64X/Fitness.jpg",
      services: [
        "Food List Planning",
        "Meal Prep Guidance",
        // "Weight Management",
        // "Diabetes Diet Counseling",
        // "Exercise Recommendations",
        // "Nutritional Deficiency Screening"
      ]
    },
    {
  id: 7,
  category: "Fitness & Wellness Programs",
  icon: <MdOutlineHealthAndSafety />,
  image: "https://i.ibb.co/99KB8QzQ/Healthy-Diets.jpg",
  services: [
    "Exercise Classes",
    "Yoga",
    // "Pilates",
    // "Strength Training",
    // "Cardio Training",
    // "Personalized Workout Plans",
    // "Stress Reduction Techniques"
  ]
},

    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 place-items-center">
      {servicesData.map(service => (
        <div key={service.id} className="card bg-base-100 w-70 shadow-sm border-1 border-sky-200 my-5">
        <h2 className="card-title mx-auto my-2 text-sky-900 text-xl font-bold ">
         
              {service.icon} {service.category}
            </h2>
          <figure>
            <img
              src={service.image}
              alt={service.category}
              className="w-60 h-60 rounded-br-[120px]  border-r-4 border-l-6 border-t-9 border border-sky-400  rounded-tl-[120px]  object-cover"
            />
          </figure>
          <div className="card-body">
            
            <ul className="list-disc list-inside space-y-1">
  {service.services.map((item, idx) => (
    <li key={idx} className="flex  items-center gap-2 text-sky-500">
      <span className="relative inline-grid grid grid-cols-2 grid-flow-col">
        <div className="status status-error animate-ping absolute inset-0"></div>
        <div className="status status-error relative"></div>
      </span>
      {item}
    </li>
  ))}
</ul>

          </div>
        </div>
      ))}
    </div>
  );
}

// export default function FeatureCard() {

//   return (
//     <div className="grid grid-cols-4  gap-0">

//       <div className="card bg-base-100 w-70  shadow-sm">
//         <figure className="">
//             <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="Doctor"
//                 className="w-50 h-60 rounded-br-[120px] border-b-2 border-r-6 border-l-9 border-t-13 border border-sky-400  rounded-tl-[120px]  object-cover"
//               />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">Card Title</h2>
//           <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//           <div className="card-actions">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>



//       <div className="card bg-base-100 w-70 shadow-sm">
//         <figure className="">
//             <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="Doctor"
//                 className="w-50 h-60 rounded-br-[120px] border-b-2 border-r-6 border-l-9 border-t-13 border border-sky-400  rounded-tl-[120px]  object-cover"
//               />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">Card Title</h2>
//           <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//           <div className="card-actions">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>


//       <div className="card bg-base-100 w-70 shadow-sm">
//         <figure className="">
//             <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="Doctor"
//                 className="w-50 h-60 rounded-br-[120px] border-b-2 border-r-6 border-l-9 border-t-13 border border-sky-400  rounded-tl-[120px]  object-cover"
//               />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">Card Title</h2>
//           <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          
//           <div className="card-actions">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>




//       <div className="card bg-base-100 w-70 shadow-sm">
//         <figure className="">
//             <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="Doctor"
//                 className="w-50 h-60 rounded-br-[120px] border-b-2 border-r-6 border-l-9 border-t-13 border border-sky-400  rounded-tl-[120px]  object-cover"
//               />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">Card Title</h2>
//           <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//           <div className="card-actions">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>



//       <div className="card bg-base-100 w-70 shadow-sm">
//         <figure className="">
//             <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="Doctor"
//                 className="w-50 h-60 rounded-br-[120px] border-b-2 border-r-6 border-l-9 border-t-13 border border-sky-400  rounded-tl-[120px]  object-cover"
//               />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">Card Title</h2>
//           <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//           <div className="card-actions">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>



//       <div className="card bg-base-100 w-70 shadow-sm">
//         <figure className="">
//             <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="Doctor"
//                 className="w-50 h-60 rounded-br-[120px] border-b-2 border-r-6 border-l-9 border-t-13 border border-sky-400  rounded-tl-[120px]  object-cover"
//               />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">Card Title</h2>
//           <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//           <div className="card-actions">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>


//       <div className="card bg-base-100 w-70 shadow-sm">
//         <figure className="">
//             <img
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="Doctor"
//                 className="w-50 h-60 rounded-br-[120px] border-b-2 border-r-6 border-l-9 border-t-13 border border-sky-400  rounded-tl-[120px]  object-cover"
//               />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">Card Title</h2>
//           <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//           <div className="card-actions">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
