import { useState } from "react";

function MainContacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xnnvnero", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      alert("Mensaje enviado con éxito");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Error al enviar el mensaje");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 rounded-xl border border-gray-400 bg-transparent text-gray-800 space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Contáctame
      </h2>

      <label className="block">
        <span className="text-gray-700 font-medium">Nombre</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition"
        />
      </label>

      <label className="block">
        <span className="text-gray-700 font-medium">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Tu email (ejemplo@correo.com)"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition"
        />
      </label>

      <label className="block">
        <span className="text-gray-700 font-medium">Mensaje</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tu mensaje"
          required
          rows="5"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 resize-y focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>
  );
}

export default MainContacts;
