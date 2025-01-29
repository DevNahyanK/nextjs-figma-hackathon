import Hero from "../../components/Hero";
import Brand from "../../components/Brand";
import SignUp from "../../components/SignUp";
import GetinTouch from "../../components/GetinTouch";
import PopularProducts from "../../components/PopularProducts";
import NewCeramices from "../../components/NewCeramices";



export default function Home() {
  return (
  <main className="">
     <Hero />
     <Brand />
     <NewCeramices /> 
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
