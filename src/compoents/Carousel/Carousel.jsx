import React from "react";
import Flicking, { useFlickingReactiveAPI } from "@egjs/react-flicking";
import Button from "@mui/material/Button";
import "@egjs/react-flicking/dist/flicking.css"; 
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


export default function Carousel() {
 const heartFacilities = [
  {
    id: 1,
    image: "https://i.ibb.co/5XVDmmZP/Cardiology-Consultation.jpg",
    title: "Cardiology Consultation",
    details: "Expert consultation to evaluate your heart health and recommend appropriate treatments."
  },
  {
    id: 2,
    image: "https://i.ibb.co/Cp9gY4tR/Electrocardiogram.jpg",
    title: "Electrocardiogram (ECG/EKG)",
    details: "A simple, non-invasive test to measure the electrical activity of your heart."
  },
  {
    id: 3,
    image: "https://i.ibb.co/r20MdWfC/Echocardiography.jpg",
    title: "Echocardiography",
    details: "An ultrasound scan that provides detailed images of your heart’s structure and function."
  },
  {
    id: 4,
    image: "https://i.ibb.co/BKTsc9VR/Stress-Testing.jpg",
    title: "Stress Testing",
    details: "Monitors your heart during physical exertion to identify any underlying issues."
  },
  {
    id: 5,
    image: "https://i.ibb.co/hFrGjrz3/Angiography-Angioplasty.jpg",
    title: "Angiography & Angioplasty",
    details: "Minimally invasive procedures to diagnose and treat blocked coronary arteries."
  },
  {
    id: 6,
    image: "https://i.ibb.co/Zz9NN552/Pacemaker-Implantation.jpg",
    title: "Pacemaker Implantation",
    details: "Procedure to implant a pacemaker device to regulate irregular heartbeats."
  },
  {
    id: 7,
    image: "https://i.ibb.co/SwdBRm9w/Cardiac-Rehabilitation.jpg",
    title: "Cardiac Rehabilitation",
    details: "Personalized exercise and education programs to help you recover and stay healthy after a cardiac event."
  },
  {
    id: 8,
    image: "https://i.ibb.co/VWh87xQ3/Heart-Healthy-Diet-Counseling.jpg",
    title: "Heart-Healthy Diet Counseling",
    details: "Guidance on nutrition and lifestyle changes to improve your heart health."
  }

];


  const flickingRef = React.useRef(null);
  const {
    isReachStart,
    isReachEnd,
    moveTo
  } = useFlickingReactiveAPI(flickingRef);

  const handlePrev = () => {
    if (!isReachStart) {
      moveTo(flickingRef.current.index - 1);
    };
  };

  const handleNext = () => {
    if (!isReachEnd) {
      moveTo(flickingRef.current.index + 1);
    };
  };

  return (
    <div>
      <div className="max-w-2xl  my-0">
      <Flicking
        ref={flickingRef}
        align="center"
        circular={false}
        style={{ height: "auto" }}
      >
        {heartFacilities.map((panel, index) => (
          <div
            key={index}
            className="panel p-2 box-border"
          >
            <div className="card bg-white w-60 shadow-sm mx-auto">
              <figure className="">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="rounded-br-[60px]"
                />
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">{panel.title}</h2>
                <p>{panel.details}</p>
                <div className="card-actions">
                  <button className="btn btn-primary ml-30 rounded-tl-[20px]">Read  more</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Flicking>

      
    </div>
    <div className="flex gap-2 justify-center  my-4 ml-180">
        
        <Button
          variant="contained"
          onClick={handlePrev}
          disabled={isReachStart}
        >
         <FaArrowCircleLeft />
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={isReachEnd}
        >
          <FaArrowCircleRight />
        </Button>
      </div>
    </div>
  );
}
