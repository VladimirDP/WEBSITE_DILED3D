import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Bienvenido a Diled3D</h1>
      <p className="text-lg mb-6">
        Innovamos en soluciones 3D para la industria moderna, impresiones 3D y mas
      </p>
      <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100">
        Conoce más
      </button>
    </section>
  );
}

export default Hero;
