import React from 'react'
import profile from '../assets/profile.svg'
const Header = () => {
  return (
    <header className='flex justify-between pt-8'>
          <h1 className='text-white font-bold'>APP</h1>
          <button className='flex items-center justify-center gap-2 rounded-full bg-btnColor px-4'>
              <img width='25' src={profile} alt="profile" />
              <p className='text-[16px]'>Logout</p>
          </button>
    </header>
  )
}

export default Header
