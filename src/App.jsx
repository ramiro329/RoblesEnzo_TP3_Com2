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
  const {color, cambiarColor} = useStore()

  return (
    <>
    
    <div className={color ? "temaOscuro":"temaClaro"} >
      
      <button className={color ? "temaOscuro":"temaClaro"} onClick={cambiarColor}>{color? 'TEMA CLARO' : 'TEMA OSCURO'}</button>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutme' element={<Aboutme/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='*' element={<Error/>}/>
      
     </Routes>
     
     </BrowserRouter>
    
     
     </div>
    </>
  )
}

export default App
