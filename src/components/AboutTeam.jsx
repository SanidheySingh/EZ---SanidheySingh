import React from "react";

const AboutTeam = () => {
  return (
    <section
      id="aboutteam"
      className='p-6 w-full min-h-fit h-screen flex relative items-center  justify-center lg:justify-end bg-[url("/assn/BG.png")] bg-cover bg-center'
    >
      <div className="relative z-10 top-10 lg:w-1/2 h-fit flex  gap-8 lg:gap-4 flex-col justify-center items-center">
        <div className="relative w-fit flex flex-col justify-center items-center mb-4 sm:mb-0 ">
          <div className=" absolute -left-14 sm:-left-16 sm:top-36 md:-left-24 lg:-left-40 top-25 lg:top-30">
            <img
              src="/assn/Vector.svg"
              alt=""
              className="w-16 md:w-24 lg:w-32 2xl:w-36"
            />
            <span className="text-[#0F3255] z-20 text-nowrap absolute md:-left-24 lg:-left-30 text-3xl island-moments-regular">
              Branding Experts
            </span>
          </div>
          <div className="absolute -top-14 sm:left-28 md:-top-16 lg:-top-22 left-16 md:left-22 lg:left-20 -2xl:top-24">
            <img
              src="/assn/Vector-1.svg"
              alt=""
              className="w-16 md:w-24 lg:w-32 2xl:w-36"
            />
            <span className="text-[#0F3255] absolute -top-10 -left-20 text-3xl island-moments-regular">
              Film Makers
            </span>
          </div>
          <div className="absolute -right-14 md:-right-24 top-0 md:-top-5 lg:-right-16 lg:-top-20 2xl:-right-28">
            <img
              src="/assn/Vector-2.svg"
              alt=""
              className="w-12 md:w-20 lg:w-20 2xl:w-28"
            />
            <span className="text-[#0F3255] absolute right-0 md:-right-14 lg:right-4 2xl:right-auto text-nowrap -top-12 text-3xl island-moments-regular">
              Art Curators
            </span>
          </div>
          <img
            src="/assn/Group 2.svg"
            alt=""
            className="w-72 sm:w-96 lg:w-md 2xl:w-lg"
          />
        </div>

        <p className="text-lg xl:text-2xl halant-regular">
          Take a closer look at the stories V bring to life.
        </p>
        <a
          href="#portfolio"
          className="bg-[#F15D2B] text-white w-fit rounded-full px-4 py-1 inline-block text-center"
        >
          View Portfolio
        </a>
      </div>
      <div className="absolute top-0 right-5 md:right-20 lg:right-auto lg:left-1/6">
        <img
          src="/assn/Group9.png"
          alt=""
          className="w-60 md:w-72 lg:w-80 xl:w-sm 2xl:w-md object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-2 sm:left-10">
        <img
          src="/assn/indgate.svg"
          alt=""
          className="w-40 md:w-50 lg:w-60 2xl:w-80 object-contain"
        />
      </div>
    </section>
  );
};

export default AboutTeam;
