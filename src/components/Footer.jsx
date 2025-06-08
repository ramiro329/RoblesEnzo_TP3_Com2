import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
   <h2>Mis redes sociales</h2>
    <Link className="inline-block" to="https://www.instagram.com/Enzo Ramiro Robles">
        <img 
          src="/icons/instagram.png"
          alt="Instagram"
            className="h-12 w-12 object-cover rounded-full transition duration-300 hover:opacity-80"
    
        />
        </Link>
      
   </>
  )
}

export default Footer
