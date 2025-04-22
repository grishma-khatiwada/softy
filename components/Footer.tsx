import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import facebook from '../public/facebook.png'
import instagram from '../public/instagram.png'
import messanger from '../public/Messenger.png'
import whatsapp from '../public/whatsapp.png'
import map from '../public/map.png'
import logo from '../public/softylogo1.png'

export default function FooterSection() {
  return (
    

      <div className=" bg-gradient-to-r from-purple-600 to-pink-500 px-4 w-full sm:px-8 md:px-16 lg:px-20 xl:px-24 py-12 space-y-16  ">
        
  
        <div className="flex items-center  justify-center">
        <Link href={"/"} className=" bg-purple-800 p-4 rounded-full w-max  ">
        
        <Image
          className="w-16 h-16"
          src={logo}
          alt=""
          width={500}
          height={500}
        />
      </Link>

        </div>
        
       
        <div className="w-full  text-white grid lg:grid-cols-3 sm:grid-cols-2  gap-16">
         
          <div className=" space-y-8 ">
            <p className="">
              Your Trusted Partner in Personal Hygiene.You deserve a hygiene
              partner that works as hard as you do. Softy—quality you can trust,
              affordability you deserve.
            </p>

            <div className="flex items-center max-sm:justify-center  gap-4 ">
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
          </div>

         
          <div className=" text-white flex items-center md:justify-between justify-center gap-24 sm:gap-16">
            
            
            <div className="space-y-6">
              <p className="font-semibold">Quick Links</p>
              <div className="space-y-4">
                <Link href={"/"} className="text-sm flex items-center  group">
                  Home{" "}
                  <ArrowUpRight
                    size={16}
                     strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45  mt-1 group-hover:translate-x-1"
                  />
                </Link>

                <Link href={"/categories"} className="text-sm flex items-center  group">
                  Categories{" "}
                  <ArrowUpRight
                    size={16}
                     strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45  mt-1 group-hover:translate-x-1"
                  />
                </Link>


                <Link href={"/product"} className="text-sm flex items-center  group">
                  Products{" "}
                  <ArrowUpRight
                    size={16}
                     strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45  mt-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>


            <div className="space-y-6">
              <p className="font-semibold">Company</p>
              <div className="space-y-4">
                <Link href={"/about"} className="text-sm flex items-center  group">
                  About{" "}
                  <ArrowUpRight
                    size={16} strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45  mt-1 group-hover:translate-x-1"
                  />
                </Link>

                <Link href={"/contact"} className="text-sm flex items-center  group">
                  Contact{" "}
                  <ArrowUpRight
                    size={16} strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45  mt-1 group-hover:translate-x-1"
                  />
                </Link>


                <Link href={"/dealerLocator"} className="text-sm flex items-center  group">
                  Dealer Locator{" "}
                  <ArrowUpRight
                    size={16} strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45  mt-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            

          </div>

         
          <div className=" hidden w-full md:flex">

          <p>“As action speaks louder than words.”We SOFTY HYGIENE PVT.LTD. is one of the largest private level manufacturing company of disposable wet wipes, Baby wipes ,Baby Diaper, Sanitary Napkins and Tissue paper. We ensure feminine care and baby care for their safety and comfort. So, we specially manufacture our product in women and Baby base.</p>
          </div>
        </div>


      
                <div className="flex md:flex-row flex-col gap-4 items-center justify-between mt-12">
                    <p className=" text-white text-xs">© 2024 softy hygienic. All rights reserved.</p>
                    <p className=" text-white text-xs">Designed and Developed by @Grishma</p>
                </div>



      </div>
    
  );
}

