import React from 'react';
import { email,phone,location } from './Images';
import { motion } from "framer-motion"

function Contact() {
  return (
    
    <motion.div initial={{opacity : 0}} animate={{opacity:1}}>
    <h1 className='font-extralight text-amber-500 text-5xl mx-auto my-20 text-center  hover:text-cyan-600  duration-500'>
       Get in touch 
      </h1>

    <div className="md:flex flex-row justify-between mx-24 my-10 space-x-8" >
      <div className='p-10 bg-cyan-800 text-center hover:shadow-lg hover:shadow-white text-amber-400 rounded-2xl hover:bg-amber-400 hover:text-cyan-800 hover:scale-110 duration-500 font-extralight mt-16'>
        <img src={location} className='w-20 mx-auto mb-8' />
        <span className='font-bold'>OUR LOCATION</span>
        <p className='md:w-64 w-auto mx-auto my-10 border border-amber-500 rounded-lg p-3 '>
        Explore the fresh flavors of the coast with our collection of seafood recipes, perfect for those who crave the taste of the ocean
        </p>
        <a href='#' className='text-cyan-200 '>Find US Here</a>
      </div>

      <div className='p-10 text-cyan-800 text-center bg-amber-400 rounded-2xl hover:shadow-lg hover:shadow-white hover:text-amber-400 hover:bg-cyan-800 hover:scale-110 duration-500 font-extralight md:mt-0 mt-10'>
        <img src={email} className='w-20 mx-auto mb-8' />
        <span className='font-bold'>EMAIL</span>
        <p className='md:w-64 w-auto mx-auto my-10 border border-amber-500 rounded-lg p-3 '>
        We understand that cooking can sometimes come with questions or uncertainties. That's why we encourage you to feel free to ask us anything. Whether you need clarification on a recipe, want suggestions for ingredient substitutions, or have specific dietary concerns, our team is here to assist you
        </p>
        <a href='#' className='text-cyan-200 '>FoodZilla.Food@YourTest.com</a>

      </div>

      <div className='p-10 bg-cyan-800 text-center hover:shadow-lg hover:shadow-white text-amber-400 rounded-2xl hover:bg-amber-400 hover:text-cyan-800 hover:scale-110 duration-500 font-extralight mt-16'>
        <img src={phone} className='w-20 mx-auto mb-8' />
        <span className='font-bold'>CALL US</span>
        <p className='md:w-64 w-auto mx-auto my-10 border border-amber-500 rounded-lg p-3 '>
      we offer the opportunity for one-on-one calls with our culinary experts. Whether you're seeking customized recipe recommendations, personalized cooking tips, or in-depth guidance on mastering a particular technique. 
        </p>
        <a href='#' className='text-cyan-200 '>+212 123 456 789</a>

      </div>
    </div>
    <div className='my-20 font-serif text-6xl text-amber-400 '>
      <p className='text-center'>
     FOOD<span className=' text-slate-100 '>ZI</span><span className='text-cyan-800'>LLA</span></p>
    </div>
    </motion.div>
  )
}

export default Contact