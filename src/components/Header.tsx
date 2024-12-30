import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

import { ImNpm } from "react-icons/im";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Emoji } from "./Emoji";
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
    <header className=" flex justify-between z-10  items-center container w-full backdrop-blur-md">
      <div className=" flex items-center gap-1.5 px-2">
        <img
          src="/gradient.webp"
          className=" absolute opacity-50 left-0 md:left-1/2 -z-10 -translate-x-1/2 lg:scale-100 object-cover -top-8 w-full"
          alt=""
        />
        <Avatar className=" size-14 border border-white/15 ">
          <AvatarImage
            className=" object-cover object-center"
            src={image || "/favicon.webp"}
          />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
        <div className="cursor-pointer flex flex-col">
          <div className="flex flex-col">
            <p>
              <span className=" text-lg font-bold tracking-wide">{name}</span>
              <Emoji className=" text-lg" />
            </p>
            <a
              href="mailto:devisantosh504@gmail.com"
              className="text-xs ml-0.5 hover:text-zinc-100 text-zinc-300"
            >
              777
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
