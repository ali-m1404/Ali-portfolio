import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./components/layout/Header";

function App() {
  return (
    <div  className=" rounded-t-3xl shadow-[0_0_40px_rgba(0,0,0,0.2)] bg-white 
    bg-gray-100 mt-24 max-w-[1700px] mx-auto p-0 
     bg-gradient-to-r from-teal-50 to-gray-100 
     dark:bg-gradient-to-r dark:from-gray-200 dark:to-gray-200
            text-gray-900 dark:text-white
            transition-colors duration-500
            px-30 
    ">
      
          {/* < Header/> */}
          <Navbar />
          <div className=" mx-auto 
                bg-gradient-to-r from-teal-100 to-gray-100
                dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900
                text-gray-900 dark:text-white
                transition-colors duration-500  
                ">
              
              <main className="">
              
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
              
              </main>
            </div>
      
    </div>
  );
}

export default App;