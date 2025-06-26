import About from "./components/About";
import AOSWrapper from "./components/AOSWrapper";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <AOSWrapper>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </AOSWrapper>
  );
}

export default App;
