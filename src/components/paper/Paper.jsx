import React from "react";
import { Link } from "react-router-dom";


const Paper = () =>{

    return(
        <div className="flex">
        <div className=" mt-32   text-center md:text-left ">
            <h1 className="text- text-6xl text-orange-200 font-extralight ">Cook your Food With  <span className="text text-amber-500 italic hover:text-cyan-800 duration-500 font-bold "> Confidence</span> </h1>
            <p className="  mt-16 w-[700px] font-mono text-orange-200 hover:text-cyan-800 duration-500 shadow text-xl">Unlock the secrets of culinary mastery with our step-by-step recipe guides ,From quick and easy meals to gourmet delights, we have something to satisfy every palate</p>
            <Link to={'/Menu'} > <button className="mt-28 rounded-md text-amber-500 bg-cyan-800 p-3 text-2xl font-mono hover:text-cyan-800 hover:bg-amber-500 duration-500">Get Started</button></Link>
        </div>
        </div>
    );

}
export default Paper;