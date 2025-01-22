"use client"

// import React, { useEffect, useState } from "react"
// import { urlFor } from "@/sanity/lib/image"
// import { client } from "@/sanity/lib/client"
// import { Product } from "../types/products"
// import { ceramices } from "@/sanity/lib/queries"
// import Card from "./Card" // Importing the Card component
// import Link from "next/link"

// const NewCeramices = ({ heading }: { heading?: string }) => {
//   const [product, setProduct] = useState<Product[]>([])

//   useEffect(() => {
//     async function fetchProduct() {
//       const fetchedProduct: Product[] = await client.fetch(ceramices)
//       setProduct(fetchedProduct)
//     }
//     fetchProduct()
//   }, [])

//   return (
//     <div className="w-full text-darkPrimary flex flex-col gap-6 my-16 mmd:px-10 px-5">
//       <h2 className="xs:text-3xl text-2xl font-clash">
//         {heading ? heading : "New ceramics"}
//       </h2>
//       <div className="flex w-full justify-center gap-5 flex-wrap">
//         {product.map((prod) => (
//           <Link key={prod._id} href={`/products/${prod._id}`}>
//             <Card
//               image={urlFor(prod.image).url() || "/default-image.png"} // Ensure fallback image
//               name={prod.name}
//               price={prod.price ? `$${prod.price}` : "Price not available"}
//               size="single" // Assuming you want to use a "single" size for all cards
//             />
//           </Link>
//         ))}
//       </div>
//       <div className="w-full flex justify-center">
//         <Link href="/products">
//           <button className="bg-lightGray h-12 w-36 capitalize text-sm">
//             View Collection
//           </button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default NewCeramices
// "use client"

// import { four } from "@/sanity/lib/queries"
// import { Product } from "../../../types/products"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { urlFor } from "@/sanity/lib/image"
// import { client } from "@/sanity/lib/client"
import { Product } from "../types/products"
import { client } from "@/sanity/lib/client"
import { ceramices } from "@/sanity/lib/queries"

const NewCeramices = () => {
const [product, setProduct] = useState<Product[]>([])

useEffect(() => {
    async function fetchproduct() {
        const fetchedproduct : Product[] = await client.fetch(ceramices)
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