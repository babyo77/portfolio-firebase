import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

import { ImNpm } from "react-icons/im";
interface HeaderProps {
  name: string;
  story: string[];
  username: string;
  github: string;
  twitter: string;
  leetCode: string;
}
const Header: React.FC<HeaderProps> = ({
  name,

  github,
  twitter,
  leetCode,
}) => {
  return (
    <header className=" flex justify-between py-3 z-10  items-center container w-full backdrop-blur-md">
      <div className="cursor-pointer flex flex-col">
        <div className="flex flex-col">
          <span className=" text-lg font-bold tracking-wide">{name}</span>
          <a
            href="mailto:devisantosh504@gmail.com"
            className="text-xs ml-0.5 text-zinc-400"
          >
            Email
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant={"ghost"}
          onClick={() => window.open(twitter)}
          className="px-2.5"
        >
          <FaXTwitter className="h-4 w-4" />
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => window.open(github)}
          className="px-2.5"
        >
          <LuGithub className="h-4 w-4" />
        </Button>

        <Button
          variant={"ghost"}
          onClick={() =>
            window.open("https://www.npmjs.com/~babyo77") || leetCode
          }
          className="px-2.5"
        >
          <ImNpm className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export { Header };
