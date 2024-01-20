import { Badge } from "./ui/badge"

interface TeachStackProp{
    techStack:string
}
const CustomBadge:React.FC<TeachStackProp> = ({techStack})=>{
    return(
        <Badge variant={"outline"} className="font-normal rounded-none shadow-none mr-1">{techStack}</Badge>
    )
}

export{CustomBadge}