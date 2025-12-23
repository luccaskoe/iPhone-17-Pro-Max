import NavBar from "./assets/components/NavBar"
import Hero from "./assets/components/Hero"
import Intro from "./assets/components/Intro"
import Highlights from "./assets/components/Highlights"
import Colors from "./assets/components/Colors"
import Footer from "./assets/components/Footer"



function App() {
  return (
    <main>
      <NavBar />
      <div className="pt-16">
        <Hero />
        <Intro />
        <Highlights />
        <Colors />
        <Footer />
      </div>
    </main>
  )
}

export default App;