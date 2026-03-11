import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="relative bg-gray-50 border-t border-t-amber-500 
     dark:bg-gray-600/80 backdrop-blur-md transition-all duration-300 dark:border-0
     flex justify-between items-center 
     px-4 sm:px-8 lg:px-15 py-4 
     shadow-lg
    rounded-t-3xl space-x-2.5 z-50">
       
            {/* Logo with gradient */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent dark:text-white ">
                Ali.dev
            </h1>

            {/* مینوی های نوبار */}
               <div className="hidden md:flex items-center justify-center gap-8  max-w-6xl lg:space-x-9 "> 
                {navLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                    `relative font-medium transition-colors duration-300 hover:-blue-600 dark:hover:text-teal-400 group ${
                        isActive 
                        ? "text-teal-600 dark:text-teal-400" 
                        : "text-gray-700 dark:text-gray-200"
                    }`
                    }
                >
                    {link.name}
                    {/* Hover underline animation */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                    {/* Active link indicator */}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 dark:bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NavLink>
                ))}
               </div>

            {/* Theme Toggle Button */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="hidden md:block relative overflow-hidden bg-gradient-to-r from-teal-500 to-sky-600 px-4 py-2 rounded-full text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                <span className="relative z-10 flex items-center gap-1">
                {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                <span>{darkMode ? "Light" : "Dark"}</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-sky-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
                {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                )}
            </button>

            {/* Mobile Menu */}
           <div
                className={`absolute top-full left-0 w-full bg-white dark:bg-gray-400 shadow-xl md:hidden transition-all duration-500  ${
                    mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                } z-[999]`}
                >
                <div className="flex flex-col items-center py-6 space-y-4 z-[999]">
                {navLinks.map((link) => (
                    <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                        `relative font-medium text-lg transition-colors duration-300 hover:text-teal-600 dark:hover:text-teal-400 group z-[999]${
                        isActive 
                            ? "text-teal-600 dark:text-teal-400" 
                            : "text-gray-700 dark:text-gray-200"
                        }`
                    }
                    >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 transition-all duration-300 group-hover:w-full "></span>
                    </NavLink>
                ))}
                
                {/* Mobile Theme Toggle */}
                <button
                    onClick={() => {
                    setDarkMode(!darkMode);
                    setMobileMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-teal-500 to-teal-300 px-6 py-2 rounded-full text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-lg mt-4"
                >
                    <span className="flex items-center gap-2">
                    {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                    </span>
                </button>
                </div>
            </div>
       
    </nav>
  );
}

export default Navbar;