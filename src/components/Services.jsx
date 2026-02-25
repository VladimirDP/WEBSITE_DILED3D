import React from "react";

function Services() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">Diseño 3D</h3>
          <p>Modelado profesional para productos industriales y comerciales.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">Prototipado Rápido</h3>
          <p>Creación de piezas físicas mediante impresión 3D de alta precisión.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">Asesoría Técnica</h3>
          <p>Soporte experto en transformación digital e Industria 4.0.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
