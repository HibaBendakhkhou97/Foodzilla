import Info from "./Info";
import React from 'react';
import { blackChef,chef1,chef2,greenChef,plat,soup } from "./Images";


function Info2() {
  return (
    <div className="md:flex flex-row mx-32 justify-between text-white items-center mt-10 mb-10">
        <div className=" w-auto md:w-[50%] font-extralight text-xl p-8 shadow-md shadow-cyan-800 rounded-xl md:ml-8 hover:text-cyan-800 duration-500 hover:bg-slate-100 hover:bg-opacity-20 hover:scale-110 ">
            <p><span className="text-amber-500 font-bold font-serif text-4xl">we</span> invite you to embark on a culinary
                 adventure like no other. Explore a treasure 
                 trove of mouthwatering recipes crafted with
                  love and expertise. From sizzling appetizers to 
                  delectable desserts, we've got you covered. Dive
                  into a world of flavors, where each recipe is meticulously
                  curated, ensuring an unforgettable gastronomic experience.   
              </p>
        </div>
        <div>
        <img src={chef2} className=" w-96 rounded-full " />
        </div>

        </div>
    
);
}

export default Info2;