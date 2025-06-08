import React from 'react'
import MainHome from '../components/MainHome'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Home = () => {
  const img= "https://th.bing.com/th/id/OIP.UNaPquqyJ6eFFlHciH_p0wHaEK?r=0&rs=1&pid=ImgDetMain"
  return (
    
    <>
      <Header />
      
      <hr />
     
      <MainHome img={img}/>
      
      <hr />
      <Footer />
    </>
  )
}

export default Home
