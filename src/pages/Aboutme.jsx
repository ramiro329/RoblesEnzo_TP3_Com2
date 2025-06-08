import React, { useEffect, useState } from 'react'
import MainAboutme from '../components/MainAboutme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDB } from '../data/useDB'

const Aboutme = () => {
  const [data,setData] = useState(null)
  useEffect(()=>{
    setData(useDB[0])
  },[])
  return (
    <>
      <Header />
      <hr />
      {data && <MainAboutme data = {data} />}
      <hr />
      <Footer />
    </>
  )
}

export default Aboutme
