import './App.css'
import NavBar from './components/NavBar'
import Home from './Home'
import FilmProduction from './components/Services/FilmProduction'
import Branding from './components/Services/Branding'
import ArtCuration from './components/Services/ArtCuration'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/film-production" element={<FilmProduction />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/art-curation" element={<ArtCuration />} />
      </Routes>
    </Router>
  )
}

export default App
