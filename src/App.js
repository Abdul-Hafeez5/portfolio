import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="font-nunito">
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <div
          className={`h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 ${
            isDarkMode && "from-slate-800 to-slate-900"
          } relative overflow-hidden`}
        >
          <Navbar />
          <HeroSec />
        </div>
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
