import React from 'react'
import Navbar from './component/Navbar/Navbar1';
import Banner from './component/Navbar/banner.jsx/banner';
import Facebook from './component/Navbar/Facebook';
import Footer from './component/Navbar/footer/footer';
const Home = () => {
  return (
    <div>
   <Navbar />
   <Banner />
   <Facebook />
   <Footer />
    </div>
  )
}

export default Home