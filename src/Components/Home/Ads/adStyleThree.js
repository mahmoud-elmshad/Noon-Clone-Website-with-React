import React from "react";
import AdStyleThreeComp from "./adStyleThreeComp";

export default function AdStyleThree() {
  return (
    <>
      <div className="gap-sm-5 gap-1 my-5 d-flex justify-content-between">
        <AdStyleThreeComp />
        <AdStyleThreeComp />
        <AdStyleThreeComp />
      </div>
    </>
  );
}
