import React from "react";

const Hero = () => {
  return (
    <section id="home" className='p-6 w-full min-h-fit h-screen flex gap-12 flex-col md:flex-row items-center bg-[url("/assn/BG.png")] bg-cover bg-center'>
      <div className="relative mt-16 md:mt-0 w-full md:w-1/2 p-12 flex items-center justify-center overflow-visible">
      <div className="absolute flex justify-center w-full z-0 pointer-events-none">
        <img
          src="/assn/Hero/Hero Mandala.svg"
          alt="Mandala"
          className=" w-52 h-52 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] 2xl:h-fit 2xl:w-fit 
           object-contain"
        />
        </div>
        <img
          src="/assn/VFilms Logo.png"
          alt="VFilms Logo"
          className="relative z-10 w-32 md:w-64 lg:w-xs 2xl:w-sm object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-12 p-6 justify-center items-center text-center">
        <h1 className="text-[#0F3255] text-7xl md:text-6xl lg:text-7xl 2xl:text-8xl md:leading-normal island-moments-regular">
          Varnan is where stories find their voice and form
        </h1>
        <p className="text-[#F15D2B] text-2xl lg:text-4xl halant-regular">
          Films . Brands . Art
        </p>
        <p className="text-[#252729] text-sm xl:text-base w-3/4 md:w-2/3 mx-auto">
          Since 2009, V’ve been telling stories - stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way - by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories - V honors them.
        </p>
      </div>
    </section>
  );
};

export default Hero;
