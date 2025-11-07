import React from "react";
import { Link } from "react-router-dom";
import ServicePage from "./ServicePage";

const FilmProduction = () => {

    const filmData = {
        title: "\"Filmmaking is a chance to live many lifetimes.\" - Robert Altman",
        titleImage: "/assn/film.png",
        titleAlt: "Film Production",
        desc: (
          <>
            Who says films are just an escape? <br />
            We see them as a way to live many lives - to feel, to explore, and to tell stories that stay.
            And with each film, we carry new memories and new reasons to keep creating. <br />
            V crafts:
            <br />
            <ul className=" instrument-regular list-disc list-inside mt-2">
              <li>Documentaries</li>
              <li>Corporate Videos</li>
              <li>2D Animation Videos</li>
              <li>3D Animation Videos</li>
            </ul>
          </>
        ),
        icons: ["/assn/Services/Camera01.svg", "/assn/Services/Camera03.svg", "/assn/Services/Camera02.svg", "/assn/Services/Camera04.svg"]
    }
  return (
    <ServicePage
        title={filmData.title}
        titleImage={filmData.titleImage}
        titleAlt={filmData.titleAlt}
        desc={filmData.desc}
        icons={filmData.icons}
    />
  );
};

export default FilmProduction;
