'use client'
import * as React from "react";
import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import { NextUIProvider } from "@nextui-org/react";

const Home = () => {
  return (
    <NextUIProvider>
      <main className="text-white w-[100%]">
        <Banner />
        <AboutMe />
      </main>
    </NextUIProvider>
  );
}


export default Home;
