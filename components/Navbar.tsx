import React from 'react'
import Image from 'next/image';
import logo from '../public/softylogo1.png'
import iso from '../public/iso-text.png'
import Link from 'next/link';
import facebook from '../public/facebook.png'
import instagram from '../public/instagram.png'
import messanger from '../public/Messenger.png'
import whatsapp from '../public/whatsapp.png'
import map from '../public/map.png'
import MobileMenu from './MegaMenu';


export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#943cb4] to-[#e548c4] text-white shadow-md px-14 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Softy Logo" width={50} height={50} />
      </div>

      <div className="flex items-center space-x-2">
        <Image src={iso} alt="Softy Logo" width={60} height={50} />
      </div>

      <div className="hidden lg:flex space-x-4 text-md">
        <Link
              href="/"
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Categories
            </Link>
            <Link
              href="/product"
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Products
            </Link>
            <Link
              href="/dealer-locator"
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Dealer Locator
            </Link>
            <Link
              href="/about"
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              About
            </Link>

            <Link
              href="/contact"
              className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full "
            >
              Contact
            </Link>
      </div>

      <div className="xl:w-1/6 hidden lg:flex items-center justify-between gap-4 ">
            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={facebook}
              alt=""
              width={500}
              height={500}
            />

            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={instagram}
              alt=""
              width={500}
              height={500}
            />

            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={messanger}
              alt=""
              width={500}
              height={500}
            />


            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={whatsapp}
              alt=""
              width={500}
              height={500}
            />
            <Image
              className=" w-8 h-8 bg-gray-300 cursor-pointer hover:scale-110 duration-500 rounded-full p-0.5"
              src={map}
              alt=""
              width={500}
              height={500}
            />
          </div>
<MobileMenu/>
    </div>
  )
}
