
import ImgAbout from './ImgAbout';
import Visit from './Visit';

export default function About() {
  return (
    <div class="flex flex-row items-center justify-center gap-20">
  <div class="basis-1/3  items-center">
    <ImgAbout></ImgAbout>
  </div>
  <div class="basis-2/3">
    <Visit></Visit>
  </div>
</div>

    // <div className="bg-base-200 flex items-center justify-center">
    //   <div className="flex flex-col sm:flex-row gap-6 bg-white  rounded-lg shadow-lg">
        
        
    //     <ImgAbout></ImgAbout>

        
    //     <div className="text-center sm:text-left">
    //       <p className="text-xl font-bold">Jay Riemenschneider</p>
    //       <p className="text-gray-600">jason.riemenschneider@vandelayindustries.com</p>
    //       <p className="mt-4 text-sm italic text-gray-500">
    //         “Dedicated to delivering better health outcomes.”
    //       </p>
    //     </div>
        
    //   </div>
    // </div>
  );
}
