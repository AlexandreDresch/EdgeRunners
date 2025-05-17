import Hero from "./components/hero";
import Navbar from "./components/navbar";
import NightCity from "./components/night-city";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <NightCity />
    </main>
  );
}

export default App;
