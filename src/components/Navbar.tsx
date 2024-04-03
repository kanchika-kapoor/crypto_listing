import React from 'react'
import {FaCoins} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-center text-center mt-8'>
      <FaCoins className='text-5xl text-purple-900 mx-3'/>
      <h1 className="text-5xl text-white-600 font-bold">
        Crypto
        <span className="bg-purple text-center font-bold text-5xl text-green-300"> Coins</span>
      </h1>
    </div>
  )
}

export default Navbar
