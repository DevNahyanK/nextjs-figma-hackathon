"use client";
import Image from "next/image";
import React from "react";
import Card from "../../../components/Card";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { MdArrowDropDown } from "react-icons/md";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: { asset: { url: string } };
}

const Page = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  // Fetch products from Sanity
  React.useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][] {
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
      
      {/* Heading */}
      <div className="relative w-full sm:h-48 h-32  bg-black">
       <Image src="/allproducts.jpeg" alt="" fill={true} className="object-cover" />
      <h1 className="absolute xs:left-10 left-1/2 xs:bottom-5 bottom-1/2 max-xs:translate-y-1/2 max-xs:-translate-x-1/2 text-3xl text-white font-clash max-xs:w-52">
        All products
     </h1>
     </div>

      {/* Bar */}
      <div className="w-full py-4 flex xs:justify-between justify-center items-center sm:px-10 px-5">
        <ul className="flex gap-5 max-xs:gap-3">
          {["category", "product type", "price", "brand"].map((val, ind) => (
            <li
              key={ind}
              className={`flex items-center capitalize px-3 py-2 text-darkPrimary max-md:text-xs ${
                ind > 1 ? "hidden sm:flex" : "bg-lightGray"
              }`}
            >
              <h3>{val}</h3>
              <MdArrowDropDown className="h-4 w-4" />
            </li>
          ))}
        </ul>
        <span className="xs:flex hidden gap-7 max-md:text-xs">
          <h2>Sorted by:</h2>
          <span className="flex items-center">
            <h2>Date added</h2>
            <MdArrowDropDown />
          </span>
        </span>
      </div>

      {/* Product Grid */}
      <h2 className="xs:text-3xl text-2xl font-clash">Our Popular Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
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

      {/* View Collection Button */}
      <Link href="/products">
        <div className="w-full flex justify-center">
          <button className="bg-lightGray h-12 w-36 capitalize text-sm">
            View Collection
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Page;

// const Heading = () => {
//   return (
//     <div className="relative w-full sm:h-48 h-32 bg-black">
//       <Image src="/allproducts.jpeg" alt="" fill={true} className="object-cover" />
//       <h1 className="absolute xs:left-10 left-1/2 xs:bottom-5 bottom-1/2 max-xs:translate-y-1/2 max-xs:-translate-x-1/2 text-3xl text-white font-clash max-xs:w-52">
//         All products
//       </h1>
//     </div>
//   );
// };

// const Bar = () => {
//   return (
//     <div className="w-full py-4 flex xs:justify-between justify-center items-center sm:px-10 px-5">
//       <ul className="flex gap-5  max-xs:gap-5">
//         {["category", "product type", "price", "brand"].map((val, ind) => (
//           <li
//             key={ind}
//             className={`flex items-center capitalize max-xs:px-3 max-xs:py-2 text-darkPrimary max-md:text-xs ${
//               ind > 1 ? "max-xs:hidden" : "max-xs:bg-lightGray"
//             }`}
//           >
//             <h3>{val}</h3>
//             <MdArrowDropDown className="h-4 w-4" />
//           </li>
//         ))}
//       </ul>
//       <span className="xs:flex hidden gap-7 max-md:text-xs">
//         <h2>Sorted by:</h2>
//         <span className="flex items-center">
//           <h2>Date added</h2>
//           <MdArrowDropDown />
//         </span>
//       </span>
//     </div>
//   );
// };
  

// import Image from "next/image";
// import React from "react";
// import productList from "../data";
// import Card from "../../../components/Card";
// import { MdArrowDropDown } from "react-icons/md";
// import Link from "next/link";



// const page = () => {
//   return (
//     <div className="w-full pb-10">
//       <Heading />
//       <Bar />
//       <div className="w-full flex flex-wrap gap-10 items-center justify-center xs:pt-10 pt-5">
//         {productList.map(({ image, name, price, size }, ind) => (
//           <Card key={ind} image={image} name={name} price={price} size={size} />
//         ))}
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

// export default page;

// const Heading = () => {
//   return (
//     <div className="relative w-full sm:h-48 h-32 bg-black">
//       <Image src="/allproducts.jpeg" alt="" fill={true} className="object-cover" />
//       <h1 className="absolute xs:left-10 left-1/2 xs:bottom-5 bottom-1/2 max-xs:translate-y-1/2 max-xs:-translate-x-1/2 text-3xl text-white font-clash max-xs:w-52">
//         All products
//       </h1>
//     </div>
//   );
// };

// const Bar = () => {
//   return (
//     <div className="w-full py-4 flex xs:justify-between justify-center items-center sm:px-10 px-5">
//       <ul className="flex gap-5  max-xs:gap-5">
//         {["category", "product type", "price", "brand"].map((val, ind) => (
//           <li
//             key={ind}
//             className={`flex items-center capitalize max-xs:px-3 max-xs:py-2 text-darkPrimary max-md:text-xs ${
//               ind > 1 ? "max-xs:hidden" : "max-xs:bg-lightGray"
//             }`}
//           >
//             <h3>{val}</h3>
//             <MdArrowDropDown className="h-4 w-4" />
//           </li>
//         ))}
//       </ul>
//       <span className="xs:flex hidden gap-7 max-md:text-xs">
//         <h2>Sorted by:</h2>
//         <span className="flex items-center">
//           <h2>Date added</h2>
//           <MdArrowDropDown />
//         </span>
//       </span>
//     </div>
//   );
// };
  