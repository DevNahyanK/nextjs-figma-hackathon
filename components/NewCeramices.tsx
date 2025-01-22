"use client"

import React, { useEffect, useState } from "react"
import { urlFor } from "@/sanity/lib/image"
import { client } from "@/sanity/lib/client"
import { Product } from "../types/products"
import { ceramices } from "@/sanity/lib/queries"
import Card from "./Card" // Importing the Card component
import Link from "next/link"

const NewCeramices = ({ heading }: { heading?: string }) => {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(ceramices)
      setProduct(fetchedProduct)
    }
    fetchProduct()
  }, [])

  return (
    <div className="w-full text-darkPrimary flex flex-col gap-6 my-16 mmd:px-10 px-5">
      <h2 className="xs:text-3xl text-2xl font-clash">
        {heading ? heading : "New ceramics"}
      </h2>
      <div className="flex w-full justify-center gap-5 flex-wrap">
        {product.map((prod) => (
          <Link key={prod._id} href={`/products/${prod._id}`}>
            <Card
              image={urlFor(prod.image).url() || "/default-image.png"} // Ensure fallback image
              name={prod.name}
              price={prod.price ? `$${prod.price}` : "Price not available"}
              size="single" // Assuming you want to use a "single" size for all cards
            />
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="/products">
          <button className="bg-lightGray h-12 w-36 capitalize text-sm">
            View Collection
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NewCeramices
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

