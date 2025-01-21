import React from "react";
import Card from "./Card";
import Link from "next/link";

interface CardType {
  image: string;
  size: "single" | "double";
  name: string;
  price: string;
}

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
