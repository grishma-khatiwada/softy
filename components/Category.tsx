import * as React from "react"
import { SingleCategory } from "./SingleCategory"


export function Category() {
  return (
    <div className="px-4 w-full sm:px-6 md:px-14 lg:px-18 xl:px-22 py-12 space-y-8">
      <div className=" mt-2 text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22">
        <h2 className=" md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 text-[#b94e9c]">Explore Our Categories</h2>
        <p className="text-lg text-black-700 max-w-2xl mx-auto">
          Discover the wide range of products we offer for your personal and professional hygiene needs.
        </p>
      </div>

      <SingleCategory/>
      </div>
  )
}