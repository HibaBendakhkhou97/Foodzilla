import React from "react";
import { milleFeuille,mochi,ramen,tiramisu,tookbokki,torttla ,spoon} from "./Images";
import Slide from "./Slide";
import { Link } from "react-router-dom";
const Gallery = () => {

    return(
       
        <div className="flex-row md:flex items-center   justify-between mb-20 ">
            <Slide r1={ramen} r2={tookbokki} r3={torttla} />
           
             <img src={spoon} className="md:w-[20%] w-[40%] mx-auto md:mx-0 " />
            <Slide r1={mochi} r2={tiramisu} r3={milleFeuille}/>
            
        </div>
        
    );
}
export default Gallery ;