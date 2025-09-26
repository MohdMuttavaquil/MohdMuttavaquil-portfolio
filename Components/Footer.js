import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='mt-[4rem] bg-[#1E1E1E] flex flex-col gap-2 justify-center'>

       <ul className='flex gap-6 mt-5 justify-center'>
      <li className={`cursor-pointer hover:font-bold text-sm`}><Link href="/">HOME</Link></li>
      <li className={`cursor-pointer hover:font-bold text-sm`}><Link href="#about">ABOUT</Link></li>
      <li className={`cursor-pointer hover:font-bold text-sm`}><Link href="#skills">SKILLS</Link></li>
      <li className={`cursor-pointer hover:font-bold text-sm`}><Link href="#projects">PROJECTS</Link></li>
    </ul>

    <p className='text-center mb-2 mt-4'> © 2025 MOHD MUTTAVAQUIL. All rights reserved.</p>

    </div>
    </>
  )
}

export default Footer