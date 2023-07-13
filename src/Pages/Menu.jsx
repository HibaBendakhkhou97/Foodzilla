import React from 'react';import {Nav,Gallery,End} from '../components';
import { burger,Patisserite,noodles } from './Images';
import { motion } from 'framer-motion';
import bgVideo from "./Images/bgVideo.mp4";
import { Link } from 'react-router-dom';
function Menu() {
  return (
     
      
        <motion.div  initial={{opacity : 0}} animate={{opacity:1}}>
          <div className='main'>
          <video src={bgVideo} autoPlay="autoPlay" loop muted />
          <div className='content'>
          <div className='md:flex mx-10  mt-52 justify-between  my-28 space-x-4'>
        <div>
           <Link to={'/List/French'}>
          <img  src={Patisserite} className=' hover:scale-125 md:flex hidden w-[400px] my-10 rounded-2xl hover:shadow-lg hover:shadow-amber-600 duration-500  ' /> 
          </Link>
          <Link to={'/List/French'}>
          <h1 className='font-astralight text-center text-3xl text-amber-300 font-bold flex-row hover:text-cyan-800 duration-500'>FRENCH</h1>
          </Link>
          </div>

          <div>
          <Link to={'/List/American'}>
          <img src={burger}  className='hover:scale-125 md:flex hidden w-[400px] my-10 rounded-2xl hover:shadow-lg hover:shadow-amber-600 duration-500 ' />
          </Link>
          <Link to={'/List/American'}>
          <h1 className='font-astralight text-center text-3xl text-amber-300 font-bold flex-row hover:text-cyan-800 duration-500'>AMERICAN</h1>
          </Link>
          </div>

          <div>
          <Link to={'/List/Korean'}>
          <img src={noodles} className='hover:scale-125 hidden md:flex w-[400px] my-10 rounded-2xl hover:shadow-lg hover:shadow-amber-600 duration-500 ' />
          </Link>
          <Link to={'/List/Korean'}>
          <h1 className='font-astralight text-center text-3xl text-amber-300 font-bold flex-row hover:text-cyan-800 duration-500'>KOREAN</h1>
          </Link>
          </div>

          </div>
         </div>
         
        </div>
    
    <div className='mt-0'>
    </div>
    </motion.div>
  )
}

export default Menu
