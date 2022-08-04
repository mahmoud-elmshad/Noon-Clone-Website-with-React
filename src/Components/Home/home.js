import React from "react";
import HomeCarousel from "./homeCarousel";
import HomeCircle from "./homeCircle";
import AdStyleOne from "./Ads/adStyleOne";
import DealStyleVertical from "./Deals/dealStyleVertical";
import CategoryStyle from "./Categories/categoryStyle";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeCircle />
      <AdStyleOne />
      <DealStyleVertical />
      <CategoryStyle />
    </>
  );
}
