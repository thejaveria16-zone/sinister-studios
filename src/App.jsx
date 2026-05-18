import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Films from './sections/Films'
import Services from './sections/Services'
import Founder from './sections/Founder'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll />

      {/* Global atmospheric overlays */}
      <div className="film-grain" />
      <div className="vignette" />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Films />
        <Services />
        <Founder />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
