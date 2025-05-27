import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MyAccount from '../components/MyAccount'

export default function Account() {
    return (
        <div>
            <Banner />
            <Navbar />
            <MyAccount />
            <Footer />
        </div>
    )
}
