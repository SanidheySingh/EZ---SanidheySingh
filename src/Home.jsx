import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import AboutTeam from './components/AboutTeam'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function Home() {

  return (
    <>
      <Hero />
      <AboutTeam />
      <AboutUs />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home
