import { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';



export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>


      <div className="relative">
        <button
          className={`sm:hidden p-3 text-2xl z-50 ${isOpen ? 'fixed' : "absolute"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
          className={`fixed top-0 left-0 min-h-screen bg-white  z-40 w-64 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          sm:translate-x-0 sm:static sm:w-70`}
        >
          <div className="p-4">
            <img src={logo} className="w-full mb-4" alt="Recipe Logo" />
            <ul>
              <li>
                <Link to={'/'}>
                  <div className="flex gap-1.5 items-center w-4/5 mx-auto mb-7 pl-3 pr-10 py-3 rounded-2xl text-lg font-semibold text-white bg-amber-500 shadow-[0px_5px_37px_-6px_rgba(0,0,0,0.75)] shadow-amber-500 duration-200 hover:scale-110 hover:shadow-none">
                    <GiForkKnifeSpoon />
                    <p>Meals</p>
                  </div>
                </Link>
              </li>
              <li>
               <Link to={'/'}>
                 <div className="flex gap-1.5 items-center border border-gray-300 w-4/5 mx-auto mb-6 pl-3 pr-10 py-3 rounded-2xl text-lg font-semibold text-black duration-200 hover:scale-110 hover:shadow-[0px_5px_37px_-6px_rgba(0,0,0,0.75)] hover:shadow-amber-500">
                   <GiForkKnifeSpoon />
                   <p>Ingredients</p>
                 </div>
               </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <div className="flex gap-1.5 items-center border border-gray-300 w-4/5 mx-auto mb-6 pl-3 pr-10 py-3 rounded-2xl text-lg font-semibold text-black duration-200 hover:scale-110 hover:shadow-[0px_5px_37px_-6px_rgba(0,0,0,0.75)] hover:shadow-amber-500">
                    <GiForkKnifeSpoon />
                    <p>Area</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-gray-500 opacity-50 z-30 sm:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>

    </>
  )
}
