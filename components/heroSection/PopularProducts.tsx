"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../reuseableComponents/ProductCard";

const PopularProducts = () => {
  return (
    <div className="relative mt-[14rem] mx-[1.5rem] w-[390px] h-[573px] md:w-[1440px] md:h-[744px] bg-white">
      <h4 className="relative my-4 pl-4 font-clash font-normal leading-[24.6px] text-darkPrimary text-lg md:text-4xl md:bottom-[10rem]">
        Our popular products
      </h4>

      <div className="md:hidden px-4 py-2">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          loop={true}
          slidesPerView={2}
          spaceBetween={16}
        >
          <SwiperSlide>
            <ProductCard
              image="lamp"
              heading="The Lucy Lamp"
              price="399"
              id="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              image="Vase"
              heading="Rustic Vase Set"
              price="155"
              id="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              image="SlikVase"
              heading="The Silky Vase"
              price="125"
              id="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              image="BlackChair"
              heading="The Dandy Chair"
              price="250"
              id="4"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="relative hidden md:bottom-[8rem] md:w-[1440px] md:h-[375px] md:flex gap-[30px] group">
        <div
          key="/products/id10"
          className="hidden md:flex flex-col w-[630px] h-[375px] gap-[2rem]"
        >
          <Image
            src={`/images/sofa.png`}
            alt="Sofa Image"
            width={200}
            height={200}
            className="w-[630px] h-[375px]"
          />

          <div className="flex flex-col gap-[8px]">
            <h4 className="font-clash font-normal leading-7 text-darkPrimary md:text-xl">
              The Poplar suede sofa
            </h4>
            <p className="font-satoshi font-normal leading-[27px] text-darkPrimary md:text-xl">
              &pound; 980
            </p>
          </div>

          {/* Add to Cart button */}
          <button className="w-[160px] md:w-[635px] absolute bottom-0 right-[30.5rem] transform -translate-x-1/2 px-4 md:px-8 py-2 md:py-4 bg-black/70 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <Link href={`/products/id10`} className="text-sm md:text-xl">
              Add to Cart
            </Link>
          </button>
        </div>
        <ProductCard
          image="BlackChair"
          heading="The Dandy Chair"
          price="250"
          id="4"
        />
        <ProductCard
          image="OldChair"
          heading="The Dandy Chair"
          price="250"
          id="9"
        />
      </div>

      <div className="relative md:right-[4rem] md:top-[4rem] flex md:justify-center">
        <button className=" m-2 mt-4 w-[309px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg">
          View collection
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;
