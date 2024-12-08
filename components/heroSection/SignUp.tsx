const SignUp = () => {
  return (
    <div className="relative md:right-[10rem] w-[390px] h-[292px] md:w-[1440px] md:h-[481px] md:mt-[8rem] md:border-[3.5rem] md:left-[1rem] md:border-lightGray bg-white p-4 bottom-[5rem]">
      <div className="relative top-[4rem] flex flex-col md:items-center gap-[16px]">
        <h4 className="font-clash text-xl font-normal leading-[28px] md:text-5xl text-[#2a254b]">
          Join the club and get the benefits
        </h4>
        <p className="font-satoshi leading-[21px] font-normal text-darkPrimary text-[14px] md:text-xl md:w-[540px] text-center">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
      </div>
      <div className="md:relative mt-[6rem] flex md:justify-center">
        <input
          type="email"
          placeholder="your@email.com"
          className="bg-lightGray placeholder:font-satoshi focus:outline-none py-4 px-5 md:w-[400px]"
        />
        <button className="px-[32px] py-[16px] bg-darkPrimary text-white font-satoshi font-normal leading-6 hover:bg-navbarColor hover:text-darkPrimary">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
