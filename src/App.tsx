import Characters from "./components/characters";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import NightCity from "./components/night-city";
import Arasaka from "./components/sections/arasaka";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <NightCity />
      <Characters />
      <Arasaka />
    </main>
  );
}

export default App;
