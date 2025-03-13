import React, { useState } from "react";

export const ToList = () => {
  const [materias, setMaterias] = useState([]);

  const [materia, setMateria] = useState({
    nombre: "",
    credito: "",
    semestre: "",
  });

  const guardar = (e) => {
    e.preventDefault();
    if (materia.nombre.trim() && materia.credito.trim() && materia.semestre.trim()) {
      setMaterias([...materias, materia]);
      setMateria({
        nombre: "",
        credito: "",
        semestre: "",
      });
    }
  };

  return (
    <header className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-white-500">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <form onSubmit={guardar} className="space-y-6 p-6">
              <h1 className="">To list</h1>
              <div className="block text-sm font-medium text-gray-900">
                <label htmlFor="nombre" className="block text-center">
                  Nombre:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="nombre"
                    value={materia.nombre}
                    onChange={(e) => setMateria({ ...materia, nombre: e.target.value })}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="block text-sm font-medium text-gray-900">
                <label htmlFor="credito" className="block text-center">
                  Credito:
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="credito"
                    value={materia.credito}
                    onChange={(e) => setMateria({ ...materia, credito: e.target.value })}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="block text-sm font-medium text-gray-900">
                <label htmlFor="semestre" className="block text-center">
                  Semestre:
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="semestre"
                    value={materia.semestre}
                    onChange={(e) => setMateria({ ...materia, semestre: e.target.value })}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div className="block text-center text-sm font-medium text-gray-900">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
            <div className="p-6">
              <h2 className="text-center text-lg font-medium text-gray-900">
                Materias Guardadas
              </h2>
              <p className="text-center text-lg font-min text-gray-900/30">nombre-credito-semestre</p>
              <ul className="mt-4 space-y-2">
                {materias.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 rounded-md p-2 text-center"
                  >
                    {index + 1}. {item.nombre} - {item.credito} - {item.semestre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
