import { ProjectProps } from "@/interface";
import { CustomBadge } from ".";


const Projects: React.FC<ProjectProps> = ({ link, title, desc, tech ,users}) => {
  return (
    <li>
      <a
        className="flex flex-col group transition-all duration-300 space-y-1.5 !no-underline"
        href={link}
        target="_blank"
      >
        <div>
          <span className="font-medium underline underline-offset-4 transition-all duration-300 group-hover:text-blue-300 ">
            {title}
          </span> 
          {users && (
              <span className="ml-2 tracking-tighter no-underline rounded-lg px-2 py-0.5  font-mono text-[.7rem] bg-primary leading-tight text-primary-foreground ">{users}+ Visitors</span>
            )} 
        </div>
        <span className="text-muted-foreground max-md:text-sm text-sm">{desc}</span>
        <span className="text-muted-foreground ">
          {tech?.map((lang, id) =>
            lang ? <CustomBadge  key={id + lang} techStack={lang} /> : null
          )}
        </span>
      </a>
    </li>
  );
};
// music web app where you can listen add free music with group listening.
export { Projects };
