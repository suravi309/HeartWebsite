import video from '../../../assets/banarvideo.mp4'
export default function Banner() {

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
        <video
            src={video} autoPlay loop muted
            className="w-[400px] h-[400px] outline-4 outline-sky-700 outline-offset-10 shadow-2x rounded-tr-full rounded-bl-full rounded-br-full object-cover "
        />
          
          <div>
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            </div>
            


            {/* Search Bar */}
            <div className="mt-4">
              <div className="flex items-center w-[450px] bg-white shadow-md rounded-full p-2">
                <input
                  type="text"
                  placeholder="Search doctor, medicines or clinic..."
                  className="flex-grow bg-transparent outline-none px-4 text-sm text-gray-700"
                />
                <button className="btn btn-primary hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full">
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
