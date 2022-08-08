import React from "react";

export default function Brands() {
  const brandiImgi = [
    "https://k.nooncdn.com/cms/pages/20220508/b0a6d41a886c06e025a9075f0de39cff/en_brand_14.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_01.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_02.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_03.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_04.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_05.png",
  ];
  const brandiImgii = [
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_06.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_07.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_08.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_09.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_10.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_11.png",
  ];
  const brandiImgiii = [
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_12.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_13.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_15.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_16.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_17.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_brand_18.png",
  ];
  return (
    <>
      <div>
        <img
          src="https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_title-10.png"
          alt=""
          className="img-fluid w-100"
        />
      </div>
      <div className="d-flex gap-3 justify-content-between my-3">
        {brandiImgi.map((brand) => {
          //   console.log(brand);
          return (
            <img
              src={brand}
              alt=""
              className="img-fluid flex-grow-1 flex-shrink-0"
              width={`${100 / 7}%`}
              //   style={{ flexBasis: `${100 / 6}%` }}
            />
          );
        })}
      </div>
      <div className="d-flex gap-3 justify-content-between my-3">
        {brandiImgii.map((brand) => {
          //   console.log(brand);
          return (
            <img
              src={brand}
              alt=""
              className="img-fluid flex-grow-1 flex-shrink-0"
              width={`${100 / 7}%`}
              //   style={{ flexBasis: `${100 / 6}%` }}
            />
          );
        })}
      </div>
      <div className="d-flex gap-3 justify-content-between my-3">
        {brandiImgiii.map((brand) => {
          //   console.log(brand);
          return (
            <img
              src={brand}
              alt=""
              className="img-fluid flex-grow-1 flex-shrink-0"
              width={`${100 / 7}%`}
              //   style={{ flexBasis: `${100 / 6}%` }}
            />
          );
        })}
      </div>
    </>
  );
}
