import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer/Footer'

function NavLayout({children}) {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className=''>
            {children}  
            <Footer/>
        </div>
    </div>
  )
}

export default NavLayout