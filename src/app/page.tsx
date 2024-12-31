import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
import api from "../../lib/api";
import ActivityCard from "../components/activity-card";
import { LanyardResponse } from "react-use-lanyard";

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

interface UserProfile {
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
export default async function Home() {
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

  const user = response.data;
  const userLinks = [
    { href: user?.github, icon: SiGithub, label: "GitHub" },
    { href: user?.twitter, icon: FaXTwitter, label: "Twitter" },
    { href: user?.insta, icon: SiInstagram, label: "Instagram" },
  ];

  return (
    <main className="px-6 py-8 max-w-[600px] mx-auto space-y-4">
      <header className=" flex w-full items-center justify-between ">
        <Image
          src={user?.image}
          height={5000}
          width={5000}
          alt="profile image"
          loading="eager"
          className=" object-cover size-11 object-center rounded-full"
        />
        <Image
          src={user?.gif}
          height={5000}
          width={5000}
          alt="gif"
          loading="eager"
          className=" object-cover aspect-video h-10 w-1/2 md:w-1/3 object-center"
        />
      </header>
      <div className=" flex w-full items-start justify-start ">
        <h1 className=" text-xl font-semibold ">{user?.name}</h1>
      </div>
      <div>
        <p className=" text-sm text-neutral-400">{user?.bio}</p>
      </div>
      <div>
        <h2 className="font-semibold text-xl">Projects</h2>
        <div className="flex flex-col mt-2 divide-y divide-zinc-900">
          {user?.projects.map((project) => (
            <Link
              key={project?.link}
              target="_blank"
              href={project?.link}
              className="group px-4 pl-2 py-3 -mx-2 rounded-md text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-200 hover:transition-none"
              rel="noreferrer noopener"
            >
              <p className="text-sm text-neutral-100 font-medium">
                {project?.title}
              </p>
              <p className="text-sm">{project?.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <ActivityCard userId={user?.discord} initialData={activity.data} />
      <div className="flex border-t pt-4 gap-2 border-neutral-800">
        <div className="flex items-center gap-4">
          {userLinks.map(
            ({ href, icon: Icon, label }, index) =>
              href && (
                <a
                  key={index}
                  href={href}
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200"
                >
                  <Icon className="size-4">
                    <title>{label}</title>
                  </Icon>
                  {label}
                </a>
              )
          )}
        </div>
      </div>
    </main>
  );
}
