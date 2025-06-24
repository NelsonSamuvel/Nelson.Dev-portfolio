import About from "./components/About";
import AOSWrapper from "./components/AOSWrapper";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AOSWrapper>
      <Navbar />
      <Hero />
      <About />
    </AOSWrapper>
  );
}

export default App;
