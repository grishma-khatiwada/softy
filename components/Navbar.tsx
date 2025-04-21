import React from 'react'
import Image from 'next/image';
import logo from '../public/softylogo1.png'
import iso from '../public/iso-text.png'
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';



export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#943cb4] to-[#e548c4] text-white shadow-md px-14 py-2 flex items-center justify-between" >
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Softy Logo" width={50} height={50} />
      </div>

      <div className="flex items-center space-x-2">
      <Image src={iso} alt="Softy Logo" width={60} height={50} />
       </div>


      <div className="flex space-x-4 text-md">
        <p>Home</p>
        <p>Categories</p>
        <p>Products</p>
        <p>Dealer Locator</p>
        <p>About</p>
        <p>Contact</p>
      </div>


      <div className="flex space-x-4 text-xl">
      <Facebook />
      <MessageCircle />
      <Instagram />
      <Phone />
      <MapPin />
      </div>
    </nav>
  )
}
