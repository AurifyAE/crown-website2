import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import About from '../components/About'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'
import Product from '../components/Product'
import ProductList from '../components/ProductList'
import Services from '../components/Services'
import LiveRate from '../components/LiveRate'

export default function Home() {
  return (
    <div>
        <Banner />
        <Navbar />
        <Hero />
        <LiveRate />
        <About />
        <Services />
        <ProductList />
        <Highlights />
        <Footer />
    </div>
  )
}
