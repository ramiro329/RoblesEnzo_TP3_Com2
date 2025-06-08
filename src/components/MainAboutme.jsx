import React from 'react';

const MainAboutme = ({ data }) => {
  
  return (
    
    <>
    <div className="max-w-md mx-auto mt-10 p-6 bg-amber-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{data.nombre +" "+data.apellido}</h2>

      <img
        src={data.imagen}
        alt="foto mia"
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
      />

      <p className="text-gray-600 mb-4">{data.bio}</p>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Mis Hobbies</h3>
        <ul className="list-disc list-inside text-gray-700 text-left">
          {data.hobbies.map((hobbie, i) => (
            <li key={i}>{hobbie}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Habilidades</h3>
        <ul className="list-disc list-inside text-gray-700 text-left">
          {data.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
    

  );
};

export default MainAboutme;
