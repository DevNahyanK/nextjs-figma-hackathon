import AboutBrand from "../../../components/about/AboutBrand";
import AboutFeatures from "../../../components/about/AboutFeatures";
import AboutGetInTouch from "../../../components/about/AboutGetInTouch";
import AboutSection from "../../../components/about/AboutSection";
import AboutSignUp from "../../../components/about/AboutSignUp";
import Footer from "../../../components/Footer";
const About = () => {
  return (
    <div className="relative mx-auto w-[390px] h-[3911px] md:w-[1440px] md:h-[2960px] bg-white">
      <AboutSection />
      <AboutFeatures />
      <AboutGetInTouch />
      <AboutBrand />
      <AboutSignUp />
      <Footer />
    </div>
  );
};

export default About;
