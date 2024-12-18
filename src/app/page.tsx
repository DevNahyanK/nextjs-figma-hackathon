import Hero from "../../components/Hero";
import Brand from "../../components/Brand";
import NewCeramics from "../../components/NewCeramices";
import PopularProducts from "../../components/PopularProducts";
import SignUp from "../../components/SignUp";
import GetinTouch from "../../components/GetinTouch";

export default function Home() {
  return (
  <main className="">
     <Hero />
     <Brand />
     <NewCeramics/>
     <PopularProducts />
     <SignUp />
     <GetinTouch
        direction={true}
        heading="From a studio in London to a global brand with over 400 outlets" 
        image="/last.png"
      />
     
  </main>
           
  );
}
