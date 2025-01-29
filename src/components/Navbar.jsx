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
import Slider from "react-slick";
import shirt from "../assets/shirt.png"



export default function Navbar() {
    const settings = {
      dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3

  };
  const slider= [
  {
    image: shirt,
    label: "Smart Watches",
    discount: -25, 
},
  {
    image: shirt,
    label: "Smart Watches",
    discount: -25, 
},
  {
    image: shirt,
    label: "Smart Watches",
    discount: -25, 
},
  ];

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

    <div className=' flex justify-between w-screen p-3 bg-[#F7FAFC]'>
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
    <div className='px-3 py-3 flex flex-row gap-x-1 w-full overflow-x-auto whitespace-nowrap p'>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 w-[] ' style={{borderRadius:"8px"}} >All Category</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} >Gadgets</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} >Clothes</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2' style={{borderRadius:"8px"}} > Category</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} > Category</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} > Category</button>
      <button className='bg-[#EFF2F4] text-[#0D6EFD] p-2 ' style={{borderRadius:"8px"}} > Category</button> 
    </div>
    {/* 3rd portion  */}
    <div className='flex  '>
      <div></div>
      <div className=" bg-cover bg-center bg-no-repeat w-[100%] h-auto  px-3  py-4  " style={{backgroundImage:`url(${banner}) `,backgroundSize:"100%"}} >
    

      <p className='text-lg font-lg -py-2 '>Latest trending <br /> <span className='font-bold'>Electronic items</span></p>
    
     <button className='bg-[#EFF2F4] text-[#0D6EFD]  whitespace-nowrap font-lg px-2 py-1 ' style={{borderRadius:"6px"}} >Learn More</button>
    



  

      </div>
      <div></div>
    </div>
    {/* time portion  */}
    <div className='flex flex-col'>
      {/* deal and offers  */}
      <div className='flex py-3 px-3 justify-between'>
        <p className='text-lg font-bold'>Deals and Offers<br></br><p className='text-sm font-light'>Electronic Equipments</p></p>
        <div className='flex gap-x-1'>
        <ul className='bg-[#EFF2F4] flex flex-col  items-center justify-center h-14 p-2 '> 
          <li className='text-xl list-none '>13</li>
          <li className='list-none text-md'>Hrs</li>
        </ul> 
           <ul className='bg-[#EFF2F4] flex flex-col  items-center justify-center h-14 p-2  '> 
          <li className='text-lg list-none'>34</li>
          <li className='list-none'>Min</li>
        </ul> 
          <ul className='bg-[#EFF2F4] flex flex-col  items-center justify-center h-14 p-2  '> 
          <li className='text-lg list-none'>56</li>
          <li className='list-none'>Sec</li>
        </ul> 
        </div>
        
      </div>
      {/* slider */}
      <div className='flex overflow-auto'>
   
        {slider.map((item)=>(
       
<div class=" flex flex-col border-t-[1px]  border-b-[1px] border-l-[1px] first:border-l-0">
  <img class="py-3 px-7" src={item.image} alt="Sunset in the mountains"/>
  <div class="px-3 py-4">
    <div class="font-semibold text-lg  text-center whitespace-nowrap">{item.label}</div>
 
  </div>
  <div class="px-6 pb-2 flex justify-center">
    <span class=" bg-gray-200 text-center rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">{item.discount}</span>

  </div>
</div>

    
        ))}
        </div>
      
  

      
      {/* slider */}
          
    </div>
    {/* Home and outdoor */}
    <div className='flex flex-col  mt-3'>
      {/* deal and offers  */}
      <div className='flex py-3 px-3 justify-between'>
        <p className='text-lg font-bold '>Home and outdoor</p>
        
      </div>
      {/* slider */}
      <div className='flex overflow-auto'>
   
        {slider.map((item)=>(
       
<div class=" flex flex-col border-t-[1px]  border-b-[1px] border-l-[1px] first:border-l-0">
  <img class="py-3 px-7" src={item.image} alt="Sunset in the mountains"/>
  <div class="px-3 py-4">
    <div class="font-semibold text-lg  text-center whitespace-nowrap">{item.label}</div>
 
  </div>
  <div class="px-6 pb-2 flex justify-center">
    <span class=" bg-gray-200 text-center rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">{item.discount}</span>

  </div>
</div>

    
        ))}
        </div>
         <div className='flex py-3 px-3 justify-between'>
        <p className='text-xl font-lg text-[#2B80FD]'>Source now &rarr;</p>
        
      </div>
      
  

      
      {/* slider */}
          
    </div>
    {/* home and outdoor */}
    {/* Consumer electronics */}
    <div className='flex flex-col  mt-3'>
      {/* deal and offers  */}
      <div className='flex py-3 px-3 justify-between'>
        <p className='text-lg font-bold '>Consumer electronics</p>
        
      </div>
      {/* slider */}
      <div className='flex overflow-auto'>
   
        {slider.map((item)=>(
       
<div class=" flex flex-col border-t-[1px]  border-b-[1px] border-l-[1px] first:border-l-0">
  <img class="py-3 px-7" src={item.image} alt="Sunset in the mountains"/>
  <div class="px-3 py-4">
    <div class="font-semibold text-lg  text-center whitespace-nowrap">{item.label}</div>
 
  </div>
  <div class="px-6 pb-2 flex justify-center">
    <span class=" bg-gray-200 text-center rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">{item.discount}</span>

  </div>
</div>

    
        ))}
        </div>
         <div className='flex py-3 px-3 justify-between'>
        <p className='text-xl font-lg text-[#2B80FD]'>Source now &rarr;</p>
        
      </div>
      
  

      
      {/* slider */}
          
    </div>
    {/*Consumer electronics*/}

    </>
  )
}
