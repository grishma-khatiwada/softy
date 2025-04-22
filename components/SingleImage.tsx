import Image from "next/image"


export default function SingleImage() {
  return (
    <div>
<div className="w-full">
        <Image
          src="/category image/newbanner.72fb38a4.png"
          alt="Category Banner"
          width={1200}
          height={400}
          className="w-full h-auto object-cover shadow-lg"
          priority
        />
      </div>
      </div>
      



    
    )
  }
      