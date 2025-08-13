import { GiMedicines, GiHeartOrgan } from "react-icons/gi";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { SiOrganicmaps } from "react-icons/si";

const departments = [
  {
    icon: <GiMedicines className="w-10 h-10" />,
    title: "Pharmacy",
    description: "We provide all types of medicines and consultations."
  },
  {
    icon: <LiaFileMedicalAltSolid className="w-10 h-10" />,
    title: "Medical Records",
    description: "Manage and access patient records easily."
  },
  {
    icon: <GiHeartOrgan className="w-10 h-10" />,
    title: "Cardiology",
    description: "Heart-related diagnostics and treatment."
  },
  {
    icon: <SiOrganicmaps className="w-10 h-10" />,
    title: "Organic Health",
    description: "Natural therapies and lifestyle improvements."
  },
];

export default function CardDepartments() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
    
      {departments.map((dept, index) => (
        <div key={index} className="card bg-base-100 w-60 shadow-sm border border-sky-400">
          <div className="place-self-center p-4 mt-10 text-sky-100 bg-sky-800 rounded-full">
            {dept.icon}
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{dept.title}</h2>
            <p>{dept.description}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
}
