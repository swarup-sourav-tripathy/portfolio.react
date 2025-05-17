import './app.scss'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/heroSection/HeroSection'
import Projects from './components/Projects/Projects'
import Footer from './components/footer/footer'
import About from './components/about/About'

function App() {

  return (
    <div>
      <section id='Homepage'> 
        <Navbar />
        <HeroSection />
      </section>
      <section id='About'>
        <About />
      </section>
      <section id='Projects'>
        <Projects />

        <section id='footer'>
          <Footer />
        </section>
      </section>


    </div>
  )
}

export default App
