import React from 'react'
import NeftlixLogo from './NeftlixLogo'
import SigInNav from './SigInNav.JSX'
const Navbar = () => {
  return (
    <div id="navbar" className="relative flex z-40 bg-transparent w-full items-center justify-between px-32 py-4">
    <div className="flex items-center">
        <NeftlixLogo></NeftlixLogo>
    </div>
     <div className='flex items-center'><SigInNav></SigInNav></div>
    </div>
  )
}

export default Navbar