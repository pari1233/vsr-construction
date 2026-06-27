import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import VideoShowcase from "./components/VideoShowcase"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <VideoShowcase />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons/>
    </div>
  )
}

export default App