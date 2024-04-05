import { ModeToggle } from ".";

import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Stories } from "./Stories";

interface HeaderProps {
  name: string;
  story: string[];
  username: string;
  github: string;
  twitter: string;
}
const Header: React.FC<HeaderProps> = ({
  name,
  story,
  username,
  github,
  twitter,
}) => {
  return (
    <header className=" flex justify-between py-3 z-10  items-center container w-full backdrop-blur-md">
      <div className="cursor-pointer flex flex-col">
        <Stories
          link={story}
          fullName={name}
          username={username}
          github={github}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant={"ghost"}
          onClick={() => window.open(github)}
          className="px-2.5"
        >
          <LuGithub className="h-4 w-4" />
        </Button>

        <Button
          variant={"ghost"}
          onClick={() => window.open(twitter)}
          className="px-2.5"
        >
          <FaXTwitter className="h-4 w-4" />
        </Button>

        <ModeToggle />
      </div>
    </header>
  );
};

export { Header };
