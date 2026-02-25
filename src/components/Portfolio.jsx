import React from "react";

function Portfolio() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Portafolio</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-200 h-48 rounded-2xl"></div>
        <div className="bg-gray-200 h-48 rounded-2xl"></div>
        <div className="bg-gray-200 h-48 rounded-2xl"></div>
      </div>
      <p className="mt-6 text-gray-600">Ejemplos de nuestros trabajos en diseño y modelado 3D.</p>
    </section>
  );
}

export default Portfolio;
