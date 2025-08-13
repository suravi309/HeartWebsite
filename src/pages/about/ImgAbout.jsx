import aboutImg from '../../../assets/doctor.avif';


export default function ImgAbout() {
  return (
    <div className="w-80">
      <div
        className="w-[400px] overflow-auto h-[400px] rounded-full bg-cover bg-center bg-fixed relative shadow-lg"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* Overlay with centered text */}
        <div className="absolute inset-0 bg-opacity-30 rounded-full flex items-center justify-center">
          <p className="text-sky-900 text-6xl font-semibold">About Us</p>
        </div>
      </div>
    </div>
  );
}
