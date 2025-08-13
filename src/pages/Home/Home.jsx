import { FcDepartment } from "react-icons/fc";
import Banner from "../../compoents/Bannar/Banner";
import About from "../about/About";
import AskDoctors from "../AskDoctors/AskDoctors";
import Booking from "../Booking/Booking";
import Fasilities from "../Facilities/Fasilities";
import Feature from "../Feature/Feature";
import PeopleTestimonials from "../PeopleTestimonials/PeopleTestimonials";
import SpecialityCircle from "../SpecialityCircle/SpecialityCircle";
import Values from "../Values/Values";
import Departments from "../Departments/Departments";
import DoctorSector from "../DoctorSector/DoctorSector";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Values></Values>
      <Feature></Feature> 
      <DoctorSector></DoctorSector>
      <Fasilities></Fasilities>
      <SpecialityCircle></SpecialityCircle>
      <AskDoctors></AskDoctors>
      <Departments></Departments>
      <Booking></Booking>
      <PeopleTestimonials></PeopleTestimonials>
    </div>
  );
};

export default Home;