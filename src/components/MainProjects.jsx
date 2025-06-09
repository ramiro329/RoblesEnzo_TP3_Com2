import React from 'react';
import { Link } from 'react-router-dom';

const MainProjects = ({ imgs }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Mis Proyectos</h2>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center w-40 bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={imgs}
            alt="Proyecto Enciclopedia"
            className="w-full h-28 object-cover rounded-md mb-3"
          />
          <Link
            to="https://github.com/ramiro329/EnciclopediaDeLenguajesDeProgramacion.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white text-center"
          >
            Proyecto: Enciclopedia de lenguajes
          </Link>
        </div>

        <div className="flex flex-col items-center w-40 bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="https://wallpapercave.com/wp/wp7250277.jpg"
            alt="Proyecto Gestor de tareas"
            className="w-full h-28 object-cover rounded-md mb-3"
          />
          <Link
            to="https://github.com/ramiro329/GestorDeTareasJava.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white text-center"
          >
            Proyecto: Gestor de tareas de Java
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
