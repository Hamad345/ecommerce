import React from 'react'
import logo from '../assets/logo-colored.png'
import profile from '../assets/Vector.png'
import message from '../assets/vec.png'
import order from '../assets/v.png'
import cart from '../assets/vecor.png'

export default function Navbar() {
  return (
    <>
    <div className=' flex justify-center w-full p-0 m-0'>
      <div className='w-full sm:w-[70%] mt-2  flex flex-col sm:flex-row sm:justify-between' > 
        <img src={logo} />
        <div className='flex'>
          <input type='text' placeholder='Search' className='w-[300px] border-[#0D6EFD] px-1 border-1 rounded-l-lg'/>
          <select className='border-[#0D6EFD] px-2 border-t-1 border-b-1 border-r-1'>
            <option>All category</option>
          </select>
          <button style={{borderEndEndRadius:"8px",borderStartEndRadius:"8px"}} className='border-[#0D6EFD] px-4 border-t-1 border-r-1 border-b-1 bg-[#0D6EFD] text-white rounded-r-lg'>Search</button>
        </div>
        <div className='flex mt-2'>
          <div class="flex flex-col items-center mx-2"> 
            <img src={profile}/>
      <span class="text-xs mt-1">Profile</span> 
    </div>
    <div class="flex flex-col items-center mx-2"> 
         <img src={message}/>
      <span class="text-xs mt-1">Message </span> 
    </div>
    <div class="flex flex-col mt-[2px] items-center mx-2"> 
         <img src={order}/>
       <span class="text-xs mt-[5px]">Orders</span> 
    </div>  
    <div class="flex flex-col items-center mx-2"> 
      <img src={cart} />
      <span class="text-xs mt-1">My Cart</span> 
    </div>
        </div>


      </div>
      

    </div>
          </>
  )
}
