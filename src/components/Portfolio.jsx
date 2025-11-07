import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className='p-6 w-full relative min-h-screen flex items-center justify-center bg-[url("/assn/BG.png")] bg-cover bg-center'>
        <div className="flex flex-col relative py-10 z-10 gap-4 items-center text-[#252729]">
          <p className="text-3xl halant-regular">The Highlight Reel</p>
          <p className="instrument-regular">Watch the magic we’ve captured.</p>
          <div className="relative w-xs sm:w-md md:w-lg lg:w-xl mt-4">
            <img src="/assn/Subtract.png" alt="" className="" />
            <div className="bg-white absolute z-10 top-8 md:top-[3.25rem] lg:top-14 left-2 md:left-4 lg:left-4 flex items-center justify-center h-[68%] w-6 md:w-9 lg:w-12 rounded-md">
              <img
                src="/assn/Vector10.png"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
              />
            </div>
            <div className="w-full h-full absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center ">
              <img src="/assn/Frame17.png" alt="" className="w-[75%] h-[68%]" />
            </div>
            <div className="bg-white absolute z-10 top-8 md:top-[3.25rem] lg:top-14 right-2 md:right-4 lg:right-4 flex items-center justify-center h-[68%] w-6 md:w-9 lg:w-12 rounded-md">
              <img
                src="/assn/Vector9.png"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
              />
            </div>
          </div>
        </div>
          <div className="absolute left-20 top-1/2 -translate-y-[55%] w-20 md:w-38 lg:w-40"><img src="/assn/CamGroup.svg" alt="" className="object-contain"/></div>
          <div className="absolute bottom-0 right-0 w-20 md:w-28 lg:w-40"><img src="/assn/FooterVector.png" alt=""  className="object-contain"/></div>
      </section>
    </>
  );
};

export default Portfolio;
