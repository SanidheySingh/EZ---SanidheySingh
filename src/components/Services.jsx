import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id='services' className='p-6 w-full relative min-h-screen flex items-center justify-center bg-[url("/assn/BG.png")] bg-cover bg-center'>
        <div className="absolute w-full bottom-0">
          <img src="/assn/Frame33.svg" alt="" className="w-full" />
        </div>
        <div className="relative py-16 mb-16 z-10 lg:p-10 flex gap-20 flex-col  items-center">
          <div className="p-6 pt-0 px-10 w-fit relative">
            <h3 className="font-medium  text-center text-2xl xl:text-3xl halant-regular">
              The storyboard reveals the breadth of our craft.
            </h3>
            <div className="absolute w-full left-1/2 -translate-x-1/2 bottom-0">
              <img src="/assn/Vector5.svg" alt="" />
            </div>
          </div>
          <div className="w-full lg:w-2xl xl:w-4xl flex flex-col lg:flex-row items-center gap-12">
            <Link to="/services/film-production" className="relative hover:shadow-xl hover:shadow-neutral-400 transition-all duration-200 bg-white text-center rotate-8 w-2/3 lg:w-1/3 shadow-lg">
                <img src="/assn/image6.png" alt="" className="w-30 absolute -top-5 -left-10 -rotate-8 z-10" />
                <img src="/assn/Frame18.png" alt="" className="-rotate-8 object-contain" />
                <span className="halant-regular inline-block mb-2">Film Production</span>
            </Link>
            <Link to="/services/branding" className="relative hover:shadow-xl hover:shadow-neutral-400 transition-all duration-200 bg-white top-5 text-center p-2 px-3 w-2/3 lg:w-1/3 shadow-lg">

                <img src="/assn/image6.png" alt="" className="w-30 absolute -top-5 left-1/2 -translate-x-1/2 z-10" />
                <img src="/assn/Frame19.png" alt="" className="object-contain" />
                <span className="halant-regular inline-block mb-2">Branding</span>
            </Link>
            <Link to="/services/art-curation" className="relative hover:shadow-xl hover:shadow-neutral-400 transition-all duration-200 bg-white mt-6 lg:mt-0 text-center -rotate-8 w-2/3 lg:w-1/3 shadow-lg">
                <img src="/assn/image6.png" alt="" className="w-30 absolute -top-5 -right-10 rotate-32 z-10" />
                <img src="/assn/Frame20.png" alt="" className="rotate-8 object-contain" />
                <span className="halant-regular inline-block mb-2">Art Curation</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
