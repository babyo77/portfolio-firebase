import { ProjectProps } from "@/interface";
import { Footer, Loader, Projects } from ".";
import { Badge } from "./ui/badge";

import { useLanyard } from "react-use-lanyard";
import { AspectRatio } from "./ui/aspect-ratio";
interface ProjectProp {
  project: ProjectProps[];
  techStack: string[];
  discord: string;
}

const Container: React.FC<ProjectProp> = ({ project, techStack, discord }) => {
  const lanyard = useLanyard({
    userId: String(discord),
  });
  return (
    <div className=" container flex flex-col  space-y-2 ">
      <article>
        <div className="pt-4 hidden">
          <h2 className="font-mono text-lg tracking-tighter ">tech-stack</h2>
        </div>
        <div className="mt-4 mb-1 hidden  items-center gap-1 flex-wrap ">
          {techStack.map((tech, id) => (
            <Badge
              key={id}
              variant={"outline"}
              className="max-md:text-xs text-xs cursor-pointer hover:bg-zinc-100/5 hover:border-blue-300  transition-all duration-300 font-normal rounded-none shadow-none"
            >
              {tech}
            </Badge>
          ))}
        </div>
        {lanyard.data && (
          <div className=" flex border space-x-2  items-center rounded-lg p-2">
            <div className="h-14 w-16 relative  rounded-md ">
              <AspectRatio ratio={1 / 1}>
                <img
                  className="h-14 w-14 object-cover rounded-md"
                  src={`https://cdn.discordapp.com/app-assets/${lanyard.data.data.activities[0].application_id}/${lanyard.data.data.activities[0].assets?.large_image}.png`}
                  onError={(e) =>
                    (e.currentTarget.src = "/assets/favicon.webp")
                  }
                  alt="discord"
                />
                <img
                  className="h-4 w-4  border-2 border-neutral-800 rounded-full -right-0.5  -bottom-2 z-20 absolute object-cover"
                  src={`https://cdn.discordapp.com/app-assets/${lanyard.data.data.activities[0].application_id}/${lanyard.data.data.activities[0].assets?.small_image}.png`}
                  onError={(e) =>
                    (e.currentTarget.src = "/assets/favicon.webp")
                  }
                  alt="discord"
                />
              </AspectRatio>
            </div>

            <div className="w-full text-xs items-center leading-tight">
              <p className="font-medium">
                {lanyard.data.data.activities[0].name}
              </p>
              <p className="text-zinc-300">
                {lanyard.data.data.activities[0].state}
              </p>
              <p className="text-zinc-300">
                {lanyard.data.data.activities[0]?.details}
              </p>
              {/* <p className="text-zinc-300 text-[.5rem]">
                {lanyard.data.data.activities[0]?.timestamps?.start}
              </p> */}
            </div>
          </div>
        )}
        <div
          className={`${
            lanyard.data && lanyard.data.data.activities.length > 0
              ? "pt-1.5"
              : "pt-4"
          }`}
        >
          <h2 className="font-mono text-lg tracking-tighter ">projects</h2>
        </div>

        {!project ? (
          <div className="space-y-3 py-3 min-h-96 flex flex-col justify-center items-center">
            <Loader />
          </div>
        ) : (
          <ul className="space-y-3 py-0.5 flex flex-col ">
            {project.map((data, id) => (
              <Projects
                key={id}
                title={data.title}
                tech={data.tech}
                link={data.link}
                desc={data.desc}
                users={data.users}
              />
            ))}
          </ul>
        )}
      </article>
      <Footer />
    </div>
  );
};
export { Container };
