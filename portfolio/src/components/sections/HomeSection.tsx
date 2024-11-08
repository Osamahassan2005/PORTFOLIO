import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import HomeImage from "@/assets/images/home-img.jpg";

const HomeSection = () => {
  return (
    <Wrapper>
      <div className="space-y-10 lg:flex justify-between w-full px-10 mt-16 gap-4">
        <div className="w-full lg:w-1/2  mt-20 pt-4">
          <h1 className="text-[2.6rem] leading-10 md:text-5xl font-bold py-2 text-[orange] heading ">
            
            Welcome To My Website

          </h1>
          <p className="text-sm sm:text-lg font-medium py-2 pb-4">

          'My coding journey began with curiosity and a desire to create something meaningful. I started with HTML, CSS, and JavaScript, which taught me the fundamentals of web development and allowed me to build interactive projects like an interactive resume.
           From there, I dove into Python, completing various projects such as a dictionary task for a restaurant menu and a term project on building a simple database management system from scratch. Each step has been a blend of learning, problem-solving, and creativity,
            paving the way for my current focus on UI design with React components and styling using Custom CSS and Tailwind CSS. This journey has strengthened my skills and fueled my passion for developing intuitive and functional web applications.'
          
          </p>
          <Button
            text="Get Started"
            className="mx-auto block my-2 ms:my-0 sm:inline sm:mx-0"
          />
        </div>
        <div className="lg:w-1/2 overflow-hidden hover:rounded-xl rounded-xl">
          <Image
            src={HomeImage}
            alt="developers team image"
            className="w-full  rounded-xl hover:scale-110 duration-500 hover:duration-500 hover:rounded-xl"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
