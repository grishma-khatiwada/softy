import React from "react";
import {
  Card,
  CardContent,
  
  CardFooter,
  CardHeader,
 
} from "@/components/ui/card";
import Image from "next/image";
import SingleImage from "@/components/SingleImage";

const products = [
    {
      img: "/product images/img7.png",
      productType: "Diaper",
      productName: "XL size",
    },
    {
      img: "/product images/img3.png",
      productType: "Diaper",
      productName: "Large size",
    },
    {
      img: "/product images/img18.png",
      productType: "Diaper",
      productName: "Small size",
    },
    {
      img: "/product images/img4.png",
      productType: "WIPES",
      productName: "Classic Baby Wipes",
    },
  
    {
      img: "/product images/img6.png",
      productType: "WIPES",
      productName: "Travel Wipes",
    },
    {
      img: "/product images/img14.png",
      productType: "WIPES",
      productName: "Anti-Bacterial Wipes",
    },
    {
      img: "/product images/img12.png",
      productType: "sanitary napkins",
      productName: "Premium Maxi (290mm)",
    },
    {
      img: "/product images/img8.png",
      productType: "sanitary napkins",
      productName: "Panty Liners (155mm)",
    },
    {
      img: "/product images/img9.png",
      productType: "sanitary napkins",
      productName: "Panty Liners (180mm)",
    },
    {
      img: "/product images/img10.png",
      productType: "tissue papers",
      productName: "Party Napkin",
    },
    {
      img: "/product images/img13.png",
      productType: "Foil papers",
      productName: "Silver Foil",
    },
  ];

export default function ProductPage() {
  return (
    
   <div className="mt-10">
    <SingleImage/>
     <div className="px-4 w-full sm:px-6 md:px-10 lg:px-20 xl:px-24 py-12 space-y-8">
    
    <div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22 ">
      <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-10 from-purple-600 to-pink-500 text-transparent bg-clip-text">
        Explore Products
      </p>
      <p className="md:text-sm opacity-70 ">
        Explore our wide range of products and find the perfect one for your
        needs
      </p>
    </div>

    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((item, index) => (
        <Card
          key={index}
          className=" rounded-2xl overflow-hidden group bg-gradient-to-br from-purple-200 to-pink-200 shadow-sm cursor-pointer group px-4"
        >
          <CardHeader></CardHeader>
          <CardContent className=" mt-[-10] border  overflow-hidden bg-white rounded-xl ">
            <Image
              className="rounded-xl px-6 object-cover group-hover:scale-110 duration-400"
              src={item.img}
              alt=""
              width={500}
              height={500}
            />
          </CardContent>
          <CardFooter>
            <div className="space-y-2">
              <p className="text-sm text-purple-700 ">
                {item.productType.toLocaleUpperCase()}
              </p>
              <p className="font-semibold tracking-wide text-md opacity-100 group-hover:translate-x-2 duration-400">
                {item.productName}
              </p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
   </div>
  );
}

