import React from 'react'
import Logo from "./../assets/images/logo.png"
import { HiHome, HiMagnifyingGlass,
         HiStar,
         HiPlayCircle,
         HiTv
 } from 'react-icons/hi2'
 import {HiPlus, HiDotsVertical } from "react-icons/hi"
import NavItems from './NavItems'
function Navbar() {
  const menu = [
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCHLIST',
      icon:HiPlus
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },
    {
      name:'SERIES',
      icons:HiTv
    }
  ]
  return (
   <nav>
    <div className="Logo">
      <img src={Logo} className='w-[80px] object-center md:w-[115px]'/>
      {menu.map((item) => (
        <NavItems name={item.name} Icon={item.icon}/>
      ))};
    </div>
   </nav>
  )
}

export default Navbar