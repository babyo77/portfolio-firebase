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
    <div className=" container flex flex-col  space-y-2 ">
      <article>
        <div className="py-4 font-normal px-2 ">
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
          <h2 className="text-lg px-2  font-semibold pb-2 pt-2">Projects 🗂️</h2>
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
        {lanyard.data && (
          <div className=" p-2 border border-white/5 flex bg-black/40 text-zinc-300  items-center rounded-sm mt-4">
            <div className="h-14 max-md:w-20 w-[4.5rem] relative  rounded-sm ">
              <img
                className="h-14 w-14 object-cover  rounded-sm"
                src={
                  lanyard?.data?.data.activities[0]?.assets?.large_image?.startsWith(
                    "mp:external"
                  )
                    ? lanyard?.data?.data.activities[0]?.assets?.large_image?.includes(
                        "%3Furl%3Dhttps"
                      )
                      ? `https://wsrv.nl/?url=${decodeURIComponent(
                          lanyard?.data?.data?.activities[0]?.assets?.large_image?.match(
                            /%3Furl%3D(https%3A%2F%2Flh3\.googleusercontent\.com%2F[^/]+)/ // Match until the first '/' after 'lh3.googleusercontent.com/'
                          )?.[1] || ""
                        )}`
                      : `https://${lanyard?.data?.data?.activities[0]?.assets?.large_image
                          .split("/https/")
                          .pop()}`
                    : `https://cdn.discordapp.com/app-assets/${lanyard?.data?.data?.activities[0]?.application_id}/${lanyard?.data?.data?.activities[0]?.assets?.large_image}.png`
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
                {lanyard.data.data.activities[0]?.name || "Currently offline"}
              </p>

              <p className="dark:text-zinc-300">
                {lanyard.data.data.activities[0]?.details}
              </p>
              <p className="dark:text-zinc-300">
                {lanyard.data.data.activities[0]?.state}
              </p>
              {/* <p className="text-zinc-300 text-[.5rem]">
                {Number(
                  100 -
                    (100 * (0 - new Date().getTime())) /
                      lanyard.data.data.activities[0].timestamps?.start
                )}
              </p> */}
            </div>
          </div>
        )}
        <div className="mt-2 rounded-sm border border-white/5">
          {/* <p className="mb-2 font-medium text-base">Listening To</p> */}
          <a
            href="https://napster-drx.vercel.app/embed/user/4e80b34b-6eb4-4ac4-9bff-73011df25012"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className=" rounded-sm"
              src="https://napster-drx.vercel.app/embed/user/4e80b34b-6eb4-4ac4-9bff-73011df25012"
              width="100%"
              height="78"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </a>
        </div>
      </article>
      <Footer />
    </div>
  );
};
export { Container };
