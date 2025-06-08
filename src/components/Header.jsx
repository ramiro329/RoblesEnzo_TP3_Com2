import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
    
    <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to= "/">Home</Link>
    <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to= "/aboutme">About Me</Link>
    <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to= "/projects">Projects</Link>
    <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to= "/contact">Contact</Link>
    <br />
    <h1>Enzo Ramiro Robles</h1>
    </>
  )
}

export default Header
