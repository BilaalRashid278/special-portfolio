'use client'
import * as React from "react";
import Banner from "@/components/Banner";
import About from "@/components/HeaderTwo";
import { NextUIProvider } from "@nextui-org/react";

export default () => {
  return (
    <NextUIProvider>
      <main className="text-white w-[100%]">
        <Banner />
        <About />
      </main>
    </NextUIProvider>
  );
}
