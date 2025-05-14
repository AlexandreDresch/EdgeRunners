import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      <section className="z-0 min-h-screen bg-red-500"/>
    </main>
  );
}

export default App;
