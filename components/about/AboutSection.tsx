import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="relative w-[390px] h-[385px] py-[32px] px-[24px] my-[3rem] flex flex-col md:flex-row md:w-[1440px] md:h-[277px] md:px-[12rem] md:py-[2rem] md:gap-[12rem]">
      <h2 className="font-clash font-normal leading-[44.8px] text-darkPrimary text-3xl md:w-[704px]">
        A brand built on the love of craftmanship, quality and outstanding
        customer service
      </h2>

      <button className="w-full md:relative mt-[4rem] md:mt-0 md:w-[200px] md:h-[56px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-darkPrimary font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out">
        <Link href="/products">View our products</Link>
      </button>
    </div>
  );
};

export default AboutSection;
