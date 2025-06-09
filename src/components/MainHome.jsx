import React from "react";

const MainHome = ({ img }) => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'contain' }} 
    >
      <div className="text-white text-center px-6 bg-black bg-opacity-50 rounded p-4">
        <h1 className="text-4xl font-bold mb-4">¡Bienvenido!</h1>
        <p className="text-lg max-w-xl mx-auto">
          Este es mi portafolio digital.
        </p>
      </div>
    </div>
  );
};

export default MainHome;

