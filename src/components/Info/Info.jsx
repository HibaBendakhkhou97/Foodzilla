import React from "react";
import { blackChef,chef1,chef2,greenChef,plat,soup} from "./Images";


const Info = () => {

    return(
        <div className="md:flex flex-row mx-32 justify-between text-white items-center">
            <div>
                <img src={greenChef} className="w-80 "  />
                </div>
                <div className=" w-auto md:w-[50%] font-extralight text-xl p-8 shadow-md shadow-amber-500 rounded-xl md:ml-8 hover:text-amber-500 duration-500 hover:bg-slate-100 hover:bg-opacity-20 hover:scale-110">
                    <p><span className="text-cyan-800 font-bold font-serif text-4xl">OUR </span>
                    step-by-step instructions, accompanied by vibrant photographs
                             , will guide you through each recipe with ease. Discover a harmonious
                               blend of traditional and contemporary dishes, infused with aromatic spices 
                               and fresh, seasonal ingredients. Embrace your passion for cooking and let our
                                recipes ignite your creativity in the kitchen. Get ready to tantalize your
                                 taste buds and impress your loved ones with our collection of delectable 
                              recipes that are sure to make every meal a memorable one.  
                      </p>
          
                </div>
            

        </div>
    );
}
export default Info;
                            