import { lineSpinner } from 'ldrs'
import { zoomies } from 'ldrs'

zoomies.register()
lineSpinner.register()

const Loader:React.FC = () => {
  return (
    <l-line-spinner
      size="20"
      stroke="1"
      speed="1"
      color="gray"
    ></l-line-spinner>
  );
};

const Loader2:React.FC=()=>{
    return(
        <l-zoomies
        size="80"
        stroke="4"
        bg-opacity="0.1"
        speed="1.4" 
        color="gray" 
      ></l-zoomies>
    )
}

export {Loader,Loader2}