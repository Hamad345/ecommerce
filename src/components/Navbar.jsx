import React,{useState,useEffect} from 'react'
import logo from '../assets/logo-colored.png'
import profile from '../assets/Vector.png'
import message from '../assets/vec.png'
import order from '../assets/v.png'
import cart from '../assets/vecor.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import search from '../assets/search.png'
import banner from '../assets/banner.png'


export default function Navbar() {
   const [isLargeScreen, setIsLargeScreen] = useState(false);
     const styles = {
    backgroundImage: `url(${search})`,
    // backgroundSize: "50%",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "97%",
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsLargeScreen(window.innerWidth >= 640); // Adjust breakpoint as needed
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize(); // Initial check on load

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  return (
    <>
    {/* <div className=' flex justify-center w-full p-0 m-0'>
      <div className='w-full md:w-[70%] mt-2  flex flex-col sm:flex-row sm:justify-between' > 
        <img src={logo}  className='w-[20vw]'/>
        <div className='flex'>
          <input type='text' placeholder='Search' className=' border-[#0D6EFD] px-1 w-auto border-1 rounded-l-lg'/>
          <select className={`border-[#0D6EFD] px-2 border-t-1 border-b-1 border-r-1 ${isLargeScreen ? 'block' : 'hidden'}`}>
            <option>All category</option>
          </select>
          <button style={{borderEndEndRadius:"8px",borderStartEndRadius:"8px"}} className='border-[#0D6EFD] px-4 border-t-1 border-r-1 border-b-1 bg-[#0D6EFD] text-white rounded-r-lg'>Search</button>
        </div>
        <div className={`flex mt-2 ${isLargeScreen ? 'block' : 'hidden'}`}>
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
      <span class="text-xs mt-1 whitespace-nowrap">My Cart</span> 
    </div>
        </div>


      </div>
      

    </div> */}

    <div className=' flex justify-between w-full p-3'>
      <div className='flex gap-x-3 items-center '>
        <GiHamburgerMenu className="text-[7vw] "/>
        <img src={logo}  className='w-[25vw]'/>
      </div>
      <div className='flex gap-x-3 items-center'>
        <BsCart3  className='text-[7vw]'/>
      < FaRegUser className='text-[7vw]'/> 
      </div>
    </div>
    <form className='relative px-3 py-2'>
    <input type="text"  placeholder='Search' className="bg-[#F7FAFC] py-2 px-[32px] w-[min(100%,50rem)] "   />
    <img src={search} className='absolute top-[20px]  px-2 '/>
    </form>
    {/* 2nd portion */}
    <div className='px-3 py-3 flex flex-row gap-x-2 w-full overflow-x-auto whitespace-nowrap p'>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 w-[] ' style={{borderRadius:"8px"}} >All Category</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} >Gadgets</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} >Clothes</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2' style={{borderRadius:"8px"}} > Category</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} > Category</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} > Category</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} > Category</button> 
    </div>
    {/* 3rd portion  */}
    <div className='flex'>
      <div>jjjjjj</div>
      <div className=" relative p-0 flex flex-col " >
        <img src={banner} className=' absolute  w-[100%] '/>
        <h1 className='z-10 font-[200px] text-[1vw] absolute top-8 left-5  '>Latest trending<b></b>

        </h1>
        <h1 className='absolute z-[3vw] text-xl top-16  font-bold left-5 '>Electronic items</h1>
              <button className='bg-[#EFF2F4] text-[#0D6EFD]  p-2 w-[] absolute top-28 left-5 ' style={{borderRadius:"8px"}} >Learn More</button>

  

      </div>
      <div>jjjjjjjjjjjjjjjjjjjjjjjjj</div>
    </div>
    </>
  )
}
