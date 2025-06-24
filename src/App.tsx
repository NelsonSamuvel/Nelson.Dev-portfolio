import AOSWrapper from "./components/AOSWrapper";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AOSWrapper>
      <div className="w-full max-w-screen-xl md:mx-auto">
        <Navbar />
        <Hero />
      </div>
    </AOSWrapper>
  );
}

export default App;
