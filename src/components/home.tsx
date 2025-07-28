"use client";
import { UserProfile } from "@/app/page";
import { LanyardResponse } from "react-use-lanyard";
import OptimizedImage from "@/components/image";
import ActivityCard from "../components/activity-card";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import { cn, itemVariants } from "@/lib/utils";
import { useState } from "react";
import ReactMarkdown, { Components } from "react-markdown";

const markdownComponents: Components = {
  p: (props) => <p className="text-sm text-neutral-400" {...props} />,
  a: (props) => (
    <a
      className="text-zinc-200 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="text-neutral-300 font-semibold" {...props} />
  ),
};
function Home({
  response,
  activity,
}: {
  response: UserProfile;
  activity: LanyardResponse | undefined;
}) {
  const user = response;
  const userLinks = [
    { href: user?.twitter, icon: FaXTwitter, label: "Twitter" },
    { href: user?.github, icon: SiGithub, label: "GitHub" },
    { href: user?.insta, icon: SiInstagram, label: "Instagram" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const [transitionComplete] = useState(true);

  return (
    <>
      {/* <Transition onComplete={() => setTransitionComplete(true)} /> */}

      <motion.main
        className="px-6 py-8 max-w-[600px] mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={transitionComplete ? "visible" : "hidden"}
      >
        <motion.header
          className="flex w-full items-center justify-between"
          variants={itemVariants}
        >
          <motion.div
            className="size-11"
            variants={scaleVariants}
            whileHover={{ scale: 1.05 }}
          >
            <OptimizedImage
              src={user?.image}
              height={5000}
              width={5000}
              alt="profile image"
              loading="eager"
              className="object-cover h-full w-full object-center rounded-full"
            />
          </motion.div>
          <motion.div className="w-1/2 md:w-1/3 h-10" variants={itemVariants}>
            <Link href={"/777"} target="_blank">
              <OptimizedImage
                src={user?.gif}
                height={5000}
                width={5000}
                alt="gif"
                loading="eager"
                className="object-cover rounded-none h-full object-center"
              />
            </Link>
          </motion.div>
        </motion.header>

        <motion.div
          className="flex w-full items-start justify-start"
          variants={itemVariants}
        >
          <h1 className="text-xl font-semibold">{user?.name}</h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ReactMarkdown components={markdownComponents}>
            {user?.bio}
          </ReactMarkdown>
        </motion.div>
        {/* 
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Marketing UI design in Figma
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol> */}

        <motion.div variants={itemVariants}>
          <h2 className="font-semibold text-xl">Projects</h2>
          <div className="flex flex-col mt-2 -mb-1.5 divide-y divide-zinc-900">
            {user?.projects.map((project) => (
              <motion.div key={project?.link} variants={itemVariants}>
                <Link
                  href={project?.link}
                  target="_blank"
                  className="group block px-4 pl-2 py-3 -mx-2 rounded-md text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-200"
                  rel="noreferrer noopener"
                >
                  {project.users && ( //preview url
                    <div
                      className={cn(
                        "aspect-video mb-2",
                        project.title.toLocaleLowerCase().trim() === "ship" &&
                          "mb-0"
                      )}
                    >
                      {project.users.endsWith(".mp4") ? (
                        <video src={project.users} autoPlay loop muted />
                      ) : (
                        <OptimizedImage
                          src={project.users}
                          height={5000}
                          width={5000}
                          alt="project image"
                          loading="eager"
                          className="object-cover h-full w-full object-center rounded-md"
                        />
                      )}
                    </div>
                  )}
                  <p className="text-sm underline underline-offset-2 text-neutral-100 font-medium">
                    {project?.title}
                  </p>
                  <p className="text-sm">{project?.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <ActivityCard userId={user?.discord} initialData={activity} />

        <motion.div
          className="flex border-t pt-4 gap-2 border-neutral-800"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            {userLinks.map(
              ({ href, icon: Icon, label }, index) =>
                href && (
                  <motion.a
                    key={index}
                    href={href}
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 font-medium text-xs transition-colors text-neutral-400 hover:text-neutral-200"
                    variants={itemVariants}
                  >
                    <Icon className="size-3.5">
                      <title>{label}</title>
                    </Icon>
                    {label}
                  </motion.a>
                )
            )}
          </div>
        </motion.div>
      </motion.main>
    </>
  );
}
// function Transition({ onComplete }: { onComplete: () => void }) {
//   return (
//     <motion.div
//       className="z-10 h-screen w-screen fixed bg-[#0a0a0afd] top-0 left-0 flex flex-row justify-center items-center"
//       initial={{ top: 0, opacity: 1 }}
//       animate={{ top: "-100%", opacity: 0 }}
//       transition={{ delay: 1, ease: cubicBezier(0.65, 0, 0.35, 1) }}
//       onAnimationComplete={onComplete}
//     >
//       {[0.1, 0.15, 0.2, 0.25].map((delay, i) => (
//         <motion.div
//           key={i}
//           className="bg-white h-screen w-[25%] relative top-0"
//           initial={{ top: "100%" }}
//           animate={{ top: "-100%" }}
//           transition={{
//             duration: 0.75,
//             delay,
//             ease: cubicBezier(0.65, 0, 0.35, 1),
//           }}
//         />
//       ))}
//     </motion.div>
//   );
// }

export default Home;
