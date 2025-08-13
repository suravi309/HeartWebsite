
import ImgAbout from './ImgAbout';
import Visit from './Visit';

export default function About() {
  return (
    <div className="flex flex-row items-center justify-center gap-20">
       <div className="basis-1/3  items-center">
        <ImgAbout></ImgAbout>
      </div>
      <div className="basis-2/3">
        <Visit></Visit>
      </div>
    </div>
  );
}
