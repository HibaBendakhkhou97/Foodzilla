import React from 'react';
import {Nav,Hero,Paper,Gallery,Info,Info2,End} from '../components';
import { motion } from 'framer-motion';


function Main() {
  return (
    <motion.div className='bg-#00300 ' initial={{opacity : 0}} animate={{opacity:1}}>
    <div className='md:flex flex-row  text-white'>
      <Hero />
      <Paper />
    </div>
    <hr className='mt- mt-20 mx-10'/>
    <div className='mx-24 mt-10'>
      <Gallery />
      </div>
    <Info />
    <Info2 />
  </motion.div>

  )
}

export default Main