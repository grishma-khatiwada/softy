import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, House, Info, StickyNote, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import facebook from '../public/facebook.png'
import instagram from '../public/instagram.png'
import messanger from '../public/Messenger.png'
import whatsapp from '../public/whatsapp.png'
import map from '../public/map.png'


export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="text-white flex lg:hidden w-1/2 justify-end ">
        <AlignJustify size={28} strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent className="bg-purple-800 text-white">
        <SheetHeader className="space-y-8">
          <SheetTitle className="text-white text-lg">Mobile Menu</SheetTitle>
          <SheetDescription className="text-white flex  flex-col  gap-8 ">
            <Link href={"/"} className="flex items-center gap-2 text-base">
              {" "}
              <House />
              Home
            </Link>

            <Link
              href={"/categories"}
              className="flex items-center gap-2 text-base"
            >
              {" "}
              <Info strokeWidth={1.5} />
              Categories
            </Link>

            <Link
              href={"/product"}
              className="flex items-center gap-2 text-base"
            >
              {" "}
              <House />
              Products
            </Link>

            <Link href={"/about"} className="flex items-center gap-2 text-base">
              {" "}
              <Info strokeWidth={1.5} />
              About
            </Link>

            <Link
              href={"/contact"}
              className="flex items-center gap-2 text-base"
            >
              {" "}
              <StickyNote strokeWidth={1.5} />
              Contact
            </Link>

            <Link
              href={"/dealerLocator"}
              className="flex items-center gap-2 text-base"
            >
              {" "}
              <Truck strokeWidth={1.5} />
              Dealer Locator
            </Link>
          </SheetDescription>

          <SheetDescription className="text-white text-center">
            softy.corporate@gmail.com @ Softy.com.np | 2024 +01-5191390 |
            +01-5191390 |
          </SheetDescription>

          <SheetDescription className="flex items-center  gap-4 ">
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
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}