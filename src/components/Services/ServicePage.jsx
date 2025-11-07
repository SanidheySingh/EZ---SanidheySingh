import React from "react";
import { Link } from "react-router-dom";

const ServicePage = ({ title, titleImage, titleAlt, desc, icons }) => {
  return (
    <section className='p-6 text-[#252729] w-full relative min-h-screen flex items-center justify-center bg-[url("/assn/BG.png")] bg-cover bg-center'>
      <div className="relative py-16 2xl:w-6xl z-10 lg:p-10 flex gap-16 flex-col  items-center">
      <div className="absolute w-16  top-40 left-0 xl:top-30 xl:-left-20 ">
        <Link to='/' className="text-[#F15D2B] border-[1.4px] border-[#F15D2B] p-2 px-5 w-fit  flex gap-2 items-center justify-center rounded-full halant-regular">
            <img src="/assn/Services/Icon.svg" alt="" />
            Back
        </Link>
      </div>
        {/* icons */}

        <div className="absolute w-16 top-40 right-5 xl:top-30 xl:-right-10">
        <img
          src={icons[0]}
          alt=""
          className="object-contain"
        />
      </div>
      <div className="absolute w-16  top-1/2 left-5 xl:left-auto xl:top-6/11 xl:right-16">
        <img
          src={icons[1]}
          alt=""
          className="object-contain"
        />
      </div>
      <div className="absolute w-16 bottom-2/9 right-14 xl:bottom-8 xl:right-0">
        <img
          src={icons[2]}
          alt=""
          className="object-contain"
        />
      </div>
      <div className="absolute w-16 bottom-34 left-1/4 xl:bottom-8 xl:left-0">
        <img
          src={icons[3]}
          alt=""
          className="object-contain"
        />
      </div>

        <div className="p-0 py-3 md:p-6 lg:p-8 pt-0 lg:px-10 w-fit relative">
          <h3 className="font-medium  text-center text-2xl lg:text-3xl halant-regular">
            {title}
          </h3>
          <div className="absolute w-[90%] lg:w-full left-1/2 -translate-x-1/2 bottom-0">
            <img src="/assn/Vector5.svg" alt="" />
          </div>
          <div></div>
        </div>
        <div className="flex xl:flex-row flex-col lg:w-3xl px-2 lg:p-0 justify-between xl:items-start items-center gap-12">
          <div className="relative bg-white text-center flex flex-col w-[16rem] aspect-[10/11] gap-4 items-center justify-center p-2 shadow-lg shadow-neutral-400">
            <img src={titleImage} alt="" className="h-full object-cover" />
            <span className="halant-regular">
              {titleAlt}
            </span>
          </div>
          <div className="w-xs sm:w-md lg:w-lg flex flex-col gap-16">
            <p className='instrument-regular text-left'>
              {desc}
            </p>
            <div>
                <span className="text-sm">Explore now</span>
                <img src="/assn/Services/Arrow.svg" alt=""  className="h-8"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
