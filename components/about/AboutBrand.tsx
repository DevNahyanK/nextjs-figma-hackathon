import FeatureCard from "../reuseableComponents/FeatureCard";

const AboutBrand = () => {
  return (
    <div className="relative md:w-[1440px] md:h-[335px] top-[25rem] w-[390px] h-[757px] bg-white flex flex-col gap-[2rem] md:justify-center md:items-center">
      <h4 className="px-8 font-clash text-2xl font-normal leading-[28px] md:text-3xl">
        What makes our brand different
      </h4>

      <div className="flex flex-col md:flex-row gap-[5rem]">
        <FeatureCard
          image="Delivery"
          heading="Next day as standard"
          para="Order before 3pm and get your order the next day as standard"
        />

        <FeatureCard
          image="Checkmark"
          heading="Made by true artisans"
          para="Handmade crafted goods made with real passion and craftmanship"
        />

        <FeatureCard
          image="Purchase"
          heading="Unbeatable prices"
          para="For our materials and quality you won't find better prices anywhere"
        />

        <FeatureCard
          image="Sprout"
          heading="Recycled packaging"
          para="We use 100% recycled packaging to ensure our footprint is manageable"
        />
      </div>
    </div>
  );
};

export default AboutBrand;
