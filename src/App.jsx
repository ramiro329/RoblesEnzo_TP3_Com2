import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Aboutme from './pages/Aboutme'
import Projects from './pages/Projects'
import Error from './components/Error'
import useStore from "./store/useStore"


function App() {
  const { color, cambiarColor } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontEnlarged, setFontEnlarged] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleFontSize = () => {
    if (!fontEnlarged) {
      // Guardamos el tamaño original para restaurar si es necesario
      document.documentElement.style.fontSize = "120%"; // aumento 20%
      setFontEnlarged(true);
    } else {
      // Volver al tamaño original
      document.documentElement.style.fontSize = ""; // vaciar para que use CSS original
      setFontEnlarged(false);
    }
  };

  return (
    <div className={color ? "temaOscuro" : "temaClaro"}>
      <header className="p-4 flex items-center justify-start gap-4">
        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-between w-8 h-6 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-full bg-gray-800 dark:bg-gray-200 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-1 w-full bg-gray-800 dark:bg-gray-200 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-full bg-gray-800 dark:bg-gray-200 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Contenedor botones junto a las barras */}
        {menuOpen && (
          <div className="flex items-center gap-3">
            {/* Botón tema */}
            <button
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-md border-2 ${
                color
                  ? "bg-black text-white hover:bg-gray-800 border-white"
                  : "bg-white text-black hover:bg-gray-200 border-black"
              }`}
              onClick={cambiarColor}
            >
              {color ? "TEMA CLARO" : "TEMA OSCURO"}
            </button>

            {/* Botón toggle tamaño fuente */}
            <button
              onClick={toggleFontSize}
              className={`px-4 py-2 rounded-lg font-semibold border-2 shadow-md transition-colors duration-300 ${
                fontEnlarged
                  ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
                  : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
              }`}
            >
              {fontEnlarged ? "Restaurar Fuente" : "Agrandar Fuente"}
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;