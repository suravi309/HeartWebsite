// import Category from "../../../component/Category/Category";
// import Bannar from "../Bannar/Bannar";
// import Card from "../Card/Card";
// import Featutred from "../Featutred/Featutred";
// import PopularMenu from "../PopularMenu/PopularMenu";
// import Testimonials from "../Testimonials/Testimonials";

import Banner from "../compoents/Bannar/Banner";
import Carousel from "../compoents/Carousel/Carousel";
import About from "./about/About";
import AskDoctors from "./AskDoctors/AskDoctors";
import Booking from "./Booking/Booking";
import Fasilities from "./Facilities/Fasilities";
import PeopleTestimonials from "./PeopleTestimonials/PeopleTestimonials";
import SpecialityCircle from "./SpecialityCircle/SpecialityCircle";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      
      <Fasilities></Fasilities>
      <SpecialityCircle></SpecialityCircle>
      <AskDoctors></AskDoctors>
      <Booking></Booking>
      <PeopleTestimonials></PeopleTestimonials>
      {/* <Category></Category>
      <PopularMenu></PopularMenu> 
      <Card></Card>
      <Featutred></Featutred> 
      <Testimonials></Testimonials> */}
    </div>
  );
};

export default Home;