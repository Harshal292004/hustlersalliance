import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/landing/Hero";
import { Chapter1 } from "@/components/landing/Chapter1";
import { Chapter2 } from "@/components/landing/Chapter2";
import { Chapter3 } from "@/components/landing/Chapter3";
import { AboutUs } from "@/components/landing/AboutUs";
import { Reviews } from "@/components/landing/Reviews";
import { Purchase } from "@/components/landing/Purchase";
import { Title } from "@/components/landing/Title";
export default function Home() {
  return (
    <>
      <Navbar id="nav"></Navbar>
      <Hero></Hero>
      <Chapter1></Chapter1>
      <Chapter2></Chapter2>
      <Chapter3></Chapter3>
      <AboutUs id="about-us"></AboutUs>
      <Reviews id="reviews"></Reviews>
      <Purchase id="purchase"></Purchase>
      <Footer></Footer>
    </>
  );
}
