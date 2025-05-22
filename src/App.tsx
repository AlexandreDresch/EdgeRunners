import Characters from "./components/sections/characters";
import Hero from "./components/sections/hero";
import Navbar from "./components/navbar";
import NightCity from "./components/sections/night-city";
import Arasaka from "./components/sections/arasaka";
import News from "./components/sections/news";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <NightCity />
      <Characters />
      <Arasaka />
      <News />
    </main>
  );
}

export default App;
