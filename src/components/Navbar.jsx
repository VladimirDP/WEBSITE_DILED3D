// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Diled3D</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-blue-400">Inicio</a></li>
        <li><a href="#" className="hover:text-blue-400">Servicios</a></li>
        <li><a href="#" className="hover:text-blue-400">Portafolio</a></li>
        <li><a href="#" className="hover:text-blue-400">Contacto</a></li>
        <li><a href="#" className="hover:text-blue-400">Eventos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

