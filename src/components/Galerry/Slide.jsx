import React from "react";
import Marquee from "react-fast-marquee";
import "./Slide.css"
import { Link } from "react-router-dom";


const Slide = ({r1,r2,r3}) => {
 
    return(
        <>
        <Marquee gradient={false}  loop="Infinite"   className="shadow-md shadow-amber-500/80 md:w-[40%]  p-8   m-4   align-middle flex bg-amber-500 bg-opacity-40 rounded-xl "  >
        <div className="m-2" >
<img src={r1} className="max-w-[200px]  rounded-3xl hover:scale-110 hover:rotate-[-3deg]  duration-500 hover:shadow-lg hover:shadow-amber-500"/>  
        </div>
        <div className="m-2" >
<img src={r2} className="max-w-[200px]  rounded-3xl hover:scale-110 hover:rotate-[-3deg]  duration-500 hover:shadow-lg hover:shadow-amber-500"/>      
      </div>

      <div  className="m-2">
 <img src={r3} className="max-w-[200px]  rounded-3xl hover:scale-110 hover:rotate-[-3deg]  duration-500 hover:shadow-lg hover:shadow-amber-500"/>      
     </div>

   <div className="m-2">        
<img src={r1} className="max-w-[200px]  rounded-3xl hover:scale-110 hover:rotate-[-3deg]  duration-500 hover:shadow-lg hover:shadow-amber-500"/>
 </div>  
 <div  className="m-2">
 <img src={r2} className="max-w-[200px]  rounded-3xl hover:scale-110 hover:rotate-[-3deg]  duration-500 hover:shadow-lg hover:shadow-amber-500"/>  
 </div>
 <div className="m-2"> 
  <img src={r3} className="max-w-[200px]  rounded-3xl hover:scale-110 hover:rotate-[-3deg]  duration-500 hover:shadow-lg hover:shadow-amber-500"/>
  </div>
  <div  className="m-2">
 <img src={r1} className="max-w-[200px]  rounded-3xl hover:scale-110 hover:rotate-[-3deg]  duration-500 hover:shadow-lg hover:shadow-amber-500"/>  
 </div>
 <div  className="m-2">
 <img src={r2} className="max-w-[200px]  rounded-3xl hover:scale-110 hover:rotate-[-3deg]  duration-500 hover:shadow-lg hover:shadow-amber-500"/>  
 </div>
 <div  className="m-2">
 <img src={r3} className="max-w-[200px]  rounded-3xl hover:scale-110 hover:rotate-[-3deg]  duration-500 hover:shadow-lg hover:shadow-amber-500"/>
 </div>

      </Marquee>
</>
    );
}
export default Slide;
