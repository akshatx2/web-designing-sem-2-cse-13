import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function App(){
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <header>
          <nav className='bg-slate-800 text-white p-4 flex items-center'>
            <h1 className='font-bold text-xl'>
              Fitlife
            </h1>
            <ul className='flex gap-6 ml-auto'>
              <li>Home</li>
              <li>About</li>
              <li>Trainers</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        <section className='bg-gradient-to-r from-blue-300 to-indigo-400 text-gray-100 flex flex-col items-center justify-center gap-10'>
          <h1 className='text-4xl mt-10 font-bold'>
            Transform Your Body & Mind
          </h1>
          <div className='text-gray-200'>
            Join Fitlife today and achieve your fitness goals with expert trainers
          </div>
          <button className='bg-white text-gray-800 hover:bg-gray-200 rounded-lg px-4 py-2 cursor-pointer transition mb-10'>
            Join Now
          </button>
        </section>
        <section className='flex flex-grow flex-col gap-4 justify-center items-center'>
          <h1 className='font-bold text-4xl'>Our Programs</h1>
          <div className='flex md:flex-row flex-col gap-3.5'>
            <div className='bg-white rounded-lg shadow-md p-6 w-125 flex flex-col items-center'>
                <p className='text-red-600'>Weight Training</p>
                <p>Build Strength and muscle with guided weight training pograms.</p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 w-125 flex flex-col items-center'>
                <p className='text-red-600'>Yoga Clasees</p>
                <p>Improve flexibility and mental welness through yoga sessions.</p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 w-125 flex flex-col items-center'>
                <p className='text-red-600'>Diet Plans</p>
                <p>Personalised Diet Plans to complete your fitness routine.</p>
            </div>
          </div>
        </section>
        <footer className='mt-auto'>
          <div className='bg-gradient-to-r from-blue-300 to-indigo-400 flex flex-col justify-center items-center p-4'>
            <div className='text-white font-bold'>
              @2026 Fitlife | All Rights Reserved
            </div>
            <div className='text-gray-100'>
              Contact: info@Fitlife.com
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
export default App