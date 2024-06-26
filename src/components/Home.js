import React from 'react'
import Navigation from './Home/Navbar'
import Banner from './Home/Banner'
import Newsletter from './Home/Newsletter'
import Stats from './Home/Stats'
import Base from './Home/Base'
import Services from './Home/Services'
export default function () {
  return (
    <>
    
    <Navigation/>
    <Banner/>
    
    <div className="flex flex-col min-h-screen">
      <Base/>
      <Services/>
      <Stats />
      <Newsletter />
    </div>
    
    
    </>
    
  )
}
