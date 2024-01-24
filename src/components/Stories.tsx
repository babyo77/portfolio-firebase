import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader } from ".";
import { useRef, useState } from "react";
import { StoriesSrc } from "@/interface";
import { FaInstagram } from "react-icons/fa6";
import { useQuery } from "react-query";
import { GrFormNextLink } from "react-icons/gr"
import { GrFormPreviousLink } from "react-icons/gr";
interface VideoLink {
  link: string[];
  username: string;
  fullName: string;
}

export const Stories: React.FC<VideoLink> = ({ link, username, fullName }) => {
  const [videLoaded, setVideoLoaded] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [currentId,setCurrentId] = useState<number>(0)

  const handPlay = () => {
    setVideoLoaded(true);
  };

  const NextStory = ()=>{
    if(currentId>=link.length-1)return
    setCurrentId((prev)=>prev+1)
      FetchStory(link[currentId+1])
  }
  const PrevStory = ()=>{
    if(currentId<=0)return setCurrentId(0)
    setCurrentId((prev)=>prev-1)
      FetchStory(link[currentId-1])
  }

  const storyRef = useRef<HTMLVideoElement>(null);
  const FetchStory = async (link:string) => {
      setVideoLoaded(false)
      const response = await axios.get(
        `https://instx-api.vercel.app/api/v1/?link=${link}`
      );
      const responseData: StoriesSrc[] = response.data;
      setVideoSrc(responseData[0].download_link);
    };

      useQuery("stories",()=>FetchStory(link[currentId]),{
        refetchOnWindowFocus:false
      })
console.log("re");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col">
          <span className=" font-semibold text-lg capitalize transition-all duration-300 hover:text-blue-300 text-left">
            {fullName}
          </span>
          <span className="text-xs animate-pulse ">Stories here ▲</span>
        </div>
      </DialogTrigger>
      <DialogContent className="max-md:h-full  backdrop-blur-md border-none">
        <DialogHeader>
          <DialogTitle className="text-sm">
            Backend firebase - deployed on ▲{" "}
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-1 text-3xl  items-center ">
        <GrFormPreviousLink onClick={PrevStory} className="cursor-pointer" />
          <video
            autoPlay
            loop
            playsInline
            src={videoSrc || ""}
            ref={storyRef}
            onPlay={handPlay}
            onLoadedData={() => setVideoLoaded(false)}
            className=" rounded-xl relative object-cover shadow-sm w-[18rem]   h-[77svh] "
          />
          <GrFormNextLink onClick={NextStory} className=" cursor-pointer"/>
          {!videLoaded && (
            <div className=" absolute">
              <Loader />
            </div>
          )}
        </div>

        <DialogFooter>
          <div className="flex justify-between">
            <p className="text-xs hover:text-red-500 ">
              View on
              <a
                href={link[currentId]}
                target="_blank"
                id={username}
                className="px-1 underline underline-offset-2 "
              >
                instagram.
              </a>
            </p>

            <FaInstagram
              className="h-4 w-4 cursor-pointer"
              onClick={() => window.open(link[currentId])}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
