import ProductCard from "../reuseableComponents/ProductCard";

const Listing = () => {
  return (
    <div className="relative w-[309px] h-[811px] md:w-[1440px] md:h-[761px] bg-white flex flex-col gap-3 py-[3rem] px-5 mt-[17rem] md:mt-[6rem]">
      <h4 className="font-clash font-normal leading-[24.6px] text-darkPrimary text-xl md:text-4xl md:mb-6">
        New ceramics
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[4.8rem] md:gap-[2rem]">
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

      <button className="m-2 w-[309px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg">
        View collection
      </button>
    </div>
  );
};

export default Listing;
