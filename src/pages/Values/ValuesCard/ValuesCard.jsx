import { BsHeartPulse } from "react-icons/bs";
import { BiLeaf } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";

export default function ValuesCard() {
  return (
    <div>
      <div className="flex flex-row gap-6 ">
        <div className="basis-3xs">
          <div className="card bg-base-100   w-60 shadow-sm border  border-sky-400">
            <div className="place-self-center p-4 mt-10 text-sky-100 bg-sky-800  rounded-full ">
              <BsHeartPulse className="w-10 h-10"/>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card Title</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            </div>
          </div>
        </div>

        <div className="basis-2xs -mt-15">
          <div className="card bg-base-100 w-60 shadow-sm border  border-sky-400">
            <div className="place-self-center p-4 mt-10 text-sky-100 bg-sky-800  rounded-full ">
              <BiLeaf className="w-10 h-10"/>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card Title</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            </div>
          </div>
        </div>
        <div className="basis-xs">
          <div className="card bg-base-100 w-60 shadow-sm border  border-sky-400">
            <div className="place-self-center p-4 mt-10 text-sky-100 bg-sky-800  rounded-full ">
              <IoDiamondOutline className="w-10 h-10"/>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card Title</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

