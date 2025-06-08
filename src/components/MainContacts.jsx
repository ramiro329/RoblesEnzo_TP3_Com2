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
      headers: {
        "Content-Type": "application/json"
      },
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
    <>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Tu nombre"
        required
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Tu email (roblesenzoramiro29@gmail.com)"
        required
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tu mensaje"
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Enviar
      </button>
    </form>
    </>
  );
}

export default MainContacts;
