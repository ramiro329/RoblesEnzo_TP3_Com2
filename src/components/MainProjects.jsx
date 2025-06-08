import React from 'react'
import {Link} from "react-router-dom"
const MainProjects = ({imgs}) => {
  return (
     <div className="p-4">

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Mis Proyectos</h2>
      </div>

         <div className="flex gap-4">
       <div className="flex flex-col items-start w-32 bg-black p-2 rounded-lg">
        <img
          src={imgs}
          alt="Project"
          className="w-full h-24 object-cover rounded-lg shadow"
        />
        <Link to="https://github.com/ramiro329/EnciclopediaDeLenguajesDeProgramacion.git">
        <span className="text-sm mt-1 text-gray-600 hover:text-slate-900">Proyecto: Enciclopedia de lenguajes</span>
        </Link>
      </div>

      <div className="flex flex-col items-start w-32 bg-black p-2 rounded-lg">
        <img
          src= "https://wallpapercave.com/wp/wp7250277.jpg"
          alt="Project"
          className="w-full h-24 object-cover rounded-lg shadow"
        />
        <Link to="https://github.com/ramiro329/GestorDeTareasJava.git">
        <span className="text-sm mt-1 text-gray-600 hover:text-slate-900">Proyecto: Gestor de treas de java</span>
        </Link>
      </div>
      </div>

      
    </div>
    
   
  )
}

export default MainProjects
