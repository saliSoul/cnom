"use client"

import Contact from "@/app/contacts/page";
import Partenaires from "@/app/partenaires/page";
import Footer from "@/app/footer/page";
import HeroSection from "@/app/heroSection/page";
import Services from "@/app/services/page";

export default function Home() {
  return (
    <main>
      
      <HeroSection/>
      <Partenaires/>
      <Services/>
      <Contact/>
      <Footer/>
      
    </main>
  );
}
