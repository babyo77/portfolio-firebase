import {  ModeToggle } from ".";

import { LuGithub } from "react-icons/lu";
import {  FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Stories } from "./Stories";

interface HeaderProps{
  name:string,
  story:string,
  username:string
}
const Header: React.FC<HeaderProps> = ({name,story,username}) => {
  const navigateToHome = () => {
    
  };

  return (
    <header className=" flex justify-between py-3 z-10  items-center container w-full backdrop-blur-md">
      <div className="cursor-pointer flex flex-col" onClick={navigateToHome}>
      
        <span className=" font-semibold text-lg capitalize text-left">{name}</span>
        <Stories link={story} fullName={name} username={username} />
      </div>
      <div className="flex items-center justify-center">
    
        <Button variant={"ghost"} onClick={()=>window.open("https://github.com/babyo77")} className="px-2.5">
            <LuGithub className="h-4 w-4"/>

        </Button>
        
        
        <Button variant={"ghost"} onClick={()=>window.open("https://twitter.com/tanmay11117")} className="px-2.5">
            <FaXTwitter className="h-4 w-4"/>
            </Button>
          
     
      
    
        <ModeToggle />
      </div>
    </header>
  );
}

export { Header };
