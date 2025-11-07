import React from 'react'
import ServicePage from './ServicePage'

const Branding = () => {
    
    const brandingData = {
        title : "\A brand is a voice, and a product is a souvenir.\" - Lisa Gansky,",
        titleImage : "/assn/branding.png",
        titleAlt : "Branding",
        desc : (
            <>
            A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust. <br />
We shape brands that people remember, return to, and fall in love with. <br />
V creates:
<br />
<ul className=" instrument-regular list-disc list-inside mt-2">
  <li>Branding & Communication</li>
  <li>Market Mapping</li>
  <li>Content Management</li>
  <li>Social Media Management</li>
  <li>Rebranding</li>
</ul>
            </>
        ),
        icons: ["/assn/Services/BrandingVector04.svg", "/assn/Services/BrandingVector03.svg", "/assn/Services/BrandingVector01.svg", "/assn/Services/BrandingVector02.svg"]
    }

  return (
    <ServicePage
        title={brandingData.title}
        titleImage={brandingData.titleImage}
        titleAlt={brandingData.titleAlt}
        desc={brandingData.desc}
        icons={brandingData.icons}
    />
  )
}

export default Branding