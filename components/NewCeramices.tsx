"use client"

// import React from "react";
// import Card from "./Card";
// import Link from "next/link";

// interface CardType {
//   image: string;
//   size: "single" | "double";
//   name: string;
//   price: string;
// }

// const data: CardType[] = [
//   {
//     name: "The Dandy chair",
//     price: "£250",
//     size: "single",
//     image: "/hero.png",
//   },
//   {
//     name: "Rustic Vase Set",
//     price: "£155",
//     size: "single",
//     image: "/Rustic-Vase.png",
//   },
//   {
//     name: "The Silky Vase",
//     price: "£125",
//     size: "single",
//     image: "/Silky-Vase.png",
//   },
//   { name: "The Lucy Lamp", price: "£399", size: "single", image: "/lamp.png" },
// ];
// const NewCeramics = ({ heading }: { heading?: string }) => {
//   return (
//     <div className="w-full text-darkPrimary flex flex-col gap-6 my-16 mmd:px-10 px-5">
//       <h2 className="xs:text-3xl text-2xl font-clash">
//         {heading ? heading : "New ceramics"}
//       </h2>
//       <div className="flex w-full justify-center gap-5 flex-wrap">
//         {data.map((val, ind) => (
//           <Link key={ind} href="/products/1">
//             <Card
//               image={val.image}
//               name={val.name}
//               price={val.price}
//               size={val.size}
//             />
//           </Link>
//         ))}
//       </div>
//       <div className="w-full flex justify-center">
//         <Link href="/products">
//           <button className="bg-lightGray h-12 w-36 capitalize text-sm">
//             view collection
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NewCeramics;


// import { four } from "@/sanity/lib/queries"
// import { Product } from "../../../types/products"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { urlFor } from "@/sanity/lib/image"
// import { client } from "@/sanity/lib/client"
import { Product } from "../types/products"
import { client } from "@/sanity/lib/client"
import { four } from "@/sanity/lib/queries"
// import { ceramices } from "@/sanity/lib/queries"

const NewCeramices = () => {
const [product, setProduct] = useState<Product[]>([])

useEffect(() => {
    async function fetchproduct() {
        const fetchedproduct : Product[] = await client.fetch(four)
        setProduct(fetchedproduct) 
    }
    fetchproduct()
},[])

return (
    <div className="bg-white px-4 sm:px-6 py-8 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-lg sm:text-2xl font-bold">New Ceramices</h2>
          <div className="flex space-x-2">
           
          </div>
        </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        
        
        {product.map((product) => (
            <div key={product._id}
            className="border border-gray-100 rounded-md p-4 flex flex-col items-center"
            >
                {product.name}
                {product.image && (
                    <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-auto"/>
                    
                )}
                <div className="mt-4 text-center">
                <h2 className="font-medium text-lg">{product.name}</h2>
                <p className="font-bold mt-1">
                    {product.price ? `$${product.price}`: "Price not available"}
                
                </p>
                </div>
               
                </div>
    
        
    ))}
        
    </div>
    </div>
)
};

export default NewCeramices;