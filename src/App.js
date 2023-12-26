import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-nunito">
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        <Navbar />
        <HeroSec />
      </div>
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
