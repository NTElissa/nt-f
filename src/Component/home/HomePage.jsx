import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" ml-20 flex flex-col items-center justify-center h-screen">
      <nav className="bg-gray-800 w-full py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">My Portfolio</Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 text-lg">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 text-lg">About Me</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 text-lg">Contact</Link>
            <Link to="/portfolio" className="text-white hover:text-gray-300 text-lg">Portfolio</Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-20">
        <Link to="/loginPage">
          <h1 className="text-3xl font-bold underline text-green-500">
            NTIHINDUKA Elissa
          </h1>
        </Link>
      </div>
  
      </div>
   
  );
}

export default Home;
