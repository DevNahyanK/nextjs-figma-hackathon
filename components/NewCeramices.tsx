"use client"

import React from "react";
import Card from "./Card";
import Link from "next/link";

interface CardType {
  image: string;
  size: "single" | "double";
  name: string;
  price: string;
}

const data: CardType[] = [
  {
    name: "The Dandy chair",
    price: "£250",
    size: "single",
    image: "/hero.png",
  },
  {
    name: "Rustic Vase Set",
    price: "£155",
    size: "single",
    image: "/Rustic-Vase.png",
  },
  {
    name: "The Silky Vase",
    price: "£125",
    size: "single",
    image: "/Silky-Vase.png",
  },
  { name: "The Lucy Lamp", price: "£399", size: "single", image: "/lamp.png" },
];
const NewCeramics = ({ heading }: { heading?: string }) => {
  return (
    <div className="w-full text-darkPrimary flex flex-col gap-6 my-16 mmd:px-10 px-5">
      <h2 className="xs:text-3xl text-2xl font-clash">
        {heading ? heading : "New ceramics"}
      </h2>
      <div className="flex w-full justify-center gap-5 flex-wrap">
        {data.map((val, ind) => (
          <Link key={ind} href="/products/1">
            <Card
              image={val.image}
              name={val.name}
              price={val.price}
              size={val.size}
            />
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="/products">
          <button className="bg-lightGray h-12 w-36 capitalize text-sm">
            view collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewCeramics;


// import { four } from "@/sanity/lib/queries"
// import { Product } from "../../../types/products"
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { urlFor } from "@/sanity/lib/image";
// import { client } from "@/sanity/lib/client";
// import { four } from "@/sanity/lib/queries";
// import { Product } from "../types/products";

// const NewCeramices = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(four);
//         setProducts(fetchedProducts);
//       } catch (err) {
//         setError("Failed to load products. Please try again later.");
//         console.error("Error fetching products:", err);
//       }
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-white px-4 sm:px-6 py-8 relative">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
//         <h2 className="text-lg sm:text-2xl font-bold">New Ceramics</h2>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="text-red-500 text-center mb-4">
//           {error}
//         </div>
//       )}

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div
//               key={product._id}
//               className="border border-gray-100 rounded-md p-4 flex flex-col items-center"
//             >
//               {/* Product Image */}
//               {product.image ? (
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.productName || "Product image"}
//                   width={200}
//                   height={200}
//                   className="w-full h-auto"
//                 />
//               ) : (
//                 <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
//                   <span className="text-gray-500">No Image</span>
//                 </div>
//               )}

//               {/* Product Details */}
//               <div className="mt-4 text-center">
//                 <h2 className="font-medium text-lg">
//                   {product.productName || "Unnamed Product"}
//                 </h2>
//                 <p className="font-bold mt-1">
//                   {product.price ? `$${product.price}` : "Price not available"}
//                 </p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No products available at the moment.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewCeramices;
