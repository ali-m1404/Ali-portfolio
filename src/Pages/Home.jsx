import {motion} from 'framer-motion'
import { useEffect } from "react";
import { ArrowDownIcon,  EnvelopeIcon ,StarIcon ,CodeBracketIcon } from '@heroicons/react/24/solid';

function Home() {
  useEffect(() => {
    document.title = "Ali | Front-End React Developer";
  }, []);

  return (
    <div className=" min-h-screen bg-gradient-to-br from-teal-100 to-teal-50 dark:from-slate-900 dark:via-gray-700 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header with Image and Text */}
          <div className=" bg-white/80 dark:bg-white/10 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-2xl border border-gray-200 dark:border-white/20 transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              {/* Right Side - Text Content (اکنون در سمت چپ) */}
              <div className="md:w-3/5 text-center md:text-left order-2 md:order-1">
                {/* Greeting */}
                <div className="mb-4">
                  <span className="inline-block text-lg text-gray-600 dark:text-white/80 border border-gray-300 dark:border-white/20 px-4 py-2 rounded-full">
                    👋 Hello, I'm
                  </span>
                </div>
                
                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
                  Ali jan <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-teal-500 dark:from-yellow-400 dark:to-teal-500">Mohseni</span>
                </h1>
                
                {/* Title */}
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-white/90">
                    Web Developer
                  </h2>
                </div>
                
                {/* Description */}
                <div className="mb-8">
                  <p className="text-lg text-gray-600 dark:text-white/80 leading-relaxed">
                    Aspiring Full-Stack Developer who enjoys building complete web applications — from clean user interfaces to functional backend systems. I work with modern technologies such as React and backend APIs to create responsive and scalable solutions. I'm currently seeking an internship to gain real-world development experience and grow as a full-stack engineer
                  </p>
                </div>
                
                {/* Stats - با رنگ‌های متفاوت برای مودها */}
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mb-8">
                  <div className="text-center">
                    <div className="text-md font-bold text-gray-800 dark:text-white">Tailwind CSS</div>
                    <div className="text-sm text-gray-500 dark:text-white/60 border-l-2 px-0.5">30 hours hands-on practice</div>
                  </div>
                  <div className="text-center">
                    <div className="text-md font-bold text-gray-800 dark:text-white">React</div>
                    <div className="text-sm text-gray-500 dark:text-white/60 border-l-2 px-0.5"> 90 hours projects & exercises </div>
                  </div>
                  <div className="text-center">
                    <div className="text-md font-bold text-gray-800 dark:text-white">ASP.NET Core</div>
                    <div className="text-sm text-gray-500 dark:text-white/60 border-l-2 px-0.5">240 hours learning & mini projects</div>
                  </div>
                </div>
                
                {/* Buttons - با استایل‌های متفاوت برای مودها */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-teal-500 dark:from-yellow-400 dark:to-teal-500 text-black rounded-lg font-semibold text-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95">
                    <span className="relative  flex items-center gap-2">
                      DOWLOD CV
                      <ArrowDownIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  
                  <button className="group relative px-8 py-4 bg-transparent border-2 border-gray-400 dark:border-white/30 text-gray-700 dark:text-white rounded-lg font-semibold text-md overflow-hidden transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-600 dark:hover:border-white hover:shadow-2xl hover:scale-105 active:scale-95 backdrop-blur-sm">
                    <span className="relative  flex items-center gap-2">
                      CONTACT US
                      <EnvelopeIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Left Side - Profile Image (اکنون در سمت راست) */}
              <div className="md:w-2/5  md:order-2 ">
                <div className="relative group  ">
                  {/* Image Container */}
                  <div className="relative sm: w-72 h-72 mx-auto rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 shadow-xl  ">
                    
                      <img 
                      src="/imges/Ali1.jpeg" 
                      alt="Ali Jan Mohseni"
                      className="w-full h-7xl object-cover"
                    />
                   
                  </div>
                  
                  {/* Floating Stats - با استایل مود محور */}
                  <div className="absolute -bottom-4 left-8 bg-gradient-to-r from-yellow-500 to-teal-500 dark:from-yellow-400 dark:to-teal-500 rounded-xl p-3 shadow-xl">
                    <div className="flex items-center gap-2 text-gray-600">
                      <StarIcon className="w-5 h-5" />
                      <span className="font-bold">Top Rated</span>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 right-8 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <CodeBracketIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      <span className="font-bold text-gray-800 dark:text-white">Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Decoration - با استایل مود محور */}
          <div className="mt-8 flex justify-center gap-3">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-teal-500 dark:from-yellow-400 dark:to-teal-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gray-300 dark:bg-white/20 rounded-full"></div>
            <div className="w-16 h-1 bg-gray-300 dark:bg-white/20 rounded-full"></div>
          </div>

         
        </div>
      </div>
      
    </div>
  );
}

export default Home;