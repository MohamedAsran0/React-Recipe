import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className='container px-4 py-7 mx-auto'>
        <Link to={'/'}>
          <div className='flex justify-between flex-col sm:flex-row pb-5'>
            <div>
              <img src={logo} className='w-10 h-8 inline mr-2' alt="Recipe Logo" />
              <p className='text-2xl font-semibold inline'>Recipe</p>
            </div>
            <p className='text-2xl font-bold text-[#1d4ed8]'>Route</p>
          </div>
        </Link>

        <div className='w-11/12 h-0.5 bg-gray-100 mx-auto'></div>

        <p className='text-base font-normal text-gray-500 text-center pt-8'>© 2025 Nagy Osama™. All Rights Reserved.</p>
        
      </div>
    </>
  )
}
