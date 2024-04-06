import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to="/">
      <div className='flex justify-center text-center mt-8'>
        <FaCoins className='text-5xl text-orange-200 mx-3'/>
        <h1 className="text-5xl text-white-600 font-bold">
          Crypto
          <span className="text-center font-bold text-5xl text-green-300"> Coins</span>
        </h1>
      </div>
    </Link>
  )
}

export default Navbar
