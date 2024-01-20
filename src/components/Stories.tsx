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
import { MdOutlineReplay } from "react-icons/md";
interface VideoLink{
    link:string
    username:string,
    fullName:string
}

export const Stories:React.FC<VideoLink>=({link,username,fullName})=> {
    const [videLoaded,setVideoLoaded] = useState<boolean>(false)
 const [videoSrc,setVideoSrc] = useState<string | null>(null)
 const [replay,setReplay] = useState<boolean>(false)
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
      <span className="text-xs animate-pulse ">details here ▲</span>
      </DialogTrigger>
      <DialogContent className="max-md:h-full bg-black/70 text-white backdrop-blur-md border-none">
        <DialogHeader>
          <DialogTitle className="text-xs">{fullName}</DialogTitle>
        </DialogHeader>
     <div className="flex justify-center items-center h-[33rem] ">
        
            <video autoPlay  playsInline
            src={videoSrc || ""}
            ref={storyRef}
            onPlay={handPlay}
            onEnded={()=>setReplay(true)}
            onLoadedData={()=>setVideoLoaded(false)}
            className=" rounded-xl relative object-cover   max-h-[33rem] "
            />
            {!videLoaded &&(
 <div className=" absolute">
 <Loader/>
</div>
            )}
           

        </div>
      

        <DialogFooter>
            <div className="flex justify-between">

          <p className="text-xs">
            instagram 
            <a href="" target="_blank" className="px-1 underline underline-offset-2 ">{username}</a>
          </p>
          {replay &&(
  <MdOutlineReplay className="h-4 w-4 cursor-pointer" onClick={()=>storyRef.current?.play()} />
          )}
        
            </div>
        </DialogFooter>
      </DialogContent>

    </Dialog>

  )
}
