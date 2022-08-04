import React from "react";
import AdStyleOneComp from "./adStyleOneComp";

export default function AdStyleOne() {
  return (
    <>
      <div className=" my-5 d-flex flex-row flex-wrap justify-content-center">
        <AdStyleOneComp />
        <AdStyleOneComp />
        <AdStyleOneComp />
        <AdStyleOneComp />
      </div>
    </>
  );
}
