import React, { Children } from 'react'
import Navbar from './Navbar'

function NavLayout({children}) {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className='overflow-y-scroll'>
            {children}
        </div>
    </div>
  )
}

export default NavLayout