interface Date {
  seconds: number;
  nanoseconds: number;
}
interface StoriesSrc {
  thumbnail_link: string;
  download_link: string;
}
interface User {
  id: string;
  username: string;
  name: string;
  bio: string;
  story: string;
  date: Date;
  techStack: string[];
  projects: ProjectProps[];
  github: string;
  twitter: string;
  friends:string[]
}

interface ProjectProps {
  link: string;
  title: string;
  desc: string;
  tech: string[];
}
interface FriendsInterface {
  fname: string;
  dp: string;
  url: string;
  username: string;
}

export type {
  User,
  StoriesSrc,
  ProjectProps,
  FriendsInterface,
};
