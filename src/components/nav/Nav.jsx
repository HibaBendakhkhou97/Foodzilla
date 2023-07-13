import React,{useState} from "react";
import FOODZILLA from './FOODZILLA.png';
import {MdOutlineRestaurant,MdOutlineRestaurantMenu} from "react-icons/md";
import { Link } from "react-router-dom";



const Nav = () => {

    const [nav,setNav]=useState(false);


    return(
        <>
      <div className="text-white flex justify-between items-center h-24 max-w-[1248px] mx-auto px-4 font-mono">
        <img src={FOODZILLA} alt="foodzilla" className=" hover:scale-150  duration-500 w-20" />
        <ul className="md:flex hidden mt-2 space-x-20">
        <Link to={'/Menu'} >  <li className="p-4  text-amber-500 hover:text-cyan-800 duration-700 font-semibold">Menu</li></Link>
        <Link to={'/List/French'} >  <li className="p-4  text-amber-500 hover:text-cyan-800 duration-700 font-semibold">Gallery</li></Link>
        <Link to={'/Contact'} >  <li className="p-4  text-amber-500 hover:text-cyan-800 duration-700 font-semibold ">Contact</li></Link>
            </ul>
        
        <ul className="md:flex hidden">
        <Link to={'/'} > <li><button className="py-2 px-4  mt-2  mx-4  text-amber-500 bg-cyan-800 hover:text-cyan-800 duration-500  hover:bg-amber-500 rounded-md">Home</button></li></Link>
        <Link to={'/Contact'} > <li><button className="py-2 px-4  mt-2 mx-4  text-amber-500 bg-cyan-800 hover:text-cyan-800  duration-500 hover:bg-amber-500 rounded-md">FeedBack</button></li></Link>
        <Link to={'/Menu'} > <li><button className="py-2 px-4  mt-2 mx-4  text-amber-500 bg-cyan-800 hover:text-cyan-800  duration-500 hover:bg-amber-500 rounded-md">Meals</button></li></Link>
        </ul>
       
        <div onClick={()=>setNav(!nav)} className="block md:hidden">
            {!nav ? <MdOutlineRestaurantMenu size={35} color="rgb(21 94 117)"  /> : <MdOutlineRestaurant size={35} color="rgb(245 158 11)" /> }
        </div>
         <div className={nav ?"fixed left-0 top-0 w-[60%] border-r border-r-cyan-800 border-b border-b-cyan-800 h-full bg-cyan-800 bg-opacity-50 eas-in-out duration-500" : "fixed left-[-100%] "}>
            <ul className="pt-28 uppercase p-4">
            <Link to={'/Menu'} >  <li className=" p-4 border-b border-b-cyan-800 text-amber-500 hover:text-cyan-800 duration-700 font-semibold">Catégories</li></Link>
            <Link to={'/List/French'} > <li className=" p-4 border-b border-b-cyan-800  text-amber-500 hover:text-cyan-800 duration-700 font-semibold">Recipes</li></Link>
            <Link to={'/Contact'} ><li className=" p-4 border-b border-b-cyan-800  text-amber-500 hover:text-cyan-800 duration-700 font-semibold ">Contact</li></Link>

            </ul>
         </div>
      </div>
               <hr className="mx-6" /></>
    );
}

export default Nav;