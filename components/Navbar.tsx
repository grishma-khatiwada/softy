import React from 'react'
import Image from 'next/image';
import logo from '../public/softylogo1.png'
import iso from '../public/iso-text.png'
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#943cb4] to-[#e548c4] text-white shadow-md px-14 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Softy Logo" width={50} height={50} />
      </div>

      <div className="flex items-center space-x-2">
        <Image src={iso} alt="Softy Logo" width={60} height={50} />
      </div>

      <div className="flex space-x-4 text-md">
        <Link href="/"><p className="cursor-pointer">Home</p></Link>
        <Link href="/categories"><p className="cursor-pointer">Categories</p></Link>
        <Link href="/products"><p className="cursor-pointer">Products</p></Link>
        <Link href="/dealer-locator"><p className="cursor-pointer">Dealer Locator</p></Link>
        <Link href="/about"><p className="cursor-pointer">About</p></Link>
        <Link href="/contact"><p className="cursor-pointer">Contact</p></Link>
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
