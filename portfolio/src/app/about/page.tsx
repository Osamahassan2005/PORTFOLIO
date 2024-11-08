import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/images/about-img.jpg";
const AboutPage = () => {
  return (
    <Wrapper>
      <div className=" text-center">
        <Heading text="About Us" />
        <div className="space-y-10 lg:flex justify-between w-full px-10  gap-4">
          <div className="w-full lg:w-1/2  lg:mt-20 pt-4">
            <p className="text-sm sm:text-lg font-medium py-2 pb-4">
            I'm Osama, a driven undergraduate student at NED University, pursuing a degree in Computer Information Systems (BE CIS). 
            Currently, I'm enrolled in the prestigious Governor's Initiative program, where I've gained expertise in cutting-edge technologies like Generative AI and Web3.0. I'm passionate about harnessing the power of technology to drive innovation and growth, and I'm excited to connect with like-minded professionals and explore opportunities to collaborate and learn from each other.
            </p>
            <Button
              text="More Information"
              className="mx-auto block my-2 ms:my-0 sm:inline sm:mx-0"
            />
          </div>
          <div className="lg:w-1/2 overflow-hidden hover:rounded-xl rounded-xl">
            <Image
              src={aboutImage}
              alt="MY PROFILE"
              className="w-full  rounded-xl hover:scale-110 duration-500 hover:duration-500 hover:rounded-xl"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
