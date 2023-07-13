import React from 'react';
import foodzilla from "./FOODZILLA.png"
import { Link } from 'react-router-dom';

function End() {
  return (
    <div className='bg-amber-700 mt-0 mx-0 '>
      <img src={foodzilla} className='w-20 mx-auto hover:scale-150  duration-500' />
      <div className='md:flex flex-row md:justify-between  text-cyan-300 mx-11 items-center '>
        <div className=' p-6 text-xl font-extralight  '>
        <Link to={'/Menu'} ><ul className='font-bold hover:scale-110 hover:text-amber-200 duration-500'>Menu</ul></Link>
        <Link to={'/List/French'}><li className='hover:text-amber-300 duration-500'>French reciaes</li></Link>
        <Link to={'/List/American'}><li className='hover:text-amber-300 duration-500'>American recipes</li></Link>
        <Link to={'List/Korean'}><li className='hover:text-amber-300 duration-500'>Korean recipes</li></Link>
        </div>

        <div className=' p-6 text-xl font-extralight md:text-center ml-16'>
         <Link to={'/'}><ul className='font-bold hover:scale-110 hover:text-amber-200 duration-500'>Home</ul></Link>
       <Link to={'/Contact'}> <p className='hover:text-amber-300 duration-500'>Contact Us</p></Link>
        <Link to={'/Menu'}><p className='hover:text-amber-300 duration-500'>Galerry</p></Link>
        </div>

        <div className='p-6 text-xl font-extralight'>
         <ul className='font-bold hover:scale-110 hover:text-amber-200 duration-500'></ul>
       <Link> <li className='hover:text-amber-300 duration-500'>About us</li></Link>
       <Link> <li className='hover:text-amber-300 duration-500'>NUM : 00 123 456 789</li></Link>
        <Link><li className='hover:text-amber-300 duration-500'> Instagram : </li></Link>
       <Link> <li className='hover:text-amber-300 duration-500'>Youtube : </li></Link>
        </div>




        </div>
      </div>

        

  )
}

export default End