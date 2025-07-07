import React from "react";
import Flicking, { useFlickingReactiveAPI } from "@egjs/react-flicking";
import Button from "@mui/material/Button";
import "@egjs/react-flicking/dist/flicking.css"; 
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


export default function Carousel() {
  // const flickingRef = React.useRef(null);

  // const { isReachStart, isReachEnd, moveTo } = useFlickingReactiveAPI(flickingRef);

  // ✅ Panel data
 const panels = [
  {
    id: 1,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 1",
    desc: "This is card 1. A card component has a figure, a body, a title, and actions."
  },
  {
    id: 2,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 2",
    desc: "This is card 2. A card component has a figure, a body, a title, and actions."
  },
  {
    id: 3,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 3",
    desc: "This is card 3. A card component has a figure, a body, a title, and actions."
  },
  {
    id: 4,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 4",
    desc: "This is card 4. A card component has a figure, a body, a title, and actions."
  },
  {
    id: 5,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 5",
    desc: "This is card 5. A card component has a figure, a body, a title, and actions."
  },
  {
    id: 6,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 6",
    desc: "This is card 6. A card component has a figure, a body, a title, and actions."
  },
  {
    id: 7,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 7",
    desc: "This is card 7. A card component has a figure, a body, a title, and actions."
  },
  {
    id: 8,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 8",
    desc: "This is card 8. A card component has a figure, a body, a title, and actions."
  },
  {
    id: 9,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 9",
    desc: "This is card 9. A card component has a figure, a body, a title, and actions."
  },
  {
    id: 10,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Card 10",
    desc: "This is card 10. A card component has a figure, a body, a title, and actions."
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
        {panels.map((panel, index) => (
          <div
            key={index}
            className="panel p-2 box-border"
          >
            <div className="card bg-white w-60 shadow-sm mx-auto">
              <figure className="">
                <img
                  src={panel.img}
                  alt={panel.title}
                  className="rounded-br-[60px]"
                />
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">{panel.title}</h2>
                <p>{panel.desc}</p>
                <div className="card-actions">
                  <button className="btn btn-primary ml-30 rounded-tl-[20px]">Buy Now</button>
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
