import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="flex space-x-4 p-4 bg-gray-100 rounded-md">
        <Link
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          to="/aboutme"
        >
          About Me
        </Link>
        <Link
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
      <h1 className="mt-4 text-center font-semibold text-lg">Enzo Ramiro Robles</h1>
    </>
  );
};

export default Header;

