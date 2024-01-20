import { Badge } from "./ui/badge"

interface TeachStackProp{
    techStack:string
}
const CustomBadge:React.FC<TeachStackProp> = ({techStack})=>{
    return(
        <Badge variant={"outline"} className="font-normal hover:border-red-300 transition-all duration-100 rounded-none shadow-none mr-1">{techStack}</Badge>
    )
}

export{CustomBadge}