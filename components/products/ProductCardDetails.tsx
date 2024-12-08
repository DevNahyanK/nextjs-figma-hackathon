"use client";
import { CardProps } from "../../types/components";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "../reuseableComponents/ProductCard";
import Features from "../heroSection/Features";
import SignUp from "../heroSection/SignUp";


export async function getData() {
  const response = await fetch("/api/product");
  const data = await response.json();
  return data;
}

const ProductCardDetails = () => {
  const params = useParams();
  const id = params.id;
  const productId = id;

  const [details, setDetails] = useState<CardProps | null>(null);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productData = await getData();
      const productDetails = productData.find(
        (item: CardProps) => item.id === productId
      );
      setDetails(productDetails);
      console.log("product Details", productId, id, productDetails);
    };

    fetchProductDetails();
  }, [productId]);

  const increase = () => setQuantity(quantity + 1);

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="relative mx-auto md:w-[1440px] md:h-[2827px] w-[390px] h-[3579px]">
      {details && (
        <div className="mt-[6rem] w-[390px] h-[1055px] bg-white flex flex-col md:mt-[8rem] md:flex-row md:gap-[2rem] md:w-[1440px] md:h-[759px]">
          <div className="md:w-[721px] md:h-[759px] w-[390px] h-[380px]">
            <Image
              src={`/images/${details.image}.png`}
              alt={`${details.heading} Image`}
              width={200}
              height={200}
              className="md:w-[721px] md:h-[759px] w-[390px] h-[380px]"
            />
          </div>
          <div className="md:h-[657px] md:w-[602px] md:m-[2rem] w-[390px] h-[675px] p-[1.5rem]">
            <div className="flex mt-2 flex-col gap-[12px]">
              <h3 className="font-clash font-normal leading-[33.6px] text-darkPrimary text-[1.6rem] md:text-5xl">
                {details.heading}
              </h3>
              <h4 className="font-clash font-normal leading-7 mt-1 md:mt-0 text-darkPrimary text-xl md:text-4xl">
                {" "}
                &#163; {details.price}
              </h4>
            </div>
            <div className="flex mt-4 md:mt-10 flex-col gap-[12px]">
              <h5 className="font-clash font-normal leading-[22.4px] text-darkPrimary text-lg md:text-2xl">
                Product description
              </h5>
              <p className="font-satoshi font-normal text-darkPrimary leading-[21px] text-[16px] md:text-lg">
                {details.para}
              </p>
              <ul className="list-disc mt-1 mb-4">
                <li className="font-satoshi marker:leading-[21px] text-darkPrimary font-normal md:text-lg">
                  Premium material
                </li>
                <li className="font-satoshi marker:leading-[21px] text-darkPrimary md:text-lg font-normal">
                  Handmade upholstery
                </li>
                <li className="font-satoshi marker:leading-[21px] md:text-lg text-darkPrimary font-normal">
                  Quality timeless classic
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-clash font-normal leading-[22.4px] text-darkPrimary text-lg md:text-2xl mt-4">
                Dimensions
              </h5>
              <div className="mt-4 flex justify-between gap-6">
                <h6 className="font-normal font-clash leading-[19.6px] text-darkPrimary md:text-lg">
                  Height
                </h6>
                <h6 className="font-normal font-clash leading-[19.6px] text-darkPrimary md:text-lg">
                  Width
                </h6>
                <h6 className="font-normal font-clash leading-[19.6px] text-darkPrimary md:text-lg">
                  Depth
                </h6>
              </div>
              <div className="flex justify-between mt-3">
                <h6 className="font-normal font-clash leading-[19.6px] text-darkPrimary md:text-lg">
                  110cm
                </h6>
                <h6 className="font-normal font-clash leading-[19.6px] text-darkPrimary md:text-lg">
                  75cm
                </h6>
                <h6 className="font-normal font-clash leading-[19.6px] text-darkPrimary md:text-lg">
                  50cm
                </h6>
              </div>
            </div>
            <div className=" mt-2 flex flex-col md:flex-row gap-[12px] md:gap-4">
              <h5 className="relative mt-2 font-clash font-normal leading-[22.4px] text-darkPrimary text-lg md:text-2xl md:top-10">
                Quantity
              </h5>
              <div className="relative md:right-10 md:top-5 mt-4 flex items-center md:justify-center space-x-4 w-full">
              

              <button
                  onClick={decrease}
                  className="bg-lightGray text-darkPrimary hover:bg-darkPrimary hover:text-white p-2 rounded w-full md:w-[50px]"
                >
                  <p className="text-xl md:pl-0 pl-[4rem] pb-3">_</p>
                </button>

                <div className="text-xl text-darkPrimary">{quantity}</div>

                <button
                  onClick={increase}
                  className="bg-lightGray text-darkPrimary hover:bg-darkPrimary hover:text-white p-2 rounded w-full md:w-[50px]"
                >
                  <p className="text-xl md:pr-0 pr-[4rem]">+</p>
                </button>

              </div>
              <button className="relative md:top-5 md:w-[250px] mt-4 w-full bg-darkPrimary px-[32px] py-[16px] font-satoshi font-normal leading-6 text-white hover:bg-navbarColor">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-[390px] md:mt-[8rem] h-[811px] flex flex-col">
        <p className="mt-[10rem] leading-[24.6px] text-darkPrimary font-clash font-normal text-xl md:text-3xl">
          You might also like
        </p>
        <div className="md:w-[1440px] relative w-[390px] h-[625px] grid grid-cols-2 md:grid-cols-4 gap-[2rem] gap-y-[8rem] md:gap-[2rem] mt-[2rem]">
          <ProductCard
            image="Vase"
            heading="Rustic Vase Set"
            price="155"
            id="1"
          />

          <ProductCard
            image="lamp"
            heading="The Lucy Lamp"
            price="399"
            id="2"
          />

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

        <div className="relative md:mt-[18rem] hidden md:grid md:grid-cols-4 gap-y-[4rem] md:gap-[2rem] md:w-[1440px]">
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

        <button className="w-full md:relative md:w-[188px] md:left-[36rem] md:-bottom-[2rem] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-darkPrimary font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out mt-[8rem]">
          View collection
        </button>
      </div>

      <div className="relative md:top-[45rem] mt-[26rem] md:mt-0 w-[390px] h-[757px]">
        <Features />
      </div>
      <div className="relative md:top-[28rem] md:right-4 mt-[12rem] md:mt-[2rem] w-[390px] h-[292px]">
        <SignUp />
      </div>
    </div>
  );
};

export default ProductCardDetails;
