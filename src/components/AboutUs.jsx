import React from "react";

const AboutUs = () => {
  return (
    <>
      <section id="aboutus" className='p-6 w-full min-h-fit max-h-screen md:h-screen flex flex-col gap-6 lg:gap-0 lg:flex-row items-center bg-[url("/assn/BG.png")] bg-cover bg-center'>
        <div className="relative text-center items-center justify-center mt-16 w-full lg:w-1/2 h-full flex flex-col lg:ml-6 text-[#252729]">
          <p className="text-3xl halant-regular ">
            A montage of familiar faces and names.
          </p>
          <p className="mt-4 instrument-regular">
            Some stories come from the biggest names. Others begin with bold,
            rising voices. We’ve been fortunate to walk alongside both -
            listening, creating, and building stories that matter.
          </p>
          <div className="relative flex mt-10 ">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 translate-x-16 lg:translate-x-20">
              <img
                src="/assn/Frame9.png"
                alt=""
                className="absolute object-contain"
              />
            </div>
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-60  lg:h-60">
              <img
                src="/assn/Frame22.png"
                alt=""
                className="absolute object-contain"
              />
            </div>
            <div className="relative w-40 h-40 lg:w-60 sm:w-48 sm:h-48  lg:h-60 -translate-x-16 lg:-translate-x-20">
              <img
                src="/assn/Frame23.png"
                alt=""
                className="absolute object-contain "
              />
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-full flex flex-col gap-8">
          <p className="island-moments-regular text-4xl lg:text-5xl leading-[1.3] text-center text-[#0F3255]">
            Every project is more than just a brief - it’s a new chapter waiting
            to be written. Together, we've crafted tales that inspire, connect,
            and endure.
          </p>
          <div className="relative w-fit z-10">
          <img src="/assn/Group10.png" alt="" className=""/>
          <img
            src="/assn/OBJECTS.png"
            alt=""
            className="absolute  w-[70%] max-w-full bottom-0 left-1/2 -translate-x-1/2"
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
