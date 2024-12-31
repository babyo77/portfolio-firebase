import api from "../../lib/api";
import { LanyardResponse } from "react-use-lanyard";
import Home from "@/components/home";

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
export default async function page() {
  const response = await api.get<UserProfile>(
    "https://details-alpha.vercel.app",
    { next: { revalidate: 60 } }
  );

  if (!response.data)
    return <div className=" font-mono p-4">upstream error</div>;

  const activity = await api.get<LanyardResponse | undefined>(
    `https://api.lanyard.rest/v1/users/${response.data?.discord}`,
    {
      cache: "no-cache",
    }
  );

  return <Home response={response.data} activity={activity.data} />;
}
