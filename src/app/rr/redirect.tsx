"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function RedirectEffect() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const url = searchParams.get("url");

    setTimeout(() => {
      if (!url || typeof url !== "string") return;

      window.location.href = url;
    }, 1000);
  }, [searchParams]);

  return <div className="bg-white" />;
}
