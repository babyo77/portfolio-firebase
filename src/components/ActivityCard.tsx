"use client";
import { LanyardResponse, useLanyard } from "react-use-lanyard";
import BlurFade from "./magicui/blur-fade";
import Image from "next/image";

const DEFAULT_IMAGE =
  "https://i.pinimg.com/736x/c0/0f/07/c00f07cdae11db49e00f55b011ccc4f3.jpg";

function getActivityImageSrc(activity: any): string | undefined {
  if (!activity?.assets?.large_image) return undefined;
  if (activity.assets.large_image.startsWith("mp:external")) {
    if (activity.assets.large_image.includes("%3Furl%3Dhttps")) {
      const match = activity.assets.large_image.match(
        /%3Furl%3D(https%3A%2F%2Flh3\.googleusercontent\.com%2F[^/]+)/
      );
      if (match && match[1]) {
        return `https://wsrv.nl/?url=${decodeURIComponent(match[1])}`;
      }
    } else {
      return `https://${activity.assets.large_image.split("/https/").pop()}`;
    }
  } else {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
  }
  return undefined;
}

export default function ActivityCard({
  userId,
  initialData,
}: {
  userId: string;
  initialData: LanyardResponse | undefined;
}) {
  const { data } = useLanyard({
    userId,
  });

  const activities = data?.data?.activities || initialData?.data.activities;
  if (!activities) return;

  if (activities.length == 0) return;

  return (
    <>
      <section id="about">
        <BlurFade delay={0.04 * 3}>
          <h2 className="text-xl font-bold">What am i doing now ?</h2>
        </BlurFade>
        <BlurFade delay={0.04 * 4}>
          {activities?.map((activity: any) => (
            <div key={activity.id} className="w-full  mx-auto">
              <div className="rounded-lg flex py-2 items-center gap-2">
                <div className="h-14 w-auto aspect-square rounded-[0.25rem] overflow-hidden">
                  <Image
                    height={56}
                    width={56}
                    alt={activity.name}
                    className="h-full w-full rounded-[0.25rem] object-cover"
                    src={getActivityImageSrc(activity) || DEFAULT_IMAGE}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = DEFAULT_IMAGE;
                    }}
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xs">{activity.name}</h2>
                  <p className=" text-muted-foreground font-medium text-xs max-w-[250px] md:max-w-md truncate ">
                    {activity.details}
                  </p>
                  <p className="text-muted-foreground font-medium  text-xs ">
                    {activity.state}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </BlurFade>
      </section>
    </>
  );
}
