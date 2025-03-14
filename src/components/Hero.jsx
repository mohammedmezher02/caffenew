import React from 'react'
import { imgHero } from '../assets'

function Hero() {
  return (
    <div className=' bg-red-950'>

      <div className='container mx-auto text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20'>
        {/* first div */}
        <div className='flex flex-col gap-6 max-w-lg'>
          <h1 className='text-4xl font-bold font-mono text-orange-300'>Best Cofee</h1>
          <h2 className='text-4xl font-bold'>Make your Day Great Whith Our Special Cofee</h2>
          <p className='text-lg'>
            Welcom to Our Cofee Paradise,Where Every been tells a Story and every cup sparks joy
          </p>
          {/* buttons */}
          <div className='flex gap-6 my-4'>
            <button className='bg-orange-500 text-white px-6 py-3 rounded-full font-bold  hover:bg-transparent transform duration-500 '>Order Now</button>
            <button className='bg-transparent text-white px-6 py-3 rounded-full font-bold border hover:border-orange-500 transform duration-500  '>Contact us</button>
          </div>
        </div>
        {/* second div */}
        <div className='flex justify-center '>
          <img src={imgHero} alt="Hero cofee" />

        </div>




      </div>
    </div>
  )
}

export default Hero