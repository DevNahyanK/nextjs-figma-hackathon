"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import ProductCard from "../reuseableComponents/ProductCard";
import Link from "next/link";

const ProductsComponent = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleFilterMenu = () => setIsFilterOpen(!isFilterOpen);
  const toggleSortMenu = () => setIsSortOpen(!isSortOpen);

  return (
    <div className="flex flex-col md:w-[1440px] md:h-[2439px]">
      {/* Product Image Section */}
      <div className="relative md:w-[1440px] md:h-[2439px] w-[390px] h-[146px]">
        <Image
          src="/images/productBg.png"
          alt="Product Background Image"
          width={200}
          height={200}
          className="w-[390px] h-[146px] md:w-[1440px] md:h-[209px]"
        />
        <h1 className="font-clash font-normal leading-[50.4px] text-white text-3xl md:text-[2.35rem] absolute top-[3.5rem] md:top-[7.9rem]  md:left-[4.8rem] left-[6rem]">
          All products
        </h1>
      </div>

      <div className="h-[96px] flex gap-4 justify-center my-[4rem] md:hidden relative">
        {/* Filter Button */}
        <div className="relative">
          <button
            className="w-[143px] h-[56px] flex items-center justify-center px-4 py-2 shadow-sm bg-lightGray hover:bg-darkPrimary hover:text-white transition text-darkBlue"
            onClick={toggleFilterMenu}
          >
            <span className="font-satoshi font-normal leading-6">Filter</span>
            <IoMdArrowDropdown className="ml-2 " />
          </button>
          {isFilterOpen && (
            <div className="absolute top-12 left-0 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="text-darkBlue text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Price
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Category
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Rating
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Sorting Button */}
        <div className="relative">
          <button
            className="w-[143px] h-[56px] flex items-center justify-center px-4 py-2 shadow-sm bg-lightGray hover:bg-darkPrimary hover:text-white transition text-darkBlue"
            onClick={toggleSortMenu}
          >
            <span className="font-satoshi font-normal leading-6">Sorting</span>
            <IoMdArrowDropdown className="ml-2 " />
          </button>
          {isSortOpen && (
            <div className="absolute top-12 left-0 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="text-darkBlue text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Price: Low to High
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Price: High to Low
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Popularity
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Newest
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex w-[1440px] justify-between items-center px-4 py-4 bg-lightGray">
        {/* Left Side Filters */}
        <div className="flex gap-4">
          {/* Category Filter */}
          <div className="relative bottom-[35rem]">
            <button
              onClick={toggleFilterMenu}
              className="flex items-center px-[24px] py-[12px] text-[#2a254b] hover:bg-gray-100 font-satoshi font-normal leading-6 text-lg"
            >
              Category
              <IoMdArrowDropdown className="ml-2 text-xl" />
            </button>
            {/* Dropdown Menu */}

            {isFilterOpen && (
              <div className="absolute top-12 hidden bg-white border border-gray-300 rounded-lg shadow-lg z-10 group-hover:block">
                <ul className="text-sm text-darkBlue">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Furniture
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Decor
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Lighting
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Product Type Filter */}
          <div className="relative bottom-[35rem]">
            <button
              onClick={toggleFilterMenu}
              className="flex items-center px-[24px] py-[12px] text-[#2a254b] hover:bg-gray-100 font-satoshi font-normal leading-6 text-lg"
            >
              Product Type
              <IoMdArrowDropdown className="ml-2 text-xl" />
            </button>
            {isFilterOpen && (
              <div className="absolute top-12 left-0 hidden bg-white border border-gray-300 rounded-lg shadow-lg z-10 group-hover:block">
                <ul className="text-sm text-darkBlue">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Furniture
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Decor
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Lighting
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="relative bottom-[35rem]">
            <button
              onClick={toggleFilterMenu}
              className="flex items-center px-[24px] py-[12px] text-[#2a254b] hover:bg-gray-100 font-satoshi font-normal leading-6 text-lg"
            >
              Price
              <IoMdArrowDropdown className="ml-2 text-xl" />
            </button>

            {isFilterOpen && (
              <div className="absolute top-12 left-0 hidden bg-white border border-gray-300 rounded-lg shadow-lg z-10 group-hover:block">
                <ul className="text-sm text-darkBlue">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    &pond;125
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    &pond;399
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    &pond;155
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    &pond;250
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Brand Filter */}
          <div className="relative bottom-[35rem]">
            <button
              onClick={toggleFilterMenu}
              className="flex items-center px-[24px] py-[12px] text-[#2a254b] hover:bg-gray-100 font-satoshi font-normal leading-6 text-lg"
            >
              Brand
              <IoMdArrowDropdown className="ml-2 text-xl" />
            </button>
            {isFilterOpen && (
              <div className="absolute top-12 left-0 hidden bg-white border border-gray-300 rounded-lg shadow-lg z-10 group-hover:block">
                <ul className="text-sm text-darkBlue">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Interwood
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Habitt
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    ChenOne
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Dolce Vita Home
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right Side Sorting */}
        <div className="relative flex gap-4 bottom-[35rem]">
          <p className="leading-[21px] font-satoshi font-normal text-darkPrimary text-lg mt-3">
            Sorted by:
          </p>
          <button
            onClick={toggleSortMenu}
            className="flex items-center px-[24px] py-[12px] text-[#2a254b] hover:bg-gray-100 font-satoshi font-normal leading-6 text-lg"
          >
            Date Added
            <IoMdArrowDropdown className="ml-2 text-xl" />
          </button>
          {/* Dropdown Menu */}
          {isSortOpen && (
            <div className="absolute top-12 left-0 hidden bg-white border border-gray-300 rounded-lg shadow-lg z-10 group-hover:block">
              <ul className="text-sm text-darkBlue">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Newest
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Oldest
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Price: Low to High
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Price: High to Low
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="relative md:bottom-[34rem] md:w-[1440px] w-[390px] h-[625px] grid grid-cols-2 md:grid-cols-4 gap-[2rem] md:gap-[2rem] gap-y-[8rem] mt-[6rem]">
        <ProductCard
          image="vase"
          heading="Rustic Vase Set"
          price="155"
          id="1"
        />

        <ProductCard image="lamp" heading="The Lucy Lamp" price="399" id="2" />

        <ProductCard
          image="SlikVase"
          heading="The Silky Vase"
          price="125"
          id="3"
        />

        <ProductCard
          image="BlackChair"
          heading="The Dandy chair"
          price="250"
          id="4"
        />
      </div>

      <div className="relative md:bottom-[14rem] hidden md:grid md:grid-cols-4 gap-y-[4rem] md:gap-[2rem] md:w-[1440px]">
        <ProductCard
          image="goldenLamp"
          heading="Rustic Vase Set"
          price="155"
          id="5"
        />

        <ProductCard
          image="smallVase"
          heading="The Lucy Lamp"
          price="399"
          id="6"
        />

        <ProductCard
          image="table"
          heading="The Silky Vase"
          price="125"
          id="7"
        />

        <ProductCard
          image="3chairs"
          heading="The Dandy chair"
          price="250"
          id="8"
        />
      </div>

      <div className="md:w-[1440px] relative md:bottom-[14rem] w-[390px] h-[625px] grid grid-cols-2 md:grid-cols-4 gap-[2rem] gap-y-[8rem] md:gap-[2rem] mt-[20rem]">
        <ProductCard
          image="Vase"
          heading="Rustic Vase Set"
          price="155"
          id="1"
        />

        <ProductCard image="lamp" heading="The Lucy Lamp" price="399" id="2" />

        <ProductCard
          image="SlikVase"
          heading="The Silky Vase"
          price="125"
          id="3"
        />

        <ProductCard
          image="BlackChair"
          heading="The Dandy chair"
          price="250"
          id="4"
        />
      </div>

      <div className="px-[2rem]">
        <button className="w-full md:relative mt-[12rem] md:bottom-[4rem] md:left-[36rem] md:mt-0 md:w-[200px] md:h-[56px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-darkPrimary font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out">
          <Link href="/ ">View collection</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductsComponent;
