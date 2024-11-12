import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

import { ImNpm } from "react-icons/im";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
interface HeaderProps {
  name: string;
  story: string[];
  username: string;
  github: string;
  image: string;
  twitter: string;
  leetCode: string;
}
const Header: React.FC<HeaderProps> = ({
  name,
  image,
  github,
  twitter,
  leetCode,
}) => {
  return (
    <header className=" flex justify-between py-3 z-10  items-center container w-full backdrop-blur-md">
      <div className=" flex items-center gap-1.5">
        <img
          src="/gradient.webp"
          className=" absolute opacity-50 left-0 md:left-1/2 -z-10 -translate-x-1/2 lg:scale-100 object-cover -top-8 w-full"
          alt=""
        />
        <Avatar className=" size-14 border ">
          <AvatarImage
            className=" object-cover object-center"
            src={image || "/favicon.webp"}
          />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
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
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant={"ghost"}
          onClick={() => window.open(twitter)}
          className="px-2"
        >
          <FaXTwitter className="h-4 w-4" />
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => window.open(github)}
          className="px-2"
        >
          <LuGithub className="h-4 w-4" />
        </Button>

        <Button
          variant={"ghost"}
          onClick={() =>
            window.open("https://www.npmjs.com/~babyo77") || leetCode
          }
          className="px-2"
        >
          <ImNpm className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export { Header };
