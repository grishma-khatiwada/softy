"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import category1 from "../public/category image/img1.png"
import category2 from "../public/category image/img2.png"
import category3 from "../public/category image/image.png"
import category4 from "../public/category image/img4.png"

const categories = [
  { id: 1, image: category1, title: "Diaper", link: "/categories/diaper" },
  { id: 2, image: category2, title: "Wipes", link: "/categories/wipes" },
  { id: 3, image: category3, title: "Sanitary Napkins", link: "/categories/sanitary-napkins" },
  { id: 4, image: category4, title: "Tissue Papers", link: "/categories/tissue-papers" },
]
export function SingleCategory() {
  return (
    <section className=" mt-[-30] py-12 px-2 md:px-6 lg:px-12">
    
    <div className="relative w-full max-w-7xl mx-auto">
        <Carousel opts={{ align: "center" }}>
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-2 h-full">
                  <Card className="flex flex-col bg-[#f3e8f7] hover:bg-[#e0b3eb] transition-colors duration-300 h-full rounded-2xl shadow-md py-3 px-2 group">
                    <div className="flex justify-center items-center mb-3">
                      <div className="bg-white w-36 h-36 md:w-40 md:h-40 flex justify-center items-center rounded-xl shadow-sm overflow-hidden">
                        <div className="w-full h-full relative">
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-left mt-auto">
                      <CardContent className="p-0">
                        <h3 className="text-md font-semibold mb-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-95">
                          {category.title}
                        </h3>
                        <Link
                          href={category.link}
                          className="text-sm text-purple-700 hover:underline transition-all duration-300 inline-block "
                        >
                          View Category <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-black rounded-full p-2 shadow-md" />
          <CarouselNext className="solute right-1 top-1/2 -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-black rounded-full p-2 shadow-md" />
        </Carousel>
      </div>
    </section>
  )
}