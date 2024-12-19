import './App.css'
import Courses from './components/courses'
import Footer from './components/footer'
import Hero from './components/hero'
import Stats from './components/stats'
import Whyus from './components/whyus'

function App() {
  return (
    <div>
      <Hero />
      <Stats />
      <Courses />
      <Whyus />
      <Footer />
    </div>
  )
}

export default App