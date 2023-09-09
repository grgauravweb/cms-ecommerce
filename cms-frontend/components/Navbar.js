import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <nav className='fixed w-full h-24 shadow-xl bg-white'>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href='/'>
        <Image
        src={Logo}
        width="205"
        height="75"
        alt="Logo"
        className="cursor-pointer"
        />
        </Link>
            <div>
            <ul className="flex space-x-4">
          <li>
            <Link className="text-dark hover:text-gray-300" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-dark hover:text-gray-300" href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="text-dark hover:text-gray-300" href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-dark hover:text-gray-300" href="/contact">
                Conatact Us
            </Link>
          </li>
        </ul>
            </div>
            <div>
                
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar