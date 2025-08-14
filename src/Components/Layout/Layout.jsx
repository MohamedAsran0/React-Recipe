import React from 'react'
import styles from './Layout.module.css'
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from './../Footer/Footer';


export default function Layout() {
  return (
    <>
    <div className='flex justify-start'>
      <div className='relative min-h-screen'>
        <Navbar />
      </div>
      
      <Outlet />
    </div>

    <div className='relative left-0 right-0 bottom-0 bg-white'>
      <Footer />
    </div>

    </>
  )
}
