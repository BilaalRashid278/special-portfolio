import React from "react";
import Banner from "@/components/Banner";
import About from "@/components/HeaderTwo";

export default () : React.JSX.Element => {
  return (
    <main className="text-white w-[100%]">
      <Banner/>
      <About/>
    </main>
  );
}
