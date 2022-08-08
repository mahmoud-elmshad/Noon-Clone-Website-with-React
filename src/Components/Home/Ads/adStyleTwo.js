import React from "react";
import AdStyleTwoComp from "./adStyleTwoComp";

export default function AdStyleTwo() {
  return (
    <>
      <div className="gap-sm-5 gap-1 my-5 d-flex justify-content-between">
        <AdStyleTwoComp />
        <AdStyleTwoComp />
        <AdStyleTwoComp />
        <AdStyleTwoComp />
      </div>
    </>
  );
}
