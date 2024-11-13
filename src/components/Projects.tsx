import { ProjectProps } from "@/interface";
import { CustomBadge } from ".";
import { Badge } from "./ui/badge";

const Projects: React.FC<ProjectProps> = ({
  link,
  title,
  desc,
  tech,
  users,
}) => {
  return (
    <li>
      <a
        className="flex  hover:opacity-80 flex-col group transition-all duration-300 space-y-1.5 !no-underline"
        href={link}
        target="_blank"
      >
        <div>
          <span className="font-medium">{title}</span>
          {users && (
            <Badge
              variant={users !== "archived" ? "default" : "secondary"}
              className="ml-2 tracking-tighter no-underline rounded-lg px-2 py-0.5  font-mono text-[.7rem]  leading-tight "
            >
              {users}
            </Badge>
          )}
        </div>
        <span className="text-muted-foreground max-md:text-xs text-xs">
          {desc}
        </span>
        <span className="text-muted-foreground  hidden">
          {tech?.map((lang, id) =>
            lang ? <CustomBadge key={id + lang} techStack={lang} /> : null
          )}
        </span>
      </a>
    </li>
  );
};
export { Projects };
