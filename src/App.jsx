import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import ArtistPage from './pages/ArtistPage'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists/:slug" element={<ArtistPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
