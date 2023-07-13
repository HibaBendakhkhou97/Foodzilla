import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {Gallery} from '../components';
import { motion } from 'framer-motion';
function Recipe() {
   
  let params = useParams();
  const [details,setDetails] = useState({});


   const fetchDetails = async () => {
     
     const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=13abed78869147b581b8f225ee0c442e`);
     const detailData = await data.json();
      
     setDetails(detailData);
   };
   useEffect(()=>{
     fetchDetails();
   },[params.id])

  return (
    <motion.div className='text-white' initial={{opacity : 0}} animate={{opacity:1}}>
      <p className='font-serif text-center text-2xl text-amber-400 p-5 m-8 '>{details.title}</p>

      <div className='md:flex flex-row   '>
        <img src={details.image} className='md:w-[400px] md:h-[400px] rounded-xl m-4  ml-40 hover:scale-110 duration-500 hover:shadow-lg hover:shadow-amber-400' alt="" />
        <div className='md:w-[40%]' >
          <p className='font-serif text-md p-5 m-8  rounded-xl bg-cyan-800' dangerouslySetInnerHTML={{__html:details.instructions}}></p>
        </div>
      </div>
      <p className='font-serif text-md p-5 m-8  rounded-xl bg-cyan-800' dangerouslySetInnerHTML={{__html:details.summary}}>

      </p>

      <h1 className='text-3xl font-serif text-amber-400 text-center mx-10  mb-40 '>Explore More</h1>
      <div>
      <Gallery />
      </div>

    </motion.div>
  )
}

export default Recipe