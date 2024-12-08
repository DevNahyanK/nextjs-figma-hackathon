import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-[390px] h-[502px] md:w-[1280px] md:h-[584px] md:my-[6rem] md:mx-[4.5rem] bg-darkPrimary flex flex-col md:flex-row gap-[2rem]">
      <div className="">
        <div className="px-10 py-10 md:py-[5rem] md:px-[6rem]">
          <h2 className="h-[342] font-clash font-normal leading-[44.8px] text-white text-3xl md:text-4xl">
            The furniture brand for the future, with timeless designs
          </h2>
        </div>
        <div className="px-8 font-satoshi font-normal flex flex-col gap-10">
          <p className="leading-[27px] md:relative md:top-[13rem] md:left-2 md:w-[602px] text-white text-lg">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <button className="w-full md:relative md:w-[188px] md:left-[4rem] md:bottom-[11rem] py-[16px] px-[32px] bg-[#f9f9f9] bg-opacity-[15%] leading-6 text-white font-satoshi font-normal hover:bg-lightGray hover:text-darkBlue transition-all duration-300 ease-in-out">
            View collection
          </button>
        </div>
      </div>
      <div className="relative left-[3.5rem] w-[970px] h-[584px] md:block hidden">
        <Image
          src="/images/hero.png"
          alt="Chair"
          width={200}
          height={200}
          className="w-[520px] h-[584px]"
        />
      </div>
    </div>
  );
};

export default Hero;
