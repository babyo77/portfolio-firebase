import React, { Suspense } from "react";
import RedirectEffect from "./redirect";

function page() {
  return (
    <Suspense>
      <RedirectEffect />
    </Suspense>
  );
}

export default page;
