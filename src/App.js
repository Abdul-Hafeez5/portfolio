import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import About from "./components/About";
// import Services from "./components/Services";
function App() {
  return (
    // <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 relative">
    <div className="h-screen lg:h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden">
      <Navbar />
      <HeroSec />
      <About />
      {/* <Services /> */}
    </div>
  );
}

export default App;
