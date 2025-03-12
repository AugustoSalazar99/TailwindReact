import React from "react";

export const ToList = () => {
  return (
    <header className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <form action="" className="space-y-6 p-6">
              <div className="block text-sm font-medium text-gray-900">
                <label htmlFor="materia" className="block text-center">Materia</label>
                <div className="mt-2">
                  <input type="text" id="materia" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"/>
                </div>
              </div>
              <div className="block text-center text-sm font-medium text-gray-900">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
