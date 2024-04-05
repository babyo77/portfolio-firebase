import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { StoriesSrc } from "@/interface";
import axios from "axios";
import { useQuery } from "react-query";

interface VideoLink {
  link: string[];
  username: string;
  fullName: string;
  github: string;
}

import StoryComp from "react-insta-stories";
import { Story } from "react-insta-stories/dist/interfaces";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRef } from "react";
import { Loader } from "./Loader";

export const Stories: React.FC<VideoLink> = ({
  link,
  username,
  fullName,
  github,
}) => {
  const FetchStory = async () => {
    const Stories: Story[] = [];

    for (const linkItem of link) {
      const response = await axios.get<StoriesSrc[]>(
        `https://instx-api.vercel.app/api/v1/?link=${linkItem}`
      );
      Stories.push({
        header: {
          heading: username,
          subheading: "",
          profileImage: `https://github.com/${github.replace(
            "https://github.com/",
            ""
          )}.png`,
        },
        type: "video",
        url: response.data[0].download_link,
      });
    }

    return Stories;
  };

  const { data } = useQuery<Story[]>(["stories"], FetchStory, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });

  const ref = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col">
          <span className=" font-semibold text-lg  transition-all duration-300 hover:text-blue-300 text-left">
            {fullName}
          </span>
          <span className="text-xs  ">stories here ▲</span>
        </div>
      </DialogTrigger>
      <DialogContent className="border-none bg-transparent justify-center">
        {data ? (
          <StoryComp
            keyboardNavigation
            storyStyles={{
              borderRadius: ".4rem",
            }}
            storyInnerContainerStyles={{
              borderRadius: ".4rem",
            }}
            loader={<Loader />}
            storyContainerStyles={{
              borderRadius: ".4rem",
            }}
            defaultInterval={1100}
            onAllStoriesEnd={handleClose}
            stories={data}
          />
        ) : (
          <Loader />
        )}
      </DialogContent>
      <DialogClose ref={ref}></DialogClose>
    </Dialog>
  );
};
