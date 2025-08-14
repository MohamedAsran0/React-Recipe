import React from 'react'
import styles from './Card.module.css'

import { FaEarthAfrica } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Card({ pro }) {

  const { strMeal, strArea, strMealThumb, idMeal } = pro;


  return (
    <>

      <div className="bg-white p-5 rounded-4xl duration-500 hover:shadow-2xl hover:scale-105 group/parent ">
        {strMealThumb && <img src={strMealThumb} className='w-3/4 rounded-full mx-auto -translate-y-12 shadow-2xl duration-500 group-hover/parent:rotate-[360deg]' alt={strMeal} />}
        <h3 className='text-xl font-semibold'>{strMeal.split(" ").slice(0, 2).join(" ")}</h3>
        {strArea && <div className='flex gap-3 justify-center items-center text-green-500 font-medium'>
          <FaEarthAfrica />
          <h5>{strArea}</h5>
        </div>}

        <Link to={`/CardDetails/${idMeal}`}>
          <button className='px-7 py-2 bg-green-400 font-semibold text-white rounded-full mt-5 cursor-pointer duration-400 hover:bg-green-500 hover:scale-110'>View Recipe</button>
        </Link>
      </div>

    </>
  )
}
