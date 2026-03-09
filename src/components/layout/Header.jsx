import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-60 
    bg-gradient-to-r from-teal-50 to-gray-100 
     dark:bg-gradient-to-r dark:from-gray-200 dark:to-gray-200
            text-gray-900 dark:text-white
            transition-colors duration-500
            space-y-4
    ">
  
      <p className="text-teal-600 text-3xl font-semibold">
        Web Developer's
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Professional Portfolio
      </h1>

    </div>
  )
}
