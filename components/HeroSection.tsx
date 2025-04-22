"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import hero1 from "../public/hero-slide-1.webp"
import hero2 from "../public/hero-slide-2.webp"
import hero3 from "../public/hero-slide-3.webp"

export function HeroSection() {
  const heroImages = [hero1, hero2, hero3]
  const nextRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextRef.current?.click()
    }, 4000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full h-screen bg-gray-100 flex items-center justify-center mt-0 pt-0">
      <div className="relative w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="mt-16  rounded-none shadow-none border-none">
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        width={1900}
                        height={600}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Manual and Auto Arrows */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg" />
          <CarouselNext
            ref={nextRef}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg"
          />
        </Carousel>
      </div>
    </section>
  )
}
