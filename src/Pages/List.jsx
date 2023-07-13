import React from 'react'
import { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
function List() {
  const [cuisine,setCuisine] = useState([]);
  let params = useParams();

  const getList = async (type) =>{
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=13abed78869147b581b8f225ee0c442e&cuisine=${type}`);
      const recipes = await data.json();
      setCuisine(recipes.results);
  };
  

   useEffect(() => {
     getList(params.type);
     console.log(params.type);
   },[params.type]);

  return (
    <motion.div initial={{opacity : 0}} animate={{opacity:1}} >
      <h1 className='font-semibold font-amber-500 p-10 text-5xl text-center hover:text-cyan-800 duration-500 text-amber-400'>{params.type}</h1>
            <div className='text-white md:grid md:grid-cols-3  mx-[10%] '>
              {cuisine.map((recipe) => {
                return(
                  <div key={recipe.id} className='md:w-[300px] p-4 text-amber-400  hover:scale-110 duration-500 m-2'>
                    <Link to={'/Recipe/'+recipe.id}>
                    <img src={recipe.image} alt="" className='rounded-2xl  hover:shadow-lg hover:shadow-amber-600  duration-300 '/>
                    <h4 className='w-[300px]  font-semibold mt-4'>{recipe.title}</h4>
                    </Link>
                  </div>
                );
              })}
            </div>  

    </motion.div>

            );
        

}
export default List;