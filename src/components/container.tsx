import { ProjectProps } from "@/interface";
import { Footer, Loader, Projects } from ".";
import { Badge } from "./ui/badge";
import { useLanyard } from "react-use-lanyard";
interface ProjectProp {
  project: ProjectProps[];
  techStack: string[];
  discord: string;
  bio: string;
}

const Container: React.FC<ProjectProp> = ({
  project,
  techStack,
  discord,
  bio,
}) => {
  const lanyard = useLanyard({
    userId: String(discord),
  });

  return (
    <div className=" container flex flex-col ">
      <article>
        <div className="py-4 pb-0 font-normal px-2 ">
          <h2 className=" text-sm ">{bio}</h2>
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
        <div>
          <h2 className="text-lg px-2  font-semibold py-3 pb-1.5">
            Projects 🗂️
          </h2>
        </div>

        {!project ? (
          <div className="space-y-3 py-3 min-h-96 flex flex-col justify-center items-center">
            <Loader />
          </div>
        ) : (
          <ul className="space-y-3 px-2 py-0.5 pb-2 flex flex-col ">
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
        {lanyard.data?.data.activities.map((activity) => (
          <div
            key={activity.id}
            className=" p-2 border border-white/10 flex bg-black/30 text-zinc-300  items-center rounded-md mt-2"
          >
            <div className="h-14 max-md:w-20 w-[4.5rem] relative rounded-sm ">
              <img
                className="h-14 w-14 object-cover  rounded-sm"
                src={
                  activity?.assets?.large_image?.startsWith("mp:external")
                    ? activity?.assets?.large_image?.includes("%3Furl%3Dhttps")
                      ? `https://wsrv.nl/?url=${decodeURIComponent(
                          activity?.assets?.large_image?.match(
                            /%3Furl%3D(https%3A%2F%2Flh3\.googleusercontent\.com%2F[^/]+)/ // Match until the first '/' after 'lh3.googleusercontent.com/'
                          )?.[1] || ""
                        )}`
                      : `https://${activity?.assets?.large_image
                          .split("/https/")
                          .pop()}`
                    : `https://cdn.discordapp.com/app-assets/${activity?.application_id}/${activity?.assets?.large_image}.png`
                }
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png")
                }
                alt="discord"
              />
            </div>

            <div className="w-full  text-xs items-center leading-tight">
              <p className="font-medium text-zinc-100">
                {activity?.name || "Currently offline"}
              </p>

              <p className="dark:text-zinc-300 max-md:max-w-[200px] max-w-md truncate">
                {activity?.details}
              </p>
              <p className="dark:text-muted-foreground">{activity?.state}</p>
              {/* <p className="text-zinc-300 text-[.5rem]">
              {Number(
                100 -
                  (100 * (0 - new Date().getTime())) /
                    activity.timestamps?.start
              )}
            </p> */}
            </div>
          </div>
        ))}
      </article>
      <Footer />
    </div>
  );
};
export { Container };
