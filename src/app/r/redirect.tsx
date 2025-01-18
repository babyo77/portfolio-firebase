"use client";
import { useEffect, useState } from "react";

export default function Redirect({ url }: { url: string }) {
  const [redirectUrl, setRedirect] = useState<string>();
  useEffect(() => {
    let deepLink = url;
    const youtubeMatch =
      url.includes("youtube.com") || url.includes("youtu.be");
    const instagramMatch = url.includes("instagram.com");
    if (youtubeMatch) {
      deepLink = `youtube://${url.replace("https://", "")}`;
    }
    if (instagramMatch) {
      deepLink = `instagram://${url.replace("https://", "")}`;
    }
    setRedirect(deepLink);

    try {
      window.location.href = deepLink;

      setTimeout(() => {
        window.location.href = url;
      }, 3000);
    } catch (e) {
      console.error("Redirect error", e);
      window.location.href = url;
    }
  }, [url]);
  return <div className="p-5">Redirecting to {redirectUrl}</div>;
}
