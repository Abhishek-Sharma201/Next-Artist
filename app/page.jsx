import React from 'react'
import Banner from './Components/Banner/Banner'
import Hero from './Components/Pages/Hero'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'

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