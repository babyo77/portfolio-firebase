"use client";
import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

function Analytics() {
  useEffect(() => {
    Clarity.init("pmnbotinpz");
  }, []);
  return null;
}

export default Analytics;
