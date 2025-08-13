
import Carousel from '../../compoents/Carousel/Carousel'

export default function Fasilities() {

  return (
    <div>
    <h1 className="items-center text-center p-10 text-5xl font-bold text-sky-700">
        Facilities
      </h1>
      <div className="flex flex-row">
        <div className="basis-2/3">
          <Carousel></Carousel>
        </div>
        <div className="basis-1/3">
          
        </div>
      </div>
    </div>
  )
}

