"use client"

import React, { useEffect, useState } from "react"
import { urlFor } from "@/sanity/lib/image"
import { client } from "@/sanity/lib/client"
import { Product } from "../types/products"
import { ceramices } from "@/sanity/lib/queries"
import Card from "./Card" // Importing the Card component
import Link from "next/link"

const NewCeramices = () => {
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
        New Ceramics
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
