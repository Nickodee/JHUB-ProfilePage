import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='bg-white w-full p-2'>
        <ul className='flex gap-4 justify-end mr-7'>
            <li><Link href='#project'>Project</Link></li>
            <li><Link href='#team'>Team</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar