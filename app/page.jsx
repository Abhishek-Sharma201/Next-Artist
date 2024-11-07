import React from 'react'
import Banner from './Componants/Banner/Banner'
import Hero from './Componants/Pages/Hero'
import Footer from './Componants/Footer/Footer'
import Nav from './Componants/Nav/Nav'

const page = () => {
  return (
    <main>
      <Nav background={true} />
      <Banner />
      <Hero />
      <Footer />
    </main>
  )
}

export default page