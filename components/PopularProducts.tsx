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
//     name: "The Poplar suede sofa",
//     price: "£980",
//     size: "double",
//     image: "/sofa.png",
//   },
//   {
//     name: "The Dandy chair",
//     price: "£250",
//     size: "single",
//     image: "/hero.png",
//   },
//   {
//     name: "The Dandy chair",
//     price: "£250",
//     size: "single",
//     image: "/chair.png",
//   },
// ];
// const PopularProducts = () => {
//   return (
//     <div className="w-full text-darkPrimary flex flex-col gap-4 my-16 mmd:px-20 px-5">
//       <h2 className="xs:text-3xl text-2xl font-clash">Our popular products</h2>
//       <div className="w-full flex sm:justify-center max-lg:overflow-x-scroll">
//         <div className="flex xs:w-[1000px] w-[1100px] justify-center gap-5">
//           {data.map((val, ind) => (
//             <Link key={ind} href="/products/1">
//               <Card
//                 image={val.image}
//                 name={val.name}
//                 price={val.price}
//                 size={val.size}
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//       <Link href="/products">
//         <div className="w-full flex justify-center">
//           <button className="bg-lightGray h-12 w-36 capitalize text-sm">
//             view collection
//           </button>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default PopularProducts;

import React from "react";
import Card from "./Card";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: { asset: { url: string } };
}

const PopularProducts = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  // Fetch products from Sanity
  React.useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][17..19] {
        _id,
        name,
        price,
        image {
          asset -> {
            url
          }
        }
      }`;
      

      try {
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full text-darkPrimary flex flex-col gap-4 my-16 mmd:px-20 px-5">
      <h2 className="xs:text-3xl text-2xl font-clash">Our popular products</h2>
      <div className="w-full flex sm:justify-center max-lg:overflow-x-scroll">
        <div className="flex xs:w-[1000px] w-[1100px] justify-center gap-5">
          {products.map((product) => (
            <Link key={product._id} href={`/products/${product._id}`}>
              <Card
                image={product.image.asset.url}
                name={product.name}
                price={`£${product.price}`}
                size="single" // Update this field if "size" is part of your data
              />
            </Link>
          ))}
        </div>
      </div>
      <Link href="/products">
        <div className="w-full flex justify-center">
          <button className="bg-lightGray h-12 w-36 capitalize text-sm">
            view collection
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PopularProducts;
