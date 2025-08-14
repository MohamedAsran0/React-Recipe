import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Card from './../Card/Card';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';




export default function Home() {

  const [activeClass, setActiveClass] = useState('');
  const [meals, setMeals] = useState(null);

  const categories = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian"
  ];

  function handleCategory(e) {
    setActiveClass(e.target.value);
  }

  async function getData() {
    try {
      let data = [];
      if (activeClass == '') {
        data = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      }
      else {
        data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeClass}`);
      }
      setMeals(data.data.meals);


    }
    catch (error) {
      console.log(error);

    }

  }


  useEffect(() => {
    getData();

  }, [activeClass])



  if (meals == null) {
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

      <div className='bg-[#F4F2EE] w-full'>

        <div className='mt-20 text-center mb-5'>
          <h1 className='p-3 text-4xl font-bold bg-gradient-to-r from-yellow-400 via-red-700 to-yellow-400 bg-clip-text text-transparent'>Learn, Cook, Eat Your Food</h1>
        </div>

        <div className="w-full text-center">
          <select className="w-11/12 mx-auto bg-white p-3 rounded-xl border border-gray-300 sm:hidden"
                  onChange={(e) => handleCategory(e)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()} >
                {cat}
              </option>
            ))}
          </select>

          <div className="hidden sm:flex flex-wrap justify-start ml-8 gap-3">
            <button
              key='all'
              value=''
              className={`px-5 py-2 rounded-full font-medium border border-gray-300 bg-transparent text-gray-700 hover:bg-white hover:shadow-2xl transition duration-200 shadow-sm ${activeClass == '' && styles.active}`}
              onClick={(e) => handleCategory(e)}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                value={cat.toLowerCase()}
                className={`px-5 py-2 rounded-full font-medium border border-gray-300 bg-transparent text-gray-700 hover:bg-white hover:shadow-2xl transition duration-200 shadow-sm ${activeClass == cat.toLowerCase() && styles.active}`}
                onClick={(e) => handleCategory(e)}
              >
                {cat}
              </button>
            ))}
          </div>



          <div className='container px-8 mx-auto my-25'>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 md:gap-x-5 md:gap-y-16'>

              {meals.map((meal) => <Card key={meal.idMeal} pro={meal} />)}


            </div>

          </div>
        </div>



      </div>


    </>
  )
}
