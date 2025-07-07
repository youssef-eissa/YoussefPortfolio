import About from "./components/About";
import Experience from "./components/Experience";
import Greeting from "./components/Greeting";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
   <div className="flex flex-col lg:gap-10 gap-5">
    <Greeting/>
    <Hero/>
    <About/>
    <Experience/>
    <Portfolio/>
   
   </div>
  );
}
