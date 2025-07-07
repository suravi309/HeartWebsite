import bannerImage from "../../../assets/doctor.avif";

export default function CardAskDoctors() {
  return (
   <div class="grid grid-cols-2 gap-20">
   <div>
    <div className="flex">
      <div className="flex">
        <div className="w-[70px]">
          <img src={bannerImage}  className="rounded-r-full rounded-b-full"/>
        </div>
        <div>
          <h2 className="uppercase font-bold px-4">suravi</h2>
        </div>
      </div>
    </div>
   </div>


{/* <div class="z-40 ...">05</div>
<div class="z-30 ...">04</div> */}


<div>
  <div className="card border z-40 flex flex-row bg-sky-500 w-80 shadow-sm indicator">
    <div>
      <div className="flex">
        <div className="w-[50px] indicator-item indicator-start inset-x-0 top-10">
          <div className="w-[200px] z-50">
          <img src={bannerImage}  className="rounded-r-full rounded-b-full w-[150px]"/>
        </div>
        </div>
        <div>
          <h2 className="uppercase font-bold px-10 ">suravi</h2>
        </div>
      </div>
    </div>
    <div className="card-body">
      <h2 className="card-title">Card Title</h2>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
</div>

      
      
      
      {/* <div>
        <div className="card bg-base-100 w-80 shadow-sm indicator">
        <div class="flex flex-col gap-2 pl-20 sm:flex-row sm:items-center sm:gap-6 sm:py-4"> 
        <span className="indicator-item indicator-start  right-10 left-20">
          <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />
        </span>   
          
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-1">
              <p class="text-lg font-semibold text-black  ml-30">Erin Lindford</p>
              <p class="font-medium text-gray-500">Product Engineer</p>
            </div>
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
              Message
            </button>
          </div>
        </div>
          <div className="card-body">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div>
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div> */}



      {/* <div>
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div>
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div>
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div> */}



    </div>
  )
}
