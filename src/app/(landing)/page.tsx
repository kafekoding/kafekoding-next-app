import Image from "next/image";
import Page from "./page";
import {Hero, Platform, ShowCase} from "./_sections";
import AboutUs from "./_sections/about-us/about-us";

export default function Home() {
  return (
   <main>
    <Hero/>
    <AboutUs/>
    <Platform/>
    <ShowCase/>
   </main>
  );
}
