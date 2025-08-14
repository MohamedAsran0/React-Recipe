import React, { useEffect, useState } from 'react'
import styles from './CardDetails.module.css'
import { FaYoutube } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

import axios from './../../../node_modules/axios/lib/axios';

import { BeatLoader } from 'react-spinners';
import { useNavigate, useParams } from 'react-router-dom';

export default function CardDetails() {

  const { id } = useParams();

  const [meal, setMeal] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const navigate = useNavigate();

  async function getData() {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

      setMeal(data.meals[0]);
      const mealData = data.meals[0];

      const ingArray = [];
      const measArray = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealData[`strIngredient${i}`];
        const measure = mealData[`strMeasure${i}`];
        if (ingredient.trim() !== "") {
          ingArray.push(ingredient.trim());
          measArray.push(measure.trim());
        }
        else {
          break;
        }
      }

      setIngredients([...ingArray]);
      setMeasures([...measArray]);


    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  }

  useEffect(() => {
    getData();
  }, [])



  if (meal == null) {
    return (
      <>
        <div className='w-full absolute inset-0 flex justify-center items-center bg-gray-400'>
          <BeatLoader />
        </div>
      </>
    );
  }

  return (
    <>
      <div className='bg-[#F4F2EE] w-full min-h-screen px-8 pb-10'>

        <div className='mt-20 mb-5'>
          <h1 className='p-3 text-5xl font-semibold'>{meal.strMeal}</h1>
        </div>

        <div className='lg:flex '>
          <div className='lg:flex lg:w-2/3'>
            <div className='lg:w-1/2'>
              <img src={meal.strMealThumb} className='w-full rounded-2xl' alt={meal.strMeal} />
              <div className='w-full flex justify-center items-center mt-4'>
                <button className='bg-red-600 text-white px-5 py-2 rounded-xl cursor-pointer mr-4'><a target='_blank' href={meal.strYoutube}><FaYoutube className='inline' /> youtube</a> </button>
                <button className='bg-green-400 text-white px-5 py-2 rounded-xl cursor-pointer'> <a target='_blank' href={meal.strSource}><BsGlobe className='inline' /> source</a> </button>
              </div>
            </div>

            <div className='mt-4 lg:mt-0 lg:ml-3 lg:mr-3 lg:w-1/2'>
              <p className='font-semibold'>{meal.strInstructions}</p>
            </div>
          </div>

          <div className='bg-white w-10/12 lg:w-1/3 mx-auto p-7 rounded-2xl mt-6 lg:mt-0 h-fit'>
            <h3 className='text-2xl font-bold'>Ingredients</h3>
            <div className='w-full h-1 bg-gray-300 mt-2 mb-5 mx-auto'></div>


            {ingredients.map((ing, index) => (
              <div key={index}>
                <div className='flex justify-between'>
                  <p className='font-semibold'>{ing}:</p>
                  <p className='font-semibold'>{measures[index]}</p>
                </div>
                {index != ingredients.length - 1 && <div className='w-full h-0.5 bg-gray-300 my-2 mx-auto'></div>}
              </div>
            ))}

          </div>
        </div>


      </div>
    </>
  )
}
