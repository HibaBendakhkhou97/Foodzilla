import React from "react";
import steck from "./steck.png";

const Hero = () => {
    return(
      <div className="m-16   md:flex  ">
        <img src={steck} className="md:w-[400px] w-auto rounded-lg shadow-md shadow-amber-500/80 hover:scale-110 duration-500"  />
      </div>
    
    
    
        );
}
export default Hero;