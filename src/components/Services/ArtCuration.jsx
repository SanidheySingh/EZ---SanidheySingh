import React from 'react'
import ServicePage from './ServicePage'

const ArtCuration = () => {

    const artData = {
        title: "\"V take art where it belongs, to the people.” - Vernita Verma",
        titleImage: "/assn/art.jpg",
        titleAlt: "Art Curation",
        desc: (
          <>
            Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong. <br />
            Through every festival, every performance, and every gathering, we help stories find their stage and their people. <br />
            V curates:
            <br />
            <ul className=" instrument-regular list-disc list-inside mt-2">
              <li>Art Festivals</li>
              <li>Live Performances</li>
              <li>Community Events</li>
              <li>Cultural Storytelling</li>
            </ul>
          </>
        ),
        icons: ["/assn/Services/ArtCurationIcons03.svg", "/assn/Services/ArtCurationIcons01.svg", "/assn/Services/ArtCurationIcons04.svg", "/assn/Services/ArtCurationIcons02.svg"]
    }

  return (
    <ServicePage
        title={artData.title}
        titleImage={artData.titleImage}
        titleAlt={artData.titleAlt}
        desc={artData.desc}
        icons={artData.icons}
    />
  )
}

export default ArtCuration