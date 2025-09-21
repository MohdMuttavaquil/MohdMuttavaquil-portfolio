import React from 'react'
import Link from 'next/link'

const Nevber = () => {
  return (
    <nav className='py-5 flex justify-between'>
   <div className='logo text-3xl px-20 font-montserrat '>PORTFOLIO</div>

   <ul className='flex gap-10 px-20'>
    <li className='cursor-pointer hover:font-bold' ><Link href="#about">ABOUT</Link></li>
    <li className='cursor-pointer hover:font-bold' ><Link href="#skills">SKILLS</Link></li>
    <li className='cursor-pointer hover:font-bold' ><Link href="#projects">PROJECTS</Link></li>
   </ul>

    </nav>
  )
}

export default Nevber