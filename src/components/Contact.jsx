import React from "react";

function Contact() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Contáctanos</h2>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 border rounded-md mb-4"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full p-3 border rounded-md mb-4"
        />
        <textarea
          placeholder="Tu mensaje"
          className="w-full p-3 border rounded-md mb-4"
          rows="4"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
