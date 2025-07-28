import api from "../../lib/api";
import { LanyardResponse } from "react-use-lanyard";
import Home from "@/components/home";
import { Metadata } from "next";

interface DateObject {
  seconds: number;
  nanoseconds: number;
}

interface Project {
  link: string;
  tech: string[];
  users: string;
  desc: string;
  title: string;
  date: DateObject;
}

export interface UserProfile {
  id: string;
  bio: string;
  npm: string;
  insta: string;
  name: string;
  image: string;
  gif: string;
  techStack: string[];
  leetCode: string;
  story: string[];
  twitter: string;
  discord: string;
  username: string;
  github: string;
  date: DateObject;
  projects: Project[];
  friends: string[];
}

export async function generateMetadata(): Promise<Metadata> {
  const response = await api.get<UserProfile>(
    "https://details-alpha.vercel.app",
    { next: { revalidate: 30 } }
  );

  if (!response.data) {
    return {
      title: "Tanmay",
      description: "Explore Tanmay's profile — projects.",
    };
  }

  const user = response.data;

  return {
    title: user.name || "Tanmay",
    description: user.bio || "Explore Tanmay's profile — projects.",
    openGraph: {
      title: `${user.name} | Profile`,
      description: user.bio,
      url: "https://tanmay.xyz/",
      siteName: `${user.name}'s Portfolio`,
      images: [
        {
          url: user.image || "https://tanmay.b-cdn.net/gradii-1600x900.png",
          width: 1200,
          height: 630,
          alt: `${user.name} Profile Preview`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${user.name} | Profile`,
      description: user.bio,
      images: [user.image || "https://tanmay.b-cdn.net/gradii-1600x900.png"],
    },
  };
}
export default async function page() {
  const response = await api.get<UserProfile>(
    "https://details-alpha.vercel.app",
    { next: { revalidate: 30 } }
  );

  if (!response.data)
    return <div className=" font-mono p-4">upstream error</div>;

  const activity = await api.get<LanyardResponse | undefined>(
    `https://api.lanyard.rest/v1/users/${response.data?.discord}`,
    {
      cache: "no-cache",
    }
  );

  return (
    <Home
      response={{
        ...response.data,
        projects: response.data.projects.sort((a, b) =>
          b.title.localeCompare(a.title)
        ),
      }}
      activity={activity.data}
    />
  );
}
