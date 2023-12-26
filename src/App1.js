import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App1 = () => {
  return (
    <div>
      {/* <div className="  bg-gradient-to-t from-indigo-200 relative overflow-hidden"> */}
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden flex flex-col">
        <Navbar />
        <HeroSec />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App1;
