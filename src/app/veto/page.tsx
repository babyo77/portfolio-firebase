import React, { Suspense } from "react";
import ComprehensiveGiftCalculator from "./veto";

function page() {
  return (
    <Suspense>
      <ComprehensiveGiftCalculator />
    </Suspense>
  );
}

export default page;
