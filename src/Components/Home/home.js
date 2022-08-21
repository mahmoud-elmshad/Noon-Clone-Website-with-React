import React, { useEffect, useState } from "react";
import HomeCarousel from "./Carousel/homeCarousel";
import HomeCircle from "./Circle/homeCircle";
import AdStyleOne from "./Ads/adStyleOne";
import DealStyleVertical from "./Deals/dealStyleVertical";
import CategoryStyle from "./Categories/categoryStyle";
import AdStyleTwo from "./Ads/adStyleTwo";
import AdStyleThree from "./Ads/adStyleThree";
import AdStyleFour from "./Ads/adStyleFour";
import Brands from "./Brands/brands";
import DetailsServices from "../../services/details.services";

export default function Home() {
  // const [collection, setCollection] = useState();
  // useEffect(() => {
  //   newCollection();
  // }, []);
  // const newCollection = async () => {
  //   await DetailsServices.addCollection();
  //   console.log("test");
  // };

  var caturls = [
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-19.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-23.png",
  ];
  return (
    <>
      <div className="container">
        <HomeCarousel />
        <HomeCircle />
        <AdStyleTwo />
        <DealStyleVertical />
        <CategoryStyle
          imgurls={[
            "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-19.png",
            "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-23.png",
            "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-49.png",
          ]}
          imgtitle="https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_title-05.png"
          color="#E8EFFF"
          dealtitle="Apple macbooks"
          dealsubtitle="Audio & home entertainment deals"
        />
        <AdStyleThree />
        <CategoryStyle
          imgtitle="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_title-00.png"
          color="#BFBFBF"
          dealtitle="Summer wear"
          dealsubtitle=""
        />
        <AdStyleThree />
        <CategoryStyle
          imgtitle="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_title-06.png"
          color="#F4FFFB"
          dealtitle="Top home picks"
          dealsubtitle="Top appliances offers"
        />
        <AdStyleFour />
        <CategoryStyle
          imgtitle="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_title-07.png"
          color="#F4FFFB"
          dealtitle="Supermarket offers"
          dealsubtitle=""
        />
        <CategoryStyle
          imgtitle="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_title-08.png"
          color="#FFF4F7"
          dealtitle="Baby best sellers"
          dealsubtitle=""
        />
        <CategoryStyle
          imgtitle="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_title-09.png"
          color="#F2ECE2"
          dealtitle="Automotive picks"
          dealsubtitle=""
        />
        <Brands />
      </div>
    </>
  );
}
