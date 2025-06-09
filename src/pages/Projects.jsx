import React from 'react'
import MainProjects from '../components/MainProjects'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Projects = () => {
  const imgs= "https://th.bing.com/th/id/OIP.V6UxO4G8hoprKv8A9QVBMAHaFP?r=0&w=2048&h=1448&rs=1&pid=ImgDetMain"
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <MainProjects imgs={imgs}/>
      </main>
      <Footer />
    </div>
  )
}

export default Projects
