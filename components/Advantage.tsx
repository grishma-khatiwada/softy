"use client"

import {Medal, Truck, Flag, Headphones, BarChart2, Droplet } from "lucide-react"

const features = [
  {
    id: 1,
    icon: <Droplet   size={24} className="text-blue-500" />,
    title: "Innovative Hygiene Solutions",
    description: "Providing a diverse range of premium hygiene products, including wet wipes, tissues, and personal care items.",
    bg: "bg-blue-50",
  },
  {
    id: 2,
    icon: <Medal size={24} className="text-green-500" />,
    title: "Uncompromising Quality",
    description: "Ensuring the highest standards in product quality to meet the hygiene needs of families and businesses.",
    bg: "bg-green-50",
  },
  {
    id: 3,
    icon: <Truck size={24} className="text-purple-500" />,
    title: "Nationwide Distribution",
    description: "Efficient and reliable delivery services that ensure timely availability of hygiene products across Nepal.",
    bg: "bg-purple-50",
  },
  {
    id: 4,
    icon: <Flag size={24} className="text-orange-500" />,
    title: "Proudly Made in Nepal",
    description: "Softy Hygiene is a locally established brand, offering innovative and accessible hygiene products to every household.",
    bg: "bg-orange-50",
  },
  {
    id: 5,
    icon: <Headphones size={24} className="text-pink-500" />,
    title: "Dedicated Customer Support",
    description: "Reach us at +01-5191390 or softy.corporate@gmail.com for queries and feedback. Located in Maitighar, Kathmandu.",
    bg: "bg-pink-50",
  },
  {
    id: 6,
    icon: <BarChart2 size={24} className="text-yellow-500" />,
    title: "Committed to Growth",
    description: "Focused on enhancing customer satisfaction while expanding into new markets and setting industry benchmarks.",
    bg: "bg-yellow-50",
  },
]

export default function SoftyAdvantageSection() {
  return (
    <div>
    <hr className="mt-10 border-t-2 border-purple-200" />

 <section className="py-16 px-4 sm:px-6 lg:px-16">
      
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800">
          Discover the Softy Hygiene Advantage
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Delivering innovative and high-quality hygiene solutions for every home and business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`rounded-2xl shadow-sm p-6 ${feature.bg} transition-all duration-300 ease-in-out hover:shadow-lg`}
          >
            <div className="mb-4 w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>    
    </div>
   
  )
}
