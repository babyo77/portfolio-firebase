import axios from "axios"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Loader } from "."
import {useEffect,useRef,useState } from "react"
import { StoriesSrc } from "@/interface"
import { FaInstagram } from "react-icons/fa6";
interface VideoLink{
    link:string
    username:string,
    fullName:string
}

export const Stories:React.FC<VideoLink>=({link,username,fullName})=> {
    const [videLoaded,setVideoLoaded] = useState<boolean>(false)
 const [videoSrc,setVideoSrc] = useState<string | null>(null)

 const handPlay=()=>{
    setVideoLoaded(true)
 }
 const storyRef = useRef<HTMLVideoElement>(null)

    
   useEffect(()=>{
        const FetchStory = async()=>{
            const response = await axios.get(`https://instx-api.vercel.app/api/v1/?link=${link}`)
            const responseData:StoriesSrc[] = response.data
            setVideoSrc(responseData[0].download_link)
        }
        FetchStory()
     
    },[link])
 
   

  return (
    <Dialog>
      <DialogTrigger asChild >
        <div className="flex flex-col">

      <span className=" font-semibold text-lg capitalize transition-all duration-300 hover:text-blue-300 text-left">{fullName}</span>
      <span className="text-xs animate-pulse ">details here ▲</span>
        </div>
        
      </DialogTrigger>
      <DialogContent className="max-md:h-full backdrop-blur-md border-none">
        <DialogHeader>
          <DialogTitle className="text-sm">Backend firebase - deployed on ▲ </DialogTitle>
        </DialogHeader>
     <div className="flex justify-center items-center ">
        
            <video autoPlay loop  playsInline
            src={videoSrc || ""}
            ref={storyRef}
            onPlay={handPlay}
            onLoadedData={()=>setVideoLoaded(false)}
            className=" rounded-xl relative object-cover shadow-sm  h-[77svh] "
            />
            {!videLoaded &&(
 <div className=" absolute">
 <Loader/>
</div>
            )}
           

        </div>
      

        <DialogFooter>
            <div className="flex justify-between">

          <p className="text-xs hover:text-red-500 ">
            View on  
            <a href={link} target="_blank" id={username} className="px-1 underline underline-offset-2 ">instagram.</a>
          </p>
        
  <FaInstagram className="h-4 w-4 cursor-pointer" onClick={()=>window.open(link)} />
          
        
            </div>
        </DialogFooter>
      </DialogContent>

    </Dialog>

  )
}
