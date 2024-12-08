import Image from "next/image";

const AboutFeatures = () => {
  return (
    <div className="relative w-[390px] md:w-[1440px] md:h-[598px] h-[628px] flex flex-col md:flex-row p-6 gap-4 mt-[5rem]">
      <div className="md:w-[634px] md:h-[478px] bg-darkPrimary p-8">
        <h4 className="font-clash font-normal leading-[28px] text-white text-xl md:text-4xl pb-4 md:px-[2rem] md:pt-[3rem]">
          It started with a small idea
        </h4>
        <p className="relative md:px-[2rem]  leading-[21px] font-satoshi font-normal md:relative md:left-2 text-white text-[14px]  md:text-[1rem] md:w-[495px] pb-10">
          A global brand with local beginnings, our story begain in a small
          studio in South London in early 2014
        </p>
        <button className="w-full md:relative md:w-[188px] md:left-[3rem] md:top-[10rem] py-[16px] px-[32px] bg-[#f9f9f9] bg-opacity-[15%] leading-6 text-white font-satoshi font-normal hover:bg-lightGray hover:text-darkBlue transition-all duration-300 ease-in-out">
          View collection
        </button>
      </div>
      <div className="md:w-[630px]">
        <Image
          src="/images/yellowSofa.png"
          alt="Yellow Sofa"
          width={200}
          height={200}
          className="w-[342px] h-[259px] md:w-[630px] md:h-[478px]"
        />
      </div>
    </div>
  );
};

export default AboutFeatures;
